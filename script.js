
const textDiv = document.getElementById('text-div')
let worksArray = ["Graphics Designer", "Web Developer", "Casual Gamer"],
    animationSpeed = 33,
    animationIntervalSpeed = 1800;


let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
letters = letters.split("");
let iteration = 0;
let interval = null;
textDiv.innerText = worksArray[0];
let workInterval = setInterval(() => {
  let nextString = worksArray[iteration];
  let currentString = textDiv.innerText;
  if(currentString != nextString){
    let nextWordSlice = nextString.split("");
        wordChange(nextString, textDiv);
        function wordChange(word, target){
        let wordArray = word.split("");
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
            target.innerText = word.split("")
            .map((letter, index) => {
                if(index < iteration) {
                return  wordArray[index];
                }
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");
            
            if(iteration >=  wordArray.length){ 
            clearInterval(interval);
            }
            iteration += 1 / 2;
        }, animationSpeed);
        }
  }
  iteration++;
  if(iteration > worksArray.length - 1){ 
    iteration = 0;
  }
}, animationIntervalSpeed); 
