import React from 'react';
import "./style.css";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const Main = () => {


    return (
        <div className="Main">
            <header>
                <div className="Main-Container">
                    {/*<h5 className="Main-title">외대생 솔로탈출</h5>*/}
                    <h1 className="Main-Text">
                        외대인 인연 만들기 프로젝트
                    <br/>
                        우리는 학교 안에서 만난다.
                    </h1>
                    <h4 className="Main-subText">
                        100% 비밀 보장!
                        <br/>
                        작성된 인적사항과 이상형 정보를 
                        <br/>
                        바탕으로 커플이 매칭됩니다.
                    </h4>
                </div>

                <Button variant="contained" size="medium" className="Main-button" color="primary">
                    참여하기
                </Button>

                {/*<div className="Main-border"></div>*/}
            </header>
        </div>
    )
}

export default Main;