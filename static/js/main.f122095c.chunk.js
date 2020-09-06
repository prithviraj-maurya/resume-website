(this["webpackJsonpresume-website"]=this["webpackJsonpresume-website"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/Profile.c254cf61.jpg"},,function(e,a,t){e.exports=t.p+"static/media/profile-pic.d55b31ed.jpeg"},function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),i=t.n(l),c=(t(16),t(17),t(18),t(19),t(2)),s=t(3),o=t(5),m=t(4),u=(t(20),t(8)),p=t.n(u),d=t(9),h=t(10),E=t.n(h),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container about"},r.a.createElement("h1",{className:"title"},r.a.createElement("b",null,"ABOUT ME")),r.a.createElement("hr",{className:"hr-dark"}),r.a.createElement("hr",{className:"hr-light"}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{className:"profile-image",src:E.a,alt:"profile"})),r.a.createElement("div",{className:"col-9",style:{textAlign:"left"}},r.a.createElement("h1",null,"I am ",r.a.createElement("span",{className:"name"},"Prithviraj Maurya")),r.a.createElement("p",{className:"desc"},"I am a Full Stack Developer at Wissen Technology, I also work on AI and ML projects",r.a.createElement("br",null)," and I am an active Kaggler."),r.a.createElement("p",null,r.a.createElement("b",null,"Full Name"),": Prithviraj Anil Maurya"),r.a.createElement("p",null,r.a.createElement("b",null,"Age"),": 24"),r.a.createElement("p",null,r.a.createElement("b",null,"Nationality"),": Indian"),r.a.createElement("p",null,r.a.createElement("b",null,"Languages"),": English & Hindi"),r.a.createElement("p",null,r.a.createElement("b",null,"Address"),": Bengaluru, Karnataka - 560035"),r.a.createElement("button",{type:"button",className:"btn btn-primary"},r.a.createElement("a",{href:"/resume-website/resume.pdf",style:{color:"white",textDecoration:"none"}},"View Resume"))))))}}]),t}(r.a.Component),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"redirect",value:function(e){e.preventDefault(),window.open(this.props.url)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:"/#",onClick:this.redirect.bind(this),style:{textDecoration:"none"}},r.a.createElement("img",{style:{maxHeight:"100%",maxWidth:"100%"},src:"/resume-website"+this.props.image,alt:this.props.name}),r.a.createElement("p",null,this.props.name)))}}]),t}(r.a.Component),b=[{name:"Age Group CLassification using Images",description:"An Age Group Classifier trained on custom images of 3 classes groups \n        Adults, Teenagers and Toddlers. Trained a custom Resnet9 model as well as a pretrained model\n        for comparing results. Given an input image model can classify the age group pf people in the images\n        with 78% accuracy",url:"https://console.paperspace.com/te7qp7xse/notebook/pr5gy5h8s",image:"/images/age-group-clf.jpg"},{name:"Expenses App",description:"A React-D3 based webapp for data visualization of all expenses\n        for the year and categroize the expenses into various categories like groceries etc. \n        A visualization tool to know what one spends on which category. Drag the expense bubble into \n        the catgeory and it gets linked to it. Color of the category grows darker as the expenses rise.\n        Can add new categories and remove existing ones.",url:"https://prithviraj-maurya.github.io/expenses-d3-react/",image:"/images/expenses.png"}],v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container portfolio"},r.a.createElement("h1",{className:"title"},r.a.createElement("b",null,"PROJECTS")),r.a.createElement("hr",{className:"hr-dark"}),r.a.createElement("hr",{className:"hr-light"}),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},b.map((function(e){return r.a.createElement("div",{className:"col-3"},r.a.createElement(g,{name:e.name,description:e.description,url:e.url,image:e.image,key:e.name}))}))))}}]),t}(r.a.Component),N=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"redirectLinkedIn",value:function(e){e.preventDefault(),window.open("http://www.linkedin.com/in/prithviraj-maurya-02aa40116")}},{key:"redirectGithub",value:function(e){e.preventDefault(),window.open("http://github.com/prithviraj-maurya")}},{key:"redirectKaggle",value:function(e){e.preventDefault(),window.open("http://www.kaggle.com/prithviraj7387")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"ct",id:"home"},r.a.createElement("div",{className:"ct",id:"about"},r.a.createElement("div",{className:"ct",id:"portfolio"},r.a.createElement("div",{className:"ct",id:"t4"},r.a.createElement("section",null,r.a.createElement("ul",null,r.a.createElement("a",{href:"#home"},r.a.createElement("li",{className:"icon fa fa-home",id:"uno"})),r.a.createElement("a",{href:"#about"},r.a.createElement("li",{className:"icon fa fa-user",id:"dos"})),r.a.createElement("a",{href:"#portfolio"},r.a.createElement("li",{className:"icon fa fa-briefcase",id:"tres"})),r.a.createElement("a",{href:"#t4"},r.a.createElement("li",{className:"icon fa fa-dribbble",id:"cuatro"}))),r.a.createElement("div",{className:"page",id:"p1"},r.a.createElement(d.a,{style:{position:"absolute",width:"100%",height:"100%"}}),r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"profile-pic"},r.a.createElement("img",{className:"profile-img",src:p.a,alt:"Profile"})),r.a.createElement("div",{className:"title"},"Hi, I am ",r.a.createElement("span",{className:"name"},"Prithviraj Maurya")),r.a.createElement("span",{className:"hint"},"Full Stack Developer, Active Kaggler, AI ML Enthusiast"),r.a.createElement("div",{className:"social"},r.a.createElement("a",{href:"/#",onClick:this.redirectLinkedIn},r.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"})),r.a.createElement("a",{href:"/#",onClick:this.redirectGithub},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"})),r.a.createElement("a",{href:"/#",onClick:this.redirectKaggle},r.a.createElement("span",{style:{color:"white"}},"k"))))),r.a.createElement("div",{className:"page",id:"p2"},r.a.createElement(f,null)),r.a.createElement("div",{className:"page",id:"p3"},r.a.createElement(v,null)),r.a.createElement("div",{className:"page",id:"p4"},r.a.createElement("li",{className:"icon fa fa-dribbble"},r.a.createElement("span",{className:"title"},"Dribbble")))))))))}}]),t}(r.a.Component);var w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.f122095c.chunk.js.map