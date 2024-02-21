const key ='481b489761dcd790dc922f870aa3a70b'

const requests = {
    requestPopular: `http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestRecommendation: `https://api.themoviedb.org/3/movie/3/recommendations?api_key=${key}&language=en-US&page=2`
}
export default requests
