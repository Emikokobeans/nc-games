import { useContext, useEffect, useState } from 'react';
import { getUsers } from '../utils/api';
import { UserContext } from '../contexts/User';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    getUsers().then((usersFromApi) => {
      setUsers(usersFromApi);
    });
  }, []);

  return (
    <section className='Users'>
      <h2>Choose account</h2>
      <ul>
        {users.map((user) => {
          return (
            <li className='Users__card' key={user.username}>
              <Link className='user__profile' to={`/users/${user}`}>
                <h3>{user.username}</h3>
                <img src={user.avatar_url} alt={user.username}></img>
              </Link>
              <button
                onClick={() => {
                  setUser(user);
                }}
              >
                Select User
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Users;

//how to list the users/owners without repeating?
//Link to the reviews each owner has written.
