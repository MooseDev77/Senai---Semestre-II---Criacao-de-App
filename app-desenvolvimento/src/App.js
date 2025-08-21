import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="app-container">
      <h1>Lista de Itens</h1>
      <form onSubmit={handleAddItem} className="add-item-form">
        <input
          type="text"
          placeholder="Adicione o produto"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="add-button">Adicionar</button>
      </form>
      <ul className="shopping-list">
        {items.map((item, index) => (
          <li key={index} className="shopping-item">
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;