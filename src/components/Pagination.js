import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ pages, setCurrentPage }) => {

    const numOfPages = [];

    for (let i = 1; i < pages.length; i++) {
        numOfPages.push(i)
        
    }

    const [currentButton, setCurrentButton] = useState(1);

    useEffect(() => {

        setCurrentPage(currentButton)

    }, [currentButton, setCurrentPage])

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'}`}>
          <Link className="page-link" to="#!" onClick={() => setCurrentButton(prev => prev === 1 ? prev : prev - 1)} >
            Previous
          </Link>
        </li>
        
        {
            numOfPages.map((page, index) => {
                return (
                    <li className="page-item" key={index}>
                        <Link to="#!" className={`${currentButton === page ? 'page-item active' : 'page-item'}`} onClick={() => setCurrentButton(page)}>
                            {page}
                        </Link>
                    </li>
                )
            })
        }
        
        <li className={`${currentButton === numOfPages.length  ? 'page-iten disabled' : 'page-item'}`}>
          <Link className="page-link" to="#!" onClick={() => setCurrentButton(next => next === numOfPages.length ? next : next + 1)} >
            Next
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Pagination;
