
const img_contraste=document.getElementById("contraste")
const caixa=document.querySelector(".container")
const naveg=document.getElementById("naveg")
const rodape=document.getElementById("rod")
const princ=document.getElementById("princ")
const opc=[...document.querySelectorAll(".opc")]
const title=document.querySelector("h1")
const somb_img=[...document.querySelectorAll("img")]



img_contraste.addEventListener("click", ()=>{
    caixa.classList.toggle("mudar_cor")
    naveg.classList.toggle("mudar_cor")
    rodape.classList.toggle("title_cont")
    princ.classList.toggle("mudar_cor")
    img_contraste.classList.toggle("back_cont")
    title.classList.toggle("title_cont")

    opc.map((el)=>{
        el.classList.remove("back")
        el.classList.toggle("nav_cont")
    })
    title.classList.remove("somb")
    somb_img.map((el)=>{
        el.classList.remove("img_somb")
        el.classList.toggle("img_cont")
    })

})
