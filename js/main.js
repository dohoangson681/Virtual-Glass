import GlassService from "./GlassService.js";
let glassSerivce = new GlassService() ; 
let getEle = (id) => {
    return document.getElementById(id) ; 
}
let showUI = (array) => {
    let content = "" ; 
    array.map( (glassObject) => {
        let {id , src} = glassObject ; 
        content += `
        <div class="col-4">
            <img onclick = "addGlass('${id}')" class="img-fluid image_glass" src="${src}" alt="">
        </div>
        `;
    })
    getEle("vglassesList").innerHTML = content ; 
}
let getAPIMain = () => {
    glassSerivce.getAPI().then((success) => {
        console.log(success.data) ; 
        showUI(success.data) ; 
    }).catch((error) => {
        console.log(error) ; 
    })
}
getAPIMain() ; 
let showGlassModel = (glassObject) => {
    document.querySelector(".virtualGlass").innerHTML = `
    <img class="img-fluid " src="${glassObject.virtualImg}" alt="">
    ` ; 
    document.querySelector(".virtualGlass").classList.add("showGlass") ; 
} 
let showGlassDetails = (glassObject) => {
    let {name , brand , color , price , description} = glassObject ; 
   document.querySelector(".vglasses__info").innerHTML = `
        <p>${name} - ${brand}(${color})</p>
        <p class="btn btn-success">${price}$</p>
        <p>${description}</p>     
   ` ; 
   document.querySelector(".vglasses__info").classList.add("show") ;
}
let addGlass = (id) => {
    glassSerivce.getGlass(id).then((success) => {
        console.log(success.data) ; 
        let glassObject = success.data ; 
        showGlassModel(glassObject) ; 
        showGlassDetails(glassObject) ;
    }).catch((error) => {
        console.log(error) ; 
    })
}
window.addGlass = addGlass ; 
getEle("btnBeforeGlass").addEventListener("click" , () => {
    document.querySelector(".virtualGlass").classList.remove("showGlass") ; 
})
getEle("btnAfterGlass").addEventListener("click" , () => {
    document.querySelector(".virtualGlass").classList.add("showGlass") ; 
})


