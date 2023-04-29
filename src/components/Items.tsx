import React from 'react'
import { ItemsType } from '../App'
import Item from './Item'

type PropsType = {
    items: Array<ItemsType>
}

const Items = (props: PropsType) => {
    return (
        <main>
            {props.items.map((item) => {return <Item key={item.id} item={item} /> })}
        </main>
    )
}
export default Items
