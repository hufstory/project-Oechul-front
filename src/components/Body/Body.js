import React, {Component} from 'react';

import Main from './Main';
import Count from './Count';
import Intro from './Intro';
import Timer from '../lib/Timer'
import Address from './Adress';
// import './Body.scss';

class Body extends Component {
    render() {
        return (
            <>
                <Main/>
                <Timer/>
                <Count/>
                <Intro/>
                <Address/>
            </>
        );
    }
}

export default Body;