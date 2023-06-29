import HomeScreen from './HomeScreen';
import ProductsScreen from './ProductsScreen';
import CartScreen from './CartScreen';
import BookingScreen from './BookingScreen';
import BroadcastsScreen from './BroadcastsScreen';
import ContactsScreen from './ContactsScreen';

const screensList = [
  {
    name: 'Home',
    component: HomeScreen,
    title: 'Главная',
    icon: 'home',
  },
  {
    name: 'Market',
    component: ProductsScreen,
    title: 'Магазин',
    icon: 'handshake',
  },
  {
    name: 'Cart',
    component: CartScreen,
    title: 'Корзина',
    icon: 'shopping-cart',
  },
  {
    name: 'Order',
    component: BookingScreen,
    title: 'Бронь столика',
    icon: 'tag',
  },
  {
    name: 'Broadcasts',
    component: BroadcastsScreen,
    title: 'Трансляции',
    icon: 'file-text',
  },
  {
    name: 'Contacts',
    component: ContactsScreen,
    title: 'Контакты',
    icon: 'shield',
  },
];

export default screensList;
