
import news from '../images/image1.jpg'
import { connect } from 'react-redux'
import { deleteitem } from '../redux/actions/itemAction'
import '../styles/card.css'
const ItemList = (props) => {
  const handleAddtocart = (itemid)=>{
    props.setCartid([...props.cartid,itemid])
    alert('item added')
  }
  return (
    <div>
      <div className='grid'>
        <div className='grid-item'>
          <div className='card'>
            {props.data.image !== '' ? (
              <img
                src={props.data.image}
                alt='no pic'
                className='card-img'
              />
            ) : (
              <img src={news} alt='no pic' />
            )}
            <div className='card-content'>
              <h1 className='card-header'>{props.data.title}</h1>
              <p className='card-text'>price: {props.data.price}</p>
              <p className='card-text'>category: {props.data.category}</p>
              <p className='card-text'>rating: {props.data.rating.rate}</p>
              <p className='card-text'>count: {props.data.rating.count}</p>
                {props.check&&<button className='card-btn' onClick={()=>handleAddtocart(props.data.id)}>
                  Add to cart
                </button>}
      
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { deleteitem })(ItemList)
