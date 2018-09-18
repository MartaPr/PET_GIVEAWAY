import React from 'react';

const Search = (props) => {
    return (
        <div>
            <input
                className="search_input"
                type="text"
                placeholder="Search..."
                onChange={props.keywords}
            />
            <i className="fas fa-search fa-lg searching"></i>
        </div>
    );
};

export default Search; 