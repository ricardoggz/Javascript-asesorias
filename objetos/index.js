//1._objetos literales
const user = {
    name: 'Ricardo Guevara',
    email: 'ricardo@email.com',
    address: 'Ciudad de México',
    age: 23,
    getInfo: ()=>{
        return console.log(`${name} ${email}`)
    }
}
//2._objetos a partir de una clase
class User{
    name
    email
    address
    age
    constructor(name, email, address, age){
        this.name = name
        this.email = email
        this.address = address
        this.age = age
    }
    getInfo(){
        return console.log(`${this.name} ${this.email}`)
    }
}

const user2 = new User('Ricardo', 'email@email.com', 'Ciudad de México', 23)
user2.getInfo()
const user3 = new User('Alexis', "alexis@hotmail.com", 'Ciudad d México', 20)
user3.getInfo()