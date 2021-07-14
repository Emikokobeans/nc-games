import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import { useState } from 'react';
import Categories from './components/Categories';
import Reviews from './components/Reviews';
import ReviewById from './components/ReviewById';
import CategoryReviews from './components/CategoryReviews';

function App() {
  const [categories, setCategories] = useState([]);
  const [reviews, setReviews] = useState([]);

  return (
    <div className='App'>
      <Header />
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/categories'>
          <Categories
            categories={categories}
            setCategories={setCategories}
          ></Categories>
        </Route>
        <Route exact path='/reviews/:category'>
          <CategoryReviews
            reviews={reviews}
            setReviews={setReviews}
          ></CategoryReviews>
        </Route>
        <Route exact path='/reviews'>
          <Reviews reviews={reviews} setReviews={setReviews}></Reviews>
        </Route>
        <Route exact path='/review/:review_id'>
          <ReviewById></ReviewById>
        </Route>
        <Route>
          <p>404 - Page not found</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
