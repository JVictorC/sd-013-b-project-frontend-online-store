import React, { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((response) => setCategories(response));
  }, []);

  return (
    <div>
      <form>
        {
          categories.map(({ id, name }) => (
            <label htmlFor={ id } key={ id }>
              <input
                type="radio"
                value={ name }
                name="category"
                id={ id }
              />
              {name}
            </label>
          ))
        }
      </form>
    </div>
  );
}

export default Categories;
