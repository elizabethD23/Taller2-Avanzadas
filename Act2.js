//EJERCICIO 2
function filtrarPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,buscarPlanos){
    setTimeout(function(){
        let planos = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]

        let planosFiltrados = planos.filter(function(plano){
            return (plano <= 10)
        })

        console.log(planosFiltrados)
        buscarPlanos(planosFiltrados)
    },3000)
}

// Llamando a la funcion principal
filtrarPlanos(50,70,10,1,16,0,53,3,13,45,function(planos){
    if (planos.length > 0){
        console.log("Despegue")
    }
    else{
        console.log("Continua buscando el plano")
    }
})