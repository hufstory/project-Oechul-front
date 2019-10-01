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

                <div className={cx('title')}>Realtime Count</div>

                <Grid
                    container
                    justify="center">
                        
                    {/*<Box*/}
                    {/*    boxShadow={1}*/}
                    {/*    bgcolor="background.paper"*/}
                    {/*    m={1}*/}
                    {/*    p={1}*/}
                    {/*    className={cx('box')}>*/}

                    {/*    <div className={cx('countBox')}>*/}
                    {/*        sadfa*/}
                    {/*    </div>*/}
                    {/*</Box>*/}

                    {/*<Box*/}
                    {/*    boxShadow={2}*/}
                    {/*    bgcolor="background.paper"*/}
                    {/*    m={1}*/}
                    {/*    p={1}*/}
                    {/*    className={cx('box')}>*/}
                    {/*</Box>*/}

                    {/*<Box*/}
                    {/*    boxShadow={3}*/}
                    {/*    bgcolor="background.paper"*/}
                    {/*    m={1}*/}
                    {/*    p={1}*/}
                    {/*    className={cx('box')}>*/}
                    {/*</Box>*/}
                </Grid>

                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        );
    }
}

export default Count;