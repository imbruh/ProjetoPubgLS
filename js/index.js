

const commentArea = document.querySelector('.areaComment')
const comentario = document.querySelector('textarea')
const submit = document.querySelector('.submit')
let result=''

submit.addEventListener('click',function(){
    let nome_comment=window.prompt('Informe seu nome: ')
    
    if (nome_comment==''){
        window.alert('Nome Inválido! Comentário não enviado.')
    }
    else if (nome_comment==null){
        comentario.value=''
    }else{
        let cep_comment=window.prompt('Informe seu CEP: ','Opcional')
        let cidade
        if (cep_comment==null){
            comentario.value=''   
        }
        else if (cep_comment=='' || cep_comment=='Opcional'){
            cidade='Local Indefinido'
            result+=`<div class="comments">
                <div class="card w-100 bg-secondary">
                    <div class="card-body">
                        <h5 class="card-title user"><i class="material-icons">person</i>${nome_comment} - ${cidade}</h5>
                        <p class="card-text">${comentario.value}</p>
                </div>
                </div>
            </div>`
            commentArea.innerHTML=result        
            comentario.value=''
        }else{
            regex=/[0-9]{5}-[\d]{3}/
            regex2=/[0-9]{5}[\d]{3}/
            if(!regex.test(cep_comment) && !regex2.test(cep_comment)){
                window.alert('CEP invalido')
            }           
        cidade=getCEP(`https://viacep.com.br/ws/${cep_comment}/json/`,nome_comment,comentario)  
        }
    } 
 })


