import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  yifi_movies = ""
  constructor() { }
  
  getYifiMovies(searchString:string){
    
    return fetch(this.yifi_movies)        
  }
}
