const API_URL = 'http://localhost:3000'

export async function api(path, options = {}) {
  const token = localStorage.getItem('token')

  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
      ...options.headers
    },

    ...options
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Erro na requisição')
  }

  return response.json()
}