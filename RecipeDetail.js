import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Image, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`);
        setRecipe(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch recipe details. Please try again later.');
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div className="text-center mt-5">Loading recipe details...</div>;
  if (error) return <div className="alert alert-danger mt-3">{error}</div>;
  if (!recipe) return <div className="alert alert-warning mt-3">Recipe not found</div>;

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2 className="mb-3">{recipe.name}</h2>
          <Image 
            src={recipe.image} 
            alt={recipe.name} 
            fluid 
            className="recipe-detail-image mb-4" 
          />
          <p className="lead">{recipe.description}</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={6}>
          <h4>Ingredients</h4>
          <ListGroup className="ingredients-list">
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={6}>
          <h4>Instructions</h4>
          <div className="instructions-list">
            <p>{recipe.instructions}</p>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col className="d-flex justify-content-between">
          <Link to="/">
            <Button variant="secondary">Back to Recipes</Button>
          </Link>
          <div>
            <Link to={`/edit/${recipe.id}`} className="me-2">
              <Button variant="warning">Edit Recipe</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetail;