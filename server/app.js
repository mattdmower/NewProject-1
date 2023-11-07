import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let bucketLists = {};

// Endpoint to get all bucket lists
app.get('/api/bucketlists', (req, res) => {
  res.json(Object.values(bucketLists)); // Sending an array of bucket lists
});

// Endpoint to create a new bucket list
app.post('/api/bucketlists', (req, res) => {
  const { name } = req.body;
  const id = uuidv4();
  bucketLists[id] = { id, name, items: [] };
  res.status(201).json(bucketLists[id]);
});

// Endpoint to add an item to a bucket list
app.post('/api/bucketlists/:id/items', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  const newItem = { id: uuidv4(), name, description, completed: false };
  if (bucketLists[id]) {
    bucketLists[id].items.push(newItem);
    res.status(201).json(newItem);
  } else {
    res.status(404).json({ error: 'Bucket list not found' });
  }
});

// Endpoint to update an item in a bucket list
app.put('/api/bucketlists/:listId/items/:itemId', (req, res) => {
  const { listId, itemId } = req.params;
  const { name, description, completed } = req.body;

  const list = bucketLists[listId];
  if (list) {
    const itemIndex = list.items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      const item = list.items[itemIndex];
      item.name = name;
      item.description = description;
      item.completed = completed;
      res.json(item);
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } else {
    res.status(404).json({ error: 'Bucket list not found' });
  }
});

// Endpoint to delete an item from a bucket list
app.delete('/api/bucketlists/:listId/items/:itemId', (req, res) => {
  const { listId, itemId } = req.params;
  const list = bucketLists[listId];
  if (list) {
    bucketLists[listId].items = list.items.filter(item => item.id !== itemId);
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'Bucket list not found' });
  }
});

ViteExpress.config({ printViteDevServerHost: true });

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));