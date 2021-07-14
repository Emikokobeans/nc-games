import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../utils/api';

const Categories = ({ categories, setCategories }) => {
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
                {category.slug}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
