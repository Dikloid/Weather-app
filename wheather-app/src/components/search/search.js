import React, {useState} from 'react';
import {AsyncPaginate} from "react-select-async-paginate";
import {GEO_API_URL, geoApiOptions} from "../../api";

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState("")

    const handleOnChange = (searchData) => {
        setSearch(searchData)
        onSearchChange(searchData)
    }

    const loadOptions = async (inputValue) => {
            return(fetch(`${GEO_API_URL}/?minPopulation=100000&namePrefix=${inputValue}`, geoApiOptions))
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.region}`,
                        }
                    })
                }
            })
            .catch((err) => console.log(err));
    }

    const customStyles = {
        control: (provided, state) => ({
            backgroundColor: 'none',
            display: 'flex',
            borderRadius: '50px',
            border: '2px solid #eee',
            boxShadow: state.isFocused ? '0 0 0 1px #eee' : null,
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#ccc' : null,
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'white',
        }),
        input: (provided) => ({
            ...provided,
            color: 'white',
        }),
        loadingIndicator: (provided) => ({
            ...provided,
            color: 'white',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'white',
        }),
    }

    return (
        <AsyncPaginate
            className="search"
            placeholder="Search for city"
            debounceTimeout={1000}
            value={search}
            styles={customStyles}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
};

export default Search;