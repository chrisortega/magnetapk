import { Component } from '@angular/core';
import { PubsubService } from '../services/pubsub.service';
import { TorrentsService } from '../services/torrents.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  movies:[any]
  searchString:string = ""

  constructor(private searchtorrensts:TorrentsService,private pubsub:PubsubService) { }

  ngOnInit(): void {
  }

  perform_searchs(){
    this.searchtorrensts.searchOn(this.searchString)
    .then(res => res.json())
    .then(res=> this.movies = res)
  }

  publish(magnet:string){
    var r = confirm("This will download the torrent")
    if (r){
      this.pubsub.cloud_publisher_function(magnet)
    }
    
    }
}
