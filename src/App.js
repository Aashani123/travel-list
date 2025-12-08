import "./App.css";
import Logo from "./views/Logo.jsx";
import Form from "./views/Form.jsx";
import PackingList from "./views/PackingList.jsx";
import Stats from "./views/Stats.jsx";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // This new items add with current items.That mean new state depends on current state. So we have to use callBack function not the single value.
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id){
    setItems((items) => items.filter((item) => item.id !==id));
  }

  function handleToggleItem(id){
    // here simply we loop through all items and find the item with the id and toggle its packed value.
    setItems((items)=> items.map((item)=>item.id === id ? {...item,packed:!item.packed} : item));
    
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItem={handleToggleItem} />
      <Stats />
    </div>
  );
}

