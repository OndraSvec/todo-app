(()=>{"use strict";const t=(()=>{const t=[];return{getProjects:()=>t,addProjects:function(e){t.push(e)}}})();function e(e,n){const c=t.getProjects().find((t=>t.Name===n)).Tasks,o=document.querySelector(".mc-project-task-div");c.length>0&&(c.forEach((t=>{const e=document.createElement("div");e.classList.add("new-task");const n=document.createElement("div");n.classList.add("new-task-head");const c=document.createElement("p"),d=document.createElement("btn"),s=document.createElement("btn"),i=document.createElement("div");i.classList.add("new-task-body"),c.textContent=t.Title,d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Expand</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>',d.setAttribute("id","nt-head-expand"),s.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove</title><path d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z" /></svg>',s.setAttribute("id","nt-head-remove"),[d,s].forEach((t=>t.classList.add("new-task-head-btn"))),[c,d,s].forEach((t=>n.appendChild(t))),[n,i].forEach((t=>e.appendChild(t))),o.appendChild(e)})),o.classList.add("expanded"))}!function(){document.getElementById("navMenu").addEventListener("click",(function(){document.querySelector(".side-bar").classList.toggle("slideIn"),document.querySelector(".main-content").classList.toggle("slideOut")}));const n=document.getElementById("addProjects");function c(t,e,c){document.querySelector(t).setAttribute("style",`display: ${e};`),n.setAttribute("style",`display: ${c};`)}function o(){c(".np-form","none","block")}function d(t){t.value=""}function s(t,e){document.getElementById(t).addEventListener("click",e)}function i(t){const n=document.createElement("h3");n.textContent=`${t.target.textContent}`,n.setAttribute("id","mc-proj-head-h3");const c=document.createElement("button");c.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit</title><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>',c.setAttribute("id","mc-proj-head-edit");const o=document.createElement("button");o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove</title><path d="M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z" /></svg>',o.setAttribute("id","mc-proj-head-remove");const d=document.createElement("button");d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Add task</title><path d="M4,9H9V4H15V9H20V15H15V20H9V15H4V9M11,13V18H13V13H18V11H13V6H11V11H6V13H11Z" /></svg>',d.setAttribute("id","mc-proj-head-add");const i=document.createElement("button");i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Expand</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>',i.setAttribute("id","mc-proj-head-expand"),[c,o,d,i].forEach((t=>t.classList.add("mc-proj-head-btns")));const u=document.createElement("div");u.classList.add("main-content-project-header"),[n,i,d,c,o].forEach((t=>u.appendChild(t)));const m=document.createElement("div");m.classList.add("mc-project-task-div");const L=document.createElement("div");L.classList.add("main-content-project"),[u,m].forEach((t=>L.appendChild(t)));const g=document.querySelector(".main-content");a(g),g.appendChild(L),e(0,t.target.textContent),s("mc-proj-head-expand",r),s("mc-proj-head-add",l)}function a(t){for(;t.firstChild;)t.removeChild(t.lastChild)}function r(){const t=document.querySelector(".mc-project-task-div");t.childNodes.length>0&&t.classList.toggle("expanded")}function l(){const t=document.querySelector("form");t.classList.add("active"),document.getElementById("overlay").classList.add("overlay"),t.addEventListener("submit",L),document.getElementById("addTask-cancel-btn").addEventListener("click",g)}function u(){document.querySelector("form").classList.remove("active")}function m(){document.getElementById("overlay").classList.remove("overlay")}function L(n){n.preventDefault();const c=document.querySelector(".mc-project-task-div"),o=document.getElementById("title"),s=document.getElementById("description"),i=document.getElementById("priority"),r=document.getElementById("dueDate"),l=function(t,e,n,c){let o=t;const d=()=>o;let s=e;const i=()=>s;let a=n;const r=()=>a;let l=c;const u=()=>l,m={Title:d(),Description:i(),DueDate:r(),Priority:u()};return{getTitle:d,setTitle:function(t){o=t},getDescription:i,setDescription:function(t){s=t},getDueDate:r,setDueDate:function(t){a=t},getPriority:u,setPriority:function(t){l=t},getInfo:()=>m}}(o.value,s.value,r.value,i.value),L=document.getElementById("mc-proj-head-h3").textContent;t.getProjects().find((t=>t.Name===L)).Tasks.push(l.getInfo()),console.log(t.getProjects()),a(c),e(0,L),[o,s,i,r].forEach((t=>d(t))),u(),m()}function g(){[document.getElementById("title"),document.getElementById("description"),document.getElementById("priority"),document.getElementById("dueDate")].forEach((t=>d(t))),u(),m()}n.addEventListener("click",(function(){c(".np-form","block","none")})),document.getElementById("project-add-cancel-btn").addEventListener("click",o),document.getElementById("project-add-btn").addEventListener("click",(function(){const e=document.getElementById("np-input");if(e.checkValidity()){o(),function(t){const e=document.createElement("btn");e.classList.add("add-project"),e.textContent=t.value;const n=document.querySelector(".projects"),c=document.querySelector(".new-project");n.insertBefore(e,c),e.addEventListener("click",i)}(e);const n=function(t){let e=t;const n=[],c=()=>e,o=()=>n,d={Name:c(),Tasks:o()};return{getProjectName:c,setProjectName:function(t){e=t},getTasks:o,addTasks:function(t){n.push(t)},getInfo:()=>d}}(e.value);t.addProjects(n.getInfo()),console.log(t.getProjects()),d(e)}}))}()})();