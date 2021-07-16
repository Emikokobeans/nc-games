import { useState } from 'react';

const OrderSelector = ({ setQuery }) => {
  const [selected, setSelected] = useState({});

  const handleChange = (event, addQuery) => {
    event.preventDefault();
    setSelected((currQuery) => {
      const newQuery = { ...currQuery };

      if (event.target.value !== '') {
        newQuery[addQuery] = event.target.value;
      } else {
        newQuery[addQuery] = undefined;
      }
      return newQuery;
    });
  };

  return (
    <section className='order_selectors'>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setQuery({ ...selected });
        }}
      >
        <select
          name='sort_by'
          id='sort_by'
          onChange={(event) => {
            handleChange(event, 'sort_by');
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
        <select
          name='order'
          id='order'
          onChange={(event) => {
            handleChange(event, 'order');
          }}
        >
          <option value='' disabled selected>
            Order
          </option>
          <option value='asc'>Asc</option>
          <option value='desc'>Desc</option>
        </select>
        <select
          name='category'
          id='category'
          onChange={(event) => {
            console.log(event);
            handleChange(event, 'category');
          }}
        >
          <option value='' disabled selected>
            Category
          </option>
          <option value=''>All</option>
          <option value='strategy'>Strategy</option>
          <option value='hidden-roles'>Hidden Roles</option>
          <option value='dexterity'>Dexterity</option>
          <option value='push-your-luck'>Push Your Luck</option>
          <option value='roll-and-write'>Roll and Write</option>
          <option value='deck-building'>Deck Building</option>
          <option value='engine-building'>Engine Building</option>
        </select>
        <br></br>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default OrderSelector;
