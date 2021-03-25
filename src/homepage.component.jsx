import React from 'react';
import './homepage.styles.scss';


const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">BOOKS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">ELECTRONICS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">FURNITURE</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">WOMENS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">MENS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
