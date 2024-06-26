import {apiKey, apiURL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({limit = 15, keyword = 'morty', page = 0} = {}) {
  const api_URL = `${apiURL}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}
  &offset=${page * limit}&rating=G&lang=en`

  return fetch(api_URL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}