(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),o=a.n(r),c=(a(69),a(15)),i=(a(70),a(3)),s=a(4),m=a(6),u=a(5),d=a(7),f=a(47),p=a.n(f),b=a(22),E=a.n(b),h=E.a.bind(p.a),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"navber",className:h("navigator")},l.a.createElement("section",{className:h("items")},l.a.createElement("div",{className:h("main-nav")},l.a.createElement("a",{href:"#main"},l.a.createElement("span",{"data-hover":"main"},"main")),l.a.createElement("a",{href:"#count"},l.a.createElement("span",{"data-hover":"real time count"},"real time count")),l.a.createElement("a",{href:"#info"},l.a.createElement("span",{"data-hover":"info"},"info")),l.a.createElement("a",{href:"#footer"},l.a.createElement("span",{"data-hover":"footer"},"footer"))),l.a.createElement("a",{herf:"#",className:h("title")},"HUFSTORY")))}}]),t}(n.Component),v=(a(71),a(132)),y=a(13),k=a.n(y),w=function(){return l.a.createElement("div",{id:"main",className:"Main"},l.a.createElement("header",null,l.a.createElement("div",{className:"Main-Container"},l.a.createElement(k.a,{animateIn:"fadeIn",animateOut:"fadeOut",animateOnce:!0,delay:500},l.a.createElement("h1",{className:"Main-Text"},"\uc678\ub300\uc0dd \uc194\ub85c\ud0c8\ucd9c \ud504\ub85c\uc81d\ud2b8",l.a.createElement("br",null),"\uc6b0\ub9ac\ub294 \ud559\uad50 \uc548\uc5d0\uc11c \ub9cc\ub09c\ub2e4.")),l.a.createElement(k.a,{animateIn:"fadeIn",animateOut:"fadeOut",animateOnce:!0,delay:1e3},l.a.createElement("h4",{className:"Main-subText"},"100% \ube44\ubc00 \ubcf4\uc7a5!",l.a.createElement("br",null),"\uc791\uc131\ub41c \uc778\uc801\uc0ac\ud56d\uacfc \uc774\uc0c1\ud615 \uc815\ubcf4\ub97c",l.a.createElement("br",null),"\ubc14\ud0d5\uc73c\ub85c \ucee4\ud50c\uc774 \ub9e4\uce6d\ub429\ub2c8\ub2e4."))),l.a.createElement(k.a,{animateIn:"fadeIn",animateOut:"fadeOut",animateOnce:!0,delay:1500},l.a.createElement("a",{href:"https://docs.google.com/forms/d/18RjhUCAIt_R8_zChPXcrxbcuZZQVQIDjL_fpySoLzaU/edit"},l.a.createElement(v.a,{variant:"contained",size:"medium",className:"Main-button",color:"primary"},"\ucc38\uc5ec\ud558\uae30")))))},C=a(30),x=a.n(C),j=a(49),O=a(50),N=a.n(O),B=a(51),_=a.n(B),F=E.a.bind(_.a),T=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.count,t=this.props.title,a=[F("gradColor0"),F("gradColor1"),F("gradColor2"),F("gradColor3"),F("gradColor4")][parseInt(e%50/10)],n=parseInt(e/50);return l.a.createElement("div",{className:F("tinyCount")},l.a.createElement("p",{className:F("title")},t),e<50?l.a.createElement("p",{className:0!=n?F("grayColor"):a},"50\uba85 \ub3cc\ud30c!"):l.a.createElement("p",{className:F("blackColor")},"50\uba85 \ub3cc\ud30c!"),e<100?l.a.createElement("p",{className:1!=n?F("grayColor"):a},"100\uba85 \ub3cc\ud30c!"):l.a.createElement("p",{className:F("blackColor")},"100\uba85 \ub3cc\ud30c!"),e<150?l.a.createElement("p",{className:2!=n?F("grayColor"):a},"150\uba85 \ub3cc\ud30c!"):l.a.createElement("p",{className:F("blackColor")},"150\uba85 \ub3cc\ud30c!"),e<200?l.a.createElement("p",{className:3!=n?F("grayColor"):a},"200\uba85 \ub3cc\ud30c!"):l.a.createElement("p",{className:F("blackColor")},"200\uba85 \ub3cc\ud30c!"),e<300?l.a.createElement("p",{className:4!=n?F("grayColor"):a},"300\uba85 \ub3cc\ud30c!"):l.a.createElement("p",{className:F("blackColor")},"300\uba85 \ub3cc\ud30c!"))}}]),t}(n.Component),I=a(131),L=a(52),z=a.n(L),M=E.a.bind(N.a),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={global_male:0,global_female:0,seoul_male:0,seoul_female:0},a.getCount=Object(j.a)(x.a.mark(function e(){var t,n;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z.a.get("http://52.170.43.147:3000/get_count");case 3:t=e.sent,console.log(t),n=t.data,console.log(n),a.setState({global_male:n.global_male,global_female:n.global_female,seoul_male:n.seoul_male,seoul_female:n.seoul_female}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])})),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getCount()}},{key:"render",value:function(){var e=this.state,t=e.global_male,a=e.global_female,n=e.seoul_female,r=e.seoul_male,o=t+r,c=a+n,i=t+a,s=n+r;return console.log({global_male:t,global_female:a,seoul_female:n,seoul_male:r}),l.a.createElement("div",{className:M("count"),id:"count"},l.a.createElement(k.a,{animateIn:"fadeIn",animateOnce:!0},l.a.createElement("div",{className:M("title")},"\ubd04 \uc678\ucd9c \ucc38\uc5ec\uc778\uc6d0 530\uba85, \uac00\uc744\uc5d0\ub294?"),l.a.createElement(I.a,{container:!0,className:M("root"),spacing:2},l.a.createElement(I.a,{item:!0,xs:6,sm:3},l.a.createElement(T,{title:"\ub0a8",count:o})),l.a.createElement(I.a,{className:M("grid2"),item:!0,xs:6,sm:3},l.a.createElement(T,{title:"\uc5ec",count:c})),l.a.createElement(I.a,{item:!0,xs:6,sm:3},l.a.createElement(T,{title:"\uc11c\uc6b8",count:s})),l.a.createElement(I.a,{item:!0,xs:6,sm:3},l.a.createElement(T,{title:"\uae00\ub85c\ubc8c",count:i})))))}}]),t}(n.Component),S=(a(134),a(94),a(95),new Date("Nov 14, 2019 00:00:00").getTime()),A=(setInterval(function(){var e=(new Date).getTime(),t=S-e;document.getElementById("days").innerText=Math.floor(t/864e5),document.getElementById("hours").innerText=Math.floor(t%864e5/36e5),document.getElementById("minutes").innerText=Math.floor(t%36e5/6e4),document.getElementById("seconds").innerText=Math.floor(t%6e4/1e3)},1e3),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"timer-container"},l.a.createElement("div",{id:"timer-content"},l.a.createElement("p",null,"\uc2e0\uccad \ub9c8\uac10\uae4c\uc9c0 \ub0a8\uc740 \uc2dc\uac04"),l.a.createElement("span",null,"( 2019\ub144 11\uc6d4 04\uc77c-11\uc6d4 13\uc77c )"),l.a.createElement("section",null,l.a.createElement("ul",{id:"timer-countdown"},l.a.createElement("li",null,l.a.createElement("span",{className:"timer-number",id:"days"}),l.a.createElement("p",{className:"timer-word"},"Days")),l.a.createElement("li",null,l.a.createElement("span",{className:"timer-number",id:"hours"}),l.a.createElement("p",{className:"timer-word"},"Hours")),l.a.createElement("li",null,l.a.createElement("span",{className:"timer-number",id:"minutes"}),l.a.createElement("p",{className:"timer-word"},"Minutes")),l.a.createElement("li",null,l.a.createElement("span",{className:"timer-number",id:"seconds"}),l.a.createElement("p",{className:"timer-word"},"Seconds")))))))}}]),t}(n.Component)),G=a(20);function R(){var e=Object(G.a)(["\n    align-items: stretch;\n    flex: auto;\n\n    margin: auto;\n    box-sizing: border-box;\n    word-break: keep-all;\n    width: 33.33%;\n    text-align: center;\n\n    svg{\n        padding: 0 0 15px 0;\n    }\n    strong {\n        font-size: 20px;\n    }\n    p{\n        font-size: 16px;\n        padding: 15px 0 0;\n    }\n"]);return R=function(){return e},e}function V(){var e=Object(G.a)(["\n    flex-wrap: wrap;\n    flex-direction: row;\n    display: flex;\n    padding: 0;\n\n    list-style: none;\n    justify-content: space-around;\n"]);return V=function(){return e},e}function H(){var e=Object(G.a)(["\n    padding: 10px 0 30px 0;\n    font-size: 30.6px;\n    font-weight: 500;\n    text-align: center;\n    color: #0098ef;\n"]);return H=function(){return e},e}function K(){var e=Object(G.a)(["\n    word-break: keep-all;\n    box-sizing: border-box;\n"]);return K=function(){return e},e}var q=c.b.div(K()),U=c.b.h3(H()),W=c.b.ul(V()),J=c.b.li(R()),Q=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.a,{animateIn:"fadeIn",animateOut:"fadeOut",animateOnce:!0},l.a.createElement(q,null,l.a.createElement(U,null,"Hufstory"),l.a.createElement(W,null,l.a.createElement(J,null,l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M12 1l-12 12h3v10h18v-10h3l-12-12zm0 18c-1.607-1.626-3-2.84-3-4.027 0-1.721 2.427-2.166 3-.473.574-1.695 3-1.246 3 .473 0 1.187-1.393 2.402-3 4.027zm8-11.907l-3-3v-2.093h3v5.093z"})),l.a.createElement("br",null),l.a.createElement("strong",null,"\ud6d5\uc2a4\ud1a0\ub9ac \uc8fc\uc18c"),l.a.createElement("p",null,"\uc678\ub300\ub85c 81 \ud55c\uad6d\uc678\uad6d\uc5b4 \ub300\ud559\uad50 \ud559\uc0dd\ud68c\uad00 313\ud638")),l.a.createElement(J,null,l.a.createElement("a",{href:"https://open.kakao.com/o/sy8CRfKb"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M19 2c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2v-20zm-8.5 0h3c.276 0 .5.224.5.5s-.224.5-.5.5h-3c-.276 0-.5-.224-.5-.5s.224-.5.5-.5zm1.5 20c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-14.024h10v14.024z"}))),l.a.createElement("br",null),l.a.createElement("strong",null,"\ud6d5\uc2a4\ud1a0\ub9ac \uce74\uce74\uc624\ud1a1"),l.a.createElement("a",{href:"https://open.kakao.com/o/sy8CRfKb"},l.a.createElement("p",null,"KakaoTalk OpenChat"))),l.a.createElement(J,null,l.a.createElement("a",{href:"http://m.me/storyhufs"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"}))),l.a.createElement("br",null),l.a.createElement("strong",null,"\ud6d5\uc2a4\ud1a0\ub9ac \uba54\uc2e0\uc800"),l.a.createElement("a",{href:"http://m.me/storyhufs"},l.a.createElement("p",null,"Facebook Messenger")))))))};a(96);function Y(e){var t,a,n,l,r,o=this,c={message:"Operation performed successfully.",dismissible:!0,timeout:5e3,status:"",actions:[],fixed:!1};var i=function(e){var t=e.children,a=null,n=0;for(n=0;n<t.length;n++)if(1===(a=t.item(n)).nodeType&&a.classList.length>0&&a.classList.contains("js-snackbar-container"))return a;return null};this.Open=function(){var e=n.firstElementChild.scrollHeight;n.style.height=e+"px",n.style.opacity=1,n.style.marginTop="5px",n.style.marginBottom="5px",n.addEventListener("transitioned",function(){n.removeEventListener("transitioned",arguments.callee),n.style.height=null})},this.Close=function(){t&&clearInterval(t);var e=n.scrollHeight,a=n.style.transition;n.style.transition="",requestAnimationFrame(function(){n.style.height=e+"px",n.style.opacity=1,n.style.marginTop="0px",n.style.marginBottom="0px",n.style.transition=a,requestAnimationFrame(function(){n.style.height="0px",n.style.opacity=0})}),setTimeout(function(){l.removeChild(n)},1e3)},void 0!==e&&(void 0!==e.message&&(c.message=e.message),void 0!==e.dismissible&&("string"===typeof e.dismissible?c.dismissible="true"===e.dismissible:"boolean"===typeof e.dismissible?c.dismissible=e.dismissible:console.debug("Invalid option provided for 'dismissable' ["+e.dismissible+"] is of type "+typeof e.dismissible)),void 0!==e.timeout&&("boolean"===typeof e.timeout&&!1===e.timeout?c.timeout=!1:"string"===typeof e.timeout&&(c.timeout=parseInt(e.timeout)),"number"===typeof e.timeout&&(e.timeout===1/0?c.timeout=!1:e.timeout>=0?c.timeout=e.timeout:console.debug("Invalid timeout entered. Must be greater than or equal to 0."),c.timeout=e.timeout)),void 0!==e.status&&(c.status=e.status),void 0!==e.actions&&(c.actions=e.actions),void 0===e.container||"string"!==typeof e.container&&"object"!==typeof e.container||(c.container=e.container),void 0!==e.fixed&&(c.fixed=e.fixed)),function(){if(null===c.container||void 0===c.container)r=document.body;else if("object"===typeof c.container&&c.container instanceof Element)l=c.container;else{var e=document.getElementById(c.container);void 0===e&&(console.error("SnackBar: Could not find target container "+c.container),e=document.body),r=e}(l=i(r))||((l=document.createElement("div")).classList.add("js-snackbar-container"),c.fixed&&l.classList.add("js-snackbar-container--fixed"),r.appendChild(l)),c.fixed?l.classList.add("js-snackbar-container--fixed"):l.classList.remove("js-snackbar-container--fixed"),(n=document.createElement("div")).classList.add("js-snackbar__wrapper");var s=document.createElement("div");if(s.classList.add("js-snackbar","js-snackbar--show"),c.status){c.status=c.status.toLowerCase().trim();var m=document.createElement("span");m.classList.add("js-snackbar__status"),"success"===c.status||"green"===c.status?m.classList.add("js-snackbar--success"):"warning"===c.status||"alert"===c.status||"orange"===c.status?m.classList.add("js-snackbar--warning"):"danger"===c.status||"error"===c.status||"red"===c.status?m.classList.add("js-snackbar--danger"):m.classList.add("js-snackbar--info"),s.appendChild(m)}if((a=document.createElement("span")).classList.add("js-snackbar__message"),a.textContent=c.message,s.appendChild(a),void 0!==c.actions&&"object"===typeof c.actions&&void 0!==c.actions.length)for(var u=0;u<c.actions.length;u++){var d=c.actions[u];if(void 0!==d&&void 0!==d.text&&"string"===typeof d.text&&(void 0!==d.function&&"function"===typeof d.function||void 0!==d.dissmiss&&"boolean"===typeof d.dissmiss&&!0===d.dissmiss)){var f=document.createElement("span");f.classList.add("js-snackbar__action"),void 0!==d&&"function"===typeof d.function?void 0!==d.dissmiss&&"boolean"===typeof d.dissmiss&&!0===d.dissmiss?f.onclick=function(){d.function(),o.Close()}:f.onclick=d.function:f.onclick=o.Close,f.textContent=d.text,s.appendChild(f)}}if(c.dismissible){var p=document.createElement("span");p.classList.add("js-snackbar__close"),p.innerText="\xd7",p.onclick=o.Close,s.appendChild(p)}n.style.height="0px",n.style.opacity="0",n.style.marginTop="0px",n.style.marginBottom="0px",n.appendChild(s),l.appendChild(n),!1!==c.timeout&&(t=setTimeout(o.Close,c.timeout))}(),o.Open()}var Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).a=new Y({message:"\ud6d5\uc2a4\ud1a0\ub9ac \uc0c8\ub85c\uc6b4 \uac1c\ubc1c\uc790 & \ub514\uc790\uc774\ub108\ub97c \ubaa8\uc9d1\ud569\ub2c8\ub2e4",status:"info",fixed:!0,actions:[{text:"Click!",function:function(){window.location.href="https://www.notion.so/hufstory/2020-7d64b4b8de4c416b9aa32b22580f8e12"}}],timeout:4e4}),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null)}}]),t}(n.Component),P=a(14),X=(a(107),a(57)),$=a.n(X),ee=a(56),te=a.n(ee),ae=a(55),ne=a.n(ae),le=a(33),re=a.n(le),oe=a(34),ce=a.n(oe),ie=a(58),se=a.n(ie),me=(a(108),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(P.VerticalTimeline,{className:"info",id:"info"},l.a.createElement(P.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"rgb(33, 150, 243)",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  rgb(33, 150, 243)"},iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:l.a.createElement(ne.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"Hufstory"),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"since 2014"),l.a.createElement("p",null,"\ud6d5\uc2a4\ud1a0\ub9ac\ub294 \uac1c\ubc1c\ud300, \uae30\ud68d&\ub514\uc790\uc778\ud300\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9c4 \uad50\ub0b4 \ud559\uc0dd\uc790\uce58\uae30\uad6c\uc785\ub2c8\ub2e4.")),l.a.createElement(P.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"November 4 2019",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:l.a.createElement(te.a,null)},l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"\uc678\ub300\uc194\ub85c \ud0c8\ucd9c \ubc0f \uc2e0\uc785 \ud300\uc6d0 \ubaa8\uc9d1 \uacf5\uace0"),l.a.createElement("p",null,"\uc678\ub300 \uc194\ub85c \ud0c8\ucd9c \uc77c\uc815: 11\uc6d4 4\uc77c \u2013 11\uc6d4 13\uc77c",l.a.createElement("br",null),"\uc2e0\uc785 \ud300\uc6d0 \ubaa8\uc9d1 \uc77c\uc815: 11\uc6d4 4\uc77c \u2013 11\uc6d4 15\uc77c")),l.a.createElement(P.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"What",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:l.a.createElement(re.a,null)},l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"'\uc678\ub300 \uc194\ub85c \ud0c8\ucd9c'\uc774\ub780?"),l.a.createElement("p",null,"\uc678\ucd9c, \ud480\uc5b4\uc11c \uc678\ub300\uc0dd \uc194\ub85c\ud0c8\ucd9c \ud504\ub85c\uc81d\ud2b8\ub294 \uad50\ub0b4 \uc720\uc77c \uc790\uce58\uae30\uad6c \ud6d5\uc2a4\ud1a0\ub9ac\uac00 \uc9c4\ud589\ud558\ub294 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4. \uac01\uc790\uac00 \uc791\uc131\ud55c \uc774\uc0c1\ud615\uc744 \ud1a0\ub300\ub85c \ud558\uc5ec \uc774\uc0c1\ud615\uacfc \uac00\uae4c\uc6b4 \ubd84\uc744 \ub9e4\uce6d\ud574\ub4dc\ub9ac\ub294 \ube14\ub77c\uc778\ub4dc \ub9e4\uce6d \uc2dc\uc2a4\ud15c\uc785\ub2c8\ub2e4. 1\ud559\uae30, \uae00\ub85c\ubc8c \ucea0\ud37c\uc2a4\uc5d0\uc11c\ub9cc 530\uba85\uc774 \uc870\uae08 \ub118\ub294 \ud559\uc6b0\ub2d8\ub4e4\uc774 \uc2e0\uccad\ud574\uc8fc\uc168\uc2b5\ub2c8\ub2e4 \uadf8\ub54c \uc2e0\uccad \ubabb\ud558\uc2e0 \ubd84\ub4e4, \uadf8\ub9ac\uace0 \uc11c\uc6b8 \ucea0\ud37c\uc2a4\ub3c4 \uc9c4\ud589\ud574\ub2ec\ub77c\uace0 \ud574\uc8fc\uc2e0 \ud559\uc6b0\ub2d8\ub4e4\uc758 \uc694\uccad\uc5d0 \ud798\uc785\uc5b4 2\ud559\uae30\uc5d0\ub294 \uc11c\uc6b8\ucea0\ud37c\uc2a4\uc640 \uae00\ub85c\ubc8c\ucea0\ud37c\uc2a4 \ubaa8\ub450 \ud569\uccd0 \uc678\ucd9c \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4!")),l.a.createElement(P.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:"How",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:l.a.createElement(re.a,null)},l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"\ub9e4\uce6d \ubc29\uc2dd"),l.a.createElement("p",null,"\ud6d5\uc2a4\ud1a0\ub9ac\uc758 \uc678\ucd9c \ud504\ub85c\uc81d\ud2b8\ub294 14\ub144\ub3c4\uc5d0 \ucc98\uc74c \uc2dc\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uba87 \ub144 \uac04 \uc313\uc778 \ub0b4\uacf5\uc73c\ub85c \uc5ec\ub7ec\ubd84\ub4e4\uc5d0\uac8c \ub354 \uc798 \ub9de\ub294 \uc774\uc131\uc744 \ucc3e\uc544\ub4dc\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.! 1\ucc28\uc801\uc73c\ub85c \ucef4\ud4e8\ud130 \ud504\ub85c\uadf8\ub7a8\uc744 \uc774\uc6a9\ud558\uc5ec \uc6b0\uc120\uc21c\uc704\ub97c \uc120\uc815\ud558\uc5ec \ucd94\ub9bd\ub2c8\ub2e4. \uadf8 \ud6c4 2\ucc28\ub85c\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uac70\uce5c \uba85\ub2e8\uc744 \uac00\uc9c0\uace0 \uc9c1\uc811 \ube44\uad50 \ud6c4 \ub9e4\uce6d\ud558\uc5ec \ub354 \uc774\uc0c1\ud615\uc5d0 \uac00\uae4c\uc6b4 \ubd84\uacfc \ub9e4\uce6d \ub420 \uc218 \uc788\ub3c4\ub85d \ub178\ub825\ud569\ub2c8\ub2e4.")),l.a.createElement(P.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"About",iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"},icon:l.a.createElement($.a,null)},l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"\ubaa8\uc9d1 \uc77c\uc815"),l.a.createElement("p",null,"\ud6d5\uc2a4\ud1a0\ub9ac \uc0c8\ub85c\uc6b4 \uac1c\ubc1c\uc790 & \ub514\uc790\uc774\ub108\ub97c \ubaa8\uc9d1\ud569\ub2c8\ub2e4. \xa0\xa0",l.a.createElement("a",{href:"https://www.notion.so/hufstory/2020-7d64b4b8de4c416b9aa32b22580f8e12"},"Click Me!"))),l.a.createElement(P.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"November 13 2019",iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:l.a.createElement(ce.a,null)},l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"\uc678\ub300\uc194\ub85c \ud0c8\ucd9c \ub9c8\uac10")),l.a.createElement(P.VerticalTimelineElement,{className:"vertical-timeline-element--education",date:"November 15 2019",iconStyle:{background:"rgb(16, 204, 82)",color:"#fff"},icon:l.a.createElement(ce.a,null)},l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"\ud6d5\uc2a4\ud1a0\ub9ac \uc2e0\uc785 \ud300\uc6d0 \ubaa8\uc9d1 \ub9c8\uac10")),l.a.createElement(P.VerticalTimelineElement,{iconStyle:{background:"rgb(233, 30, 99)",color:"#fff"},icon:l.a.createElement(se.a,null)})))}}]),t}(n.Component)),ue=(a(110),n.Component,function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,null),l.a.createElement(A,null),l.a.createElement(D,null),l.a.createElement(me,null),l.a.createElement(Q,null),l.a.createElement(Z,null))}}]),t}(n.Component));function de(){var e=Object(G.a)(["\n    color: white;\n    background-color: black;\n    text-align: center;\n    height: 100px;\n    padding: 10px;\n\n    a {\n        text-decoration: none;\n        color: ","\n        &:hover {\n            color: white;\n        }\n    }\n"]);return de=function(){return e},e}var fe=c.b.footer(de(),function(e){return e.theme.Blue200}),pe=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(fe,{id:"footer"},l.a.createElement("div",null,"Footer"),l.a.createElement("a",{href:"https://www.facebook.com/storyhufs/posts/1872610396100271"}," hufstory facebook "),"|",l.a.createElement("a",{href:"https://hashtagen.com/people/hufstory_official"}," hufstory instagram "),"|",l.a.createElement("a",{href:"https://open.kakao.com/o/sy8CRfKb"}," hufstory kakaotalk "),l.a.createElement("p",null," Copyright \xa9 hufstory "))}}]),t}(n.Component),be=(a(111),n.Component,a(112),n.Component,{LightBlue300:"#0098ef",Blue100:"#C7E7FB",Blue200:"#92CCFE",Blue300:"#68B6E7",Blue400:"#459ED8",Blue500:"#2484C3",Blue600:"#085689",Blue700:"#053555",DeepBlue100:"#CCCFFC",DeepBlue200:"#9CA0F4",DeepBlue300:"#757BEB",Red100:"#FEC7D0",Red200:"#FD9EA3",Red300:"#FB6880",Red400:"#F94561",Red500:"#F62143",Orange300:"#FFB86A",Yellow300:"#FFE86A",Green100:"#C5FCE1",Green200:"#8DF4C3",Green300:"#62EBA9",Green400:"#3DDE91",Green500:"#1CCC77",Violet300:"#AD68E9",Gray100:"#9C9FA3",Gray200:"#797C83",Gray300:"#5D6069",Gray400:"#43464F",Gray500:"#22252B",Gray600:"#374148",Gray700:"#2C3032",whiteBox:"border: ".concat("4px",";\n               border-radius: ").concat("1px solid #e6e6e6",";\n               background-color:white;\n              ")});var Ee=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{theme:be},l.a.createElement(g,null),l.a.createElement(ue,null),l.a.createElement(pe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},47:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},64:function(e,t,a){e.exports=a(113)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.abdee6dd.chunk.js.map