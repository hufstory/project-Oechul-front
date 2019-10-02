import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "./style.scss";

const style = {
    Paper: {
        height: 'auto',
        overflow: 'hidden',
        margin: '30px',
        padding: '0 20px 20px 20px',
        textAlign: 'center',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    },
    Frame: {
        backgroundColor: '#efefef'
    }
}

const Intro = () => {
    return (
        <>
            <Grid
                container
                style={style.Frame}
            >
                <Grid item xs={12} md={4}>
                <Paper style={style.Paper}>
                    <h1>WHAT?</h1>
                    <div>
                    외출, 풀어서 외대생 솔로탈출 프로젝트는 교내 유일 자치기구 훕스토리가 진행하는 프로젝트입니다. 각자가 작성한 이상형을 토대로 하여 이상형과 가까운 분을 매칭해드리는 블라인드 매칭 시스템입니다.
1학기, 글로벌 캠퍼스에서만 530명이 조금 넘는 학우님들이 신청해주셨습니다
그때 신청 못하신 분들, 그리고 서울 캠퍼스도 진행해달라고 해주신 학우님들의 요청에 힘입어 2학기에는 서울캠퍼스와 글로벌캠퍼스 모두 합쳐 외출 프로젝트를 진행하게 되었습니다!
                    </div>
                    <div style={style.bar}>
                    </div>
                </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper style={style.Paper}>
                    <h1>WHEN?</h1>
                    <div>
                    0월 0일부터 – 0월 0일 까지.
붉게 물드는 단풍과 함께 여러분의 마음도 붉게 물들었으면 좋겠습니다.
                    </div>
                </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper style={style.Paper}>
                    <h1>WHY?</h1>
                    <div>
                    훕스토리의 외출 프로젝트는 14년도에 처음 시작되었습니다.
몇 년 간 쌓인 내공으로 여러분들에게 더 잘 맞는 이성을 찾아드릴 수 있습니다.!
1차적으로 컴퓨터 프로그램을 이용하여 우선순위를 선정하여 추립니다. 그 후 2차로는 프로그램을 거친 명단을 가지고 직접 비교 후 매칭하여 더 이상형에 가까운 분과 매칭 될 수 있도록 노력합니다.
                    </div>
                </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Intro;