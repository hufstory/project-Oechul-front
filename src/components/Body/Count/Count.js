import React, {Component} from 'react';
import styles from './Count.scss';
import classname from 'classnames/bind';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const cx = classname.bind(styles);

class Count extends Component {
    render() {
        return (
            <div className={cx('count')} id="count">

                <div className={cx('title')}>봄 외출 참여인원 530명, 가을에는?</div>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default Count;