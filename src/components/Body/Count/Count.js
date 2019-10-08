import React, {Component} from 'react';
import styles from './Count.scss';
import classname from 'classnames/bind';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const cx = classname.bind(styles);

class Count extends Component {
    render() {
        return (
            <div className={cx('count')} id="count">

                <div className={cx('title')}>봄 외출 참여인원 530명, 가을에는?</div>

                <Grid container className={cx('root')} spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <div>
                            <p>남</p>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <div>
                            <p>여</p>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <div>
                            <p>서울</p>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <div>
                            <p>글로벌</p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Count;