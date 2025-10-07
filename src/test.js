


const words = {}
const button = document.getElementsByClassName("answer-input-wrapper accentable")[0].querySelector("#check-button")

document.addEventListener('keydown', function(event) {

    if (event.keyCode === 38) {
  
       words[document.getElementsByClassName("assignment-head")[0].innerText]=document.getElementById("assignment-answer-input").value
      console.log(words)
      button.click()
  
    }
  
  });