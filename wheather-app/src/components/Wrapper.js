import React from 'react';
import Search from "./search/search";
import search from "./search/search";

const Wrapper = () => {

    const handleOnSearchChange = (searchData) => {
        console.log(searchData)
    }

    return (
        <div className="wrapper">
            <Search onSearchChange={handleOnSearchChange}/>
        </div>
    );
};

export default Wrapper;