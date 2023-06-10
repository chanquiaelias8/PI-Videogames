import './Pagination.css'; // Importa el archivo CSS externo

import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }){
  const handleClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const renderPaginationItems = () => {
    const items = [];

    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage;
      items.push(
        <div
          key={i}
          className={`pagination-item ${isActive ? 'active' : ''}`}
          onClick={() => handleClick(i)}
        >
          {i}
        </div>
      );
    }

    return items;
  };

  return <div className="pagination">{renderPaginationItems()}</div>;
};
