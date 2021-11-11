let question = document.querySelector("#question")
let options = document.querySelector("#options")

const questions = [{
      question: "What the capital of France?",
      options: ["Paris", "Bordeaux", "Lyon"],
      answer: "Paris"
   },
   {

      question: "When was the big bankrupcy?",
      options: ["2008", "1933"],
      answer: "2008"

   },

   {

      question: "What is H2O?",
      options: ["Saltpeter", "Water"],
      answer: "Water"

   },

   {

      question: "Who is Timothée Chamale?",
      options: ["Actor", "Politician", "Dancer"],
      answer: "Actor"

   },

   {

      question: 'Who said? "Give me liberty, or give me death?"',
      options: ["George Washington", "Patrcik Henry", "Thomas Jefferson"],
      answer: "Patrcik Henry"

   }

]

let questionNum = 0
let correct = 0

document.addEventListener("DOMContentLoaded", () => {
   bringQuestions()

})


function bringQuestions() {

   question.innerHTML = questions[questionNum].question
   options.innerHTML = ""
   for (const option of questions[questionNum].options) {
      options.innerHTML += `<button class="option">${option}</button>`

   }


   document.querySelectorAll(".option").forEach(option => {

      option.onclick = () => {
         if (option.textContent == questions[questionNum].answer && questionNum < 5) 
         {
            questionNum++
            correct++
         }
         else{
            questionNum++

         }

         if (questionNum != 5) 
         {

            bringQuestions()
         }
         else {
            question.style.display = "none"
            options.style.display = "none"
            document.querySelector("#correct").textContent = "Final score: "+ correct + " out of " + questionNum
         }




      }
   })

}