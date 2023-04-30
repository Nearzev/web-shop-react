import React from 'react'
import { ItemsType } from '../App';
import { FaTrash } from 'react-icons/fa';

type OrderProps = {
    item: ItemsType,
    onDelete: (id:number) => void,
}

const Order = (props: OrderProps) => {
    return (
        <div className='item'>
            <img src={`./img/${props.item.img}`} alt="" />
            <h2>{props.item.title}</h2>
            <b>{props.item.price}$</b>
            <FaTrash className='delete-icon' onClick={() => props.onDelete(props.item.id)}/>
        </div>
    )
}
export default Order