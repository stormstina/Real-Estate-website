(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=i(a);fetch(a.href,l)}})();document.addEventListener("DOMContentLoaded",()=>{Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0).forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.target,n=document.getElementById(i);e.classList.toggle("is-active"),n.classList.toggle("is-active")})})});document.addEventListener("DOMContentLoaded",()=>{let t=location.href;document.querySelectorAll(".page").forEach(i=>{i.href===t&&(i.className+=" active",i.ariaCurrent="page")})});let c=document.querySelector("#subjectDropdown");c&&c.addEventListener("change",()=>{let t=document.querySelector("#valuationForm"),e=document.querySelectorAll(".input-valuation");c.value==="3"?(t.style.display="block",e.forEach(i=>{i.required=!0})):(t.style.display="none",e.forEach(i=>{i.required=!1}))});let d=document.querySelector("#footer");d.className="columns";let r="/Real-Estate-website/";d.innerHTML=`
<div class="column is-8-widescreen is-offset-2-widescreen is-6-fullhd is-offset-3-fullhd">
    <div class="columns">
        <!--MENY-->
        <div class="column is-3-tablet footer-container" >
            <h2>MENY</h2>
            <div class="columns links">
                <div class="column">
                    <ul>
                        <li>
                            <a class="page" href="${r}">
                                HEM
                            </a>
                        </li>
                        <li>
                            <a class="page" href="${r}./properties/">
                                TILL SALU
                            </a>
                        </li>
                        <li>
                            <a class="page" href="${r}./sell/">
                                SÄLJ MED OSS
                            </a>
                        </li>
                        <li>
                            <a class="page" href="${r}./testimonials/">
                                SÅLDA OBJEKT
                            </a>
                        </li>
                        <li>
                            <a class="page" href="${r}./contact/">
                                KONTAKT
                            </a>
                        </li>
                        <li>
                            <a class="page" href="${r}./about/">
                                OM OSS
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--HITTA OSS-->
        <div class="column is-4-tablet is-inline footer-container">
            <h2>HITTA OSS</h2>

            <!--PLATS-->
            <a href="https://www.google.com/maps/place/Grev+Turegatan+6,+114+46+Stockholm/@59.3352003,18.066199,15z/data=!3m1!4b1!4m5!3m4!1s0x465f9d5b6fd25049:0x7c52e24738b70557!8m2!3d59.3352006!4d18.0749537" aria-label="Hitta till Anrika Fastigheter via Google Maps" rel="external" target="_blank">
                <div class="columns is-mobile is-narrow">
                    <div class="column is-narrow">
                        <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                    </div>
                    <div class="column is-narrow">
                        <address>
                            Grevturegatan 6
                            <br/>114 46 Stockholm
                        </address>
                    </div>
                </div>
            </a>
            <!--TELEFON-->
            <a href="tel:+46707343434" aria-label="Ring Anrika Fastigheter">
                <div class="columns is-mobile">
                    <div class="column is-narrow">
                        <i class="fa-solid fa-phone" aria-hidden="true"></i>
                    </div>
                    <div class="column is-narrow">
                        <p>070 734 34 34</p>
                    </div>
                </div>
            </a>
            <!--MEJL-->
            <a href="mailto:info@anrika.se" aria-label="Mejla Anrika Fastigheter">
                <div class="columns is-mobile">
                    <div class="column is-narrow">
                        <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div class="column is-narrow">
                        <p>info@anrika.se</p>
                    </div>
                </div>
            </a>
        </div>
        <!--FÖLJ OSS-->
        <div class="column is-2-tablet footer-container">
            <h2>FÖLJ OSS</h2>
            <div class="columns is-mobile">
                <div class="column is-narrow">
                    <a href="https://www.facebook.com/" aria-label="Följ Anrika Fastigheter på Facebook" rel="external" target="_blank">
                        <i class="fa-brands fa-facebook" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="column is-narrow">
                    <a href="https://www.instagram.com/" aria-label="Följ Anrika Fastigheter på Instagram" rel="external" target="_blank">
                        <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <!--LOGGA-->
        <div class="column is-3-tablet footer-logo">
                <a href="${r}">
                    <img src="${r}./pictures/black-logo.png"
                        alt="Anrika Fastigheters logga, länk till startsida"
                    />
                </a>
        </div>
    </div>
    <p class="header--footer has-text-centered">© ANRIKA FASTIGHETER 2022</p>
</div>
`;let u=document.querySelector("#header"),s="/Real-Estate-website/";u.innerHTML=`
<nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <!--Logga-->  
        <a class="navbar-item nav-logo" href="/">
            <img src="${s}./pictures/logo-text.png" alt="Anrika Fastigheters logga, länk till startsida"/>
        </a>   
        <!--Hamburgaremeny-->  
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    
    <div id="navbarBasicExample" class="navbar-menu">
        <ul class="navbar-start">
            <li>
                <a class="navbar-item page" href="${s}">
                    HEM
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="${s}./properties/">
                    TILL SALU
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="${s}./sell/">
                    SÄLJ MED OSS
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="${s}./testimonials/">
                    SÅLDA OBJEKT
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="${s}./contact/">
                    KONTAKT
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="${s}./about/">
                    OM OSS
                </a>
            </li>
        </ul>
    </div>
</nav>`;
