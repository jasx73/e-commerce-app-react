import './App.scss';
import {Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'

const BooksPage = () => (
  <div>
    <h1>BOOKS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
       <Route exact path='/' component={HomePage}/>
       <Route exact path='/books' component={BooksPage}/>
    </div>
  );
}

export default App;
