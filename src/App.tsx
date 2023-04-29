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
    setOrders([...orders, item])
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
