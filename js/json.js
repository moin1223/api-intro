 const student =
{ 
    id:1,
    name:"moin uddin",
    address:"Chittagong"

}

console.log(student)

const stringify = JSON.stringify(student)
console.log(stringify)
const object = JSON.parse(stringify)
console.log(object)