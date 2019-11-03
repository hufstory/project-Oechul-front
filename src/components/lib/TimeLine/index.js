import React, {Component} from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

class TimeLine extends Component {
    render() {
        return (
            <>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date="2011 - present"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Creative Director</h3>
                  <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                  <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="2019 - 11 - 04"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">외대솔로 탈출</h3>
                  <h4 className="vertical-timeline-element-subtitle">외대솔로 탈출</h4>
                  <p>
                    11.04 ~ 11.15
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="What"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                  <p>
                  외출, 풀어서 외대생 솔로탈출 프로젝트는 교내 유일 자치기구 훕스토리가 진행하는 프로젝트입니다. 각자가 작성한 이상형을 토대로 하여 이상형과 가까운 분을 매칭해드리는 블라인드 매칭 시스템입니다.
    1학기, 글로벌 캠퍼스에서만 530명이 조금 넘는 학우님들이 신청해주셨습니다
    그때 신청 못하신 분들, 그리고 서울 캠퍼스도 진행해달라고 해주신 학우님들의 요청에 힘입어 2학기에는 서울캠퍼스와 글로벌캠퍼스 모두 합쳐 외출 프로젝트를 진행하게 되었습니다!
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="When"
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Web Designer</h3>
                  <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                  <p>
                  0월 0일부터 – 0월 0일 까지.
    붉게 물드는 단풍과 함께 여러분의 마음도 붉게 물들었으면 좋겠습니다.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="Why"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                  <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                  <p>
                  훕스토리의 외출 프로젝트는 14년도에 처음 시작되었습니다.
    몇 년 간 쌓인 내공으로 여러분들에게 더 잘 맞는 이성을 찾아드릴 수 있습니다.!
    1차적으로 컴퓨터 프로그램을 이용하여 우선순위를 선정하여 추립니다. 그 후 2차로는 프로그램을 거친 명단을 가지고 직접 비교 후 매칭하여 더 이상형에 가까운 분과 매칭 될 수 있도록 노력합니다.
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="November 15 2019"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">외출 마감</h3>
                  <h4 className="vertical-timeline-element-subtitle">외출 마감</h4>
                  <p>
                    Creative Direction, User Experience, Visual Design
                  </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="2002 - 2006"
                  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                  icon={<SchoolIcon />}
                >
                  <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                  <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                  <p>
                    Creative Direction, Visual Design
                  </p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                  icon={<StarIcon />}
                />
              </VerticalTimeline>
            </>
        );
    }
}

export default TimeLine;