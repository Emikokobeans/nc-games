import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getCategories } from '../utils/api';
import './Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <div className='Categories'>
      <ul>
        {categories.map((category) => {
          return (
            <li key='{category.slug}'>
              <Link to={`/reviews/${category.slug}`} key={category.slug}>
                <Button variant='dark' className='button'>
                  {category.slug}
                </Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
