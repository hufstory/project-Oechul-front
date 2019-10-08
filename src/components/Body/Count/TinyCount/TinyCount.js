import React, {Component} from 'react';
import styles from './TinyCount.scss';
import classname from 'classnames/bind';

const cx = classname.bind(styles);

class TinyCount extends Component{

    render() {
        const count = this.props.count;
        const title = this.props.title;

        return(
            <div className={cx('tinyCount')}>
                <p className={cx('title')}>{title}</p>

                {
                    count < 50? (<p className={cx('grayColor')}>50명 돌파!</p>): (<p className={cx('blackColor')}>50명 돌파!</p>)
                }

                {
                    count < 100? (<p className={cx('grayColor')}>100명 돌파!</p>): (<p className={cx('blackColor')}>100명 돌파!</p>)
                }

                {
                    count < 150? (<p className={cx('grayColor')}>150명 돌파!</p>): (<p className={cx('blackColor')}>150명 돌파!</p>)
                }

                {
                    count < 200? (<p className={cx('grayColor')}>200명 돌파!</p>): (<p className={cx('blackColor')}>200명 돌파!</p>)
                }
            </div>
        );
    }
}


export default TinyCount;


