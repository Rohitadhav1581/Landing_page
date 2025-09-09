# Recipe Book Application - Setup Instructions

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

You can check your current versions by running:

```bash
node -v
npm -v
```

## Installation Steps

### 1. Clone or Download the Repository

If you received this project as a ZIP file, extract it to your desired location.

### 2. Install Dependencies

Open a terminal/command prompt, navigate to the project directory, and run:

```bash
npm install
```

This will install all the required dependencies including:
- React and React DOM
- React Router for navigation
- Axios for API requests
- Bootstrap for styling
- JSON Server for the mock backend

### 3. Start JSON Server

JSON Server provides a full fake REST API for development and testing. To start it, open a terminal and run:

```bash
npm run server
```

This will start JSON Server on port 3001 and use the `db.json` file as the data source.

### 4. Start the React Application

Open a new terminal window (keep the JSON Server running in the first one), navigate to the project directory, and run:

```bash
npm start
```

This will start the React development server on port 3000 and automatically open the application in your default web browser.

## Using the Application

### Viewing Recipes

- The home page displays all recipes in a grid layout
- Click on the "View" button to see detailed information about a recipe

### Adding a Recipe

1. Click the "Add Recipe" button in the navigation bar
2. Fill out the form with the recipe details:
   - Name
   - Description
   - Image URL (use a direct link to an image)
   - Ingredients (enter one per line)
   - Instructions
3. Click "Add Recipe" to save

### Editing a Recipe

1. Click the "Edit" button on a recipe card or on the recipe detail page
2. Modify the recipe details in the form
3. Click "Save Changes" to update

### Deleting a Recipe

- Click the "Delete" button on a recipe card
- Confirm the deletion when prompted

## Updating the Application

### Updating Dependencies

To update the project dependencies to their latest versions:

```bash
npm update
```

For major version updates, check the respective package documentation for migration guides.

### Updating React

To update React to a newer version:

```bash
npm install react@latest react-dom@latest
```

After updating React, test the application thoroughly to ensure compatibility.

### Updating JSON Server

To update JSON Server:

```bash
npm install json-server@latest --save-dev
```

## Customizing the Application

### Modifying Styles

The application uses a combination of Bootstrap and custom CSS:

- Global styles are in `src/index.css`
- Application-specific styles are in `src/App.css`

### Adding New Features

To add new features to the application:

1. Create new components in the `src/components` directory
2. Update the routing in `App.js` if needed
3. Modify the data structure in `db.json` if required

### Deploying to Production

To build the application for production:

```bash
npm run build
```

This creates an optimized build in the `build` folder that you can deploy to a web server.

For the backend, you'll need to replace JSON Server with a real backend service in production.

## Troubleshooting

### Common Issues

1. **JSON Server not starting**
   - Check if port 3001 is already in use
   - Verify that the `db.json` file exists and is valid JSON

2. **React app not connecting to JSON Server**
   - Ensure JSON Server is running on port 3001
   - Check for CORS issues in the browser console

3. **Images not displaying**
   - Verify that the image URLs are correct and accessible
   - Check if the images are being blocked by CORS policies

4. **Form submission errors**
   - Check the browser console for error messages
   - Verify that all required fields are filled out

### Getting Help

If you encounter issues not covered here:

1. Check the React documentation: https://reactjs.org/docs/getting-started.html
2. Check the JSON Server documentation: https://github.com/typicode/json-server
3. Search for solutions on Stack Overflow or GitHub issues