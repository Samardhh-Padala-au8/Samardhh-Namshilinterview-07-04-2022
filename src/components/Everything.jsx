import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ItemList from '../pages/itemList'
import { withRouter, Link } from 'react-router-dom'
import { setarticleitems } from '../redux/actions/itemAction'
import { v4 as uuidv4 } from 'uuid'
import '../styles/card.css'
const Everything = (props) => {
  useEffect(() => {
    props.setarticleitems()
  }, [])
  const handlePush = ()=>{
    props.history.push('/cart')
  }
  return (
    <div>
      <div>
      </div>
      <div className='searchalign'>
        <div className='searchtitle'>
          <p>LIST OF ITEMS</p>
        </div>
        <div className="searchcart" onClick={handlePush}>
          <p>Go to cart</p>
        </div>
      </div>
      <div className='cardbody'>
        {props.items !== null
          ? props.items.map((item) => (
              <ItemList key={uuidv4()} cartid={props.cartid} check={true} setCartid={props.setCartid} data={item} />
            ))
          : ''}
      </div>
    </div>
  )
}
const mapStateToProps = (storeState) => {
  return {
    items: storeState.articleState.items,
  }
}
export default connect(mapStateToProps, { setarticleitems })(
  withRouter(Everything)
)
