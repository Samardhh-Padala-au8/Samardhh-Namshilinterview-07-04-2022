import './App.css'
import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Cart from './components/Movies'
import Everything from './components/Everything'

const App = () => {
  const [cartid,setCartid] = useState([]);
  return (
    <div className='App'>
      <div className='mainheading'>
        <p>Shopping Website</p>
      </div>
      <Switch>
        <Route exact path='/'  render={(props) => <Everything {...props} cartid={cartid} setCartid={setCartid}/>} />
        <Route exact path='/cart' render={(props) => <Cart {...props} cartid={cartid} setCartid={setCartid}/>} />
      </Switch>
    </div>
  )
}

export default App
