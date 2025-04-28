
import { Link } from 'react-router-dom';


const Home = () => {
  

  return (
    <div className="home-container">
    <div className="home-content">
      <h1>Welcome to the Firebase Auth App</h1>
      <p>Sign in with your Google account to access the dashboard and manage products.</p>
      <Link to="/login" className="btn-start">Get Started</Link>
    </div>
  </div>
  );
};

export default Home;
