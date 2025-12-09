import Item from "./Item.jsx";
import "../App.css";
import { useState } from "react";

function PackingList({ items, onDeleteItems, onToggleItem, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  // here use slice to create a copy of the items array before sorting to avoid mutating the original array.
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description)); //alphabetical order

  // here we convert boolean to number (false=0,true=1) to sort packed items after unpacked items.
  if (sortBy === "packed")
    sortedItems = items
      .slice() //taking copy of items array
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by the input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button
          onClick={() => {
            onClearList();
          }}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}

export default PackingList;
