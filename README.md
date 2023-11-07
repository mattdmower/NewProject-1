  This is the mockup and hierarchy image for the project:
![Project 1  Mockup and hierarchy](https://github.com/mattdmower/NewProject-1/assets/145517358/31105bb3-8ca2-47fa-b35c-5ed52b38cb6e)

# Bucket List Tracker

The Bucket List Tracker is a simple yet powerful web application designed to help users track and manage their personal bucket list items. With a React front-end and an Express back-end, it provides an intuitive interface for creating multiple bucket list categories, adding list items with descriptions, and marking them as completed.

## Features

- **Custom List Names**: Create multiple to-do list tables with custom names.
- **Item Management**: Add, edit, and delete items from your bucket list.
- **Completion Tracking**: Check off items as you complete them.
- **Real-time Updates**: Changes are updated instantly in the UI.
- **In-Memory Storage**: Your lists and items are stored in memory for quick access.

## Prerequisites

Before running this application, you'll need to have Node.js installed on your system. You can download Node.js from [here](https://nodejs.org/).

## Installation

To set up the Bucket List Tracker locally, follow these steps:

1. Clone the repository to your machine:

    ```bash
    git clone https://github.com/mattdmower/NewProject-1
    ```

2. Navigate to the cloned repository:

    ```bash
    cd bucket-list-tracker
    ```

3. Install the necessary packages:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm run dev
    ```

The application should now be running on [http://localhost:3000](http://localhost:3000).

## Usage

- **Creating a New List**: Click "Add List" after typing a name for your new list.
- **Adding Items**: Type in the item name and description, then click "Add Item".
- **Completing Items**: Click the checkbox next to an item to mark it as completed.
- **Editing Items**: Click "Edit", make changes, and then save to update the item.
- **Deleting Items**: Click "Delete" to remove an item from the list.

## API Endpoints

The application offers the following endpoints:

- `GET /api/lists`: Fetch all the lists.
- `POST /api/lists`: Create a new list.
- `POST /api/lists/:listId/items`: Add a new item to a list.
- `PUT /api/lists/:listId/items/:itemId`: Update an existing item.
- `DELETE /api/lists/:listId/items/:itemId`: Delete an item.

## Contact

- Creator: Matthew Mower
- Email: mattdmower@gmail.com
- Project Repository: [https://github.com/yourusername/bucket-list-tracker](https://github.com/yourusername/bucket-list-tracker)

## Acknowledgements

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [Node.js](https://nodejs.org/)