const img_contraste=document.getElementById("contraste")
const caixa=document.querySelector(".container")
const naveg=document.getElementById("naveg")
const title=document.querySelector("h1")
const opc=[...document.querySelectorAll(".opc")]
const titulo=document.querySelector(".titulo")
const subt=[...document.querySelectorAll("h3")]
const span=[...document.querySelectorAll("span")]
const table=[...document.querySelectorAll(".border")]
const rodape=document.getElementById("rod")

img_contraste.addEventListener("click", ()=>{
    caixa.classList.toggle("mudar_cor")
    naveg.classList.toggle("mudar_cor")
    title.classList.toggle("title_cont")
    img_contraste.classList.toggle("back_cont")
    titulo.classList.toggle("title_cont")
    subt.map((el)=>{
        el.classList.toggle("title_cont")
    })
    span.map((el)=>{
        el.classList.toggle("title_cont")
    })
    table.map((el)=>{
        el.classList.toggle("img_cont")
    })
    rodape.classList.toggle("title_cont")

    title.classList.remove("somb")
    opc.map((el)=>{
        el.classList.remove("back")
        el.classList.toggle("nav_cont")
    })
})
