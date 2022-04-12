import React, { useRef, useState } from 'react'
import PropTypes from "prop-types"

type Props = {}

Search.propTypes = {
    onSubmit: PropTypes.func
};

Search.defaultProps = {
    onSubmit: null
}

const Search = (props: Props) => {
    const onSubmit =props;
    const [searchItem, setSearchItem] = useState("")
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e) {
        const value = e.target.value;
        setSearchItem(value);
    
        if (!onSubmit) return;
    
        // SET -- 100 -- CLEAR, SET -- 300 --> SUBMIT
        // SET -- 300 --> SUBMIT
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        };
    
        typingTimeoutRef.current = setTimeout(() => {
          const formValues = {
            searchItem: value,
          };
          onSubmit(formValues);
        }, 300);
      }
  return (
    <div>Search</div>
  )
}

export default Search