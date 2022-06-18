//EJERCICIO 1
function PadawanAsignar(names,planeta,años,estatu,callback){
    setTimeout(function(){
        let padawans = 
            {
                nombre: names,
                planeta: planeta,
                edad: años,
                estatura: estatu
            }
        console.log(`Nombre: ${padawans.nombre} Edad: ${padawans.edad}`)
        callback(padawans)
    },10000)
}

PadawanAsignar('Eliza','Diaz',12,'1.67cm',function(padawan){
    if (padawan.edad < 15){
        console.log("Actividad: Manejo de la fuerza")
    }
    else{
        console.log("Actividad: Manejo del sable de luz")
    }
})