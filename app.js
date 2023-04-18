const correctAnswers = ['B', 'B', 'B','A'];
const form = document.querySelector('.quiz-form');
const results = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 25;
    }
  });

  // log the score to console
  console.log(score);

  // Showing results
  scrollTo(0,0);

  results.classList.remove('d-none');


  let output = 0;
  const timer = setInterval(() =>{
    results.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer)
    }else{
      output++;
    }
  },23)


});

