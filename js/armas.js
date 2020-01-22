//import {exibir} from './armasLista.js'

const area = document.querySelector('.linha')

exibir(ArmasList,area)


const BuscaNome = document.querySelector('#filter-nome')
const SelecionarTipo= document.querySelector('#filter-type')


BuscaNome.addEventListener('keyup',function(){
    if(BuscaNome.value==''){
        if (SelecionarTipo.value=='Todos'){
            exibir(ArmasList,area)
            
        }else{
            filter=ArmasList.filter(a=>a.tipo.includes(SelecionarTipo.value))
            exibir(filter,area)

        }
    }
    else if (SelecionarTipo.value=="Todos"){
        filter=ArmasList.filter(a=> a.nome.includes(BuscaNome.value))
        exibir(filter,area)
    }
    else{
        filter=ArmasList.filter(a=> a.nome.includes(BuscaNome.value))
        filtro=filter.filter(a=>a.tipo.includes(SelecionarTipo.value))
        exibir(filtro,area)
    }
    if (event.key == 'Escape'){
        BuscaNome.value=''
        SelecionarTipo.value="Todos"
        exibir(ArmasList,area)
    }
})


SelecionarTipo.addEventListener('click',function(){
    if (SelecionarTipo.value=="Todos"){
        exibir(ArmasList,area)
    }else{
        const filtro=ArmasList.filter(arma=>arma.tipo.includes(SelecionarTipo.value))
        exibir(filtro,area)
    }
})


// Exibir status

const buttons = document.querySelectorAll('.btn')
const box_status = document.querySelector('#box-status')
const box = document.querySelector('.box')
let status_arma=''

function status_armas(){
    for (let button of buttons){
        button.addEventListener('click',function(){
            for (arma of ArmasList){
                if (button.value == arma.nome){
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
        })
    }
}


function fechar(){
    box_status.classList.remove('mostrar')
}

