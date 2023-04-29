import React, { useState } from 'react';
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

  // const getItems = async (url: string):Promise<ItemsType[]> => {
  //   const response = await fetch(url)
  //   let json = await response.json();
  //   let items:Array<ItemsType> = await JSON.parse(json);
  //   return items
  // }
  
  // const items = getItems('https://63fdd8c4cd13ced3d7c02d2a.mockapi.io/t/Cards');

const items: Array<ItemsType>  = [
  {
    id: 1,
    title: 'Стул серый',
    img: 'chair-grey.jpg',
    desc: 'Lorem iehrgbweorgbqjgbnqdivhoi qngubejvqoihviheqriohgq qehgioqbekgj',
    category: 'chairs',
    price: '49,99'
  },
  {
    id: 2,
    title: 'Стол',
    img: 'table.jpg',
    desc: 'Lorem iehrgbweorgbqjgbnqdivhoi qngubejvqoihviheqriohgq qehgioqbekgj',
    category: 'tables',
    price: '149,99'
  },
  {
    id: 3,
    title: 'Диван',
    img: 'sofa.jpg',
    desc: 'Lorem iehrgbweorgbqjgbnqdivhoi qngubejvqoihviheqriohgq qehgioqbekgj',
    category: 'sofa',
    price: '549,99'
  },
  {
    id: 4,
    title: 'Лампа',
    img: 'wall-light.jpeg',
    desc: 'Lorem iehrgbweorgbqjgbnqdivhoi qngubejvqoihviheqriohgq qehgioqbekgj',
    category: 'light',
    price: '24,99'
  },
]

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

  return (
    <div className="App">
      <div className='wrapper'>
        <Header orders={orders}/>
        <Items items={items} onAdd={addToOrder}/>
      </div>
      <Footer />
    </div>
  );

}

export default App;
