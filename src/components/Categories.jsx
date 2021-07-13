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
      {categories.map((category) => {
        return (
          <Link to={`/reviews/${category.slug}/`} key={category.slug}>
            {category.slug}
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
