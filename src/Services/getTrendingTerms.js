import {apiKey, apiURL} from './settings'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  return data
}

export default function getTrendingTerms () {
  const api_URL = `${apiURL}/trending/searches?api_key=${apiKey}`

  return fetch(api_URL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}