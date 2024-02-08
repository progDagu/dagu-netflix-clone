const APIKEY = `6f2286057573bd7447d6f721ab081d59`;
const network_string = (213,1024)

const requests = {
    fetchTrending : `/trending/all/day?api_key=${APIKEY}&language=US`,
    // fetchNetflixOrignals: `/discover/tv/api_key=${APIKEY}&with_network=213`,
    fetchNetflixOrignal3: `/discover/tv?api_key=${APIKEY}&with_networks=${network_string}`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies: `/movie?api_key=6f2286057573bd7447d6f721ab081d59&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorroMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10740`,
    fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}
export  default requests;