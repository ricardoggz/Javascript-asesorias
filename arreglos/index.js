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