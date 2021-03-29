import './App.scss';
import {Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

function App() {
  return (
    <div>
       <Route exact path='/' component={HomePage}/>
       <Route exact path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
