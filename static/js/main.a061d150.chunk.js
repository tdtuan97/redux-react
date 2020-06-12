(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){"use strict";var a=n(8),r=Object(a.a)();t.a=r},20:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return u});var a=n(9),r=n(0),c=n(4),o=n(5);function i(){var e=Object(c.e)();return{count:Object(c.f)(function(e){return e.examples.count}),counterPlusOne:Object(r.useCallback)(function(){return e({type:o.b})},[e])}}function u(e,t){switch(t.type){case o.b:return Object(a.a)({},e,{count:e.count+1});default:return e}}},21:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return u});var a=n(9),r=n(0),c=n(4),o=n(5);function i(){var e=Object(c.e)();return{count:Object(c.f)(function(e){return e.examples.count}),counterMinusOne:Object(r.useCallback)(function(){return e({type:o.a})},[e])}}function u(e,t){switch(t.type){case o.a:return Object(a.a)({},e,{count:e.count-1});default:return e}}},22:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return u});var a=n(9),r=n(0),c=n(4),o=n(5);function i(){var e=Object(c.e)();return{count:Object(c.f)(function(e){return e.examples.count}),counterReset:Object(r.useCallback)(function(){return e({type:o.c})},[e])}}function u(e,t){switch(t.type){case o.c:return Object(a.a)({},e,{count:0});default:return e}}},23:function(e,t,n){"use strict";n.d(t,"b",function(){return l}),n.d(t,"a",function(){return s});var a=n(9),r=n(43),c=n.n(r),o=n(0),i=n(4),u=n(5);function l(){var e=Object(i.e)(),t=Object(i.f)(function(e){return{redditList:e.examples.redditList,fetchRedditListPending:e.examples.fetchRedditListPending,fetchRedditListError:e.examples.fetchRedditListError}},i.d),n=t.redditList,a=t.fetchRedditListPending,r=t.fetchRedditListError;return{redditList:n,fetchRedditList:Object(o.useCallback)(function(){e(function(e){return e({type:u.d}),new Promise(function(t,n){c.a.get("http://www.reddit.com/r/reactjs.json").then(function(n){e({type:u.g,data:n.data}),t(n)},function(t){e({type:u.f,data:{error:t}}),n(t)})})})},[e]),fetchRedditListPending:a,fetchRedditListError:r,dismissFetchRedditListError:Object(o.useCallback)(function(){e({type:u.e})},[e])}}function s(e,t){switch(t.type){case u.d:return Object(a.a)({},e,{fetchRedditListPending:!0,fetchRedditListError:null});case u.g:return Object(a.a)({},e,{redditList:t.data.data.children,fetchRedditListPending:!1,fetchRedditListError:null});case u.f:return Object(a.a)({},e,{fetchRedditListPending:!1,fetchRedditListError:t.data.error});case u.e:return Object(a.a)({},e,{fetchRedditListError:null});default:return e}}},39:function(e,t,n){e.exports=n.p+"static/media/rekit-react.5c11e8db.png"},40:function(e,t,n){"use strict";(function(e){var a=n(0),r=n.n(a),c=n(4),o=n(1),i=n(16),u=n(30),l=n(46),s=n(45),d=n(15);function m(e,t){var n=[];return e.forEach(function(e){return function e(t,a){var c;if(c=(c=/^\//.test(t.path)?t.path:"".concat(a,"/").concat(t.path)).replace(/\/+/g,"/"),t.component&&t.childRoutes){var i=m(t.childRoutes,c);n.push(r.a.createElement(o.a,{key:c,render:function(e){return r.a.createElement(t.component,e,i)},path:c}))}else t.component?n.push(r.a.createElement(o.a,{key:c,component:t.component,path:c,exact:!0})):t.childRoutes&&t.childRoutes.forEach(function(t){return e(t,c)})}(e,t)}),r.a.createElement(o.c,null,n)}Object(u.setConfig)({logLevel:"debug"}),t.a=Object(u.hot)(e)(function(){var e=m(s.a,"/");return r.a.createElement(c.a,{store:l.a},r.a.createElement(i.a,{history:d.a},e))})}).call(this,n(32)(e))},45:function(e,t,n){"use strict";var a=n(9),r=n(47),c=n(0),o=n.n(c);var i=n(14);var u={path:"",childRoutes:[{path:"welcome-page",component:function(){return o.a.createElement("div",{className:"home-welcome-page"},o.a.createElement("header",{className:"app-header"},o.a.createElement("img",{src:n(39),className:"rekit-logo",alt:"logo"}),o.a.createElement("h1",{className:"app-title"},"Welcome to Rekit React")),o.a.createElement("div",{className:"app-intro"},o.a.createElement("h3",null,"To get started:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Edit component ",o.a.createElement("code",null,"src/features/home/WelcomePage.js")," for this page."),o.a.createElement("li",null,"Edit component ",o.a.createElement("code",null,"src/features/home/App.js")," for the root container layout."),o.a.createElement("li",null,"To see examples, access:\xa0",o.a.createElement(i.a,{to:"/examples"},"/examples")))))},isIndex:!0}]};function l(){return o.a.createElement("div",{className:"examples-side-panel"},o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.a,{to:"/examples"},"Welcome")),o.a.createElement("li",null,o.a.createElement(i.a,{to:"/examples/counter"},"Counter Demo")),o.a.createElement("li",null,o.a.createElement(i.a,{to:"/examples/reddit"},"Reddit API Demo")),o.a.createElement("li",null,o.a.createElement(i.a,{to:"/"},"Back to start page"))),o.a.createElement("div",{className:"memo"},"This is a Rekit feature that contains some examples for you to quick learn how Rekit works. To remove it just delete the feature."))}var s=n(23),d=n(20),m=n(21),f=n(22);var h={path:"examples",component:function(e){var t=e.children;return o.a.createElement("div",{className:"examples-layout"},o.a.createElement(l,null),o.a.createElement("div",{className:"examples-page-container"},t))},childRoutes:[{path:"",component:function(){return o.a.createElement("div",{className:"examples-welcome-page"},o.a.createElement("a",{href:"http://github.com/supnate/rekit"},o.a.createElement("img",{src:n(39),className:"app-logo",alt:"logo"})),o.a.createElement("h1",null,"Welcome to Rekit!"),o.a.createElement("p",null,"Contratulations! You have created your Rekit React app successfully! Seeing this page means everything works well now."),o.a.createElement("p",null,"This is an example feature showing about how to layout the container, how to use Redux and React Router. If you want to remove all sample code, just delete the feature from Rekit Studio. Alternatively you can run\xa0",o.a.createElement("code",null,'"rekit remove feature examples"')," via command line under the project folder."),o.a.createElement("p",null,"To learn more about how to get started, you can visit:"," ",o.a.createElement("a",{href:"http://docs.rekit.org/app-types/rekit-react"},"Get started")))},isIndex:!0},{path:"counter",component:function(){var e=Object(d.b)(),t=e.count,n=e.counterPlusOne,a=Object(m.b)().counterMinusOne,r=Object(f.b)().counterReset;return o.a.createElement("div",{className:"examples-counter-page"},o.a.createElement("h1",null,"Counter"),o.a.createElement("p",null,"This is simple counter demo to show how Redux sync actions work."),o.a.createElement("button",{className:"btn-minus-one",onClick:a,disabled:0===t},"-"),o.a.createElement("span",null,t),o.a.createElement("button",{className:"btn-plus-one",onClick:n},"+"),o.a.createElement("button",{className:"btn-reset",onClick:r},"Reset"))}},{path:"reddit",component:function(){var e=Object(s.b)(),t=e.redditList,n=e.fetchRedditList,a=e.fetchRedditListPending,r=e.fetchRedditListError;return o.a.createElement("div",{className:"examples-reddit-list-page"},o.a.createElement("h1",null,"Reddit API Usage"),o.a.createElement("p",null,"This demo shows how to use Redux async actions to fetch data from Reddit's REST API."),o.a.createElement("button",{className:"btn-fetch-reddit",disabled:a,onClick:n},a?"Fetching...":"Fetch reactjs topics"),r&&o.a.createElement("div",{className:"fetch-list-error"},"Failed to load: ",r.toString()),t.length>0?o.a.createElement("ul",{className:"examples-reddit-list"},t.map(function(e){return o.a.createElement("li",{key:e.data.id},o.a.createElement("a",{href:e.data.url},e.data.title))})):o.a.createElement("div",{className:"no-items-tip"},"No items yet."))}}]},p=n(44),E=n.n(p);function v(e){var t=e.children;return o.a.createElement("div",{className:"authentication-layout"},o.a.createElement("div",{className:"authentication-page-container"},t))}var R=[{path:"login",component:v,childRoutes:[{path:"",component:function(){return o.a.createElement("div",{className:"login-page"},"Login")},isIndex:!0}]},{path:"register",component:v,childRoutes:[{path:"",component:function(){return o.a.createElement("div",{className:"register-page"},"Register")},isIndex:!0}]}],g=[{path:"/",component:function(e){var t=e.children;return o.a.createElement("div",{className:"root-app"},o.a.createElement("div",{className:"page-container"},t))},childRoutes:[].concat([u,{path:"common",name:"Common",childRoutes:[]},h],Object(r.a)(R),[{path:"*",name:"Page not found",component:function(){return o.a.createElement("div",{className:"common-page-not-found"},"Page not found.")}}]).filter(function(e){return e.component||e.childRoutes&&e.childRoutes.length>0})}];g.forEach(function e(t){if(t.childRoutes&&t.childRoutes.length){var n=E.a.find(t.childRoutes,function(e){return e.isIndex});if(n){var r=Object(a.a)({},n);r.path="",r.exact=!0,r.autoIndexRoute=!0,t.childRoutes.unshift(r)}t.childRoutes.forEach(e)}});t.a=g},46:function(e,t,n){"use strict";var a=n(13),r=n(42),c=n(38),o=n(15),i=n(16),u={},l=[];var s={},d=[];var m={count:0,redditList:[],fetchRedditListPending:!1,fetchRedditListError:null},f=n(20),h=n(21),p=n(22),E=n(23),v=[f.a,h.a,p.a,E.a];var R={router:Object(i.b)(o.a),home:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;return n.type,e=t,l.reduce(function(e,t){return t(e,n)},e)},common:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,n=arguments.length>1?arguments[1]:void 0;return n.type,e=t,d.reduce(function(e,t){return t(e,n)},e)},examples:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;return n.type,e=t,v.reduce(function(e,t){return t(e,n)},e)}},g=Object(a.c)(R),b=Object(c.a)(o.a),L=[r.a,b],O=function(e){return e};var j;t.a=Object(a.e)(g,j,Object(a.d)(a.a.apply(void 0,L),O))},48:function(e,t,n){e.exports=n(79)},5:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return o}),n.d(t,"g",function(){return i}),n.d(t,"f",function(){return u}),n.d(t,"e",function(){return l});var a="EXAMPLES_COUNTER_PLUS_ONE",r="EXAMPLES_COUNTER_MINUS_ONE",c="EXAMPLES_COUNTER_RESET",o="EXAMPLES_FETCH_REDDIT_LIST_BEGIN",i="EXAMPLES_FETCH_REDDIT_LIST_SUCCESS",u="EXAMPLES_FETCH_REDDIT_LIST_FAILURE",l="EXAMPLES_FETCH_REDDIT_LIST_DISMISS_ERROR"},77:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),i=n(40);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(77);o.a.render(r.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,2,1]]]);
//# sourceMappingURL=main.a061d150.chunk.js.map