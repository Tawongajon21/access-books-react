(this.webpackJsonpapps=this.webpackJsonpapps||[]).push([[0],{33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s(19),c=s.n(a),n=s(4),o=s(7),r=s(2),l=s(0),d=function(){var e=Object(i.useState)(!0),t=Object(n.a)(e,2),s=t[0],a=t[1];return s?Object(l.jsxs)("ul",{className:"phone-ul-nav",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{id:"phone-nav",className:"btn-links",to:"/books",onClick:function(){return a(!1)},children:"Books"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{id:"phone-nav",className:"btn-links",to:"/contribute",onClick:function(){return a(!1)},children:"Contribute"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{id:"phone-nav",className:"btn-links",to:"/about",onClick:function(){return a(!1)},children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{id:"phone-nav",className:"btn-links",to:"/contact",onClick:function(){return a(!1)},children:"Contact"})})]}):""},u=s(22),h=function(){var e=Object(o.useState)(!1),t=Object(n.a)(e,2),s=t[0],i=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("nav",{children:[Object(l.jsx)("header",{children:Object(l.jsx)("h2",{children:Object(l.jsx)(r.b,{to:"/",style:{textDecoration:"none",color:"#ff48a5"},children:"Access Books"})})}),Object(l.jsxs)("ul",{className:"ul-nav",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{className:"btn-links",to:"/books",children:"Books"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{className:"btn-links",to:"/contribute",children:"Contribute"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{className:"btn-links",to:"/about",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#header-footer-center",className:"btn-links",to:"/contact",children:"Contact"})})]}),Object(l.jsx)("div",{className:"div-phone-nav",children:Object(l.jsx)("button",{type:"button",className:"btn-menu",onClick:function(){return i(!0)},children:Object(l.jsx)(u.a,{})})})]}),s?Object(l.jsx)(d,{}):""]})},j=s(11),m=s(12),b=s(14),p=s(13),g=function(e){Object(b.a)(s,e);var t=Object(p.a)(s);function s(e){var i;return Object(j.a)(this,s),(i=t.call(this,e)).state={activeSuggestions:0,filteredSuggestions:[],showSuggestions:!1,userInput:""},i}return Object(m.a)(s,[{key:"render",value:function(){var e,t=this,s=this.onChange,i=this.onClick,a=this.onKeyDown,c=this.state,n=c.filteredSuggestions,o=c.showSuggestions,d=c.userInput;return s=function(e){var s=t.props.suggestions,i=e.currentTarget.value,a=s.filter((function(e){return e.toLowerCase().indexOf(i.toLowerCase())>-1}));t.setState({activeSuggestion:0,filteredSuggestions:a,showSuggestions:!0,userInput:e.currentTarget.value})},a=function(e){var s=t.state,i=s.activeSuggestion,a=s.filteredSuggestions;if(13===e.keyCode)t.setState({activeSuggestion:0,showSuggestions:!1,userInput:a[i]});else if(38===e.keyCode){if(0===i)return;t.setState({activeSuggestion:i-1})}else if(40===e.keyCode){if(i-1===a.length)return}else if(40===e.keyCode){if(i-1===a.length)return;t.setState({activeSuggestion:i+1})}},o&&d&&(e=n.length?Object(l.jsx)("div",{className:"suggestions-div",children:n.map((function(e,t){return Object(l.jsx)("p",{onClick:i,className:"p-suggestion",children:Object(l.jsxs)(r.b,{to:"books/".concat(e),className:"suggestions-a",children:["     ",e," "]})},e)}))}):Object(l.jsx)("div",{className:"no-suggestions",children:Object(l.jsx)("em",{children:"No books matching your search !"})})),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"div-search-component",children:[Object(l.jsx)("input",{type:"text",name:"search-text",placeholder:"search for any book",onChange:s,onKeyDown:a,value:d,className:"input"}),e]})})}}]),s}(i.Component);g.defaultProperty={suggestions:[]};var O=s.p+"static/media/deepWork.3b35695d.pdf",x=s.p+"static/media/growingInFath.aecde50f.pdf",f=s.p+"static/media/rightAndGoodThinking.71b06129.pdf",v=s.p+"static/media/triumphantChurch.8605edcd.pdf",N=s.p+"static/media/food.3c873c47.pdf",k=s.p+"static/media/expel.333df57a.pdf",y=s.p+"static/media/tongues.d6488d7c.pdf",S=s.p+"static/media/visions.8462cf1a.pdf",C=s.p+"static/media/Growing.7384878f.pdf",w=s.p+"static/media/react.3d5a0cac.pdf",L=s.p+"static/media/vol1.7f9edf60.pdf",M=s.p+"static/media/outliers.cb58ca7e.pdf",T=s.p+"static/media/node.43cf78af.pdf",E=s.p+"static/media/deepwork.2b61cb88.webp",I=s.p+"static/media/faith.cca7af4b.webp",R=s.p+"static/media/rightandwrong.4969d873.webp",B=s.p+"static/media/triumphant .75a62528.webp",A=s.p+"static/media/photo-twenty.6799bf69.webp",D=s.p+"static/media/node.b9ca9914.webp",F=[{id:Math.random().toString(),name:"Deep Work",author:"Cal Newport",file:O,category:"Motivation",featured:!1,desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum porro cupiditate delectus nostrum perferendis neque explicabo doloribus eveniet, quod facere!",photo:E,slug:"Deep Work"},{id:Math.random().toString(),name:"Growing In Faith ",slug:"Growing In Faith ",author:"Kenneth E Haggins",file:x,category:"Christianity",featured:!0,photo:I,desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis facilis dolores cumque saepe sunt? Sint."},{id:Math.random().toString(),name:"Right and Good Thinking ",slug:"Right and Good Thinking ",author:"Kenneth E Haggins",file:f,category:"Christianity",featured:!0,photo:R,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, minima."},{id:Math.random().toString(),name:"Triumphant Church ",slug:"Triumphant Church ",author:"Kenneth E Haggins",file:v,category:"Christianity",featured:!0,photo:B,desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, minima."},{id:Math.random().toString(),name:"Healthy Food Devotions",slug:"Healthy Food Devotions",author:"Kenneth E Hagins",category:"Christianity",featured:!1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!",file:N},{id:Math.random().toString(),name:"They Shall Expel Demons",slug:"They Shall Expel Demons",author:"Derek Prince",category:"Christianity",featured:!1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!",file:k},{id:Math.random().toString(),name:"Tongues Beyond the Upper Room",slug:"Tongues Beyond the Upper Room",author:"Kenneth E. Haggins",category:"Christianity",featured:!1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!",file:y},{id:Math.random().toString(),name:"I Believe In Visions",slug:"I Believe In Visions",author:"Kenneth E. Haggins",category:"Christianity",featured:!1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!",file:S},{id:Math.random().toString(),name:"Growing Up Spiritually ",slug:"Growing Up Spiritually ",author:"Kenneth E. Haggins",category:"Christianity",featured:!1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!",file:C},{id:Math.random().toString(),name:"React Fundamentals ,Redux,React Hooks",slug:"React Fundamentals ,Redux,React Hooks",author:"Alex Banks and Eve Porcello",category:"Programming",featured:!0,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!",file:w},{id:Math.random().toString(),name:"The Logistics Ecosystem Report Volume 1",slug:"The Logistics Ecosystem Report Volume 1",author:"Gugulethu Siso",category:"Journal",featured:!0,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!",file:L},{id:Math.random().toString(),name:"The Outliers The Story of Success",slug:"The Outliers The Story of Success",author:"Malcolm Gladwell  ",category:"Motivation",featured:!0,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!",file:M,photo:A},{id:Math.random().toString(),name:"Programming Javascript Applications ",slug:"Programming Javascript Applications",author:"Eric Elliot  ",category:"Programming",featured:!1,desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis eum aperiam facilis temporibus mollitia!",file:T,photo:D}],q=Object(o.createContext)(),H=(Object(o.createContext)(),function(e){var t=Object(i.useState)(F),s=Object(n.a)(t,2),a=s[0],c=s[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(q.Provider,{value:[a,c],getBook:function(e){return a.find((function(t){return t.slug===e}))},children:e.children})})}),P=s.p+"static/media/default.9097e99a.webp",V=function(){var e=Object(o.useContext)(q),t=Object(n.a)(e,1)[0].filter((function(e){return!0===e.featured}));return Object(l.jsxs)("div",{className:"featured-books",children:[Object(l.jsx)("header",{className:"header-featured-books",children:Object(l.jsx)("h2",{className:"h2-featured-books",children:"Featured Books"})}),Object(l.jsx)("section",{className:"section-featured-book",children:t.map((function(e){var t=e.id,s=e.author,i=e.category,a=e.name,c=e.photo,n=e.desc,o=e.slug;return Object(l.jsx)(r.b,{to:"books/".concat(o),style:{textDecoration:"none",color:"#000"},children:Object(l.jsxs)("article",{className:"single-book",children:[Object(l.jsx)("div",{className:"photo-container",children:Object(l.jsx)("img",{src:c||P,alt:"book",className:"book-photo",width:"200",height:"200"})}),Object(l.jsxs)("main",{className:"main-right",children:[Object(l.jsx)("header",{className:"header-h3-book",children:Object(l.jsx)("h3",{children:a})}),Object(l.jsx)("p",{className:"p-h3-author",children:Object(l.jsxs)("h4",{children:["   ",s]})}),Object(l.jsx)("section",{className:"section-h3-desc",children:Object(l.jsx)("p",{className:"p-desc",children:n})}),Object(l.jsx)("div",{className:"div-category",children:Object(l.jsx)("p",{children:i})}),Object(l.jsx)("div",{className:"read-more",children:Object(l.jsx)("p",{className:"p-read-more",children:Object(l.jsx)("a",{href:"#!",children:"Read More"})})})]})]})},t)}))})]})},G=function(){var e=Object(i.useContext)(q),t=Object(n.a)(e,1)[0].map((function(e){return e.name}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"hero-part",children:Object(l.jsxs)("div",{className:"hero-text",children:[Object(l.jsx)("section",{className:"section-h2",children:Object(l.jsx)("h2",{children:"Access Books"})}),Object(l.jsx)("main",{className:"main-lorem-text",children:Object(l.jsx)("p",{className:"p-main-lorem",children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, ullam quos et harum repudiandae quae cum ratione dignissimos itaque neque?"})}),Object(l.jsxs)("div",{className:"search-container",children:[Object(l.jsx)(g,{suggestions:t}),Object(l.jsx)("div",{children:Object(l.jsx)("label",{})})]})]})}),Object(l.jsx)(V,{})]})},K=function(){return Object(l.jsxs)("footer",{children:[Object(l.jsx)("header",{id:"header-footer-center",className:"header-footer",children:Object(l.jsx)("h3",{children:"Access Books"})}),Object(l.jsxs)("div",{className:"div-headers",children:[Object(l.jsxs)("header",{className:"header-footer",children:[Object(l.jsx)("h3",{children:"Main Links"}),Object(l.jsxs)("div",{className:"ul-footer-a",children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/books",className:"footer-a",children:"Books"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/contribute",className:"footer-a",children:"Contribute"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/about",className:"footer-a",children:"About"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.b,{to:"/contact",className:"footer-a",children:"Contact"})})]})]}),Object(l.jsxs)("header",{className:"header-footer",children:[Object(l.jsx)("h3",{children:"Social Links"}),Object(l.jsxs)("div",{className:"socials-ul",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"!#",className:"footer-socials",children:"Facebook"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"!#",className:"footer-socials",children:"Twitter"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"!#",className:"footer-socials",children:"LinkedIn"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"!#",className:"footer-socials",children:"Gmail"})})]})]})]})]})},J=function(e){Object(b.a)(s,e);var t=Object(p.a)(s);function s(e){var i;return Object(j.a)(this,s),(i=t.call(this,e)).state={activeSuggestions:0,filteredSuggestions:[],showSuggestions:!1,userInput:""},i}return Object(m.a)(s,[{key:"render",value:function(){var e,t=this,s=this.onChange,i=this.OnKeydown,a=this.state,c=a.filteredSuggestions,n=a.showSuggestions,o=a.userInput;return s=function(e){var s=t.props.suggestions,i=e.currentTarget.value,a=s.filter((function(e){return e.toLowerCase().indexOf(i.toLowerCase())>-1}));console.log(a),t.setState({activeSuggestion:0,filteredSuggestions:a,showSuggestions:!0,userInput:e.currentTarget.value})},i=function(e){var s=t.state,i=s.activeSuggestion,a=s.filteredSuggestions;if(13===e.keyCode)t.setState({activeSuggestion:0,showSuggestions:!1,userInput:a[i]});else if(38===e.keyCode){if(0===i)return;t.setState({activeSuggestion:i-1})}else if(40===e.keyCode){if(i-1===a.length)return;if(i-1===a.length)return}},n&&o&&(e=c.length?Object(l.jsx)("div",{className:"suggestions-div",children:c.map((function(e){return Object(l.jsx)("p",{className:"p-suggestion",children:Object(l.jsx)(r.b,{to:"books/".concat(e),className:"suggestions-a",children:e})})}))}):Object(l.jsx)("div",{className:"no-suggestions-div",children:Object(l.jsx)("p",{className:"no-suggestions-p",children:"No Books that are matching your search criteria."})})),Object(l.jsxs)("div",{className:"div-search-component",children:[Object(l.jsx)("input",{type:"text",onChange:s,onKeyDown:i,value:o,className:"input"}),e]})}}]),s}(i.Component);J.defaulProperty={suggestions:[]};var U=function(e){var t=e.name,s=e.author,i=e.photo,a=e.desc,c=e.slug;return Object(l.jsx)(r.b,{to:"books/".concat(c),className:"link-single",children:Object(l.jsx)("div",{className:"featured-books",children:Object(l.jsxs)("article",{className:"single-book",children:[Object(l.jsx)("div",{className:"photo-container",children:Object(l.jsx)("img",{src:i||P,className:"book-photo",alt:"book",width:"200",height:"200"})}),Object(l.jsxs)("main",{className:"main-right",children:[Object(l.jsx)("header",{className:"header-h3-book",children:Object(l.jsx)("h3",{children:t})}),Object(l.jsx)("p",{className:"p-h3-author",children:Object(l.jsxs)("h4",{children:["   ",s]})}),Object(l.jsx)("section",{className:"section-h3-desc",children:Object(l.jsx)("p",{className:"p-desc",children:a})}),Object(l.jsx)("div",{className:"read-more",children:Object(l.jsx)("p",{className:"p-read-more",children:Object(l.jsx)("a",{href:"#!",children:"Read More"})})})]})]})})})},W=function(){var e=Object(o.useContext)(q),t=Object(n.a)(e,1)[0],s=t.filter((function(e){return"Christianity"===e.category})),i=t.filter((function(e){return"Motivation"===e.category})),a=t.filter((function(e){return"Journal"===e.category})),c=t.filter((function(e){return"Programming"===e.category})),d=t.map((function(e){return e.name})),u=t.map((function(e){return e.photo})),h=t.map((function(e){return e.author}));return Object(l.jsxs)("div",{className:"books-component-part",children:[Object(l.jsx)("center",{children:Object(l.jsx)("p",{children:"Leaders are readers.Here is an opportunity to learn and gain knowledge from an updated and huge book library.Easy to use website.Grab a book and enjoy!"})}),Object(l.jsxs)("section",{className:"section-autocomplete",children:[Object(l.jsx)("label",{className:"label-search-here",children:"Search for books here"}),Object(l.jsx)(J,{suggestions:d,searchAuthor:h,searchPhoto:u})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("header",{className:"header-category",children:Object(l.jsx)("h3",{children:"Christianity"})}),Object(l.jsx)("section",{className:"section-featured-book",children:s.map((function(e){var t=e.id,s=e.name,i=e.author,a=e.photo,c=e.desc,n=e.slug;return Object(l.jsx)(U,{slug:n,name:s,author:i,photo:a,desc:c},t)}))})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("header",{className:"header-category",children:Object(l.jsx)("h3",{children:"Motivation"})}),Object(l.jsx)("section",{className:"section-featured-book",children:i.map((function(e){var t=e.id,s=e.name,i=e.author,a=e.photo,c=e.desc,n=e.slug;return Object(l.jsx)(U,{slug:n,name:s,author:i,photo:a,desc:c},t)}))})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("header",{className:"header-category",children:Object(l.jsx)("h3",{children:"Journals"})}),Object(l.jsx)("section",{className:"section-featured-book",children:a.map((function(e){var t=e.id,s=e.name,i=e.author,a=e.photo,c=e.desc,n=e.slug;return Object(l.jsx)(r.b,{to:"books/".concat(n),children:Object(l.jsx)(U,{slug:n,name:s,author:i,photo:a,desc:c},t)})}))})]}),Object(l.jsxs)("article",{children:[Object(l.jsx)("header",{className:"header-category",children:Object(l.jsx)("h3",{children:"Programming"})}),Object(l.jsx)("section",{className:"section-featured-book",children:c.map((function(e){var t=e.id,s=e.name,i=e.author,a=e.photo,c=e.desc,n=e.slug;return Object(l.jsx)(U,{name:s,slug:n,author:i,photo:a,desc:c},t)}))})]})]})},z=function(e){var t=e.name,s=e.author,i=e.desc,a=e.photo,c=e.slug;return Object(l.jsx)("div",{className:"similar-book-container",children:Object(l.jsx)(r.b,{to:"books/".concat(c),className:"link-similar-book",children:Object(l.jsxs)("div",{className:"similar-book",children:[Object(l.jsx)("article",{children:Object(l.jsx)("img",{src:a||P,alt:"book",width:"90",height:"90"})}),Object(l.jsx)("section",{className:"section-right",children:Object(l.jsxs)("main",{className:"main-name",children:[Object(l.jsx)("p",{className:"similar-name",children:t}),Object(l.jsx)("p",{className:"similar-author",children:s}),Object(l.jsx)("p",{className:"similar-desc",children:i})]})})]})})})},Q=function(e){var t=Object(o.useState)(0),s=Object(n.a)(t,2),i=s[0],a=s[1],c=Object(o.useState)(e),r=Object(n.a)(c,1)[0],d=Object(o.useState)(F),u=Object(n.a)(d,1)[0],h=r.match.params.slug;!function(e){var t=u.find((function(t){return t.slug===e}));console.log(t)}(h);var j=F.find((function(e){return e.slug===h})),m=j.author,b=j.file,p=j.photo,g=j.name,O=j.category,x=F.filter((function(e){return e.category===O}));return console.log(x),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"single-book-component-single",children:Object(l.jsxs)("section",{id:"book-card-single",children:[Object(l.jsx)("article",{children:Object(l.jsx)("img",{src:p||P,width:"90",alt:"book",height:"90"})}),Object(l.jsx)("div",{className:"right-part",children:Object(l.jsxs)("main",{className:"main-right-single",children:[Object(l.jsx)("p",{className:"title-book-single",children:g}),Object(l.jsxs)("p",{className:"p-author",children:[Object(l.jsx)("span",{className:"author-author",children:"Author"}),": ",Object(l.jsx)("span",{className:"span-author",children:m})]}),Object(l.jsx)("div",{className:"btns-div",children:Object(l.jsx)("a",{href:b,download:!0,onClick:function(){a(i+1)},className:"btn-download",children:"Download"})})]})})]})}),Object(l.jsxs)("section",{className:"similar-books-component-section",children:[Object(l.jsx)("header",{className:"header-similar",children:Object(l.jsx)("h3",{children:"Similar Books"})}),Object(l.jsx)("div",{id:"similar-books-component",children:x.map((function(e){var t=e.id,s=e.name,i=e.author,a=e.desc,c=e.photo,n=e.slug;return Object(l.jsx)(z,{slug:n,name:s,desc:a,photo:c,author:i},t)}))})]})]})},X=function(){return Object(l.jsxs)("div",{className:"error-page",children:[Object(l.jsxs)("article",{className:"error-article",children:[Object(l.jsx)("h2",{className:"h2-error",children:"Error"}),Object(l.jsx)("h3",{className:"h3-error",children:"Page Not Found"})]}),Object(l.jsx)("section",{className:"section-link-return",children:Object(l.jsx)(r.b,{to:"/",className:"link-return-home",children:"Return Home"})})]})},Y=function(){return Object(l.jsxs)("div",{className:"about-component",children:[Object(l.jsx)("header",{className:"header-about-access",children:Object(l.jsx)("h2",{children:"Contribute"})}),Object(l.jsx)("div",{className:"div-text-about",children:Object(l.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolores nostrum tempore odit velit harum dicta ipsa quidem nemo accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus facere sed illum exercitationem, nihil harum, est tenetur dolor unde nesciunt eligendi et cupiditate ipsum quia , aspernatur neque culpa placeat!"})})]})},Z=s(3),$=function(){return Object(l.jsxs)("div",{className:"about-component",children:[Object(l.jsx)("header",{className:"header-about-access",children:Object(l.jsx)("h2",{children:"About"})}),Object(l.jsx)("div",{className:"div-text-about",children:Object(l.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolores nostrum tempore odit velit harum dicta ipsa quidem nemo accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus facere sed illum exercitationem, nihil harum, est tenetur dolor unde nesciunt eligendi et cupiditate ipsum quia , aspernatur neque culpa placeat!"})})]})},_=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(H,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(Z.c,{children:[Object(l.jsx)(Z.a,{exact:!0,path:"/",component:G}),Object(l.jsx)(Z.a,{exact:!0,path:"/books",component:W}),Object(l.jsx)(Z.a,{exact:!0,path:"/books/:slug",component:Q}),Object(l.jsx)(Z.a,{exact:!0,path:"/contribute",component:Y}),Object(l.jsx)(Z.a,{exact:!0,path:"/about",component:$}),Object(l.jsx)(Z.a,{component:X})]})]}),Object(l.jsx)(K,{})]})};s(33);c.a.render(Object(l.jsx)(r.a,{children:Object(l.jsx)(_,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.fc5f5d7d.chunk.js.map