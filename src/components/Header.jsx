import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='Header'>
      <h1>
        <Link to='/'>
          <span>Game Reviews</span>
        </Link>
        <Link to='/authors'>
          <span className='author__corner'>
            <FontAwesomeIcon icon={faUsers} />
          </span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
