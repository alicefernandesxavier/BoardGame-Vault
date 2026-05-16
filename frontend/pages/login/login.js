import { login } from '../../shared/services/auth'

const form = document.querySelector('#form')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = form.email.value
  const password = form.password.value

  const data = await login(email, password)

  console.log(data)
})