import React from 'react'
import { ItemsType } from '../App'
import Item from './Item'

type PropsType = {
    items: Array<ItemsType>,
    onAdd: (item: ItemsType) => void
}

const Items = (props: PropsType) => {
    return (
        <main>
            {props.items.map((item) => {return <Item key={item.id} item={item} onAdd={props.onAdd} /> })}
        </main>
    )
}
export default Items
