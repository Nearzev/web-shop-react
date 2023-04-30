import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

export type ItemsType = {
  id: number,
  title: string,
  img: string,
  desc: string,
  category: string,
  price: string
} 

const App = () => {
  const [items, setItems] = useState(Array<ItemsType>);
  const [orders, setOrders] = useState(Array<ItemsType>);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('https://63fdd8c4cd13ced3d7c02d2a.mockapi.io/t/Cards')
        .then(response => response.json())
        .then(data => {
          setItems(data);
        })
        .catch(error => console.error('Ошибка при выполнении запроса:', error));
    }, 10000000000); 

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

  return (
    <div className="App">
      <div className='wrapper'>
        <Header orders={orders} onDelete={deleteOrder} />
        <Items items={items} onAdd={addToOrder} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
