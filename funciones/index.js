//funciones
//Funciones expresadas
var myFunc = function(){//no recomendable

}
const myFunc2 = ()=>{//recomendable

}
//Funciones declaradas
function myFunc3(){//recomendable
    //Es el cuerpo de la función
}

//parámetros en una función 
function withParams(a,/*parámetro a*/ b/*parámetro b*/){
    console.log(a + b)
}
//llamamos la función
//withParams(2,2)//argumentos

//Parametros en función expresada
const withParams2 = function(a,b){
    console.log(a + b)
}
//withParams2(8,8)
//con arrow function
const withParams3 = (a,b)=>{
    console.log(a + b)
}
//withParams3(10, 10)

//diferencias entre function y arrow function
function fn(a,b){
    return console.log(a + b) //return explicito
}
fn(10, 10)
//función lambda
const fn2 = (a, b)=> console.log(a + b) //return implicito
fn2(10, 10)

//funciones anidadas
function anidada(){
    function fn(){
        console.log('Hola')
    }
    fn()
}
anidada()