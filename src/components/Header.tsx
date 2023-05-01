import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { ItemsType } from '../App';
import Order from './Order';

type HeaderProps = {
  orders: Array<ItemsType>,
  onDelete: (id:number) => any,
}

const Header = (props: HeaderProps) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [counts, setCounts] = useState<{[key: number]: number}>({})

  const handleCountChange = (id: number, count: number) => {
    setCounts({
      ...counts,
      [id]: count
    })
  }

  const handleDelete = (id: number) => {
    props.onDelete(id);
    handleCountChange(id, 1);
  }

  const showOrders = () => {
    let sum = 0
    return (
      <div>
        {props.orders.map(order => {
          const count = counts[order.id] ?? 1
          const orderSum = parseInt(order.price) * count
          sum += orderSum
          return (
            <Order
              key={order.id}
              item={order}
              count={count}
              onCountChange={(count: number) => handleCountChange(order.id, count)}
              onDelete={() =>handleDelete(order.id)}
              orderSum={orderSum}
            />
          )
        })}
        <p className='sum-orders'>Сумма: {new Intl.NumberFormat().format(sum)}$</p>
      </div>
    )
  }

  const showNothing = () => {
    return (
      <div className='empty'>
        <h2>Товаров нет</h2>
      </div>
    )
  }

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ? showOrders() : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  )
}

export default Header
