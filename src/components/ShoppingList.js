import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function onItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All")
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    return (
      item.category === selectedCategory &&
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <div className='ShoppingList'>
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter
        value={searchText}
        onSearchChange={setSearchText}
        onCategoryChange={setSelectedCategory}
      />
      <ul className='Items'>
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
