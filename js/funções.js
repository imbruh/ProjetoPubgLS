//                            INDEX
function getCEP(url,nome,comentario) {
    fetch(url)
      .then(res => res.json())
      .then(json => showContent(json,nome,comentario))
}
function showContent(cep,nome,comentario) {
    if(cep.erro){
        cep.localidade='Local indefinido'
    }
    result+=`<div class="comments">
                <div class="card w-100 bg-secondary">
                    <div class="card-body">
                        <h5 class="card-title user"><i class="material-icons">person</i>${nome} - ${cep.localidade}</h5>
                        <p class="card-text">${comentario.value}</p>
                </div>
                </div>
            </div>`
            commentArea.innerHTML=result        
            comentario.value=''
}

function entrar(arma){
    const ar=document.querySelector(`#${arma}`)
    ar.style.display='flex'
}
function sair(arma){
    const ar=document.querySelector(`#${arma}`)
    ar.style.display='none'
}

//                           ARMAS
function exibir(array){
    result=''
    for (i of array){
        result+=`<div class="box-arma">
                    <h4 class="card-title">${i.nome}</h4>
                    <img id="${i.nome}"src="armas/${i.tipo}/${i.nome}.png">
                    <button class="btn btn-primary bg-warning text-dark position" value="${i.nome}" onclick="status_armas('${i.nome}')">Status</button>
                </div>`                     
    }
    area.innerHTML=result
}

function status_armas(nome_da_arma){
    for (arma of ArmasList){
        if (nome_da_arma == arma.nome){
            status_arma=`<button onclick="fechar()" id="fechar-status" class="fechar">X</button>
                        <h2>${arma.nome}</h2>
                        
                        <div style="display:flex;flex-direction:row">
                            <div><span style="font-weight:bolder;">Dano:</span></div>                      
                            <div class="progress" style="width:250px;margin-left:5px;margin-top:5px;"> 
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style="width: ${arma.dano}%" aria-valuenow="${arma.dano}" aria-valuemin="0" aria-valuemax="100">${arma.dano}</div>
                            </div> 
                        </div>
                        <div class="status">Tipo da Arma: ${arma.tipo}</div>
                        <div class="status">Carregador: ${arma.carregador}</div>
                        <div class="status">Calibre: ${arma.calibre}</div>
                        <div class="status">Modo de Tiro:${arma.modo_de_tiro}</div>
                        <div class="status">Mapas Disponíveis:${arma.disponivel}</div>`
            box.innerHTML=status_arma   
            box_status.classList.add('mostrar')
        }
    }
}


function fechar(){
    box_status.classList.remove('mostrar')
}