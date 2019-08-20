import React, {Component} from 'react';
import style from './Navigator.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

class Navigator extends Component {

    render() {
        return (
            <div className={cx('navigator')}>
                <section className={cx('items')}>
                    <div className={cx('main-nav')}>
                        <a href="#"><span data-hover="menu_1">menu_1</span></a>
                        <a href="#"><span data-hover="menu_2">menu_2</span></a>
                        <a href="#"><span data-hover="menu_3">menu_3</span></a>
                        <a href="#"><span data-hover="menu_4">menu_4</span></a>
                    </div>
                    <a herf="#" className={cx('title')}>HOME</a>
                </section>
            </div>
        );
    }
}

export default Navigator;