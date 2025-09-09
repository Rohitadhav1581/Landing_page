import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Recipe Book</Link>
        <Link to="/add">
          <Button variant="success" className="btn-add-recipe">
            Add Recipe
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;