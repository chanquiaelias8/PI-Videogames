import React from "react";
import './Pagination.css';

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = [...Array(totalPages).keys()];

  const previousPage = () => {
    if (currentPage === 1) {
      return;
    }
    onPageChange(currentPage - 1);
  };

  const nextPage = () => {
    if (currentPage === totalPages) {
      return;
    }
    onPageChange(currentPage + 1);
  };

  const goToPage = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <button onClick={previousPage} className="pagination__item" disabled={currentPage === 1}>
        {"<"}
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page + 1)}
          className={`pagination__item ${currentPage === page + 1 ? 'active' : ''}`}
        >
          {page + 1}
        </button>
      ))}
      <button onClick={nextPage} className="pagination__item" disabled={currentPage === totalPages}>
        {">"}
      </button>
    </div>
  );
}