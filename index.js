import{S as c,a as u,i as n}from"./assets/vendor-MjawMu3A.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();let f=new c(".gallery a",{captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.6,widthRatio:.85,disableRightClick:!0});function p(s){const i=s.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}" class="gallery-link">
            <img
              src="${e.webformatURL}"
              alt="${e.tags}"
              class="gallery-image"
            />
            <div class="image-info">
              <div class="info">
                <p class="info-label">Likes</p>
                <p class="info-count">${e.likes}</p>
              </div>
              <div class="info">
                <p class="info-label">Views</p>
                <p class="info-count">${e.views}</p>
              </div>
              <div class="info">
                <p class="info-label">Comments</p>
                <p class="info-count">${e.comments}</p>
              </div>
              <div class="info">
                <p class="info-label">Downloads</p>
                <p class="info-count">${e.downloads}</p>
              </div>
            </div>
          </a>
        </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",i)}function d(){const s=document.querySelector(".gallery");s.innerHTML=""}function m(){document.querySelector(".loader-thumb").classList.add("visible")}function g(){document.querySelector(".loader-thumb").classList.remove("visible")}function y(s){const o={params:{key:"53949044-97be2f3ebdad7466ae66aa0c3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:9}};return u.get("https://pixabay.com/api/",o).then(e=>e.data).catch(e=>{console.log(e)})}const a={form:document.querySelector(".form"),btnSearch:document.querySelector(".btn-search"),inputSearch:document.querySelector(".input-search"),listImages:document.querySelector(".gallery")};a.form.addEventListener("submit",h);function h(s){s.preventDefault();const i=a.inputSearch.value.trim();if(a.inputSearch.value=i,i===""){const o={timeout:3e3,closeOnEscape:!0,position:"topRight",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",iconUrl:"./img/error.svg",title:"ERROR ",titleColor:"#ffffff",titleSize:"16",message:"Enter the image type",messageColor:"#ffffff",messageSize:"16"};n.show(o);return}d(),m(),y(i).then(o=>o.hits).then(o=>{if(g(),o.length===0){const e={timeout:3e3,closeOnEscape:!0,position:"topRight",backgroundColor:"#EF4040",progressBarColor:"#B51B1B",iconUrl:"./img/error.svg",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#ffffff",messageSize:"16",messageLineHeight:"24",maxWidth:"432"};n.show(e);return}p(o),f.refresh()}),a.form.reset()}
//# sourceMappingURL=index.js.map
