import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { PubsubService } from 'src/app/services/pubsub.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies:any[] = []
  latests:any[] = []
  searchString:string = ""
  constructor(private searchtorrensts:MovieService,private pubsub:PubsubService) { }



  publish(magnet:string){
    var r = confirm("This will download the torrent")
    if (r){
      this.pubsub.cloud_publisher_function(magnet)
    }
    
    }
  perform_searchs(){
    this.searchtorrensts.searchInYify(this.searchString)
    .then(res =>  res.json())
    .then(res=>(this.movies = res.data.movies))
  }

  ngOnInit() {
    this.searchtorrensts.GetLatets()
    .then(res =>  res.json())
    .then(res=>(this.latests = res.data.movies))    
  }

}
