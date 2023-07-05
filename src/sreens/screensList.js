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
    title: 'Ana Sayfa',
    icon: 'home',
  },
  {
    name: 'Market',
    component: ProductsScreen,
    title: 'Mağaza',
    icon: 'handshake',
  },
  {
    name: 'Cart',
    component: CartScreen,
    title: 'Araba',
    icon: 'shopping-cart',
  },
  {
    name: 'Order',
    component: BookingScreen,
    title: 'Masa rezervasyonu',
    icon: 'tag',
  },
  {
    name: 'Broadcasts',
    component: BroadcastsScreen,
    title: 'Yayınlar',
    icon: 'file-text',
  },
  {
    name: 'Contacts',
    component: ContactsScreen,
    title: 'Kişiler',
    icon: 'shield',
  },
];

export default screensList;
