import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { PubsubService } from '../services/pubsub.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
