import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm( {onItemFormSubmit}) {

  function handleSubmit(e){
    e.preventDefault();
    onItemFormSubmit({ //I have no idea why I did this but it worked
      id: uuid(),
      name,
      category,
    })
    setName("")
  }

  function handleNameChange(e){
    setName(e.target.value)
  }

  function handleCategoryChange(e){
    setCategory(e.target.value)
  }

  const [category, setCategory] = useState("Produce")
  const [name, setName] = useState("") //set all the states of these various default values. Can check the form elements' names for the names of what I should be giving states.

  return (
    <form 
    className="NewItem" 
    onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        value={name}
        onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select 
        name="category"
        value={category}
        onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
