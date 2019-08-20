import React, {Component} from 'react';
import styles from './Count.scss';
import classname from 'classnames/bind';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


const cx = classname.bind(styles);

class Count extends Component {
    render() {
        return (
            <div className={cx('count')}>

                <div className={cx('title')}>실시간 현황</div>

                <Grid
                    container
                    justify="center">
                    <Box
                        boxShadow={1}
                        bgcolor="background.paper"
                        m={1}
                        p={1}
                        style={{ width: '8rem', height: '5rem' }}>
                        count 1
                    </Box>

                    <Box
                        boxShadow={2}
                        bgcolor="background.paper"
                        m={1}
                        p={1}
                        style={{ width: '8rem', height: '5rem' }}>
                        count 2
                    </Box>

                    <Box
                        boxShadow={3}
                        bgcolor="background.paper"
                        m={1}
                        p={1}
                        style={{ width: '8rem', height: '5rem' }}>
                        count 3
                    </Box>
                </Grid>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default Count;