import React, {Component} from 'react';
import './Navigator.scss';

class Navigator extends Component {
    render() {
        return (
            <div className="navigator">
                <section className="items">
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

export default Navigator;