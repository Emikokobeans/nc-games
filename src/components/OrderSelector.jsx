import { useState } from 'react';

const OrderSelector = ({ setQuery }) => {
  const [selected, setSelected] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <section className='order_selectors'>
      <form>
        <select
          name='sort_by'
          id='sort_by'
          onChange={(event) => {
            handleChange(event);
          }}
          value={selected}
        >
          <option value='' disabled selected>
            Sort By
          </option>
          <option value='title'>Title</option>
          <option value='owner'>Owner</option>
          <option value='created_at'>Date Posted</option>
          <option value='designer'>Designer</option>
          <option value='votes'>Votes</option>
          <option value='category'>Category</option>
          <option value='comment_count'>Comments</option>
        </select>
      </form>
    </section>
  );
};

export default OrderSelector;
