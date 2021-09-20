import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className='Header'>
      <h1>
        <Link className='title' to='/'>
          <span>Game Reviews</span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
