//EJERCICIO 3
function Dieta(){
    let Comida = ['vegetal','animal','insecto']
    let nombre = ['carne', 'verduras', 'pasta']
    let energia = [150,240,430,310,400]

    let alimentos = []
    for (let i=0; i<50; i++){
        let alimento = {}

        alimento.nombre = nombre[Math.floor(Math.random()*nombre.length)]
        alimento.Comida = Comida[Math.floor(Math.random()*Comida.length)]
        alimento.energia = energia[Math.floor(Math.random()*energia.length)]

        alimentos.push(alimento)
    }

    let filtro = alimentos.filter(alimento => alimento.energia > 200 && alimento.Comida == "vegetal")

    console.log(filtro)
    console.log(filtro.length)
}

Dieta() 