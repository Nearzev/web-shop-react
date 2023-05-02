import { ItemsType } from '../App'
type ItemProps = {
    item: ItemsType,
    onAdd: (item: ItemsType) => void,
    changeModalState: (item: ItemsType) => void,
}
const Item = (props: ItemProps) => {
    return (
        <div className='item'>
            <img src={`./img/${props.item.img}`} onClick={() => props.changeModalState(props.item)} alt="" />
            <h2>{props.item.title}</h2>
            <p>{props.item.desc}</p>
            <b>{props.item.price}$</b>
            <div className='add-to-cart' onClick={() => props.onAdd(props.item)}>+</div>
        </div>
    )
}

export default Item
