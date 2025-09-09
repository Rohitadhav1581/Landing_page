import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/recipes');
        setRecipes(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch recipes. Please try again later.');
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        await axios.delete(`http://localhost:3001/recipes/${id}`);
        setRecipes(recipes.filter(recipe => recipe.id !== id));
      } catch (err) {
        setError('Failed to delete recipe. Please try again later.');
      }
    }
  };

  if (loading) return <div className="text-center mt-5">Loading recipes...</div>;
  if (error) return <div className="alert alert-danger mt-3">{error}</div>;

  return (
    <div>
      <h2 className="mb-4">All Recipes</h2>
      {recipes.length === 0 ? (
        <div className="alert alert-info">No recipes found. Add a new recipe to get started!</div>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {recipes.map(recipe => (
            <Col key={recipe.id}>
              <RecipeCard recipe={recipe} onDelete={handleDelete} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default RecipeList;