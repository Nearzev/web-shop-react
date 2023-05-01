import React from 'react'
import { ItemsType } from '../App'
type showModalProps = {
    item: ItemsType,
    onAdd: (item: ItemsType) => void,
    changeModalState: (item: ItemsType) => void,
}

const ShowModalItem = (props: showModalProps) => {
    const clickOnAdd = () => {
        props.onAdd(props.item)
        props.changeModalState(props.item)
    }
    return (
        <div>
            <div onClick={() => props.changeModalState(props.item)} className="backdrop" ></div>
            <div className='show-modal-item'>
                <img src={`./img/${props.item.img}`} alt="" />
                <h2>{props.item.title}</h2>
                <p>{props.item.desc}</p>
                <b>{props.item.price}$</b>
                <div className='buttons'>
                    <div className='add-to-cart' onClick={() => clickOnAdd()}>+</div>
                    <div  className='close-modal-item' onClick={() => props.changeModalState(props.item)}>x</div>
                </div>
            </div>
        </div>
    )
}

export default ShowModalItem