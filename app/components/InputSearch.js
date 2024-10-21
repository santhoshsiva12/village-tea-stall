"use client"
import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

function InputSearch({placeholderValue}) {
    const [searchValue, setSearchValue] = useState('');
    const debouncedQuery = useDebounce(searchValue, 500); // 500ms delay for debouncing
  
    useEffect(() => {
      if (debouncedQuery) {
        // Simulate an API call or search request
        console.log('Search query sent:', debouncedQuery);
      }
    }, [debouncedQuery]);
  
    return (
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder={placeholderValue}
        />
      </div>
    );
  }
  
  export default InputSearch;