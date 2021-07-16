import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import { useState } from 'react';
import Categories from './components/Categories';
import Reviews from './components/Reviews';
import ReviewById from './components/ReviewById';
import CategoryReviews from './components/CategoryReviews';
import Users from './components/Users';
import Comments from './components/Comments';
import { UserContext } from './contexts/User';

function App() {
  const [reviews, setReviews] = useState([]);

  const [user, setUser] = useState({ username: 'weegembump' });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className='App'>
          <Header />
          <Nav />
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route exact path='/categories'>
              <Categories />
            </Route>
            <Route exact path='/users'>
              <Users />
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
            <Route exact path='/reviews/:review_id/comments'>
              <Comments setReviews={setReviews} />
            </Route>
            <Route>
              <p>404 - Page not found</p>
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
