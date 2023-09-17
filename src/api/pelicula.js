export class Pelicula{
    static API = 'https://www.omdbapi.com/?apikey=95ad37d6';
    static DEFAULT_SEARCH = 'Batman';
    static DEFAULT_PAGE = 1;

    static async searchMovies(movie,page){

        let movieSearch = movie ? encodeURIComponent(movie):Pelicula.DEFAULT_SEARCH;
        let pageSearch = page ? encodeURIComponent(page):Pelicula.DEFAULT_PAGE;

        let request = await fetch(Pelicula.API + `&s=${movieSearch}&page=${pageSearch}`);        
        return new Promise((resolve,reject)=>{
            resolve(request);
        })
    }

    static async getDetailsById(id){
        
        if(id instanceof Number){
            return false;
        }
        let request = await fetch(Pelicula.API + `&i=${id}`);        
        return new Promise((resolve,reject)=>{
            resolve(request);
        })
    }
    
}