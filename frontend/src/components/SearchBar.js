import React, {useState, useEffect} from "react";

import {Container, Dropdown, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {DebounceInput} from 'react-debounce-input';
import { findCity } from "../actions/cityActions";

import { UPDATE_CURRENT_CITY } from "../constants/cityConstants";
import { CITY_SEARCH_RESET } from "../constants/cityConstants";
const SearchBar = () =>{
    const [selectedCity, setSelectedCity] = useState({})
    const [inputText, setInputText] = useState("")
    const [showDropDown, setShowDropDown] = useState(false)
    const dispatch = useDispatch()
    
    const citySearchResults = useSelector(state => state.citySearchResults)
    const { cities, error } = citySearchResults

    useEffect(()=>{
        
        dispatch(findCity(inputText))
        
        if(selectedCity.name){
            dispatch({type: UPDATE_CURRENT_CITY, payload: selectedCity})
            localStorage.setItem('currentCity', JSON.stringify(selectedCity))
            dispatch({type: CITY_SEARCH_RESET})
        }
    }, [inputText, dispatch, selectedCity])
   
    const citySelectHandler = (city) =>{
        setSelectedCity(city)
        setShowDropDown(false)
        setInputText("")
    }
    const sortCities = (cities) => {
        return cities.sort(function(a, b) {
            const nameA = a.display_name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.display_name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          })
    }
    return (      
            <Container  className="mb-3">
                
                <DebounceInput
                    className="form-control"
                    placeholder="Type your city ..."
                    minLength={2}
                    debounceTimeout={400}
                    onChange={event => setInputText(event.target.value)} onClick={()=> setShowDropDown(true)}/>
               
                <Dropdown.Menu show={showDropDown ? true : false}  >
                    {!error && sortCities(cities).map(city => (
                        <Dropdown.Item key={city.name} onClick={() => citySelectHandler(city)}>
                            {city.display_name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Container>
    )
}

export default SearchBar