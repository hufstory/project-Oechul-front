import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {

        let style = {
            "display": "block",
        };

        return (
            <div className="header">
                <section className="items" style={style}>
                    <div className="main-nav">
                        <a href="#"><span data-hover="menu_1">menu_1</span></a>
                        <a href="#"><span data-hover="menu_2">menu_2</span></a>
                        <a href="#"><span data-hover="menu_3">menu_3</span></a>
                        <a href="#"><span data-hover="menu_4">menu_4</span></a>
                    </div>
                    <a herf="#" className="title">HOME</a>
                </section>
            </div>
        );
    }
}

export default Header;