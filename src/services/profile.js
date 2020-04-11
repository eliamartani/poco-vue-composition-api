import config from '@/application/config'

export async function get() {
  const { api } = config
  const response = await fetch(api.profile)
  const json = await response.json()

  if (json.results.length) {
    return json.results[0]
  }

  return json
}
