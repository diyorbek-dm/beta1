function percent(sum, percent, year) {
  return Math.floor(sum * percent * year) / 100
}

function date() {
  let now = new Date()
  const month = now.getMonth()
  const week = now.getDay()
  const day = now.getDay()
  const year = now.getFullYear()
  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()

  return `${year}-${month}-${day}  ${hour}:${minute}:${second}`
}

document.getElementById('button-end').addEventListener('click', function () {
  let sum = document.getElementById('sum')
  let year = document.getElementById('lend')
  let sumError = document.getElementById('sum-error')
  let lendError = document.getElementById('lend-error')

  if (sum.value == '') {
    sumError.innerHTML = 'Enter a sum'
    sum.style.border = '2px solid red'
  } else if (year.value == '') {
    lendError.innerHTML = 'Enter a year'
    year.style.border = '2px solid red'
  } else {
    sumError.innerHTML = ''
    sum.style.border = '2px solid green'

    lendError.innerHTML = ''
    year.style.border = '2px solid green'

    document.getElementById('res').innerHTML = `${percent(sum.value, 4, year.value)}$`

    console.log(date())

    console.log(localStorage.getItem('name'))
    console.log(localStorage.getItem('password'))
  }
})