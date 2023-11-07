# Component Hierarchy for Bucket List Tracker

This document describes the hierarchy and structure of the React components used in the Bucket List Tracker web application.

## High-Level Component Structure

- **`<App />`**: The root component that holds the entire application.
  - **`<Header />`**: Displays the application's name and primary navigation if needed.
  - **`<BucketListContainer />`**: Manages state for all bucket lists and handles the logic for CRUD operations.
    - **`<BucketListTable />`**: Renders a table for a single bucket list.
      - **`<BucketListTitle />`**: Displays the name of the bucket list and allows users to edit the title.
      - **`<BucketListItem />`**: Represents a single item in the bucket list.
        - **`<ItemDetails />`**: Displays the name and description of the item.
        - **`<ItemActions />`**: Contains buttons for editing and deleting an item, as well as marking it as complete.

## Detailed Component Breakdown

### `<App />`
The main component that initializes the application and contains the global state.

### `<Header />`
Renders the top bar of the app with the title.

### `<BucketListContainer />`
Acts as a controller for all bucket lists, fetching data from the API, and passing it down to child components.

#### Props
- None

#### State
- `bucketLists`: An array of bucket list objects.

### `<BucketListTable />`
Displays a single bucket list in table format, including all associated items.

#### Props
- `list`: An object containing details and items of a bucket list.

#### State
- None

### `<BucketListTitle />`
Allows the user to view and edit the title of a bucket list.

#### Props
- `title`: The title of the bucket list.
- `onUpdate`: A function to call when the title is updated.

#### State
- `isEditing`: Boolean to toggle edit mode.

### `<BucketListItem />`
A row within the `<BucketListTable />` that shows the details of an item.

#### Props
- `item`: An object containing details of the item.
- `onComplete`: A function to call when the item is marked as complete.
- `onEdit`: A function to call when the item is being edited.
- `onDelete`: A function to call when the item is deleted.

#### State
- `isEditing`: Boolean to toggle edit mode for the item.

### `<ItemDetails />`
Presents the name and description of a bucket list item.

#### Props
- `name`: The name of the item.
- `description`: The description of the item.

#### State
- None

### `<ItemActions />`
Houses the action buttons for an item (complete, edit, delete).

#### Props
- `onComplete`: A function to call when the item is marked as complete.
- `onEdit`: A function to call when the item is being edited.
- `onDelete`: A function to call when the item is deleted.

#### State
- None

## Data Flow

The data flow is unidirectional, from the top-level `<App />` component down to each child component through props. State is managed in `<BucketListContainer />` and passed down to `<BucketListTable />`, which further distributes it to `<BucketListItem />`.

## State Management

State management is done via React's useState and useEffect hooks, without any external state management library.