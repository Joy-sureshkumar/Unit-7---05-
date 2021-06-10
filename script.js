
document.getElementById('button').addEventListener('click', schoolWork)
let userAge = 0

function schoolWork () {
  userAge = document.getElementById('age').value
  userAge = parseInt(userAge)

  userDate = document.getElementById('day').value

  if ((userAge < 18) && (userDate !== 'Saturday' && userDate !== 'Sunday')) {
    document.getElementById('answer').innerHTML = 'you should be at school!'
  } else if ((userAge < 18) && (userDate === 'Saturday' || userDate === 'Sunday')) {
    document.getElementById('answer').innerHTML = 'its the weekend!'
  } else if ((userAge >= 18) && (userDate !== 'Saturday' && userDate !== 'Sunday')) {
    document.getElementById('answer').innerHTML = 'You should be at work!'
  } else if ((userAge >= 18) && (userDate === 'Saturday' || userDate === 'Sunday')) {
    document.getElementById('answer').innerHTML = 'its the weekend!'
  } else {
    document.getElementById('answer').innerHTML = 'Please enter the correct format of your age and the date.'
  }
}
