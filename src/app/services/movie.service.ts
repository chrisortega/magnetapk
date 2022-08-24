import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  providers = {
    yify:{"api":"https://yts.mx/api/v2/list_movies.json?query_term="}
  }
  

  
  searchInYify(searchString:string){
    return fetch(this.providers.yify.api + searchString)
  }
  GetLatets(){
    return fetch(this.providers.yify.api)
  }

}
