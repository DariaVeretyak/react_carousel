(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(7),i=n.n(a),s=n(2),r=n(3),c=n(5),o=n(4),m=n(1),l=n.n(m),u=(n(12),n(13),n(0)),p=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.itemWidth,a=t.step,i=t.animationDuration,s=t.frameSize,r=t.transformX,c=t.nextTransform,o=t.prevTransform,m={width:"".concat(n,"px"),height:"".concat(n,"px")},l=n*e.length,p={transform:"translateX(".concat(r,"px)"),transition:"".concat(i,"ms")},j=a*n;return Object(u.jsxs)("div",{className:"Carousel",style:{width:"".concat(n*s,"px")},children:[Object(u.jsx)("ul",{className:"Carousel__list",children:e.map((function(t,e){return Object(u.jsx)("li",{className:"carousel__item",style:p,children:Object(u.jsx)("img",{src:t,alt:"".concat(e+1),style:m})},t)}))}),Object(u.jsxs)("div",{className:"Carousel__buttons",children:[Object(u.jsx)("button",{className:"Carousel__button Carousel__button--prev",type:"button",onClick:o,disabled:j+r>0,children:"Prev"}),Object(u.jsx)("button",{className:"Carousel__button Carousel__button--next",type:"button","data-cy":"next",onClick:c,disabled:j-r>l,children:"Next"})]})]})}}]),n}(l.a.PureComponent),j=p,b=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3,transformX:0},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,a=e.itemWidth,i=e.frameSize,s=e.step,r=e.animationDuration,c=e.transformX,o=s*a;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel"}),Object(u.jsxs)("form",{action:"",className:"App__form",children:[Object(u.jsxs)("div",{className:"App__input-conteiner",children:[Object(u.jsx)("label",{htmlFor:"itemWidth",children:"Item size:"}),Object(u.jsx)("input",{id:"itemWidth",className:"App__input",type:"number",value:a,min:60,max:220,step:10,onChange:function(e){t.setState({itemWidth:+e.target.value,transformX:0})}})]}),Object(u.jsxs)("div",{className:"App__input-conteiner",children:[Object(u.jsx)("label",{htmlFor:"frameSize",children:"Frame size:"}),Object(u.jsx)("input",{id:"frameSize",className:"App__input",type:"number",value:i,min:1,max:10,onChange:function(e){t.setState({frameSize:+e.target.value})}})]}),Object(u.jsxs)("div",{className:"App__input-conteiner",children:[Object(u.jsx)("label",{htmlFor:"step",children:"Step:"}),Object(u.jsx)("input",{id:"frameSize",className:"App__input",type:"number",value:s,min:1,max:10,onChange:function(e){t.setState({step:+e.target.value})}})]}),Object(u.jsxs)("div",{className:"App__input-conteiner",children:[Object(u.jsx)("label",{htmlFor:"animationDuration",children:"Animation Duration:"}),Object(u.jsx)("input",{id:"animationDuration",className:"App__input",type:"number",value:r,min:0,max:5e3,step:500,onChange:function(e){t.setState({animationDuration:+e.target.value})}})]})]}),Object(u.jsx)(j,{images:n,itemWidth:a,frameSize:i,step:s,animationDuration:r,transformX:c,nextTransform:function(){t.setState({transformX:c-o})},prevTransform:function(){t.setState({transformX:c+o})}})]})}}]),n}(l.a.Component),h=b;i.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a4a8138e.chunk.js.map