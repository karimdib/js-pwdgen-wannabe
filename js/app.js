let userName
userName = prompt("Qual'è il tuo nome?")
console.log(userName)

let surName
surName = prompt("Qual'è il tuo cognome?")
console.log(surName)


let userColor
userColor = prompt("Qual'è il tuo colore preferito?")
console.log(userColor)


let userNUmber
userNUmber = prompt("Digita un numero da uno 1 a 100")
console.log(userNUmber)


let sumData 
sumData =  surName + userColor + userNUmber + userName 
console.log(sumData)

const dataDomElement = document.getElementById("x")
console.dir(dataDomElement)
dataDomElement.innerHTML = sumData