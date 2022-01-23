const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "4b7ec3620a01d7935c70c70dd2840318",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig
