(this["webpackJsonpworkout-timer"]=this["webpackJsonpworkout-timer"]||[]).push([[0],{68:function(e,t,a){e.exports=a.p+"static/media/bells.b62cc0d9.mp3"},75:function(e,t,a){e.exports=a(88)},80:function(e,t,a){},81:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=(a(80),a(10)),l=(a(81),a(121)),s=a(90),u=a(127),m=a(120),d=a(89),f=a(115);function p(e){return null!==e.match(/[a-z]/i)}function E(e,t){for(var a,n=[],r=t,i=!0;i&&r>=0;)r--,n.unshift(e[r]),a=e[r-1],i=/^\d$/.test(a)&&r>0;return 0===n.length?"":[r,n.join("").trim()]}function g(e,t){var a=e.indexOf("(",t);if(-1===a)return"";for(var n=a,r=1,i=!0;i;)"("===e[++n]?r++:")"===e[n]&&r--,i=r>0&&n<e.length;return[n,e.slice(a+1,n)]}function b(e,t){for(var a="",n=t;n>0;n--){a+=e+(1!==n?", ":"")}return a}var h=function(e){var t=function(e){var t=e.indexOf("*");for(;-1!==e.indexOf("*");){var a,n,r,i=E(e,t),c=Object(o.a)(i,2);a=c[0],n=c[1];var l=g(e,t),s=Object(o.a)(l,2);r=s[0];var u=b(s[1],n);e=e.slice(0,a)+u+e.slice(r+1),t=e.indexOf("*")}return e}(function(e){return function(e){for(var t=0;t<e.length;t++){var a=e[t],n=!0;if("x"===a){if(t-1>=0){var r=e[t-1];n=!p(r)}if(t+1<e.length){var i=e[t+1];n=n&&!p(i)}n&&(e=e.slice(0,t)+"*"+e.slice(t+1))}}return e}(e.replace(/\+/g,",").replace(/[\u201c\u201d]/g,'"').replace(/[[{]/g,"(").replace(/[\]}]/g,")"))}(e)).split(","),a=[],n=0;return t.forEach((function(e){var t=function(e){var t=e.indexOf('"'),a=e.indexOf("'");if(-1===a)return e;if(-1===t)return(60*e.slice(0,a)).toString()+'"'+e.slice(a+1);var n=e.slice(0,a),r=e.slice(a+1,t);return(60*n+parseInt(r)).toString()+'"'+e.slice(t+1)}(e).split('"'),r=Object(o.a)(t,2),i=r[0],c=r[1];n+=parseInt(i.trim());var l={duration:i.trim(),name:c.trim()};a.push(l)})),{exercises:a,duration:n}},v=a(63),x=a.n(v),y=Object(f.a)((function(e){return{root:{display:"inline-block",width:"80%",maxWidth:505},workoutInput:{width:"100%"},buttonsRow:{display:"flex",justifyContent:"center",margin:"auto",paddingLeft:12},submitButton:{alignSelf:"center",position:"absolute",backgroundColor:"rgba(46,151,255,0.75)"},submitText:{color:"#000000"},cancelButton:{alignSelf:"center",backgroundColor:"rgba(150,203,255,1)"},cancelText:{color:"#000000",fontSize:12},settingsButton:{marginLeft:"auto"},settingsIcon:{fontSize:32}}}));var j=function(e){var t=y(),a=Object(n.useState)('15" Squats + \n2x(15"Plank + 15"Burpees) + \n15" Lunges'),i=Object(o.a)(a,2),c=i[0],s=i[1],f=Object(n.useState)(!0),p=Object(o.a)(f,2),E=p[0],g=p[1],b=Object(n.useCallback)((function(t){var a=h(c);e.setWorkout(a),v(),e.setAppState("Timing"),t.preventDefault()}),[c,e,g]),v=function(){g(!E)};return r.a.createElement("div",{className:t.root},r.a.createElement("form",{onSubmit:b},E&&r.a.createElement(u.a,{className:t.workoutInput,type:"text",name:"exercises",id:"inputExercises",multiline:!0,value:c,onChange:function(e){s(e.target.value)}}),r.a.createElement("div",{className:t.buttonsRow},E&&e.timerStarted&&r.a.createElement(m.a,{className:t.cancelButton,onClick:function(){return v()}},r.a.createElement(l.a,{className:t.cancelText},"Cancel")),E&&r.a.createElement(m.a,{className:t.submitButton,type:"submit",value:"Submit"},r.a.createElement(l.a,{className:t.submitText},"SUBMIT")),!E&&r.a.createElement(m.a,{className:t.submitButton,onClick:function(){return v()}},r.a.createElement(l.a,{className:t.submitText},"Edit workout")),r.a.createElement(d.a,{onClick:e.openSettings,className:t.settingsButton},r.a.createElement(x.a,{className:t.settingsIcon})))))},S=a(52),k=a(50),O=a.n(k),N=a(64),w=a.n(N),I=a(48),T=a.n(I),C=Object(f.a)((function(e){return{iconButton:{},controlIcon:{fontSize:32},distributingDiv:{display:"flex",justifyContent:"center"},buttonsSeparationDiv:{minWidth:"30px"}}}));var F=function(e){var t=e.timerState,a=e.startTimer,n=e.pauseTimer,i=e.resetTimer;return function(e,t,a,n,i){switch(t){case"Playing":return r.a.createElement(d.a,{className:e.iconButton,"aria-label":"pause",onClick:n},r.a.createElement(w.a,{className:e.controlIcon}));case"Paused":return r.a.createElement("div",{className:e.distributingDiv},r.a.createElement(d.a,{className:e.iconButton,"aria-label":"play",onClick:a},r.a.createElement(O.a,{className:e.controlIcon})),r.a.createElement("div",{className:e.buttonsSeparationDiv}),r.a.createElement(d.a,{className:e.iconButton,"aria-label":"reset",onClick:i},r.a.createElement(T.a,{className:e.controlIcon})));default:return r.a.createElement(d.a,{className:e.iconButton,"aria-label":"play",onClick:a},r.a.createElement(O.a,{className:e.controlIcon}))}}(C(),t,a,n,i)},B=a(122);function W(e){var t=("0"+Math.floor(e/1e3)%60).slice(-2),a=("0"+Math.floor(e/6e4)%60).slice(-2),n=("0"+Math.floor(e/36e5)).slice(-2);return"00"===n?a+" : "+t:n+" : "+a+" : "+t}var A=Object(f.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"3vh",paddingRight:"20px",paddingLeft:"20px"},currentExerciseLabel:{margin:0,textAlign:"left"},currentExerciseText:{paddingBottom:"1vh",margin:0},exerciseTimeContainer:{display:"flex",alignItems:"center",justifyContent:"center"},exerciseTimeText:{fontWeight:"regular",position:"absolute",margin:0},excerciseProgressContainer:{position:"absolute"},controlButtons:{marginTop:"2vh"},extraInfoContainer:{display:"flex",justifyContent:"center",marginTop:"2vh"},extraInfoText:{margin:0,fontSize:"20px"},extraInfoSeparation:{minWidth:"40px"}}}));var z=function(e){var t=A(),a=e.timerTime,n=e.currentExercise,i=a-1e3*e.lastStart,c=Math.floor(i/1e3),o=n.duration-c;return r.a.createElement("div",{className:t.root},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:t.currentExerciseLabel},"Current exercise: "),r.a.createElement(l.a,{variant:"h1",className:t.currentExerciseText},n.name)),r.a.createElement("div",{className:t.exerciseTimeContainer},r.a.createElement(l.a,{variant:"h1",className:t.exerciseTimeText},W(1e3*o)),r.a.createElement("div",{className:t.excerciseProgressContainer},r.a.createElement(B.a,{className:t.excerciseProgress,variant:"static",value:100-parseInt(i/(10*n.duration)),size:"36vh",thickness:6})),r.a.createElement(B.a,{className:t.totalProgress,variant:"static",color:"secondary",size:"42vh",thickness:1,value:parseInt(a/e.workoutDuration/10)})),r.a.createElement("div",{className:t.controlButtons},e.controlButtons),r.a.createElement("div",{className:t.extraInfoContainer},r.a.createElement("div",null,"Time elapsed:",r.a.createElement("h4",{className:t.extraInfoText},W(a))),r.a.createElement("div",{className:t.extraInfoSeparation}),r.a.createElement("div",null,"Exercises left:",r.a.createElement("h4",{className:t.extraInfoText},e.exercisesLeft)))))};function M(e,t){return e?"Playing":e||0!==t?!e&&t>0?"Paused":void 0:"Not Started"}var D=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],c=a[1],l=Object(n.useState)(0),s=Object(o.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(""),f=Object(o.a)(d,2),p=f[0],E=f[1],g=Object(n.useState)({duration:1,length:0}),b=Object(o.a)(g,2),h=b[0],v=b[1],x=Object(n.useState)([]),y=Object(o.a)(x,2),j=y[0],k=y[1],O=Object(n.useState)(0),N=Object(o.a)(O,2),w=N[0],I=N[1],T=Object(n.useState)(""),C=Object(o.a)(T,2),B=C[0],W=C[1],A=function(){c(!1),clearInterval(B)},D=function(){m(0),L()},L=function(){var t=Object(S.a)(e.workout.exercises);v({duration:e.workout.duration,length:e.workout.exercises.length}),t.length>0&&E(t.shift()),k(t),I(0)};Object(n.useEffect)((function(){A(),D()}),[e.workout]);var P=Math.floor(u/1e3),R=u-1e3*w,H=Math.floor(R/1e3);return i&&H>=p.duration&&function(t){0===j.length?(e.notifyChange(),A(),e.setAppState("Finished")):(I(t),E(function(){var t=Object(S.a)(j),a=t.shift();return e.notifyChange(),k(t),a}()))}(P),r.a.createElement(z,{timerTime:u,currentExercise:p,lastStart:w,workoutDuration:h.duration,exercisesLeft:(j.length+1).toString()+"/"+h.length.toString(),controlButtons:r.a.createElement(F,{timerState:M(i,u),startTimer:function(){c(!0),m(u);var e=Date.now()-u;W(setInterval((function(){m(Date.now()-e)}),10))},pauseTimer:A,resetTimer:D})})},L=a(128),P=a(123),R=a(124),H=a(51),q=a.n(H),J=Object(f.a)((function(e){return{root:{marginTop:30},helpAndInfo:{display:"inline-block",alignItems:"center",width:"80%",maxWidth:505},panelDetails:{paddingTop:0,textAlign:"left"},text:{marginTop:"0",marginBottom:"0"},instructionList:{paddingLeft:"10px",margin:0},listItem:{marginTop:"5px",textAlign:"justify"}}}));var U=function(e){var t=J();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.helpAndInfo},r.a.createElement(L.a,null,r.a.createElement(P.a,{expandIcon:r.a.createElement(q.a,null)},r.a.createElement(l.a,{variant:"h6"},"How to write the workout")),r.a.createElement(R.a,{className:t.panelDetails},r.a.createElement("div",null,r.a.createElement("p",{className:t.text},"Follow these instructions:"),r.a.createElement("ul",{className:t.instructionList},r.a.createElement("li",{className:t.listItem}," ","You must write exercises or exercise blocks separated by"," ",r.a.createElement("b",null,",")," or ",r.a.createElement("b",null,"+"),"."),r.a.createElement("li",{className:t.listItem}," ",r.a.createElement("u",null,"Exercises:")," ",r.a.createElement("br",null),"First write the duration by expressing minutes ",r.a.createElement("b",null,"'")," and seconds ",r.a.createElement("b",null,'"'),", and then the exercise name."),r.a.createElement("li",{className:t.listItem},r.a.createElement("u",null,"Exercise blocks:")," ",r.a.createElement("br",null),"First write the number of repetitions followed by the multiplication symbol ",r.a.createElement("b",null,"x")," or ",r.a.createElement("b",null,"*")," and then the block between parentheses: ",r.a.createElement("b",null,"( )")," or ",r.a.createElement("b",null,"[ ]")," or"," ",r.a.createElement("b",null,"{ }"),". ",r.a.createElement("br",null))),r.a.createElement("p",null,"You may write nested blocks.")))),r.a.createElement(L.a,null,r.a.createElement(P.a,{expandIcon:r.a.createElement(q.a,null)},r.a.createElement(l.a,{variant:"h6"},"About the app")),r.a.createElement(R.a,{className:t.panelDetails},r.a.createElement("p",null,"This app is supposed to help you with your workouts. If you enter the workout in the format explained above, it will tell you which exercise you're at and much time is left. ",r.a.createElement("br",null),r.a.createElement("br",null),"If you're unsure how to do it, try the example above! ",r.a.createElement("br",null),r.a.createElement("br",null),"App created with <3 by"," ",r.a.createElement("a",{href:"https://github.com/t1emp0"},"t1emp0"),".")))))},V=a(65),Y=a.n(V),$=Object(s.a)((function(e){return{modal:{zIndex:"1",position:"fixed",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"},modal_content:{display:"inline",backgroundColor:e.palette.background.default,opacity:"1",top:"50%",position:"absolute",transform:"translate(-50%, -50%)",padding:20,paddingTop:10,paddingBottom:30,maxWidth:"80%",borderRadius:"8px"},close:{textAlign:"right"},inside:{}}}));var _=function(e){var t=$(),a=Object(n.useRef)(),i=function(){e.toggle()},c=function(e){a.current.contains(e.target)||i()};return Object(n.useEffect)((function(){return document.addEventListener("mousedown",c),function(){document.removeEventListener("mousedown",c)}}),[]),r.a.createElement("div",{className:t.modal},r.a.createElement("div",{className:t.modal_content,ref:a},r.a.createElement("div",{className:t.close},r.a.createElement(d.a,{onClick:i},r.a.createElement(Y.a,{style:{fontSize:24}}))),r.a.createElement("div",{className:t.inside},e.inside)))},K=a(125),G=a(129),Q=a(130),X=a(66),Z=a.n(X),ee=a(67),te=a.n(ee),ae=Object(f.a)((function(e){return{root:{minWidth:"250px",paddingTop:"15px",textAlign:"center"},grid:{display:"flex",spacing:2,alignItems:"center",paddingBottom:"20px"}}}));var ne=function(e){var t=ae(),a=Object(o.a)(e.funcs,6),i=a[0],c=a[1],s=a[2],u=a[3],m=a[4],d=a[5],f=Object(n.useState)(parseInt(100*s))[0];return r.a.createElement("div",{className:t.root},r.a.createElement(K.a,{container:!0,spacing:2,justify:"center",className:t.grid},r.a.createElement(K.a,{item:!0},r.a.createElement(l.a,{variant:"h3"},"Volume")),r.a.createElement(K.a,{item:!0},r.a.createElement("span",null,r.a.createElement(G.a,{checked:i,onChange:function(e){c(e.target.checked)},color:"secondary"})))),r.a.createElement(K.a,{container:!0,spacing:2,className:t.grid},r.a.createElement(K.a,{item:!0},r.a.createElement(Z.a,null)),r.a.createElement(K.a,{item:!0,xs:!0},r.a.createElement(Q.a,{disabled:!i,defaultValue:f,volume:s,onChange:function(e,t){u(.01*t)},color:"secondary","aria-labelledby":"volume-slider"})),r.a.createElement(K.a,{item:!0},r.a.createElement(te.a,null))),r.a.createElement(K.a,{container:!0,spacing:2,justify:"center",className:t.grid},r.a.createElement(K.a,{item:!0},r.a.createElement(l.a,{variant:"h3"},"Screen Flash")),r.a.createElement(K.a,{item:!0},r.a.createElement("span",null,r.a.createElement(G.a,{checked:m,onChange:function(e){d(e.target.checked)},color:"secondary"})))))},re=a(68),ie=a.n(re);var ce=function(e,t,a,n){var r=new Audio(ie.a);r.volume=e,t&&r.play(),a&&(setTimeout((function(){n.style.backgroundColor="#000000"}),0),setTimeout((function(){n.style.backgroundColor="#F2F5FF"}),100),setTimeout((function(){n.style.backgroundColor="#000000"}),150),setTimeout((function(){n.style.backgroundColor="#F2F5FF"}),250))},oe=Object(f.a)((function(e){return{iconButton:{},controlIcon:{fontSize:32},distributingDiv:{display:"flex",justifyContent:"center"},buttonsSeparationDiv:{minWidth:"30px"}}}));var le=function(e){var t=oe();return r.a.createElement("div",null,r.a.createElement("h3",null,"Workout done! Congratulations!"),r.a.createElement(d.a,{className:t.iconButton,"aria-label":"reset",onClick:e.resetTimer},r.a.createElement(T.a,{className:t.controlIcon})))},se=Object(s.a)((function(e){return{app:{textAlign:"center",backgroundColor:e.palette.background.default,minHeight:"100vh"},content:{minWidth:280,minHeight:600,margin:"auto",paddingBottom:20},title:{paddingTop:"4vh",paddingBottom:10,userSelect:"none"}}}));var ue=function(){var e=se(),t=Object(n.useState)({exercises:[]}),a=Object(o.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)("Home"),u=Object(o.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(!1),p=Object(o.a)(f,2),E=p[0],g=p[1],b=Object(n.useState)(!0),h=Object(o.a)(b,2),v=h[0],x=h[1],y=Object(n.useState)(1),S=Object(o.a)(y,2),k=S[0],O=S[1],N=Object(n.useState)(!1),w=Object(o.a)(N,2),I=w[0],T=w[1],C=function(){g(!E)};return r.a.createElement("div",{id:"App",className:e.app},r.a.createElement("div",{className:e.content},E&&r.a.createElement(_,{toggle:C,inside:r.a.createElement(ne,{funcs:[v,x,k,O,I,T]})}),r.a.createElement("div",{onClick:function(){c({exercises:[]}),d("Home")}},r.a.createElement(l.a,{variant:"h2",className:e.title},"WORKOUT TIMER")),r.a.createElement(j,{setWorkout:c,timerStarted:"Timing"===m,openSettings:C,setAppState:d}),"Home"===m&&r.a.createElement(U,null),"Timing"===m&&r.a.createElement(D,{workout:i,notifyChange:function(){var e=document.querySelector("#App");ce(k,v,I,e)},setAppState:d}),"Finished"===m&&r.a.createElement(le,{resetTimer:function(){c(i),d("Timing")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=a(69),de=a(126),fe=(a(86),a(87),Object(me.a)({typography:{fontFamily:'"Inter", "Montserrat", sans-serif',fontSize:12,h1:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:40},h2:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:30},h3:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:24},h6:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:16},subtitle1:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:14}},palette:{primary:{main:"#2E97FF"},secondary:{main:"#000080"},accent:{main:"#80d6d1"},background:{main:"#F2F5FF",default:"#F2F5FF"},w:{main:"#ff5656"}}}));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de.a,{theme:fe},r.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.bf6773c3.chunk.js.map