(()=>{"use strict";const t=(()=>{const t=[];return{getProjects:()=>t,addProjects:function(e){t.push(e)}}})();function e(e,n){const o=t.getProjects().find((t=>t.Name===n)).Tasks,c=document.querySelector(".mc-project-task-div");o.length>0&&(o.forEach((t=>{const e=document.createElement("div");e.classList.add("new-task");const n=document.createElement("div");n.classList.add("new-task-head");const o=document.createElement("p"),a=document.createElement("button"),i=document.createElement("button"),r=document.createElement("div");r.classList.add("new-task-body"),o.textContent=t.Title,a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>',a.setAttribute("id","nt-head-expand"),a.setAttribute("title","Expand"),a.addEventListener("click",d),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z" /></svg>',i.setAttribute("id","nt-head-remove"),i.setAttribute("title","Remove"),i.addEventListener("click",s),[a,i].forEach((t=>t.classList.add("new-task-head-btn"))),[o,a,i].forEach((t=>n.appendChild(t))),[n,r].forEach((t=>e.appendChild(t))),c.appendChild(e)})),c.classList.add("expanded"))}function n(t){for(;t.firstChild;)t.removeChild(t.lastChild)}function o(){const e=document.getElementById("mc-proj-head-h3").textContent;return t.getProjects().find((t=>t.Name===e))}function c(t){const e=t.target.parentNode.firstChild.textContent;return o().Tasks.findIndex((t=>t.Title===e))}function s(t){const s=document.querySelector(".mc-project-task-div"),d=document.getElementById("mc-proj-head-h3").textContent;o().Tasks.splice(c(t),1),n(s),e(0,d),o().Tasks.length||(s.classList.remove("expanded"),document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(0deg);"))}function d(t){const e=t.target.parentNode.nextSibling;if(e.classList.toggle("expanded"),e.classList.contains("expanded")){const n=document.createElement("p"),s=document.createElement("p"),d=document.createElement("p");n.textContent=`Description: ${o().Tasks[c(t)].Description}`,s.textContent=`Priority: ${o().Tasks[c(t)].Priority}`,d.textContent=`DueDate: ${o().Tasks[c(t)].DueDate}`,[n,s,d].forEach((t=>e.appendChild(t))),t.target.firstChild.setAttribute("style","transform: rotate(180deg);")}else n(e),t.target.firstChild.setAttribute("style","transform: rotate(0deg);")}function a(t,e){const n=document.createElement("button");n.classList.add("add-project"),n.textContent=t;const o=document.querySelector(".projects-buttons");n.addEventListener("click",e),o.appendChild(n)}function i(){const e=document.querySelector(".main-content");n(e);const o=document.createElement("div");o.classList.add("main-content-today");const c=t.getProjects().filter((t=>t.Tasks.some((t=>t.DueDate.split("T")[0]===(new Date).toISOString().split("T")[0]))));if(c.length>0){const t=[];c.forEach((e=>e.Tasks.forEach((e=>e.DueDate.split("T")[0]===(new Date).toISOString().split("T")[0]?t.push(e):"")))),t.sort(((t,e)=>t.DueDate>e.DueDate?1:t.DueDate===e.DueDate?0:-1)).forEach((t=>{const e=document.createElement("div"),n=document.createElement("p"),c=document.createElement("p");n.textContent=t.Title,c.textContent=t.DueDate.split("T")[1],[n,c].forEach((t=>e.appendChild(t))),o.appendChild(e)}))}else o.setAttribute("style","text-align: center;"),o.textContent="No tasks today.";e.appendChild(o)}function r(){const e=document.querySelector(".main-content");n(e);const o=document.createElement("div");o.classList.add("main-content-thisWeek");const c=new Date,s=new Date;s.setDate(s.getDate()+7);const d=c.toISOString(),a=s.toISOString().split("T")[0],i=t.getProjects().filter((t=>t.Tasks.some((t=>t.DueDate>=d&&t.DueDate.split("T")[0]<=a))));if(i.length>0){const t=[];i.forEach((e=>e.Tasks.forEach((e=>e.DueDate>=d&&e.DueDate.split("T")[0]<=a?t.push(e):"")))),t.sort(((t,e)=>t.DueDate>e.DueDate?1:t.DueDate===e.DueDate?0:-1)).forEach((t=>{const e=document.createElement("div"),n=document.createElement("p"),c=document.createElement("p");n.textContent=t.Title,c.textContent=`${new Date(t.DueDate.split("T")[0]).toLocaleString("en-us",{weekday:"long"})} ${t.DueDate.split("-")[2].split("T")[0]}.`,[n,c].forEach((t=>e.appendChild(t))),o.appendChild(e)}))}else o.setAttribute("style","text-align: center;"),o.textContent="No tasks over the next seven days.";e.appendChild(o)}!function(){document.addEventListener("DOMContentLoaded",(()=>{localStorage.getItem("Projects")&&(JSON.parse(localStorage.getItem("Projects")).forEach((e=>t.addProjects(e))),t.getProjects().forEach((t=>a(t.Name,m))))}));const o=document.getElementById("navMenu");o.addEventListener("click",(function(){o.classList.toggle("animated"),document.querySelector(".side-bar").classList.toggle("slideIn"),document.querySelector(".main-content").classList.toggle("slideOut")})),document.getElementById("today-btn").addEventListener("click",i),document.getElementById("thisWeek-btn").addEventListener("click",r);const c=document.getElementById("addProjects");function s(t,e,n){document.querySelector(t).setAttribute("style",`display: ${e};`),c.setAttribute("style",`display: ${n};`)}function d(){s(".np-form","none","block")}function l(t){t.value=""}function u(t,e){document.getElementById(t).addEventListener("click",e)}function m(t){const o=document.createElement("h3");o.textContent=`${t.target.textContent}`,o.setAttribute("id","mc-proj-head-h3");const c=document.createElement("button");c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z" /></svg>',c.setAttribute("id","mc-proj-head-remove"),c.setAttribute("title","Remove");const s=document.createElement("button");s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4,9H9V4H15V9H20V15H15V20H9V15H4V9M11,13V18H13V13H18V11H13V6H11V11H6V13H11Z" /></svg>',s.setAttribute("id","mc-proj-head-add"),s.setAttribute("title","Add task");const d=document.createElement("button");d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>',d.setAttribute("id","mc-proj-head-expand"),d.setAttribute("title","Expand"),[c,s,d].forEach((t=>t.classList.add("mc-proj-head-btns")));const a=document.createElement("div");a.classList.add("main-content-project-header"),[o,d,s,c].forEach((t=>a.appendChild(t)));const i=document.createElement("div");i.classList.add("mc-project-task-div");const r=document.createElement("div");r.classList.add("main-content-project"),[a,i].forEach((t=>r.appendChild(t)));const l=document.querySelector(".main-content");n(l),l.appendChild(r),e(0,t.target.textContent),i.classList.contains("expanded")?document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(180deg);"):document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(0deg);"),u("mc-proj-head-expand",p),u("mc-proj-head-add",g),u("mc-proj-head-remove",y)}function p(){const t=document.querySelector(".mc-project-task-div");t.childNodes.length>0&&(t.classList.toggle("expanded"),t.classList.contains("expanded")?document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(180deg);"):document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(0deg);"))}function g(){const t=document.querySelector("form");t.classList.add("active"),document.getElementById("overlay").classList.add("overlay"),t.addEventListener("submit",f),document.getElementById("addTask-cancel-btn").addEventListener("click",E)}function L(){document.querySelector("form").classList.remove("active")}function h(){document.getElementById("overlay").classList.remove("overlay")}function f(o){o.preventDefault();const c=document.querySelector(".mc-project-task-div"),s=document.getElementById("title"),d=document.getElementById("description"),a=document.getElementById("priority"),i=document.getElementById("dueDate"),r=function(t,e,n,o){let c=t;const s=()=>c;let d=e;const a=()=>d;let i=n;const r=()=>i;let l=o;const u=()=>l,m={Title:s(),Description:a(),DueDate:r(),Priority:u()};return{getTitle:s,setTitle:function(t){c=t},getDescription:a,setDescription:function(t){d=t},getDueDate:r,setDueDate:function(t){i=t},getPriority:u,setPriority:function(t){l=t},getInfo:()=>m}}(s.value,d.value,i.value,a.value),u=document.getElementById("mc-proj-head-h3").textContent;t.getProjects().find((t=>t.Name===u)).Tasks.push(r.getInfo()),n(c),e(0,u),[s,d,a,i].forEach((t=>l(t))),L(),h(),document.getElementById("mc-proj-head-expand").firstChild.setAttribute("style","transform: rotate(180deg);")}function E(){[document.getElementById("title"),document.getElementById("description"),document.getElementById("priority"),document.getElementById("dueDate")].forEach((t=>l(t))),L(),h()}function y(){const e=t.getProjects(),o=document.querySelector(".main-content"),c=document.querySelector(".projects-buttons");e.splice(function(){const e=document.getElementById("mc-proj-head-h3").textContent;return t.getProjects().findIndex((t=>t.Name===e))}(),1),n(o),n(c),e.forEach((t=>a(t.Name,m)))}c.addEventListener("click",(function(){s(".np-form","block","none")})),document.getElementById("project-add-cancel-btn").addEventListener("click",d),document.getElementById("project-add-btn").addEventListener("click",(function(){const e=document.getElementById("np-input");if(e.checkValidity()){d(),a(e.value,m);const n=function(t){let e=t;const n=[],o=()=>e,c=()=>n,s={Name:o(),Tasks:c()};return{getProjectName:o,setProjectName:function(t){e=t},getTasks:c,addTasks:function(t){n.push(t)},getInfo:()=>s}}(e.value);t.addProjects(n.getInfo()),l(e)}})),document.addEventListener("visibilitychange",(()=>{"hidden"===document.visibilityState&&localStorage.setItem("Projects",JSON.stringify(t.getProjects()))}))}()})();