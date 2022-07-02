document.getElementById("main").remove()
// const main = document.getElementById("main")

// main.remove()

// console.log(main)

 const newHeader = document.createElement("h1")
 newHeader.id = "victory"
 console.log(newHeader)
 
// main.append(newHeader)
newHeader.textContent = "YOUR-NAME is the champion"
document.body.append(newHeader)