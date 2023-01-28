let header = document.querySelector("#header");
let base = import.meta.env.BASE_URL;


header.innerHTML = `
<nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <!--Logga-->  
        <a class="navbar-item nav-logo" href="/">
            <img src="${base}./pictures/logo-text.png" alt="Anrika Fastigheters logga, länk till startsida"/>
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
                <a class="navbar-item page" href="${base}">
                    HEM
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="${base}./properties/">
                    TILL SALU
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="${base}./sell/">
                    SÄLJ MED OSS
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="${base}./testimonials/">
                    SÅLDA OBJEKT
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="${base}./contact/">
                    KONTAKT
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="${base}./about/">
                    OM OSS
                </a>
            </li>
        </ul>
    </div>
</nav>`