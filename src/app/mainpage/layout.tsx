import React from 'react';
import './page.module.css';

const Layout = ({ children }) => {
        return (
            <div className="Search_searchContainer__2jTTP Search_enlargedSearchContainer__3ypvD">
                <h2 className="Search_searchTitle__297dB">Search</h2>
                <div className="Search_searchContent__3XQKo">
                    <div className="Search_searchInput__1RE1P SimpleFormField_root__1jNPi">
                        <div className="SimpleFormField_inputWrapper__39xws">
                            <input className="SimpleInput_input__1OLje" placeholder="Search for epochs, blocks, addresses and transactions" />
                        </div>
                    </div>
                    <button className="Search_searchButton__CPzKs SimpleButton_root__1EyJs" label="[object Object]">
                        <div className="Search_searchButtonIcon__lLLWk">
                            <div className="Search_searchButtonInner__2PrZv"></div>
                        </div>
                    </button>
                </div>
            </div>
        );
    };


export default Layout;