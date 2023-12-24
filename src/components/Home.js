import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  };

  const jumbotronStyle = {
    backgroundColor: '#ffcccb', // Light coral
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const cardStyle = {
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    background: '#b0e57c', // Mint green
  };

  const linkStyle = {
    color: '#333', // Dark grey
    textDecoration: 'none',
  };

  return (
    <div className="container" style={containerStyle}>
      {/* Welcome Section */}
      <div className="jumbotron" style={jumbotronStyle}>
        <h1 className="display-4">Anime E-Commerce Platform</h1>
        <p className="lead">Discover the latest anime-themed technologies and enjoy a seamless shopping experience.</p>
        <hr className="my-4" />
        <p>
          Learn more about us in the <Link to="/about" style={linkStyle}>About</Link> section or discover the technologies we use in the{' '}
          <Link to="/technologies" style={linkStyle}>Technologies</Link> page.
        </p>
      </div>

      {/* Quick Links */}
      <div className="row">
        <div className="col-md-6">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Login</h5>
              <p className="card-text">Existing user? Log in to your anime account.</p>
              <Link to="/login" className="btn btn-dark">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card" style={cardStyle}>
            <div className="card-body">
              <h5 className="card-title">Register</h5>
              <p className="card-text">New to our anime platform? Register now.</p>
              <Link to="/register" className="btn btn-dark">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
