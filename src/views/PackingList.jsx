import Item from "./Item.jsx";
import '../App.css';

function PackingList({ items, onDeleteItems, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItem={onToggleItem} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;