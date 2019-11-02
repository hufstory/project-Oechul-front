import React, {Component} from 'react';

import Main from './Main';
import Count from './Count';
import Intro from './Intro';
import Timer from '../lib/Timer';
import Address from './Address';
// import './Body.scss';
import SnackBar from '../lib/SnackBar'

class Body extends Component {
    render() {
        return (
            <>
                <Main/>
                <Timer/>
                <Count/>
                <Intro/>
                <Address/>
                <SnackBar/>
            </>
        );
    }
}

export default Body;