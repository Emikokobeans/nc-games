import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='Nav'>
      <Link to='/categories' key='categories'>
        Categories
      </Link>
      <Link to='/reviews' key='reviews'>
        Reviews
      </Link>
    </nav>
  );
};

export default Nav;
