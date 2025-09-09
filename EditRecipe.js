import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    name: '',
    description: '',
    image: '',
    ingredients: '',
    instructions: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`);
        const recipeData = response.data;
        
        // Convert ingredients array to string for form
        const ingredientsString = recipeData.ingredients ? recipeData.ingredients.join('\n') : '';
        
        setRecipe({
          ...recipeData,
          ingredients: ingredientsString
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch recipe. Please try again later.');
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      // Convert ingredients string to array
      const ingredientsArray = recipe.ingredients
        .split('\n')
        .map(item => item.trim())
        .filter(item => item !== '');

      const updatedRecipe = {
        ...recipe,
        ingredients: ingredientsArray
      };

      await axios.put(`http://localhost:3001/recipes/${id}`, updatedRecipe);
      setSaving(false);
      navigate(`/recipe/${id}`);
    } catch (err) {
      setError('Failed to update recipe. Please try again.');
      setSaving(false);
    }
  };

  if (loading) return <div className="text-center mt-5">Loading recipe...</div>;

  return (
    <Container>
      <div className="form-container">
        <h2 className="mb-4">Edit Recipe</h2>
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
            <Button variant="secondary" onClick={() => navigate(`/recipe/${id}`)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit" disabled={saving}>
              {saving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default EditRecipe;