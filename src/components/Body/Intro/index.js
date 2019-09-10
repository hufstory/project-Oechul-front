import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import "./style.scss";

const style = {
    Paper: {
        height: '15rem',
        overflow: 'hidden',
        margin: '30px',
        marginBottom: "30px",
        padding: '20px',
        textAlign: 'center',
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    },
    bar: {
    }
}

const Intro = () => {
    return (
        <>
            <Grid 
                container 
                spacing={2}
                direction="row"
                justify="space-around"
                alignItems="center"
                id="info"
            >
              <Grid item xs={12} sm={12} md={4}>
                <Paper style={style.Paper}>
                    <h1>What?</h1>
                    <div>
                        1차적으로 프로그램을 짜서 우선순위를 선정, 프로그램을 돌립니다! 
                        2차로는 프로그램을 거친 명단을 가지고 더 이상형에 가까운 분과 매칭하기 위하여 직접 비교 후 매칭을 진행하고 있습니다!
                    </div>
                    <div style={style.bar}>
                    </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Paper style={style.Paper}>
                    <h1>What?</h1>
                    <div>
                        1차적으로 프로그램을 짜서 우선순위를 선정, 프로그램을 돌립니다! 
                        2차로는 프로그램을 거친 명단을 가지고 더 이상형에 가까운 분과 매칭하기 위하여 직접 비교 후 매칭을 진행하고 있습니다!
                    </div>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Paper style={style.Paper}>
                    <h1>What?</h1>
                    <div>
                        1차적으로 프로그램을 짜서 우선순위를 선정, 프로그램을 돌립니다! 
                        2차로는 프로그램을 거친 명단을 가지고 더 이상형에 가까운 분과 매칭하기 위하여 직접 비교 후 매칭을 진행하고 있습니다!
                    </div>
                </Paper>
              </Grid>
            </Grid>
        </>
    )
}

export default Intro;