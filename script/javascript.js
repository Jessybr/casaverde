const imagens = document.querySelectorAll('.rdsocial')
const addimagem = document.querySelector('#addimagem')
const img_nova = document.createElement('img')
const input_novo = document.createElement('input')

for ( novaimagem of imagens ){
    novaimagem.addEventListener('click',
        function() { FunAddImg( this.src, this.alt ) }
    )
}

function FunAddImg( novosrc, novoalt ){
    img_nova.setAttribute('src', novosrc)
    img_nova.setAttribute('alt', novoalt)
    img_nova.setAttribute('title', novoalt)
    addimagem.appendChild(img_nova)

    

    input_novo.setAttribute('type', 'text')
  
    input_novo.setAttribute('value', novoalt)
    input_novo.setAttribute('disabled', 'true')
    input_novo.setAttribute('class', 'input_novo')
    addimagem.appendChild(input_novo)

    
}