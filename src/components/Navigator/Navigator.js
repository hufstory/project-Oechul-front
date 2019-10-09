import React, {Component} from 'react';
import style from './Navigator.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

class Navigator extends Component {
    render() {
        return (
            <div id="navber" className={cx('navigator')}>
                <section className={cx('items')}>
                    <div className={cx('main-nav')}>
                        <a href="#main"><span data-hover="main">main</span></a>
                        <a href="#count"><span data-hover="real time count">real time count</span></a>
                        <a href="#info"><span data-hover="info">info</span></a>
                        <a href="#footer"><span data-hover="footer">footer</span></a>
                    </div>
                    <a herf="#" className={cx('title')}>HUFSTORY</a>
                </section>
            </div>
        );
    }
}

export default Navigator;