import React, {Component} from 'react';
import styles from './Count.scss';
import classname from 'classnames/bind';
import TinyCount from "./TinyCount";
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from '@material-ui/core/Grid';
const cx = classname.bind(styles);


class Count extends Component {
    state = {
        global_male: 0,
        global_female: 0,
        seoul_male: 0,
        seoul_female: 0
    };

    componentDidMount() {
        fetch('/get_count')
            .then(res => res.json())
            .then(data => this.setState({
                global_male: data.global_male,
                global_female: data.global_female,
                seoul_male: data.seoul_male,
                seoul_female: data.seoul_female
            }));
    }

    render() {

        return (
            <div className={cx('count')} id="count">
                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOnce={true}>
                    <div className={cx('title')}>봄 외출 참여인원 530명, 가을에는?</div>

                    <Grid container className={cx('root')} spacing={2}>
                        <Grid item xs={6} sm={3}>
                            <TinyCount title="남" count="132"/>
                        </Grid>
                        <Grid className={cx('grid2')} item xs={6} sm={3} >
                            <TinyCount title="여" count="62"/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TinyCount title="서울" count="53"/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TinyCount title="글로벌" count="141"/>
                        </Grid>
                    </Grid>
                </ScrollAnimation>
            </div>
        );
    }
}

export default Count;