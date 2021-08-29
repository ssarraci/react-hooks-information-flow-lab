import React from 'react'

function Filter({onCategoryChange}) {
   return (
      <div className="Filter">
         <select name="filter" onChange={onCategoryChange}>
         {/*<select name="filter">*/}
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
         </select>
    </div>
   )
}

export default Filter