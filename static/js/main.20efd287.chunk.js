(this["webpackJsonpworkout-timer"]=this["webpackJsonpworkout-timer"]||[]).push([[0],{61:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/bells.b62cc0d9.mp3"},81:function(e,t,a){e.exports=a(93)},86:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),l=a.n(i),c=(a(86),a(10)),o=(a(61),a(126)),s=a(76),u=a(132),m=a(125),f=a(96),d=a(121);function p(e){return null!==e.match(/[a-z]/i)}function b(e,t){for(var a,n=[],r=t,i=!0;i&&r>=0;)r--,n.unshift(e[r]),a=e[r-1],i=/^\d$/.test(a)&&r>0;return 0===n.length?"":[r,n.join("").trim()]}function E(e,t){var a=e.indexOf("(",t);if(-1===a)return"";for(var n=a,r=1,i=!0;i;)"("===e[++n]?r++:")"===e[n]&&r--,i=r>0&&n<e.length;return[n,e.slice(a+1,n)]}function h(e,t){for(var a="",n=t;n>0;n--){a+=e+(1!==n?", ":"")}return a}var g=function(e){var t=function(e){var t=e.indexOf("*");for(;-1!==e.indexOf("*");){var a,n,r,i=b(e,t),l=Object(c.a)(i,2);a=l[0],n=l[1];var o=E(e,t),s=Object(c.a)(o,2);r=s[0];var u=h(s[1],n);e=e.slice(0,a)+u+e.slice(r+1),t=e.indexOf("*")}return e}(function(e){return function(e){for(var t=0;t<e.length;t++){var a=e[t],n=!0;if("x"===a){if(t-1>=0){var r=e[t-1];n=!p(r)}if(t+1<e.length){var i=e[t+1];n=n&&!p(i)}n&&(e=e.slice(0,t)+"*"+e.slice(t+1))}}return e}(e.replace(/\+/g,",").replace(/[\u201c\u201d]/g,'"').replace(/[[{]/g,"(").replace(/[\]}]/g,")"))}(e)).split(","),a=[],n=0;return t.forEach((function(e){var t=function(e){var t=e.indexOf('"'),a=e.indexOf("'");if(-1===a)return e;if(-1===t)return(60*e.slice(0,a)).toString()+'"'+e.slice(a+1);var n=e.slice(0,a),r=e.slice(a+1,t);return(60*n+parseInt(r)).toString()+'"'+e.slice(t+1)}(e).split('"'),r=Object(c.a)(t,2),i=r[0],l=r[1];n+=parseInt(i.trim());var o={duration:i.trim(),name:l.trim()};a.push(o)})),{exercises:a,duration:n}},v=a(65),x=a.n(v),y=Object(d.a)((function(e){return{root:{display:"inline-block",width:"80%",maxWidth:505},workoutInput:{width:"100%"},buttonsRow:{display:"flex",justifyContent:"center",margin:"auto"},submitButton:{alignSelf:"center",position:"absolute",backgroundColor:"rgba(46,151,255,0.75)"},settingsButton:{marginLeft:"auto"},settingsIcon:{fontSize:32},submitText:{color:"#000000"}}}));var j=function(e){var t=y(),a=Object(n.useState)('15" Squats + \n2x(15"Plank + 15"Burpees) + \n15" Lunges'),i=Object(c.a)(a,2),l=i[0],s=i[1],d=Object(n.useState)(!0),p=Object(c.a)(d,2),b=p[0],E=p[1],h=Object(n.useCallback)((function(t){var a=g(l);e.setWorkout(a),v(),t.preventDefault()}),[l,e,E]),v=function(){E(!b)};return r.a.createElement("div",{className:t.root},r.a.createElement("form",{onSubmit:h},b&&r.a.createElement(u.a,{className:t.workoutInput,type:"text",name:"exercises",id:"inputExercises",multiline:!0,value:l,onChange:function(e){s(e.target.value)}}),r.a.createElement("div",{className:t.buttonsRow},b?r.a.createElement(m.a,{className:t.submitButton,type:"submit",value:"Submit"},r.a.createElement(o.a,{className:t.submitText},"SUBMIT")):r.a.createElement(m.a,{className:t.submitButton,onClick:function(){return v()}},r.a.createElement(o.a,{className:t.submitText},"Edit workout")),r.a.createElement(f.a,{onClick:e.openSettings,className:t.settingsButton},r.a.createElement(x.a,{className:t.settingsIcon})))))},N=a(52),O=a(127),w=a(49),k=a.n(w),I=a(66),S=a.n(I),C=a(50),T=a.n(C),F=Object(d.a)((function(e){return{iconButton:{},controlIcon:{fontSize:32},distributingDiv:{display:"flex",justifyContent:"center"},buttonsSeparationDiv:{minWidth:"30px"}}}));var B=function(e){var t=e.status,a=e.controlFunctions[0],n=e.controlFunctions[1],i=e.controlFunctions[2];return function(e,t,a,n,i){switch(t){case"Playing":return r.a.createElement(f.a,{className:e.iconButton,"aria-label":"pause",onClick:n},r.a.createElement(S.a,{className:e.controlIcon}));case"Paused":return r.a.createElement("div",{className:e.distributingDiv},r.a.createElement(f.a,{className:e.iconButton,"aria-label":"play",onClick:a},r.a.createElement(k.a,{className:e.controlIcon})),r.a.createElement("div",{className:e.buttonsSeparationDiv}),r.a.createElement(f.a,{className:e.iconButton,"aria-label":"reset",onClick:i},r.a.createElement(T.a,{className:e.controlIcon})));case"Finished":return r.a.createElement(f.a,{className:e.iconButton,"aria-label":"reset",onClick:i},r.a.createElement(T.a,{className:e.controlIcon}));default:return r.a.createElement(f.a,{className:e.iconButton,"aria-label":"play",onClick:a},r.a.createElement(k.a,{className:e.controlIcon}))}}(F(),t,a,n,i)},W=Object(d.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"3vh",paddingRight:"20px",paddingLeft:"20px"},currentExerciseLabel:{margin:0,textAlign:"left"},currentExerciseText:{paddingBottom:"1vh",margin:0},exerciseTimeContainer:{display:"flex",alignItems:"center",justifyContent:"center"},exerciseTimeText:{fontWeight:"regular",position:"absolute",margin:0},excerciseProgress:{color:"#2e97ff"},excerciseProgressContainer:{position:"absolute"},totalProgress:{color:"#000080"},buttonRow:{marginTop:"2vh"},extraInfoContainer:{display:"flex",justifyContent:"center",marginTop:"2vh"},extraInfoText:{margin:0,fontSize:"20px"},extraInfoSeparation:{minWidth:"40px"}}}));function z(e){var t=("0"+Math.floor(e/1e3)%60).slice(-2),a=("0"+Math.floor(e/6e4)%60).slice(-2),n=("0"+Math.floor(e/36e5)).slice(-2);return"00"===n?a+" : "+t:n+" : "+a+" : "+t}function M(e,t,a,n){var i=function(e,t,a){return e?"Playing":a?"Finished":e||0!==t?!e&&t>0?"Paused":void 0:"Not Started"}(e,t,a);return r.a.createElement(B,{status:i,controlFunctions:n})}var A=function(e){var t=W(),a=Object(n.useState)(!1),i=Object(c.a)(a,2),l=i[0],s=i[1],u=Object(n.useState)(0),m=Object(c.a)(u,2),f=m[0],d=m[1],p=Object(n.useState)(!1),b=Object(c.a)(p,2),E=b[0],h=b[1],g=Object(n.useState)(""),v=Object(c.a)(g,2),x=v[0],y=v[1],j=Object(n.useState)([]),w=Object(c.a)(j,2),k=w[0],I=w[1],S=Object(n.useState)(0),C=Object(c.a)(S,2),T=C[0],F=C[1],B=Object(n.useState)(""),A=Object(c.a)(B,2),P=A[0],D=A[1],R=function(){s(!0),h(!1),d(f);var e=Date.now()-f;D(setInterval((function(){d(Date.now()-e)}),10))},L=function(){s(!1),clearInterval(P)},H=function(){d(0),h(!1),J()},J=function(){var t=Object(N.a)(e.workout.exercises);t.length>0&&y(t.shift()),I(t),F(0)};Object(n.useEffect)((function(){L(),H()}),[e.workout]);var U=Math.floor(f/1e3),V=f-1e3*T,Y=Math.floor(V/1e3),$=x.duration-Y;return l&&Y>=x.duration&&function(t){0===k.length?(e.notifyChange(),h(!0),L()):(F(t),y(function(){var t=Object(N.a)(k),a=t.shift();return e.notifyChange(),I(t),a}()))}(U),r.a.createElement("div",{className:t.root},!E&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:t.currentExerciseLabel},"Current exercise: "),r.a.createElement(o.a,{variant:"h1",className:t.currentExerciseText},x.name)),r.a.createElement("div",{className:t.exerciseTimeContainer},r.a.createElement(o.a,{variant:"h1",className:t.exerciseTimeText},z(1e3*$)),r.a.createElement("div",{className:t.excerciseProgressContainer},r.a.createElement(O.a,{className:t.excerciseProgress,variant:"static",value:100-parseInt(V/(10*x.duration)),size:"36vh",thickness:6})),r.a.createElement(O.a,{className:t.totalProgress,variant:"static",size:"42vh",thickness:1,value:parseInt(f/e.workout.duration/10)})),r.a.createElement("div",{className:t.buttonRow},M(l,f,E,[R,L,H])),r.a.createElement("div",{className:t.extraInfoContainer},r.a.createElement("div",null,"Time elapsed:",r.a.createElement("h4",{className:t.extraInfoText},z(f))),r.a.createElement("div",{className:t.extraInfoSeparation}),r.a.createElement("div",null,"Exercises left:",r.a.createElement("h4",{className:t.extraInfoText},k.length+1,"/",e.workout.exercises.length)))),E&&0!==f&&r.a.createElement("div",null,r.a.createElement("h3",null,"Workout done! Congratulations!"),r.a.createElement("div",{className:t.buttonRow},M(l,f,E,[R,L,H]))))},P=a(133),D=a(128),R=a(129),L=a(51),H=a.n(L),J=Object(d.a)((function(e){return{root:{marginTop:30},helpAndInfo:{display:"inline-block",alignItems:"center",width:"80%",maxWidth:505},panelDetails:{paddingTop:0,textAlign:"left"},text:{marginTop:"0",marginBottom:"0"},instructionList:{paddingLeft:"10px",margin:0},listItem:{marginTop:"5px",textAlign:"justify"}}}));var U=function(e){var t=J();return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.helpAndInfo},r.a.createElement(P.a,null,r.a.createElement(D.a,{expandIcon:r.a.createElement(H.a,null)},r.a.createElement(o.a,{variant:"h6"},"How to write the workout")),r.a.createElement(R.a,{className:t.panelDetails},r.a.createElement("div",null,r.a.createElement("p",{className:t.text},"Follow these instructions:"),r.a.createElement("ul",{className:t.instructionList},r.a.createElement("li",{className:t.listItem}," ","You must write exercises or exercise blocks separated by"," ",r.a.createElement("b",null,",")," or ",r.a.createElement("b",null,"+"),"."),r.a.createElement("li",{className:t.listItem}," ",r.a.createElement("u",null,"Exercises:")," ",r.a.createElement("br",null),"First write the duration by expressing minutes ",r.a.createElement("b",null,"'")," and seconds ",r.a.createElement("b",null,'"'),", and then the exercise name."),r.a.createElement("li",{className:t.listItem},r.a.createElement("u",null,"Exercise blocks:")," ",r.a.createElement("br",null),"First write the number of repetitions followed by the multiplication symbol ",r.a.createElement("b",null,"x")," or ",r.a.createElement("b",null,"*")," and then the block between parentheses: ",r.a.createElement("b",null,"( )")," or ",r.a.createElement("b",null,"[ ]")," or"," ",r.a.createElement("b",null,"{ }"),". ",r.a.createElement("br",null))),r.a.createElement("p",null,"You may write nested blocks.")))),r.a.createElement(P.a,null,r.a.createElement(D.a,{expandIcon:r.a.createElement(H.a,null)},r.a.createElement(o.a,{variant:"h6"},"About the app")),r.a.createElement(R.a,{className:t.panelDetails},r.a.createElement("p",null,"This app is supposed to help you with your workouts. If you enter the workout in the format explained above, it will tell you which exercise you're at and much time is left. ",r.a.createElement("br",null),r.a.createElement("br",null),"If you're unsure how to do it, try the example above! ",r.a.createElement("br",null),r.a.createElement("br",null),"App created with <3 by"," ",r.a.createElement("a",{href:"https://github.com/t1emp0"},"t1emp0"),".")))))},V=a(67),Y=a(68),$=a(74),_=a(75),q=a(94),K=a(69),X=a.n(K),G=function(e){Object(_.a)(a,e);var t=Object($.a)(a);function a(){var e;Object(V.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleClose=function(){e.props.toggle()},e}return Object(Y.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.modal},r.a.createElement("div",{className:e.modal_content},r.a.createElement("div",{className:e.close,onClick:this.handleClose},r.a.createElement(f.a,null,r.a.createElement(X.a,{style:{fontSize:24}}))),r.a.createElement("div",{className:e.inside},this.props.inside)))}}]),a}(n.Component),Q=Object(q.a)((function(e){return{modal:{zIndex:"1",position:"fixed",width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)"},modal_content:{display:"inline",backgroundColor:e.palette.background.default,opacity:"1",top:"50%",position:"absolute",transform:"translate(-50%, -50%)",padding:20,paddingTop:10,paddingBottom:30,maxWidth:"80%",borderRadius:"8px"},close:{textAlign:"right"},inside:{}}}))(G),Z=a(130),ee=a(134),te=a(135),ae=a(70),ne=a.n(ae),re=a(71),ie=a.n(re),le=Object(d.a)((function(e){return{root:{minWidth:"250px",paddingTop:"15px"},grid:{spacing:2,alignItems:"center",justify:"center",paddingBottom:"20px"}}}));var ce=function(e){var t=le(),a=Object(c.a)(e.funcs,4),i=a[0],l=a[1],s=a[2],u=a[3],m=Object(n.useState)(parseInt(100*s))[0];return r.a.createElement("div",{className:t.root},r.a.createElement(Z.a,{container:!0,spacing:2,justify:"center",className:t.grid},r.a.createElement(Z.a,{item:!0},r.a.createElement(o.a,{variant:"h3"},"Volume")),r.a.createElement(Z.a,{item:!0,style:{transform:"scaleX(-1)"}},r.a.createElement("span",null,r.a.createElement(ee.a,{checked:!i,onChange:function(e){l(!e.target.checked)}})))),r.a.createElement(Z.a,{container:!0,spacing:2,className:t.grid},r.a.createElement(Z.a,{item:!0},r.a.createElement(ne.a,null)),r.a.createElement(Z.a,{item:!0,xs:!0},r.a.createElement(te.a,{disabled:!i,defaultValue:m,volume:s,onChange:function(e,t){u(.01*t)},"aria-labelledby":"continuous-slider"})),r.a.createElement(Z.a,{item:!0},r.a.createElement(ie.a,null))))},oe=a(72),se=a.n(oe);var ue=function(e,t){var a=new Audio;a.src=se.a,a.volume=e,t&&a.play()},me=Object(s.a)((function(e){return{app:{textAlign:"center",backgroundColor:e.palette.background.default,minHeight:"100vh"},content:{minWidth:280,minHeight:600,margin:"auto",paddingBottom:20},title:{paddingTop:"4vh",paddingBottom:10,userSelect:"none"}}}));var fe=function(){var e=me(),t=Object(n.useState)({exercises:[]}),a=Object(c.a)(t,2),i=a[0],l=a[1],s=Object(n.useState)(!1),u=Object(c.a)(s,2),m=u[0],f=u[1],d=Object(n.useState)(!0),p=Object(c.a)(d,2),b=p[0],E=p[1],h=Object(n.useState)(1),g=Object(c.a)(h,2),v=g[0],x=g[1],y=function(){f(!m)};return r.a.createElement("div",{className:e.app},r.a.createElement("div",{className:e.content},m&&r.a.createElement(Q,{toggle:y,inside:r.a.createElement(ce,{funcs:[b,E,v,x]})}),r.a.createElement("div",{onClick:function(){l({exercises:[]})}},r.a.createElement(o.a,{variant:"h2",className:e.title},"WORKOUT TIMER")),r.a.createElement(j,{workout:i,setWorkout:l,openSettings:y}),0===i.exercises.length&&r.a.createElement(U,null),i.exercises.length>0&&r.a.createElement(A,{workout:i,notifyChange:function(){ue(v,b)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=a(73),pe=a(131),be=(a(91),a(92),Object(de.a)({typography:{fontFamily:'"Inter", "Montserrat", sans-serif',fontSize:12,h1:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:40},h2:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:30},h3:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:24},h6:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:16},subtitle1:{fontFamily:'"Montserrat", "Inter", sans-serif',fontWeight:600,fontSize:14}},palette:{primary:{main:"#333333"},secondary:{main:"#727171"},accent:{main:"#80d6d1"},background:{main:"#F2F5FF",default:"#F2F5FF"},w:{main:"#ff5656"}}}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe.a,{theme:be},r.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.20efd287.chunk.js.map