import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Category from './components/Category';
import ShowModalItem from './components/ShowModalItem';

export type ItemsType = {
  id: number;
  title: string;
  img: string;
  desc: string;
  category: string;
  price: string;
  totalPrice: number;
};

const App = () => {
  const [items, setItems] = useState<ItemsType[]>([]);
  const [orders, setOrders] = useState<ItemsType[]>([]);
  const [currentItems, setCurrentItems] = useState<ItemsType[]>([]);
  const [modalItemState, setModalItemState] = useState(false);
  const [showModalItem, setShowModalItem] = useState<ItemsType | null>(null);

  // Загрузка данных с API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://63fdd8c4cd13ced3d7c02d2a.mockapi.io/t/Cards');
        const data = await response.json();

        if (Array.isArray(data)) {
          setItems(data);
          setCurrentItems(data);
        } else {
          console.error('API вернул не массив:', data);
          setItems([]);
          setCurrentItems([]);
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    };

    fetchData();

    // Если нужен интервал обновления:
    const intervalId = setInterval(fetchData, 10000000);
    return () => clearInterval(intervalId);
  }, []);

  // Добавление в заказ
  const addToOrder = (item: ItemsType) => {
    if (!orders.find(order => order.id === item.id)) {
      setOrders([...orders, item]);
    } else {
      console.log('Товар уже в корзине');
    }
  };

  // Удаление из заказа
  const deleteOrder = (id: number) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  // Фильтрация по категории
  const chooseCategory = (category: string) => {
    if (!Array.isArray(items)) return; // защита
    if (category === 'all') {
      setCurrentItems([...items]);
    } else {
      setCurrentItems(items.filter(item => item.category === category));
    }
  };

  // Открытие/закрытие модального окна
  const changeModalState = (item: ItemsType) => {
    if (!modalItemState) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    setShowModalItem(item);
    setModalItemState(!modalItemState);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Header orders={orders} onDelete={deleteOrder} />
        <Category chooseCategory={chooseCategory} />
        <Items changeModalState={changeModalState} items={currentItems} onAdd={addToOrder} />
        {modalItemState && showModalItem && (
          <ShowModalItem
            onAdd={addToOrder}
            changeModalState={changeModalState}
            item={showModalItem}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
