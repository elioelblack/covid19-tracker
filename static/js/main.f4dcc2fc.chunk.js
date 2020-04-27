(this.webpackJsonpcorona_app=this.webpackJsonpcorona_app||[]).push([[0],{115:function(e,a,t){e.exports={container:"Chart_container__1PIOn"}},116:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},122:function(e,a,t){e.exports={formControl:"ChartTypeSelect_formControl__TAdAd"}},123:function(e,a,t){e.exports=t.p+"static/media/covidImage.a861abc9.png"},132:function(e,a,t){e.exports=t(252)},252:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),l=t(8),i=t.n(l),u=t(12),s=t(112),d=t(113),m=t(124),p=t(125),f=t(66),h=t(15),v=t(64),b=t(44),g=t.n(b),E="https://covid19.mathdro.id/api",y=function(){var e=Object(u.a)(i.a.mark((function e(a){var t,n,r,c,o,l,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=E,a&&(t="".concat(E,"/countries/").concat(a)),e.prev=2,e.next=5,g.a.get(t);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,l=r.deaths,u=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:l,lastUpdate:u});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(E,"/daily"));case 3:return a=e.sent,t=a.data,e.abrupt("return",t.map((function(e){var a=e.confirmed,t=e.deaths,n=e.reportDate;return{confirmed:a.total,deaths:t.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(E,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get("".concat(E,"/confirmed"));case 3:return a=e.sent,t=a.data,e.abrupt("return",[t]);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),w=t(115),k=t.n(w),j=function(e){var a=e.data,t=a.confirmed,c=a.recovered,o=a.deaths,l=e.country,s=e.charType,d=Object(n.useState)({}),m=Object(h.a)(d,2),p=m[0],f=m[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:a=e.sent,f(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=t?r.a.createElement(v.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.value,c.value,o.value,0]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(l)}}}):null,g=t?r.a.createElement(v.c,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(l)}}}):null,E=p[0]?r.a.createElement(v.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:k.a.container},l?"barChart"===s?b:g:E)},_=t(295),S=t(121),D=t(116),P=t.n(D),I=function(e){var a=e.handleCountryChange,t=Object(n.useState)([]),c=Object(h.a)(t,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,x();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(_.a,{style:{backgroundColor:"darkcyan"},className:P.a.formControl,variant:"filled"},r.a.createElement(S.a,{defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,a){return r.a.createElement("option",{key:a,value:e},e)}))))},N=t(299),T=t(300),A=t(301),B=t(255),V=t(25),M=t.n(V),R=t(65),z=t.n(R),U=t(26),F=t.n(U),W=function(e){var a=e.data,t=a.confirmed,n=a.recovered,c=a.deaths,o=a.lastUpdate;return t?r.a.createElement("div",{className:F.a.container},r.a.createElement(N.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(N.a,{item:!0,xs:12,md:3,component:T.a,className:z()(F.a.card,F.a.infected)},r.a.createElement(A.a,null,r.a.createElement(B.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(B.a,{variant:"h5",component:"h2"},r.a.createElement(M.a,{start:0,end:t.value,duration:2.75,separator:","})),r.a.createElement(B.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(B.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19."))),r.a.createElement(N.a,{item:!0,xs:12,md:3,component:T.a,className:z()(F.a.card,F.a.recovered)},r.a.createElement(A.a,null,r.a.createElement(B.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(B.a,{variant:"h5",component:"h2"},r.a.createElement(M.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(B.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(B.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19."))),r.a.createElement(N.a,{item:!0,xs:12,md:3,component:T.a,className:z()(F.a.card,F.a.deaths)},r.a.createElement(A.a,null,r.a.createElement(B.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(B.a,{variant:"h5",component:"h2"},r.a.createElement(M.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(B.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(B.a,{variant:"body2",component:"p"},"Number of deaths caused by COVID-19."))))):"Loading..."},q=t(122),H=t.n(q),J=function(e){var a=e.handleChartTypeChange;return r.a.createElement(_.a,{style:{backgroundColor:"darkcyan"},className:H.a.formControl,variant:"filled"},r.a.createElement(S.a,{defaultValue:"",onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:"barChart"},"Bar Chart"),r.a.createElement("option",{value:"pieChart"},"Pie Chart")))},G=t(303),K=t(304),L=t(302);function Q(){return r.a.createElement(B.a,{variant:"body2",style:{color:"#9E9E9E"},align:"center"},"Copyright \xa9 ",r.a.createElement(L.a,{color:"inherit",href:"https://tumundoenjava.blogspot.com/"},"Tu mundo en Java")," ",(new Date).getFullYear(),".")}var Y=Object(G.a)((function(e){return{footer:{backgroundColor:"#2f2f2f",marginTop:e.spacing(8),padding:e.spacing(6,0),width:"100%",color:"white"}}}));function Z(e){var a=Y(),t=e.description,n=e.title;return r.a.createElement("footer",{className:a.footer},r.a.createElement(K.a,{maxWidth:"lg"},r.a.createElement(B.a,{variant:"h6",align:"center",gutterBottom:!0},n),r.a.createElement(B.a,{variant:"subtitle1",align:"center",style:{color:"#F5F5F5"},component:"p"},t),r.a.createElement(Q,null)))}var X=t(23),$=t(310),ee=t(311),ae=t(308),te=t(309),ne=t(306),re=t(307),ce=t(254),oe=t(305),le=t(78),ie=t.n(le),ue=t(80),se=t.n(ue),de=t(79),me=t.n(de),pe=t(77),fe=t.n(pe),he=t(312),ve=t(313),be=t(314),ge=Object(G.a)({table:{minWidth:700},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}),Ee=Object(G.a)((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(2.5)}}}));function ye(e){var a=Ee(),t=Object(X.a)(),n=e.count,c=e.page,o=e.rowsPerPage,l=e.onChangePage;return r.a.createElement("div",{className:a.root},r.a.createElement(oe.a,{onClick:function(e){l(e,0)},disabled:0===c,"aria-label":"first page"},"rtl"===t.direction?r.a.createElement(fe.a,null):r.a.createElement(ie.a,null)),r.a.createElement(oe.a,{onClick:function(e){l(e,c-1)},disabled:0===c,"aria-label":"previous page"},"rtl"===t.direction?r.a.createElement(me.a,null):r.a.createElement(se.a,null)),r.a.createElement(oe.a,{onClick:function(e){l(e,c+1)},disabled:c>=Math.ceil(n/o)-1,"aria-label":"next page"},"rtl"===t.direction?r.a.createElement(se.a,null):r.a.createElement(me.a,null)),r.a.createElement(oe.a,{onClick:function(e){l(e,Math.max(0,Math.ceil(n/o)-1))},disabled:c>=Math.ceil(n/o)-1,"aria-label":"last page"},"rtl"===t.direction?r.a.createElement(ie.a,null):r.a.createElement(fe.a,null)))}var Ce=Object(G.a)({table:{minWidth:500}});function xe(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var Oe=[{id:"combinedKey",numeric:!1,disablePadding:!0,label:"Country"},{id:"confirmed",numeric:!0,disablePadding:!1,label:"Infected"},{id:"recovered",numeric:!0,disablePadding:!1,label:"Recovered"},{id:"deaths",numeric:!0,disablePadding:!1,label:"Deaths"}];function we(e){var a=e.classes,t=e.order,n=e.orderBy,c=e.onRequestSort;return r.a.createElement(ne.a,{style:{backgroundColor:"darkcyan"}},r.a.createElement(re.a,null,Oe.map((function(e){return r.a.createElement(ae.a,{key:e.id,align:e.numeric?"right":"center",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&t},r.a.createElement(be.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(o=e.id,function(e){c(e,o)})},e.label,n===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===t?"sorted descending":"sorted ascending"):null));var o}))))}var ke=function(e){var a=ge(),t=Object(n.useState)({}),c=Object(h.a)(t,2),o=(c[0],c[1]),l=e.data[0];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:a=e.sent,o(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var s=Ce(),d=r.a.useState(0),m=Object(h.a)(d,2),p=m[0],f=m[1],v=r.a.useState(5),b=Object(h.a)(v,2),g=b[0],E=b[1],y=0;l&&(y=g-Math.min(g,l.length-p*g));var x=r.a.useState("desc"),O=Object(h.a)(x,2),w=O[0],k=O[1],j=r.a.useState("confirmed"),_=Object(h.a)(j,2),S=_[0],D=_[1],P=r.a.useState([]),I=Object(h.a)(P,2),N=I[0],T=(I[1],l?r.a.createElement(te.a,{component:ce.a},r.a.createElement($.a,{className:s.table,"aria-label":"customized table"},r.a.createElement(we,{classes:a,order:w,orderBy:S,onRequestSort:function(e,a){k(S===a&&"asc"===w?"desc":"asc"),D(a)},rowCount:l.length}),r.a.createElement(ee.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(l,function(e,a){return"desc"===e?function(e,t){return xe(e,t,a)}:function(e,t){return-xe(e,t,a)}}(w,S)).slice(p*g,p*g+g).map((function(e,a){var t,n=(t=e.name,-1!==N.indexOf(t)),c="enhanced-table-checkbox-".concat(a);return r.a.createElement(re.a,{hover:!0,tabIndex:-1,key:e.uid,selected:n},r.a.createElement(ae.a,{component:"th",id:c,scope:"row"},e.combinedKey),r.a.createElement(ae.a,{align:"right"},r.a.createElement(M.a,{start:0,end:e.confirmed,duration:2.75,separator:","})),r.a.createElement(ae.a,{align:"right"},r.a.createElement(M.a,{start:0,end:e.recovered,duration:2.75,separator:","})),r.a.createElement(ae.a,{align:"right"},r.a.createElement(M.a,{start:0,end:e.deaths,duration:2.75,separator:","})))})),y>0&&r.a.createElement(re.a,{style:{height:53*y}},r.a.createElement(ae.a,{colSpan:6}))),r.a.createElement(he.a,null,r.a.createElement(re.a,null,r.a.createElement(ve.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:l.length,rowsPerPage:g,page:p,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:function(e,a){f(a)},onChangeRowsPerPage:function(e){E(parseInt(e.target.value,10)),f(0)},ActionsComponent:ye}))))):null);return r.a.createElement("div",{style:{width:"100%",maxWidth:"725px",marginTop:"30px"}},T)},je=t(81),_e=t.n(je),Se=t(123),De=t.n(Se),Pe=function(e){Object(p.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:{},country:"",chartType:"barChart",tableData:[]},e.handleCountryChange=function(){var a=Object(u.a)(i.a.mark((function a(t){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y(t);case 2:n=a.sent,e.setState({data:n,country:t});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e.handleChartTypeChange=function(){var a=Object(u.a)(i.a.mark((function a(t){var n,r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t,a.next=3,y(e.state.country);case 3:r=a.sent,e.setState({data:r,country:e.state.country,chartType:n});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),e}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:return a=e.sent,e.next=5,O();case 5:t=e.sent,f.a.initialize("UA-164693269-1"),this.setState({data:a,tableData:t}),f.a.pageview("/covid19-tracker");case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){f.a.pageview("/covid19-tracker");var e=this.state,a=e.data,t=e.country,n=e.chartType,c=e.tableData;return r.a.createElement("div",{className:_e.a.container},r.a.createElement("img",{className:_e.a.image,src:De.a,alt:"COVID-19"}),r.a.createElement(W,{data:a}),r.a.createElement(I,{handleCountryChange:this.handleCountryChange}),""!==this.state.country?r.a.createElement(J,{handleChartTypeChange:this.handleChartTypeChange}):"",r.a.createElement(j,{data:a,country:t,charType:n}),r.a.createElement(ke,{data:c}),r.a.createElement(Z,{description:"Information about COVID-19",title:"COVID-19 tracker by Eliezer Hern\xe1ndez"}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(Pe,null),document.getElementById("root"))},26:function(e,a,t){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},81:function(e,a,t){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}}},[[132,1,2]]]);
//# sourceMappingURL=main.f4dcc2fc.chunk.js.map