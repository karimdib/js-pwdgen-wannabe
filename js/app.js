let username
username = prompt("Qual'è il tuo nome?")
console.log(username)

let surname
surname = prompt("Qual'è il tuo cognome?")
console.log(surname)


let usercolor
usercolor = prompt("Qual'è il tuo colore preferito?")
console.log(usercolor)


let usernumber
usernumber = Math.floor(Math.random()*100);
console.log(usernumber)


let concatenatedData
concatenatedData = username + surname + usercolor + usernumber 
console.log(concatenatedData)

const dataDomElement = document.getElementById("password")
console.dir(dataDomElement)
dataDomElement.innerHTML = concatenatedData
