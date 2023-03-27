let listaDeCompras = ['Arroz', 'Feijao', 'Suco']; 

const listaDeItems = {
    item1: 'Suco',
    item2: 'Arroz',
    quantidade1: 2,
    quantidade2: 3,
    mostrarItens : function(){
        alert('comprei ' + listaDeItems.quantidade1 + ' pacotes de  ' + listaDeItems.item1);
    }
}

listaDeItems.mostrarItens()