webpackJsonp([79611799117203,60335399758886],{146:function(e,t){e.exports={layoutContext:{}}},260:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},r=a(2),c=l(r),u=a(268),o=l(u),i=a(146),s=l(i);t.default=function(e){return c.default.createElement(o.default,n({},e,s.default))},e.exports=t.default},59:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),c=function(e){var t=function(){var t=e.config.userLinks,a=e.labeled;return t.map(function(e){return r.default.createElement("a",{target:"_blank",className:"navbar-item",href:e.url,key:e.label},r.default.createElement("span",{class:"icon is-small"},r.default.createElement("i",{className:e.iconClassName})),r.default.createElement("span",null,a?e.label:""))})},a=e.config.userLinks;return a?r.default.createElement(r.default.Fragment,null,t()):null};t.default=c,e.exports=t.default},571:function(e,t){},362:function(e,t){},268:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=a(2),o=l(u),i=a(25),s=l(i),f=a(14),d=l(f),m=a(42),p=l(m),E=a(59),b=l(E);a(362),a(571);var h=function(e){function t(){return n(this,t),r(this,e.apply(this,arguments))}return c(t,e),t.prototype.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=d.default.pathPrefix?d.default.pathPrefix:"/",a=this.props.location.pathname.replace(t,"").replace("/",""),l="";if(""===a)l="Home";else if("tags/"===a)l="Tags";else if("categories/"===a)l="Categories";else if("about/"===a)l="About";else if(a.indexOf("posts"))l="Article";else if(a.indexOf("tags/")){var n=a.replace("tags/","").replace("/","").replace("-"," ");l="Tagged in "+e(n)}else if(a.indexOf("categories/")){var r=a.replace("categories/","").replace("/","").replace("-"," ");l=""+e(r)}return l},t.prototype.render=function(){var e=this.props.children;return o.default.createElement("div",null,o.default.createElement(s.default,null,o.default.createElement("title",null,d.default.siteTitle+" |  "+this.getLocalTitle()),o.default.createElement("meta",{name:"description",content:d.default.siteDescription})),o.default.createElement("section",{className:"hero is-primary is-bold"},o.default.createElement("div",{className:"hero-head"},o.default.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},o.default.createElement("div",{className:"navbar-brand"},o.default.createElement(p.default,{className:"navbar-item",to:"/"},"Home"),o.default.createElement(b.default,{config:d.default})))),o.default.createElement("div",{className:"hero-body"},o.default.createElement("div",{className:"container"},o.default.createElement("h1",{className:"title"},d.default.siteTitle),o.default.createElement("h2",{className:"subtitle"},d.default.siteDescription))),o.default.createElement("div",{className:"hero-foot"},o.default.createElement("nav",{className:"tabs"},o.default.createElement("div",{className:"container"},o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(p.default,{to:"/"},"Blog")),o.default.createElement("li",null,o.default.createElement(p.default,{to:"/about"},"About"))))))),e(),o.default.createElement("footer",{className:"footer"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"content has-text-centered"},o.default.createElement("p",null,"Website content is licensed ",o.default.createElement("a",{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}," CC BY NC SA 4.0")," Austin Lanari. Website code is licensed ",o.default.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),".")))))},t}(o.default.Component);t.default=h,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-jsx-d56b8608e3d2dfe0b3de.js.map