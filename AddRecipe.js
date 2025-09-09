import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const AddRecipe = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    image: '',
    ingredients: '',
    instructions: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Convert ingredients string to array
      const ingredientsArray = recipe.ingredients
        .split('\n')
        .map(item => item.trim())
        .filter(item => item !== '');

      const newRecipe = {
        ...recipe,
        ingredients: ingredientsArray
      };

      await axios.post('http://localhost:3001/recipes', newRecipe);
      setLoading(false);
      navigate('/');
    } catch (err) {
      setError('Failed to add recipe. Please try again.');
      setLoading(false);
    }
  };

  return (
    <Container>
      <div className="form-container">
        <h2 className="mb-4">Add New Recipe</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              placeholder="Enter recipe name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={recipe.description}
              onChange={handleChange}
              placeholder="Enter recipe description"
              rows={3}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="url"
              name="image"
              value={recipe.image}
              onChange={handleChange}
              placeholder="Enter image URL"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control
              as="textarea"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              placeholder="Enter ingredients (one per line)"
              rows={5}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              as="textarea"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              placeholder="Enter cooking instructions"
              rows={5}
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={() => navigate('/')}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Adding...' : 'Add Recipe'}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default AddRecipe;