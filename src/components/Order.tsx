import React from 'react'
import { ItemsType } from '../App';

type OrderProps = {
    item: ItemsType
}

const Order = (props: OrderProps) => {
    return (
        <div className='item'>
            <img src={`./img/${props.item.img}`} alt="" />
            <h2>{props.item.title}</h2>
            <b>{props.item.price}$</b>
        </div>
    )
}
export default Order