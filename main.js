(()=>{"use strict";const t=(()=>{const t=[];return{getProjects:()=>t,addProjects:function(e){t.push(e)}}})();function e(e,n){const o=t.getProjects().find((t=>t.Name===n)).Tasks,c=document.querySelector(".mc-project-task-div");o.length>0&&(o.forEach((t=>{const e=document.createElement("div");e.classList.add("new-task");const n=document.createElement("div");n.classList.add("new-task-head");const o=document.createElement("p"),a=document.createElement("button"),r=document.createElement("button"),i=document.createElement("div");i.classList.add("new-task-body"),o.textContent=t.Title,a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>',a.setAttribute("id","nt-head-expand"),a.setAttribute("title","Expand"),a.addEventListener("click",s),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z" /></svg>',r.setAttribute("id","nt-head-remove"),r.setAttribute("title","Remove"),r.addEventListener("click",d),[a,r].forEach((t=>t.classList.add("new-task-head-btn"))),[o,a,r].forEach((t=>n.appendChild(t))),[n,i].forEach((t=>e.appendChild(t))),c.appendChild(e)})),c.classList.add("expanded"))}function n(t){for(;t.firstChild;)t.removeChild(t.lastChild)}function o(){const e=document.getElementById("mc-proj-head-h3").textContent;return t.getProjects().find((t=>t.Name===e))}function c(t){const e=t.target.parentNode.firstChild.textContent;return o().Tasks.findIndex((t=>t.Title===e))}function d(t){const d=document.querySelector(".mc-project-task-div"),s=document.getElementById("mc-proj-head-h3").textContent;o().Tasks.splice(c(t),1),n(d),e(0,s),o().Tasks.length||(d.classList.remove("expanded"),document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(0deg);"))}function s(t){const e=t.target.parentNode.nextSibling;if(e.classList.toggle("expanded"),e.classList.contains("expanded")){const n=document.createElement("p"),d=document.createElement("p"),s=document.createElement("p");n.textContent=`Description: ${o().Tasks[c(t)].Description}`,d.textContent=`Priority: ${o().Tasks[c(t)].Priority}`,s.textContent=`DueDate: ${o().Tasks[c(t)].DueDate}`,[n,d,s].forEach((t=>e.appendChild(t))),t.target.firstChild.setAttribute("style","transform: rotate(180deg);")}else n(e),t.target.firstChild.setAttribute("style","transform: rotate(0deg);")}function a(t,e){const n=document.createElement("button");n.classList.add("add-project"),n.textContent=t;const o=document.querySelector(".projects-buttons");n.addEventListener("click",e),o.appendChild(n)}function r(){const e=document.querySelector(".main-content");n(e);const o=document.createElement("div");o.classList.add("main-content-today");const c=t.getProjects().filter((t=>t.Tasks.some((t=>t.DueDate.split("T")[0]===(new Date).toISOString().split("T")[0]))));if(c.length>0){const t=[];c.forEach((e=>e.Tasks.forEach((e=>e.DueDate.split("T")[0]===(new Date).toISOString().split("T")[0]?t.push(e):"")))),t.sort(((t,e)=>t.DueDate>e.DueDate?1:t.DueDate===e.DueDate?0:-1)).forEach((t=>{const e=document.createElement("div"),n=document.createElement("p"),c=document.createElement("p");n.textContent=t.Title,c.textContent=t.DueDate.split("T")[1],[n,c].forEach((t=>e.appendChild(t))),o.appendChild(e)}))}e.appendChild(o)}!function(){document.getElementById("navMenu").addEventListener("click",(function(){document.querySelector(".side-bar").classList.toggle("slideIn"),document.querySelector(".main-content").classList.toggle("slideOut")})),document.getElementById("today-btn").addEventListener("click",r);const o=document.getElementById("addProjects");function c(t,e,n){document.querySelector(t).setAttribute("style",`display: ${e};`),o.setAttribute("style",`display: ${n};`)}function d(){c(".np-form","none","block")}function s(t){t.value=""}function i(t,e){document.getElementById(t).addEventListener("click",e)}function l(t){const o=document.createElement("h3");o.textContent=`${t.target.textContent}`,o.setAttribute("id","mc-proj-head-h3");const c=document.createElement("button");c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z" /></svg>',c.setAttribute("id","mc-proj-head-remove"),c.setAttribute("title","Remove");const d=document.createElement("button");d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,9H9V4H15V9H20V15H15V20H9V15H4V9M11,13V18H13V13H18V11H13V6H11V11H6V13H11Z" /></svg>',d.setAttribute("id","mc-proj-head-add"),d.setAttribute("title","Add task");const s=document.createElement("button");s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>',s.setAttribute("id","mc-proj-head-expand"),s.setAttribute("title","Expand"),[c,d,s].forEach((t=>t.classList.add("mc-proj-head-btns")));const a=document.createElement("div");a.classList.add("main-content-project-header"),[o,s,d,c].forEach((t=>a.appendChild(t)));const r=document.createElement("div");r.classList.add("mc-project-task-div");const l=document.createElement("div");l.classList.add("main-content-project"),[a,r].forEach((t=>l.appendChild(t)));const p=document.querySelector(".main-content");n(p),p.appendChild(l),e(0,t.target.textContent),r.classList.contains("expanded")?document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(180deg);"):document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(0deg);"),i("mc-proj-head-expand",m),i("mc-proj-head-add",u),i("mc-proj-head-remove",f)}function m(){const t=document.querySelector(".mc-project-task-div");t.childNodes.length>0&&(t.classList.toggle("expanded"),t.classList.contains("expanded")?document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(180deg);"):document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(0deg);"))}function u(){const t=document.querySelector("form");t.classList.add("active"),document.getElementById("overlay").classList.add("overlay"),t.addEventListener("submit",g),document.getElementById("addTask-cancel-btn").addEventListener("click",h)}function p(){document.querySelector("form").classList.remove("active")}function L(){document.getElementById("overlay").classList.remove("overlay")}function g(o){o.preventDefault();const c=document.querySelector(".mc-project-task-div"),d=document.getElementById("title"),a=document.getElementById("description"),r=document.getElementById("priority"),i=document.getElementById("dueDate"),l=function(t,e,n,o){let c=t;const d=()=>c;let s=e;const a=()=>s;let r=n;const i=()=>r;let l=o;const m=()=>l,u={Title:d(),Description:a(),DueDate:i(),Priority:m()};return{getTitle:d,setTitle:function(t){c=t},getDescription:a,setDescription:function(t){s=t},getDueDate:i,setDueDate:function(t){r=t},getPriority:m,setPriority:function(t){l=t},getInfo:()=>u}}(d.value,a.value,i.value,r.value),m=document.getElementById("mc-proj-head-h3").textContent;t.getProjects().find((t=>t.Name===m)).Tasks.push(l.getInfo()),console.log(t.getProjects()),n(c),e(0,m),[d,a,r,i].forEach((t=>s(t))),p(),L(),document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(180deg);")}function h(){[document.getElementById("title"),document.getElementById("description"),document.getElementById("priority"),document.getElementById("dueDate")].forEach((t=>s(t))),p(),L()}function f(){const e=t.getProjects(),o=document.querySelector(".main-content"),c=document.querySelector(".projects-buttons");e.splice(function(){const e=document.getElementById("mc-proj-head-h3").textContent;return t.getProjects().findIndex((t=>t.Name===e))}(),1),n(o),n(c),e.forEach((t=>a(t.Name,l)))}o.addEventListener("click",(function(){c(".np-form","block","none")})),document.getElementById("project-add-cancel-btn").addEventListener("click",d),document.getElementById("project-add-btn").addEventListener("click",(function(){const e=document.getElementById("np-input");if(e.checkValidity()){d(),a(e.value,l);const n=function(t){let e=t;const n=[],o=()=>e,c=()=>n,d={Name:o(),Tasks:c()};return{getProjectName:o,setProjectName:function(t){e=t},getTasks:c,addTasks:function(t){n.push(t)},getInfo:()=>d}}(e.value);t.addProjects(n.getInfo()),s(e)}}))}()})();