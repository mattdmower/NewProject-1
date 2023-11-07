import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const apiUrl = 'http://localhost:3000/api/bucketlists'; // Endpoint to interact with the API

const App = () => {
  const [bucketLists, setBucketLists] = useState([]);
  const [newListName, setNewListName] = useState('');
  const [error, setError] = useState('');

  // Fetch all bucket lists
  useEffect(() => {
    axios.get(apiUrl)
      .then(response => setBucketLists(response.data))
      .catch(setError);
  }, []);

  // Function to create a new bucket list
  const createBucketList = () => {
    axios.post(apiUrl, { name: newListName })
      .then(response => {
        setBucketLists([...bucketLists, response.data]);
        setNewListName('');
      })
      .catch(setError);
  };

  // Function to add a new item to a list
  const addItemToList = (listId, itemName, itemDescription) => {
    axios.post(`${apiUrl}/${listId}/items`, { name: itemName, description: itemDescription })
      .then(response => {
        setBucketLists(bucketLists.map(list => list.id === listId ? { ...list, items: [...list.items, response.data] } : list));
      })
      .catch(setError);
  };

  // Function to update an existing item
  const updateItemInList = (listId, item) => {
    axios.put(`${apiUrl}/${listId}/items/${item.id}`, item)
      .then(response => {
        setBucketLists(bucketLists.map(list => list.id === listId ? { ...list, items: list.items.map(it => it.id === item.id ? response.data : it) } : list));
      })
      .catch(setError);
  };

  // Function to delete an item from a list
  const deleteItemFromList = (listId, itemId) => {
    axios.delete(`${apiUrl}/${listId}/items/${itemId}`)
      .then(() => {
        setBucketLists(bucketLists.map(list => list.id === listId ? { ...list, items: list.items.filter(it => it.id !== itemId) } : list));
      })
      .catch(setError);
  };

  return (
    <div className="App">
      <h1>Bucket List Tracker</h1>
      {error && <p className="error">{error}</p>}

      {/* Input field to create a new bucket list */}
      <div>
        <input
          type="text"
          placeholder="New bucket list name"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
        <button onClick={createBucketList}>Create New Bucket List</button>
      </div>

      {/* Render each bucket list */}
      {bucketLists.map(list => (
        <BucketList
          key={list.id}
          list={list}
          addItemToList={addItemToList}
          updateItemInList={updateItemInList}
          deleteItemFromList={deleteItemFromList}
        />
      ))}
    </div>
  );
};

const BucketList = ({ list, addItemToList, updateItemInList, deleteItemFromList }) => {
  const [newItemName, setNewItemName] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');

  const handleAddItem = () => {
    addItemToList(list.id, newItemName, newItemDescription);
    setNewItemName('');
    setNewItemDescription('');
  };

  return (
    <div className="bucket-list">
      <h2>{list.name}</h2>
      <div>
        <input
          type="text"
          placeholder="Item name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Item description"
          value={newItemDescription}
          onChange={(e) => setNewItemDescription(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>

      {/* Render items within this list */}
      {list.items.map(item => (
        <BucketListItem
          key={item.id}
          item={item}
          updateItem={updateItemInList.bind(null, list.id)}
          deleteItem={deleteItemFromList.bind(null, list.id, item.id)}
        />
      ))}
    </div>
  );
};

const BucketListItem = ({ item, updateItem, deleteItem }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);
  const [editedDescription, setEditedDescription] = useState(item.description);

  const handleUpdateItem = () => {
    updateItem({ ...item, name: editedName, description: editedDescription });
    setIsEditing(false);
  };

  return (
    <div className="bucket-list-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleUpdateItem}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            {item.name}: {item.description}
          </span>
          <input
            type="checkbox"
            checked={item.completed}
            onChange={(e) => updateItem({ ...item, completed: e.target.checked })}
          />
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={deleteItem}>Delete</button>
        </>
      )}
    </div>
  );
};

export default App;
