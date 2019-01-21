(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{149:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return h}),t.d(a,"StaticQueryContext",function(){return d}),t.d(a,"StaticQuery",function(){return f});var n=t(0),r=t.n(n),l=t(4),o=t.n(l),c=t(148),i=t.n(c);t.d(a,"Link",function(){return i.a}),t.d(a,"withPrefix",function(){return c.withPrefix}),t.d(a,"navigate",function(){return c.navigate}),t.d(a,"push",function(){return c.push}),t.d(a,"replace",function(){return c.replace}),t.d(a,"navigateTo",function(){return c.navigateTo});var s=t(160),u=t.n(s);t.d(a,"PageRenderer",function(){return u.a});var m=t(48);t.d(a,"parsePath",function(){return m.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(e,a,t){"use strict";t.d(a,"a",function(){return i}),t.d(a,"b",function(){return s});var n=t(217),r=t.n(n),l=t(218),o=t.n(l);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var i=c.rhythm,s=c.scale},160:function(e,a,t){var n;e.exports=(n=t(175))&&n.default||n},165:function(e,a,t){"use strict";t(32);var n=t(7),r=t.n(n),l=t(0),o=t.n(l),c=t(149),i=t(157),s=(t(221),t(222),function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e,a,t=this.props,n=t.location,r=t.children;return e="/blog/"===n.pathname?o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-2"},o.a.createElement("img",{src:"icons/pythonicon.png",style:{width:"100%"},alt:"Python Icon"})),o.a.createElement("div",{className:"col-lg-7"},o.a.createElement("h1",{style:Object.assign({},Object(i.b)(2.1),{marginBottom:Object(i.a)(1.5),marginTop:0,color:"#ffffff"})},"Life Of Py ")),o.a.createElement("div",{className:"col-lg-3",style:{color:"#fff"}},"PyMavs Blog"))):o.a.createElement("h1",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(i.a)(1)}},o.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"#fff"},to:"/"},"Life of Py")),a=o.a.createElement("div",null,o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},"About"),o.a.createElement("div",{className:"card-body"},"Blog for PyMavs organization.",o.a.createElement("br",null),o.a.createElement("br",null),"PyMavs is a new organization at the University of Texas at Arlington that focuses primary in Python. We pride ourselves in developing each other as better python programmers.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("a",{href:"https://pymavs.github.io"},"Learn More!"))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},"Contact"),o.a.createElement("div",{className:"card-body"},"PyMavs at the University of Texas at Arlington",o.a.createElement("br",null),o.a.createElement("span",{style:{fontSize:"80%"}},"Arlington, Texas"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("a",{href:"https://www.facebook.com/pymavs",target:"_blank"},"facebook"),o.a.createElement("br",null),o.a.createElement("a",{href:"https://pymavs.slack.com/join/shared_invite/enQtNDM5MDAxMTgzODEwLTE5ZDk1ZDAyZTIzYmY2MjcyNGVhODZlNTRjYTE2OTZlMjc3ODljZjMzOTU2N2E3MjkyMDA5ZTI2Y2NhZDMwYTE",target:"_blank"},"slack"),o.a.createElement("br",null),o.a.createElement("a",{href:"https://github.us18.list-manage.com/subscribe?u=ca60262c67543f2faeb7f0fc8&id=cb9f43de90",target:"_blank"},"mailing-list"),o.a.createElement("br",null),o.a.createElement("a",{href:"https://github.com/PyMavs/",target:"_blank"},"github")))),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(50),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-9"},e,o.a.createElement("br",null),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"jumbotron",style:{paddingTop:"2%",paddingBottom:"2%"}},r))),o.a.createElement("div",{className:"col-lg-3"},o.a.createElement("div",{style:{marginTop:Object(i.a)(1)}},a))))},a}(o.a.Component));a.a=s},175:function(e,a,t){"use strict";t.r(a);t(32);var n=t(0),r=t.n(n),l=t(4),o=t.n(l),c=t(68),i=t(2),s=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=s},221:function(e,a,t){},222:function(e,a,t){}}]);
//# sourceMappingURL=1-f94e99b29ab1c57199d4.js.map