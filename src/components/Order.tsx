import React from 'react'
import { ItemsType } from '../App';
import { FaTrash } from 'react-icons/fa';

type OrderProps = {
    item: ItemsType,
    onDelete: (id:number) => void,
    count: number,
    onCountChange: (count: number) => any,
    orderSum: number
}


const Order = (props: OrderProps) => {

    const numCheck = (num: number) => {
        if (num < 1) {
            return 1;
        } else {
            return num;
        }
    }
    return (
        <div className='item'>
            <img src={`./img/${props.item.img}`} alt="" />
            <h2>{props.item.title}</h2>
            <b>{parseInt(props.item.price)* props.count}$</b>
            <FaTrash className='delete-icon' onClick={() => props.onDelete(props.item.id)}/>
            <div className='order-counter'>
                <div onClick={() => props.onCountChange(numCheck(props.count - 1))}>-</div>
                <div>{props.count}</div>
                <div onClick={() => props.onCountChange(numCheck(props.count + 1))}>+</div>
            </div>
        </div>
    )
}
export default Order
