import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { ItemsType } from '../App';
import Order from './Order';

type HeaderProps = {
  orders: Array<ItemsType>
}

const Header = (props: HeaderProps) => {

  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.map(order => {
              return <Order key={order.id} item={order}/>
            })}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header