myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json") 
myRequest.send()

myRequest.onreadystatechange  = function () {
    // console.log(myRequest.readyState)
    // console.log(myRequest.status)
    if(this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText)
    // console.log(mainData)
    for(i = 0; i < mainData.length; i++){
        let div = document.createElement("div")
        let heading = document.createElement("h2")
        let headingText = document.createTextNode(mainData[i]["theTitle"])
        heading.appendChild(headingText)
        div.appendChild(heading)
        // creating p for body
        let contentP = document.createElement("p")
        let contentPText = document.createTextNode(mainData[i]["content"])
        // append text to p and p to div
        contentP.appendChild(contentPText)
        div.appendChild(contentP)
        // creating author p
        let authorP = document.createElement("p")
        let authorPText = document.createTextNode(mainData[i]["authorName"])
        // append text to p and p to div
        authorP.appendChild(authorPText)
        div.appendChild(authorP)
        // creating p for category
        let categoryP = document.createElement("p")
        let catergorPText = document.createTextNode(mainData[i]["Department"])
        // append text to p and p to div
        categoryP.appendChild(catergorPText)
        div.appendChild(categoryP)
        document.body.appendChild(div)
    
        }
        console.log


}
}
