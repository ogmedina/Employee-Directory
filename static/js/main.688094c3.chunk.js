(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},47:function(e,t,s){},66:function(e,t,s){},70:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s.n(r),c=s(14),i=s.n(c),a=(s(44),s(45),s(2));var o=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"hero text-center",children:e.children}),Object(a.jsx)("div",{className:"firstLine"}),Object(a.jsx)("div",{className:"secondLine"}),Object(a.jsx)("div",{className:"thirdLine"})]})},l=s(35),j=s(36),d=s(37),h=(s(47),s(30)),u=s(31),b=s(39),m=s(38),O=s(32),f=s.n(O),x=function(){return f.a.get("https://randomuser.me/api/?results=20")},p=s(33),v=(s(66),s(34)),y=s(12);var C=function(e){return Object(a.jsx)("div",{children:Object(a.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Employee"}),Object(a.jsx)("th",{children:Object(a.jsxs)(v.a,{variant:"success",id:"dropdown-basic-button",title:"Name",children:[Object(a.jsx)(y.a.Item,{onClick:e.sortAlphaUsers,children:"First Name"}),Object(a.jsx)(y.a.Item,{onClick:e.sortReversedAlphaUsers,children:"Last Name"})]})}),Object(a.jsx)("th",{children:"Address"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{children:"Cell Phone"}),Object(a.jsx)("th",{children:"Home Phone"})]})}),Object(a.jsx)("tbody",{children:e.employee.map((function(e){var t=e.login,s=e.name,r=e.picture,n=e.email,c=e.location,i=e.cell,o=e.phone;return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:r.large,alt:"employee"})}),Object(a.jsxs)("td",{children:[s.first," ",s.last]}),Object(a.jsxs)("td",{children:[c.city,", ",c.state," ",c.postcode]}),Object(a.jsx)("td",{children:n}),Object(a.jsx)("td",{children:i}),Object(a.jsx)("td",{children:o})]},t.uuid)}))})]})})},g=(s(70),function(e){Object(b.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(h.a)(this,s);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={employees:[],search:"",filterResult:[]},e.searchEmployees=function(){x().then((function(t){return e.setState({employees:t.data.results,filterResult:t.data.results})})).catch((function(e){return console.log(e)}))},e.activeSearch=function(t){e.setState({search:t.target.value},(function(){e.setState({filterResult:e.state.employees.filter((function(t){return t.name.first.toLowerCase().includes(e.state.search.toLowerCase())}))})}))},e.comparison=function(e,t){var s=e.name.first.toLowerCase(),r=t.name.first.toLowerCase(),n=0;return s>r?n=1:s<r&&(n=-1),n},e.sortUsers=function(){e.setState({filterResult:e.state.filterResult.sort(e.comparison)})},e.reversedComparison=function(e,t){var s=e.name.last.toLowerCase(),r=t.name.last.toLowerCase(),n=0;return s>r?n=1:s<r&&(n=-1),n},e.sortUsersReversed=function(){e.setState({filterResult:e.state.filterResult.sort(e.reversedComparison)})},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.searchEmployees()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"searchBar",children:["Search:",Object(a.jsx)("input",{type:"text",placeholder:"First Name",value:this.state.search,onChange:this.activeSearch})]}),Object(a.jsx)(C,{sortAlphaUsers:this.sortUsers,sortReversedAlphaUsers:this.sortUsersReversed,employee:this.state.filterResult})]})}}]),s}(r.Component));var L=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(o,{children:Object(a.jsx)("h1",{children:"Employee Directory"})}),Object(a.jsx)(l.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)(d.a,{sm:!0,children:Object(a.jsx)(g,{})})})})]})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,76)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),r(e),n(e),c(e),i(e)}))};s(71);i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),R()}},[[72,1,2]]]);
//# sourceMappingURL=main.688094c3.chunk.js.map