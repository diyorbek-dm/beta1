document.getElementById('button').addEventListener('click', function () {
  let text = document.getElementById('inputText')
  let password = document.getElementById('inputPassword')
  let textError = document.getElementById('text-error')
  let passwordError = document.getElementById('password-error')

  if (text.value == '') {
    text.style.border = '2px solid #FE5252'
    textError.innerHTML = 'Please, enter your name'
  } else if (password.value == '') {
    password.style.border = '2px solid #FE5252'
    passwordError.innerHTML = 'Please, enter your password'
  } else {
    password.style.border = '2px solid #42CF36'
    passwordError.innerHTML = ''

    text.style.border = '2px solid #42CF36'
    textError.innerHTML = ''

    document.getElementById('link').hidden = false
  }

  text = text.value 
  localStorage.setItem('name', text)

  password = password.value
  localStorage.setItem('password', password)
})