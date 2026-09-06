import React from 'react';
import './CardLayout.css';

// 1. Individual Card Component
export const Card = ({ image, badge, title, description, actionText, onAction }) => {
  return (
    <article className="custom-card">
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title} className="card-image" />
          {badge && <span className="card-badge">{badge}</span>}
        </div>
      )}
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        {actionText && (
          <button className="card-button" onClick={onAction}>
            {actionText}
          </button>
        )}
      </div>
    </article>
  );
};

// 2. Grid Layout Wrapper
export const CardGrid = ({ children }) => {
  return <section className="card-grid-container">{children}</section>;
};
