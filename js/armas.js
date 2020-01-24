const area = document.querySelector('.linha')
const BuscaNome = document.querySelector('#filter-nome')
const SelecionarTipo= document.querySelector('#filter-type')

exibir(ArmasList)

//Buscar arma por nome
BuscaNome.addEventListener('keyup',function(){
    if(BuscaNome.value==''){
        if (SelecionarTipo.value=='Todos'){
            exibir(ArmasList)
            
        }else{
            filter=ArmasList.filter(a=>a.tipo.includes(SelecionarTipo.value))
            exibir(filter)
            
        }
    }else if (SelecionarTipo.value=="Todos"){
        filter=ArmasList.filter(a=> a.nome.includes(BuscaNome.value))
        exibir(filter)
    }
    else{
        filter=ArmasList.filter(a=> a.nome.includes(BuscaNome.value))
        filtro=filter.filter(a=>a.tipo.includes(SelecionarTipo.value))
        exibir(filtro)
    }
    if (event.key == 'Escape'){
        BuscaNome.value=''
        SelecionarTipo.value="Todos"
        exibir(ArmasList)
    }
})

//Filtrar armas por tipo
SelecionarTipo.addEventListener('click',function(){
    if (SelecionarTipo.value=="Todos"){
        exibir(ArmasList)
    }else{
        const filtro=ArmasList.filter(arma=>arma.tipo.includes(SelecionarTipo.value))
        exibir(filtro)
    }
})

// Exibir status
const buttons = document.querySelectorAll('.btn')
const box_status = document.querySelector('#box-status')
const box = document.querySelector('.box')
const background= document.querySelector('.container-armas')

