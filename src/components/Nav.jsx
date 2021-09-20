import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className='Nav'>
      <Link to='/' key='homepage' className='link'>
        Home
      </Link>
      <Link to='/categories' key='categories' className='link'>
        Categories
      </Link>
      <Link to='/reviews' key='reviews' className='link'>
        Reviews
      </Link>
      <Link className='user' to='/users'>
        <span>{user.username}</span>
        <span className='icon'>
          <FontAwesomeIcon icon={faUsers} />
        </span>
      </Link>
    </nav>
  );
};

export default Nav;
