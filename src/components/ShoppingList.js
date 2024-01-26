import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchedItem] = useState("");
  const [itemsList, setItemsList] = useState(items) //create a state for the beginning array of items

  function handleSearchedItem(e){
    setSearchedItem(e.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleItemFormSubmit(newItem){
    setItemsList([...itemsList, newItem]) //when itemform is submitted, now take that new item and change the state of the beginning array of items. Now the array is a copy of the original array and the new item
  }

  const itemsToDisplay = itemsList //instead of the displayed items being the items, it should be this new copy of the items since it may have something new added
  .filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  )
  .filter(
    (item => item.name.toLowerCase().includes(search.toLowerCase()))
  )

  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange}
      onSearchChange={handleSearchedItem}
      search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
