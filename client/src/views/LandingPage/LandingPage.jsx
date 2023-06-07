import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css'; // Importa el archivo CSS


export default function LandingPage() {
    const history = useHistory();
  
    const handleButtonClick = () => {
      history.push('/home');
    };

    return (
      <div className="landing-page">
        <h1 className="title">Welcome to my video games project!</h1>
        <p className="description">Explore our amazing world of video games</p>
        <button className="button" onClick={handleButtonClick}>
          Enter OR
        </button>
      </div>
    );
}
