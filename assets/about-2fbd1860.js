import"./Header-793bc567.js";let r="/Real-Estate-website/",a=[{name:"Erik Andersson",picture:"001.jpg",title:"VD & Grundare",email:"erik.andersson@anrika.se",description:'"Jag är en glad person som gillar att cyckla på fritiden."'},{name:"Anna Johansson",picture:"002.jpg",title:"Mäklare",email:"anna.johansson@anrika.se",description:'"Jag är en trevlig person som gillar att träffa vänner och familj."'},{name:"Margareta Karlsson",picture:"003.jpg",title:"Mäklare",email:"margareta.karlsson@anrika.se",description:'"Jag är en glad person som älskar att sälja bostäder."'},{name:"Elisabeth Nilsson",picture:"004.jpg",title:"Mäklare",email:"elisabeth.nilsson@anrika.se",description:'"Jag är en vänlig person som gärna går ut på ett glas."'},{name:"Johan Eriksson",picture:"005.jpg",title:"Ekonomi",email:"johan.eriksson@anrika.se",description:'"Jag är en norgrann person som gillar att räkna."'},{name:"Per Larsson",picture:"006.webp",title:"Ekonomi",email:"per.larsson@anrika.se",description:'"Jag är en rolig person som älskar ett bra skämt!"'}],n=document.querySelector("#employees");for(let e=0;e<a.length;e++)n.innerHTML+=`
    <article class="column is-4 has-text-centered">
        <figure class="image">
        <img src="${r}./pictures/workers/${a[e].picture}" alt="Anställd, ${a[e].name}"/>
        </figure>
        <h3>${a[e].name}</h3>
        <h4>${a[e].title}</h4>
        <p>${a[e].email}</p>
        <p>${a[e].description}</p>
    </article>`;
