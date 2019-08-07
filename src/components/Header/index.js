import React from 'react';
import "./style.css";

const Header = () => {
    return (
        <div className="Header">
            <header>
                <div className="Container">
                    <h5 className="title">외대생 솔로탈출</h5>
                    <h1 className="mainText">
                        외대인 인연 만들기 프로젝트
                    <br/>
                        우리는 학교 안에서 만난다.
                    </h1>
                    <h4 className="subText">
                        100% 비밀 보장!
                        <br/>
                        작성된 인적사항과 이상형 정보를 
                        <br/>
                        바탕으로 커플이 매칭됩니다.
                    </h4>
                </div>
                <a href="http://www.naver.com"><button><b>참여하기</b></button></a>
                <div className="border"></div>
            </header>
            <span>hufstory</span>
        </div>
    )
}

export default Header;