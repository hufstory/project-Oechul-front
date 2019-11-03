import React from 'react'
import styled from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';

const AddressContainer = styled.div`
    word-break: keep-all;
    box-sizing: border-box;
`

const AddressTitle = styled.h3`
    padding: 10px 0 30px 0;
    font-size: 30.6px;
    font-weight: 500;
    text-align: center;
    color: #0098ef;
`
const AddressContent = styled.ul`
    flex-wrap: wrap;
    flex-direction: row;
    display: flex;
    padding: 0;

    list-style: none;
    justify-content: space-around;
`

const AddressContentDetail = styled.li`
    align-items: stretch;
    flex: auto;

    margin: auto;
    box-sizing: border-box;
    word-break: keep-all;
    width: 33.33%;
    text-align: center;

    svg{
        padding: 0 0 15px 0;
    }
    strong {
        font-size: 20px;
    }
    p{
        font-size: 16px;
        padding: 15px 0 0;
    }
`

const Address = () => {
    return (
        <>
            <ScrollAnimation animateIn="fadeIn"
                             animateOut='fadeOut'
                             animateOnce={true}>
                <AddressContainer>

                    <AddressTitle>
                        Hufstory
                    </AddressTitle>

                    <AddressContent>
                        <AddressContentDetail>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M12 1l-12 12h3v10h18v-10h3l-12-12zm0 18c-1.607-1.626-3-2.84-3-4.027 0-1.721 2.427-2.166 3-.473.574-1.695 3-1.246 3 .473 0 1.187-1.393 2.402-3 4.027zm8-11.907l-3-3v-2.093h3v5.093z"/></svg>
                            <br/>
                            <strong>훕스토리 주소</strong>
                            <p>외대로 81 한국외국어 대학교 학생회관 313호</p>

                        </AddressContentDetail>
                        
                        <AddressContentDetail>
                            <a href="https://open.kakao.com/o/sy8CRfKb">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"/></svg>
                            </a>
                            <br/>
                            <strong>훕스토리 카카오톡</strong>
                            <a href="https://open.kakao.com/o/sy8CRfKb">
                            <p>
                                KakaoTalk OpenChat
                            </p>
                            </a>

                        </AddressContentDetail>

                        <AddressContentDetail>
                            <a href="http://m.me/storyhufs">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/></svg>
                            </a>
                            <br/>
                            <strong>훕스토리 메신저</strong>
                            <a href="http://m.me/storyhufs">
                            <p>
                                Facebook Messenger
                            </p>
                            </a>
                        </AddressContentDetail>
                    </AddressContent>


                </AddressContainer>
            </ScrollAnimation>
        </>
    )
}

export default Address;