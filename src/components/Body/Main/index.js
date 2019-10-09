import React from 'react';
import "./style.scss";
import Button from '@material-ui/core/Button';
import ScrollAnimation from 'react-animate-on-scroll';

const Main = () => {
    return (
        <div id="main" className="Main">
            <header>
                <div className="Main-Container">
                    {/* <h5 className="Main-title">외대생 솔로탈출</h5> */}

                    <ScrollAnimation animateIn="fadeIn"
                                     animateOut='fadeOut'
                                     animateOnce={true}
                                     delay={500}>
                        <h1 className="Main-Text">
                            외대인 인연 만들기 프로젝트
                            <br/>
                            우리는 학교 안에서 만난다.
                        </h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn"
                                     animateOut='fadeOut'
                                     animateOnce={true}
                                     delay={1000}>
                        <h4 className="Main-subText">
                            100% 비밀 보장!
                            <br/>
                            작성된 인적사항과 이상형 정보를
                            <br/>
                            바탕으로 커플이 매칭됩니다.
                        </h4>
                    </ScrollAnimation>
                </div>

                <ScrollAnimation animateIn="fadeIn"
                                 animateOut='fadeOut'
                                 animateOnce={true}
                                 delay={1500}>
                    <Button variant="contained" size="medium" className="Main-button" color="primary">
                        참여하기
                    </Button>
                </ScrollAnimation>

            </header>
        </div>
    )
}

export default Main;