import { ItemsType } from '../App'
import Item from './Item'

type PropsType = {
    items: Array<ItemsType>,
    onAdd: (item: ItemsType) => void,
    changeModalState: (item: ItemsType) => void,
}

const showItemsCards = (props: PropsType) => {
    const itemsArray = Array.isArray(props.items) ? props.items : [];
    return (
        <main>
            {itemsArray.map(item => (
                <Item
                    changeModalState={props.changeModalState}
                    key={item.id}
                    item={item}
                    onAdd={props.onAdd}
                />
            ))}
        </main>
    );
};
const showNothing = () => {
    return(
        <div className='Empty'>
            <h2>Товаров нет</h2>
        </div>
    )
}

const Items = (props: PropsType) => {
    return (
        <div>
            {props.items.length > 0 ? showItemsCards(props) : showNothing()}
        </div>
    )
}
export default Items
