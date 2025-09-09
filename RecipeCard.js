import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const RecipeCard = ({ recipe, onDelete }) => {
  return (
    <Card className="recipe-card">
      <Card.Img 
        variant="top" 
        src={recipe.image} 
        alt={recipe.name} 
        className="recipe-image" 
      />
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text>
          {recipe.description.length > 100 
            ? `${recipe.description.substring(0, 100)}...` 
            : recipe.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-between">
          <Link to={`/recipe/${recipe.id}`}>
            <Button variant="primary" size="sm">View</Button>
          </Link>
          <div>
            <Link to={`/edit/${recipe.id}`} className="me-2">
              <Button variant="warning" size="sm">Edit</Button>
            </Link>
            <Button 
              variant="danger" 
              size="sm" 
              onClick={() => onDelete(recipe.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default RecipeCard;