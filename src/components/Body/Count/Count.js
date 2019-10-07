import React, {Component} from 'react';
import styles from './Count.scss';
import classname from 'classnames/bind';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ScrollAnimation from 'react-animate-on-scroll';

const cx = classname.bind(styles);

class Count extends Component {
    render() {
        return (
            <div className={cx('count')} id="count">

            <ScrollAnimation animateIn='fadeIn'
                animateOnce={true}>
                <div className={cx('title')}>봄 외출 참여인원 530명, 가을에는?</div>
            </ScrollAnimation>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default Count;