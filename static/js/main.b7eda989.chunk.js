(this["webpackJsonpworkout-timer"]=this["webpackJsonpworkout-timer"]||[]).push([[0],{48:function(e,t,a){e.exports=a.p+"static/media/bells.b62cc0d9.mp3"},75:function(e,t,a){e.exports=a(88)},80:function(e,t,a){},81:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),c=(a(80),a(10)),o=(a(81),a(121)),s=a(90),u=a(127),m=a(120),d=a(89),f=a(115);function p(e){return null!==e.match(/[a-z]/i)}function E(e,t){for(var a,n=[],r=t,i=!0;i&&r>=0;)r--,n.unshift(e[r]),a=e[r-1],i=/^\d$/.test(a)&&r>0;return 0===n.length?"":[r,n.join("").trim()]}function b(e,t){var a=e.indexOf("(",t);if(-1===a)return"";for(var n=a,r=1,i=!0;i;)"("===e[++n]?r++:")"===e[n]&&r--,i=r>0&&n<e.length;return[n,e.slice(a+1,n)]}function g(e,t){for(var a="",n=t;n>0;n--){a+=e+(1!==n?", ":"")}return a}var h=function(e){var t=function(e){var t=e.indexOf("*");for(;-1!==e.indexOf("*");){var a,n,r,i=E(e,t),l=Object(c.a)(i,2);a=l[0],n=l[1];var o=b(e,t),s=Object(c.a)(o,2);r=s[0];var u=g(s[1],n);e=e.slice(0,a)+u+e.slice(r+1),t=e.indexOf("*")}return e}(function(e){return function(e){for(var t=0;t<e.length;t++){var a=e[t],n=!0;if("x"===a){if(t-1>=0){var r=e[t-1];n=!p(r)}if(t+1<e.length){var i=e[t+1];n=n&&!p(i)}n&&(e=e.slice(0,t)+"*"+e.slice(t+1))}}return e}(e.replace(/\+/g,",").replace(/[\u201c\u201d]/g,'"').replace(/[[{]/g,"(").replace(/[\]}]/g,")"))}(e)).split(","),a=[],n=0;return t.forEach((function(e){var t=function(e){var t=e.indexOf('"'),a=e.indexOf("'");if(-1===a)return e;if(-1===t)return(60*e.slice(0,a)).toString()+'"'+e.slice(a+1);var n=e.slice(0,a),r=e.slice(a+1,t);return(60*n+parseInt(r)).toString()+'"'+e.slice(t+1)}(e).split('"'),r=Object(c.a)(t,2),i=r[0],l=r[1];n+=parseInt(i.trim());var o={duration:i.trim(),name:l.trim()};a.push(o)})),{exercises:a,duration:n}},v=a(64),x=a.n(v),y=Object(f.a)((function(e){return{root:{display:"inline-block",width:"80%",maxWidth:505},workoutInput:{width:"100%"},buttonsRow:{display:"flex",justifyContent:"center",margin:"auto"},submitButton:{alignSelf:"center",position:"absolute",backgroundColor:"rgba(46,151,255,0.75)"},settingsButton:{marginLeft:"auto"},settingsIcon:{fontSize:32},submitText:{color:"#000000"}}}));var N=function(e){var t=y(),a=Object(n.useState)('15" Squats + \n2x(15"Plank + 15"Burpees) + \n15" Lunges'),i=Object(c.a)(a,2),l=i[0],s=i[1],f=Object(n.useState)(!0),p=Object(c.a)(f,2),E=p[0],b=p[1],g=Object(n.useCallback)((function(t){var a=h(l);e.setWorkout(a),v(),t.preventDefault()}),[l,e,b]),v=function(){b(!E)};return r.a.createElement("div",{className:t.root},r.a.createElement("form",{onSubmit:g},E&&r.a.createElement(u.a,{className:t.workoutInput,type:"text",name:"exercises",id:"inputExercises",multiline:!0,value:l,onChange:function(e){s(e.target.value)}}),r.a.createElement("div",{className:t.buttonsRow},E?r.a.createElement(m.a,{className:t.submitButton,type:"submit",value:"Submit"},r.a.createElement(o.a,{className:t.submitText},"SUBMIT")):r.a.createElement(m.a,{className:t.submitButton,onClick:function(){return v()}},r.a.createElement(o.a,{className:t.submitText},"Edit workout")),r.a.createElement(d.a,{onClick:e.openSettings,className:t.settingsButton},r.a.createElement(x.a,{className:t.settingsIcon})))))},j=a(53),w=a(122),O=a(50),k=a.n(O),I=a(65),S=a.n(I),C=a(51),T=a.n(C),F=Object(f.a)((function(e){return{iconButton:{},controlIcon:{fontSize:32},distributingDiv:{display:"flex",justifyContent:"center"},buttonsSeparationDiv:{minWidth:"30px"}}}));var B=function(e){var t=e.status,a=e.controlFunctions[0],n=e.controlFunctions[1],i=e.controlFunctions[2];return function(e,t,a,n,i){switch(t){case"Playing":return r.a.createElement(d.a,{className:e.iconButton,"aria-label":"pause",onClick:n},r.a.createElement(S.a,{className:e.controlIcon}));case"Paused":return r.a.createElement("div",{className:e.distributingDiv},r.a.createElement(d.a,{className:e.iconButton,"aria-label":"play",onClick:a},r.a.createElement(k.a,{className:e.controlIcon})),r.a.createElement("div",{className:e.buttonsSeparationDiv}),r.a.createElement(d.a,{className:e.iconButton,"aria-label":"reset",onClick:i},r.a.createElement(T.a,{className:e.controlIcon})));case"Finished":return r.a.createElement(d.a,{className:e.iconButton,"aria-label":"reset",onClick:i},r.a.createElement(T.a,{className:e.controlIcon}));default:return r.a.createElement(d.a,{className:e.iconButton,"aria-label":"play",onClick:a},r.a.createElement(k.a,{className:e.controlIcon}))}}(F(),t,a,n,i)},W=a(48),z=a.n(W),M=Object(f.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"3vh",paddingRight:"20px",paddingLeft:"20px"},currentExerciseLabel:{margin:0,textAlign:"left"},currentExerciseText:{paddingBottom:"1vh",margin:0},exerciseTimeContainer:{display:"flex",alignItems:"center",justifyContent:"center"},exerciseTimeText:{fontWeight:"regular",position:"absolute",margin:0},excerciseProgressContainer:{position:"absolute"},buttonRow:{marginTop:"2vh"},extraInfoContainer:{display:"flex",justifyContent:"center",marginTop:"2vh"},extraInfoText:{margin:0,fontSize:"20px"},extraInfoSeparation:{minWidth:"40px"}}}));function A(e){var t=("0"+Math.floor(e/1e3)%60).slice(-2),a=("0"+Math.floor(e/6e4)%60).slice(-2),n=("0"+Math.floor(e/36e5)).slice(-2);return"00"===n?a+" : "+t:n+" : "+a+" : "+t}function D(e,t,a,n){var i=function(e,t,a){return e?"Playing":a?"Finished":e||0!==t?!e&&t>0?"Paused":void 0:"Not Started"}(e,t,a);return r.a.createElement(B,{status:i,controlFunctions:n})}var L=function(e){var t=M(),a=Object(n.useState)(!1),i=Object(c.a)(a,2),l=i[0],s=i[1],u=Object(n.useState)(0),m=Object(c.a)(u,2),d=m[0],f=m[1],p=Object(n.useState)(!1),E=Object(c.a)(p,2),b=E[0],g=E[1],h=Object(n.useState)(""),v=Object(c.a)(h,2),x=v[0],y=v[1],N=Object(n.useState)([]),O=Object(c.a)(N,2),k=O[0],I=O[1],S=Object(n.useState)(0),C=Object(c.a)(S,2),T=C[0],F=C[1],B=Object(n.useState)(""),W=Object(c.a)(B,2),L=W[0],R=W[1],P=new Audio;P.src=z.a;var H=function(){s(!0),g(!1),f(d);var e=Date.now()-d;P.volume=0,P.play(),P.volume=1,P.play(),R(setInterval((function(){f(Date.now()-e)}),10))},J=function(){s(!1),clearInterval(L)},U=function(){f(0),g(!1),V()},V=function(){var t=Object(j.a)(e.workout.exercises);t.length>0&&y(t.shift()),I(t),F(0)};Object(n.useEffect)((function(){J(),U()}),[e.workout]);var Y=Math.floor(d/1e3),$=d-1e3*T,_=Math.floor($/1e3),q=x.duration-_;return l&&_>=x.duration&&function(e){0===k.length?(P.play(),g(!0),J()):(F(e),y(function(){var e=Object(j.a)(k),t=e.shift();return P.play(),I(e),t}()))}(Y),r.a.createElement("div",{className:t.root},!b&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:t.currentExerciseLabel},"Current exercise: "),r.a.createElement(o.a,{variant:"h1",className:t.currentExerciseText},x.name)),r.a.createElement("div",{className:t.exerciseTimeContainer},r.a.createElement(o.a,{variant:"h1",className:t.exerciseTimeText},A(1e3*q)),r.a.createElement("div",{className:t.excerciseProgressContainer},r.a.createElement(w.a,{className:t.excerciseProgress,variant:"static",value:100-parseInt($/(10*x.duration)),size:"36vh",thickness:6})),r.a.createElement(w.a,{className:t.totalProgress,variant:"static",color:"secondary",size:"42vh",thickness:1,value:parseInt(d/e.workout.duration/10)})),r.a.createElement("div",{className:t.buttonRow},D(l,d,b,[H,J,U])),r.a.createElement("div",{className:t.extraInfoContainer},r.a.createElement("div",null,"Time elapsed:",r.a.createElement("h4",{className:t.extraInfoText},A(d))),r.a.createElement("div",{className:t.extraInfoSeparation}),r.a.createElement("div",null,"Exercises left:",r.a.createElement("h4",{className:t.extraInfoText},k.length+1,"/",e.workout.exercises.length)))),b&&0!==d&&r.a.createElement("div",null,r.a.createElement("h3",null,"Workout done! Congratulations!"),r.a.createElement("div",{className:t.buttonRow},D(l,d,b,[H,J,U]))))},R=a(128),P=a(123),H=a(124),J=a(52),U=a.n(J),V=Object(f.a)((function(e){return{root:{marginTop:30},helpAndInfo:{display:"inline-block",alignItems:"center",width:"80%",maxWidth:505},panelDetails:{paddingTop:0,textAlign:"left"},text:{marginTop:"0",marginBottom:"0"},instructionList:{paddingLeft:"10px",margin:0},listItem:{marginTop:"5px",textAlign:"justify"}}}));var Y=function(e){var t=V();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.helpAndInfo},r.a.createElement(R.a,null,r.a.createElement(P.a,{expandIcon:r.a.createElement(U.a,null)},r.a.createElement(o.a,{variant:"h6"},"How to write the workout")),r.a.createElement(H.a,{className:t.panelDetails},r.a.createElement("div",null,r.a.createElement("p",{className:t.text},"Follow these instructions:"),r.a.createElement("ul",{className:t.instructionList},r.a.createElement("li",{className:t.listItem}," ","You must write exercises or exercise blocks separated by"," ",r.a.createElement("b",null,",")," or ",r.a.createElement("b",null,"+"),"."),r.a.createElement("li",{className:t.listItem}," ",r.a.createElement("u",null,"Exercises:")," ",r.a.createElement("br",null),"First write the duration by expressing minutes ",r.a.createElement("b",null,"'")," and seconds ",r.a.createElement("b",null,'"'),", and then the exercise name."),r.a.createElement("li",{className:t.listItem},r.a.createElement("u",null,"Exercise blocks:")," ",r.a.createElement("br",null),"First write the number of repetitions followed by the multiplication symbol ",r.a.createElement("b",null,"x")," or ",r.a.createElement("b",null,"*")," and then the block between parentheses: ",r.a.createElement("b",null,"( )")," or ",r.a.createElement("b",null,"[ ]")," or"," ",r.a.createElement("b",null,"{ }"),". ",r.a.createElement("br",null))),r.a.createElement("p",null,"You may write nested blocks.")))),r.a.createElement(R.a,null,r.a.createElement(P.a,{expandIcon:r.a.createElement(U.a,null)},r.a.createElement(o.a,{variant:"h6"},"About the app")),r.a.createElement(H.a,{className:t.panelDetails},r.a.createElement("p",null,"This app is supposed to help you with your workouts. If you enter the workout in the format explained above, it will tell you which exercise you're at and much time is left. ",r.a.createElement("br",null),r.a.createElement("br",null),"If you're unsure how to do it, try the example above! ",r.a.createElement("br",null),r.a.createElement("br",null),"App created with <3 by"," ",r.a.createElement("a",{href:"https://github.com/t1emp0"},"t1emp0"),".")))))},$=a(66),_=a.n($),q=Object(s.a)((function(e){return{modal:{zIndex:"1",position:"fixed",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"},modal_content:{display:"inline",backgroundColor:e.palette.background.default,opacity:"1",top:"50%",position:"absolute",transform:"translate(-50%, -50%)",padding:20,paddingTop:10,paddingBottom:30,maxWidth:"80%",borderRadius:"8px"},close:{textAlign:"right"},inside:{}}}));var K=function(e){var t=q(),a=Object(n.useRef)(),i=function(){e.toggle()},l=function(e){a.current.contains(e.target)?console.log("click  inside"):i()};return Object(n.useEffect)((function(){return document.addEventListener("mousedown",l),function(){document.removeEventListener("mousedown",l)}}),[]),r.a.createElement("div",{className:t.modal},r.a.createElement("div",{className:t.modal_content,ref:a},r.a.createElement("div",{className:t.close},r.a.createElement(d.a,{onClick:i},r.a.createElement(_.a,{style:{fontSize:24}}))),r.a.createElement("div",{className:t.inside},e.inside)))},G=a(125),Q=a(129),X=a(130),Z=a(67),ee=a.n(Z),te=a(68),ae=a.n(te),ne=Object(f.a)((function(e){return{root:{minWidth:"250px",paddingTop:"15px"},grid:{spacing:2,alignItems:"center",justify:"center",paddingBottom:"20px"}}}));var re=function(e){var t=ne(),a=Object(c.a)(e.funcs,4),i=a[0],l=a[1],s=a[2],u=a[3],m=Object(n.useState)(parseInt(100*s))[0];return r.a.createElement("div",{className:t.root},r.a.createElement(G.a,{container:!0,spacing:2,justify:"center",className:t.grid},r.a.createElement(G.a,{item:!0},r.a.createElement(o.a,{variant:"h3"},"Volume")),r.a.createElement(G.a,{item:!0},r.a.createElement("span",null,r.a.createElement(Q.a,{checked:i,onChange:function(e){l(e.target.checked)},color:"secondary"})))),r.a.createElement(G.a,{container:!0,spacing:2,className:t.grid},r.a.createElement(G.a,{item:!0},r.a.createElement(ee.a,null)),r.a.createElement(G.a,{item:!0,xs:!0},r.a.createElement(X.a,{disabled:!i,defaultValue:m,volume:s,onChange:function(e,t){u(.01*t)},color:"secondary","aria-labelledby":"volume-slider"})),r.a.createElement(G.a,{item:!0},r.a.createElement(ae.a,null))))};var ie=function(e,t){var a=new Audio(z.a);a.volume=e,t&&a.play()},le=Object(s.a)((function(e){return{app:{textAlign:"center",backgroundColor:e.palette.background.default,minHeight:"100vh"},content:{minWidth:280,minHeight:600,margin:"auto",paddingBottom:20},title:{paddingTop:"4vh",paddingBottom:10,userSelect:"none"}}}));var ce=function(){var e=le(),t=Object(n.useState)({exercises:[]}),a=Object(c.a)(t,2),i=a[0],l=a[1],s=Object(n.useState)(!1),u=Object(c.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(!0),p=Object(c.a)(f,2),E=p[0],b=p[1],g=Object(n.useState)(1),h=Object(c.a)(g,2),v=h[0],x=h[1],y=function(){d(!m)};return r.a.createElement("div",{className:e.app},r.a.createElement("div",{className:e.content},m&&r.a.createElement(K,{toggle:y,inside:r.a.createElement(re,{funcs:[E,b,v,x]})}),r.a.createElement("div",{onClick:function(){l({exercises:[]})}},r.a.createElement(o.a,{variant:"h2",className:e.title},"WORKOUT TIMER")),r.a.createElement(N,{workout:i,setWorkout:l,openSettings:y}),0===i.exercises.length&&r.a.createElement(Y,null),i.exercises.length>0&&r.a.createElement(L,{workout:i,notifyChange:function(){ie(v,E)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=a(69),se=a(126),ue=(a(86),a(87),Object(oe.a)({typography:{fontFamily:'"Inter", "Montserrat", sans-serif',fontSize:12,h1:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:40},h2:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:30},h3:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:24},h6:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:16},subtitle1:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:14}},palette:{primary:{main:"#2E97FF"},secondary:{main:"#000080"},accent:{main:"#80d6d1"},background:{main:"#F2F5FF",default:"#F2F5FF"},w:{main:"#ff5656"}}}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se.a,{theme:ue},r.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.b7eda989.chunk.js.map