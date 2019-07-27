import React from 'react'
import SearchBar from './SearchBar'
const Header = () => {
    return <React.Fragment >
        <div className="container">
            <div className="heading">Book<b>Bank</b></div>
            <SearchBar />
        </div>
    </React.Fragment >

}

export default Header