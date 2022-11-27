let addClass = document.getElementsByClassName("classes-to-add")[0]
let removeClass = document.getElementsByClassName("classes-to-remove")[0]
let current = document.getElementsByClassName("element current")[0]
let container = document.querySelector(".assign .classes-list div")



addClass.onblur = function() {
  container.innerHTML = ""
  let inputVal = addClass.value
  if(!isEmpty(inputVal)) {
    // convert to lower case
    inputVal = inputVal.toLowerCase()
    console.log(inputVal)
    // Converted to array
    let inputValArr = inputVal.split(" ")
    console.log(inputValArr)
    addElmentsToDom(inputValArr)
    // Clear content
    addClass.value = ""
  } else{
    container.innerHTML = "No Classes To Show"
  }
  
  console.log(addClass.value)
}

function addElmentsToDom(inputValArr) {
    inputValArr.sort()
    console.log(`sort ${inputValArr}`)
    for(let i = 0; i < inputValArr.length; i++){
      let span = document.createElement("span")
      span.innerHTML = inputValArr[i]
      container.appendChild(span)
    }
}


function isEmpty(value) {
  return value === "" || value === null || value.length === 0;
}

removeClass.onblur = function () {
  for(i = 0; i < container.children.length; i++){
    let removedValue = removeClass.value
    if(removedValue === container.children[i].innerHTML){
      // remove the child
      container.children[i].remove()
      removeClass.value = ""
    }

    }

}


//
/**
 * 
 * Ensure that the user write somthing
 * event => onblur => add what tis written
 * turn words to lower case
 * if there is any space between words => two classes
 * when get out from the field remove what written
 * function => 1- show classes when onleave
 * 2- rearrangement 
 * 3- if there is no classes show message no classes to show
 * 
 */