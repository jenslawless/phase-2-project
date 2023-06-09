import React from 'react';
import NavBar from './NavBar';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className="navigationWrapper">
                <NavBar />
                <div style={{ marginTop: '100px' }}>
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment>
    );
};
export default Layout;