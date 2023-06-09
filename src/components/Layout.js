import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="navigationWrapper">
                <NavBar />
                <main>{children}</main>
            </div>
        </React.Fragment>
    );
};
export default Layout;