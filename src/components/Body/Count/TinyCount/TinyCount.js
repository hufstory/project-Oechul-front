import React, {Component} from 'react';
import styles from './TinyCount.scss';
import classname from 'classnames/bind';

const cx = classname.bind(styles);

class TinyCount extends Component{

    render() {
        const count = this.props.count;
        const title = this.props.title;

        const count_exact = [cx('gradColor0'), cx('gradColor1'),cx('gradColor2'),cx('gradColor3'),cx('gradColor4')][parseInt((count % 50)/10)];
        const ind = parseInt(count / 50);

        return(
            <div className={cx('tinyCount')}>
                <p className={cx('title')}>{title}</p>
                {
                    count < 50 ? (<p className={ind != 0 ? cx('grayColor') : count_exact}>50명 돌파!</p>) : (<p className={cx('blackColor')}>50명 돌파!</p>)
                }

                {
                    count < 100? (<p className={ind != 1 ? cx('grayColor') : count_exact}>100명 돌파!</p>): (<p className={cx('blackColor')}>100명 돌파!</p>)
                }

                {
                    count < 150? (<p className={ind != 2 ? cx('grayColor') : count_exact}>150명 돌파!</p>): (<p className={cx('blackColor')}>150명 돌파!</p>)
                }

                {
                    count < 200? (<p className={ind != 3 ? cx('grayColor') : count_exact}>200명 돌파!</p>): (<p className={cx('blackColor')}>200명 돌파!</p>)
                }

                {
                    count < 300? (<p className={ind != 4 ? cx('grayColor') : count_exact}>300명 돌파!</p>): (<p className={cx('blackColor')}>300명 돌파!</p>)
                }
            </div>
        );
    }
}


export default TinyCount;


