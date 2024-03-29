import React, {Component} from 'react';

import Main from './Main';
import Count from './Count';
import Intro from './Intro';
import Timer from '../lib/Timer';
import Address from './Address';
// import './Body.scss';
import SnackBar from '../lib/SnackBar'
import TimeLine from '../lib/TimeLine'
import Tree from '../lib/Tree'

class Body extends Component {
    render() {
        return (
            <>
                <Main/>
                {/* <Tree/> */}
                <Timer/>
                <Count/>
                {/* <Intro/> */}
                <TimeLine/>
                <Address/>
                <SnackBar/>
            </>
        );
    }
}

export default Body;