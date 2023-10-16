
function customRander(randerContent, contaiiner){
    const tempContainer=document.createElement(randerContent.type);
    tempContainer.innerHTML=randerContent.chidren;

    // tempContainer.setAttribute('href',randerContent.probs.href)
    // tempContainer.setAttribute('target',randerContent.probs.target)

    for(const p in randerContent.probs){
        tempContainer.setAttribute(p,randerContent.probs[p]);
    }
    
    contaiiner.appendChild(tempContainer);
}


const customContainer={
    type: 'a',
    probs:{
        href:"https://google.com",
        target:"_blank"
    },
    chidren:"Visit Google"
}

const contaiiner=document.getElementById("root");

customRander(customContainer,contaiiner)

