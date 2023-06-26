import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory,
  };
  

  return (
    <form onSubmit={(e)=>e.preventDefault(onItemFormSubmit(newItem))} className='NewItem'>
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          value={itemCategory}
          onChange={(e) => setItemCategory(e.target.value)}
          name='category'
        >
          <option value='Produce'>Produce</option>
          <option value='Dairy'>Dairy</option>
          <option value='Dessert'>Dessert</option>
        </select>
      </label>

      <button type='submit'>Add to List</button>
    </form>
  );
}

export default ItemForm;
