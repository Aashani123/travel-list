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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

