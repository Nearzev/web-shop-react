import React, { useEffect, useState } from 'react';
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

let items: ItemsType[];

async function getData(url:string) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    items = data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
  }
}
getData('https://63fdd8c4cd13ced3d7c02d2a.mockapi.io/t/Cards')


const App = () => {
  const [orders, setOrders] = useState(Array<ItemsType>);

  const addToOrder = (item: ItemsType) => {
    let isInArr = false

    orders.forEach(order => {
      if(order.id === item.id) {
        isInArr = true
        console.log('Товар уже в корзине')
      }
    })

    if(!isInArr) {
      setOrders([...orders, item])
    }
  }

  const delteOrder = (id:number) => {
    setOrders(orders.filter(order => !id))
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <Header orders={orders} onDelete={delteOrder}/>
        <Items items={items}  onAdd={addToOrder}/>
      </div>
      <Footer />
    </div>
  );

}

export default App;
