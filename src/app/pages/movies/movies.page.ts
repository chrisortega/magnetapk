import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies:any[] = []
  searchString:string = ""
  constructor(private movieservice:MovieService) { }

  searchForMovies(){
    this.movieservice.getYifiMovies(this.searchString)
    .then(res=>console.log(res))
  }

  ngOnInit() {
  }

}
