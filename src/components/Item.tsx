import React from 'react'
import { ItemsType } from '../App'
type ItemProps = {
    item: ItemsType
}
export default function Item(props: ItemProps) {
    return (
        <div className='item'>
            <img src={`./img/${props.item.img}`} alt="" />
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}$</b>
            <div className='add-to-cart'>+</div>
        </div>
    )
}
