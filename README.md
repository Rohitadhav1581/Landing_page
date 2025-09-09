# Recipe Book Application

A React-based recipe management application with CRUD operations using JSON Server.

## Features

- View all recipes with images
- Add new recipes with name, description, and image
- Update existing recipes
- Delete recipes
- Responsive design

## Installation and Setup

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation Steps

1. Clone or download this repository

2. Install dependencies:
   ```
   npm install
   ```

3. Start JSON Server (in a separate terminal):
   ```
   npm run server
   ```

4. Start the React application:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## JSON Server

This project uses JSON Server to simulate a REST API. The data is stored in `db.json` file.

- API Endpoints:
  - GET `/recipes` - Get all recipes
  - GET `/recipes/:id` - Get a specific recipe
  - POST `/recipes` - Create a new recipe
  - PUT `/recipes/:id` - Update a recipe
  - DELETE `/recipes/:id` - Delete a recipe

## Project Structure

```
recipe-book/
├── public/
├── src/
│   ├── components/
│   │   ├── AddRecipe.js
│   │   ├── EditRecipe.js
│   │   ├── Navbar.js
│   │   ├── RecipeCard.js
│   │   ├── RecipeDetail.js
│   │   └── RecipeList.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── db.json
├── package.json
└── README.md
```

## Updating Dependencies

To update the project dependencies to their latest versions:

```
npm update
```

For major version updates, check the respective package documentation for migration guides.

## Customization

- Modify the styles in `src/styles.css` to change the appearance
- Add more fields to recipes by updating the form components and db.json structure

## Troubleshooting

- If you encounter CORS issues, make sure JSON Server is running on port 3001
- If the app fails to start, check if port 3000 is already in use