import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className='Header'>
      <h1>
        <Link to='/'>
          <span>Game Reviews</span>
        </Link>
        <Link className='user__corner' to='/users'>
          <span>{user.username}</span>
          <span>
            <FontAwesomeIcon icon={faUsers} />
          </span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
