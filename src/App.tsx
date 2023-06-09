import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Category from './components/Category';
import ShowModalItem from './components/ShowModalItem';

export type ItemsType = {
  id: number,
  title: string,
  img: string,
  desc: string,
  category: string,
  price: string,
  totalPrice: number,
} 

const App = () => {
  const [items, setItems] = useState(Array<ItemsType>);
  const [orders, setOrders] = useState(Array<ItemsType>);
  let [currentItems, setCurrentItems] = useState(Array<ItemsType>);
  const [ModalItemState, setModalItemState] = useState(false);
  const [showModalItem, setShowModalItem] = useState<ItemsType>()

  useEffect(() => {
    setCurrentItems(items);
  }, [items]);
  
  useEffect(() => {
    fetch('https://63fdd8c4cd13ced3d7c02d2a.mockapi.io/t/Cards')
      .then(response => response.json())
      .then(data => {
        setItems(data);
      })
      .catch(error => console.error('Ошибка при выполнении запроса:', error));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('https://63fdd8c4cd13ced3d7c02d2a.mockapi.io/t/Cards')
        .then(response => response.json())
        .then(data => {
          setItems(data);
        })
        .catch(error => console.error('Ошибка при выполнении запроса:', error));
    }, 10000000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const addToOrder = (item: ItemsType) => {
    let isInArr = false

    orders.forEach(order => {
      if (order.id === item.id) {
        isInArr = true
        console.log('Товар уже в корзине')
      }
    })

    if (!isInArr) {
      setOrders([...orders, item])
    }
  }

  const deleteOrder = (id: number) => {
    setOrders(orders.filter(order => order.id !== id))
  }

  const chooseCategory = (category: string) => {
    if(category === 'all') {
      setCurrentItems([...items])
      return
    } 
    currentItems = items.filter(item => item.category === category)
    setCurrentItems(currentItems)
    
  }

  const changeModalState = (item: ItemsType) => {
    if(ModalItemState === false) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    setShowModalItem(item)
    setModalItemState(!ModalItemState)
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <Header orders={orders} onDelete={deleteOrder} />
        <Category chooseCategory={chooseCategory} />
        <Items changeModalState={changeModalState} items={currentItems} onAdd={addToOrder} />
        {ModalItemState && showModalItem && <ShowModalItem  onAdd={addToOrder} changeModalState={changeModalState} item={showModalItem} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
