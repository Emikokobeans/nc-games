import { useState } from 'react';

const OrderSelector = ({ setQuery }) => {
  const [inputBox, setInputBox] = useState('');

  return (
    <section className='order_selectors'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery(inputBox);
        }}
      >
        <select
          name='sort_by'
          id='sort_by'
          onChange={(event) => {
            setInputBox(event.target.value);
          }}
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
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default OrderSelector;
