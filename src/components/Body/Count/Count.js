import React, {Component} from 'react';
import styles from './Count.scss';
import classname from 'classnames/bind';
import TinyCount from "./TinyCount";
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
const cx = classname.bind(styles);


class Count extends Component {
    state = {
        global_male: 0,
        global_female: 0,
        seoul_male: 0,
        seoul_female: 0
    };

    getCount = async () => {
        try {
            const response = await axios.get('http://52.170.43.147:3000/get_count');
            console.log(response);
            const data = response.data;
            console.log(data);
            this.setState({
                global_male: data.global_male,
                global_female: data.global_female,
                seoul_male: data.seoul_male,
                seoul_female: data.seoul_female
            });
        } catch (e) {
            console.log(e);
        }
    };

    componentDidMount() {
        this.getCount();
        // console.log(fetch("/get_count"));
    }

    render() {
        const { global_male, global_female, seoul_female, seoul_male } = this.state;
        const male = global_male + seoul_male;
        const female = global_female + seoul_female;
        const global = global_male + global_female;
        const seoul = seoul_female + seoul_male;

        console.log({ global_male, global_female, seoul_female, seoul_male });

        return (
            <div className={cx('count')} id="count">
                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOnce={true}>
                    <div className={cx('title')}>봄 외출 참여인원 530명, 가을에는?</div>

                    <Grid container className={cx('root')} spacing={2}>
                        <Grid item xs={6} sm={3}>
                            <TinyCount title="남" count={male}/>
                        </Grid>
                        <Grid className={cx('grid2')} item xs={6} sm={3} >
                            <TinyCount title="여" count={female}/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TinyCount title="서울" count={seoul}/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TinyCount title="글로벌" count={global}/>
                        </Grid>
                    </Grid>
                </ScrollAnimation>
            </div>
        );
    }
}

export default Count;