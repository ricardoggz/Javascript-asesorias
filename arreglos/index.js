//Arreglos
//Arreglo: colección de elementos
//Crear un arreglo con la instancia dela clase Array
const names = new Array("Ricardo", "Luis", "Ian", "Alexis", "Adán", "Raúl", "Emily")

//Crear un arreglo solamente con corchetes
const fruits = ["Pera", "Manzana", "Fresa"]

//Accediendo a un elemto mediante su índice
console.log(fruits[2])
console.log(names[4])

//Desesustructarión de arreglos
const [ricardo, luis] = names
console.log(ricardo)

//método map
names.map(function(name){
    //console.log(name)
})

//método forEach
names.forEach((name)=>{
    //console.log(name)
})

//diferencias
//map : crea todo arreglo
const objects = [{name : 'Ricardo'},{name: 'Alexis'}]
objects.map((object)=> console.log(object.name))
//forEach : solo recorre el arreglo
const objects2 = [{name : 'Ricardo'},{name: 'Alexis'}]
objects.forEach((object)=> console.log(object))

//recorrer un arreglo de mayor longitug
const users = [
    {
       id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      }
    },
    {
        id: 2,
         name: "Ricardo Guevara",
         username: "Bret",
         email: "Sincere@april.biz",
         address: {
         street: "Kulas Light",
         suite: "Apt. 556",
         city: "Gwenborough",
         zipcode: "92998-3874",
         geo: {
           lat: "-37.3159",
           lng: "81.1496"
         }
       }
     }      
]
//Recorrer el arreglo con map
users.map((elemento)=>console.log(elemento))
//Recorrer el arreglo con forEach
users.forEach((elemento)=>console.log(elemento))
//Recorrer el arreglo con ciclo for
for(let i = 0; i <=users.length; i++){
    console.log(users[i])
}
//Recorrer arreglo con while
let i = 0
while(i<=users.length){
    console.log(users[i])
    i++
}
//arreglos multidimensionales
const multi = [
    [
        ['Diego']
    ]
]
console.log(multi[0][0][0])
const [first] = multi
const [second] = first
console.log(second[0])