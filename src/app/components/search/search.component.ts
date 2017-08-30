import { MoviesService } from './../../services/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string;
  popularMovies: [Movie];
  recentReleases: [Movie];
  results: [Movie]
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    
    this.moviesService.getMovies("popular").subscribe((movies)=>{
        this.popularMovies = movies.results;
    });
    this.moviesService.getMovies("now_playing").subscribe((movies)=>{
      this.recentReleases = movies.results;
  });
  

  }
  getResults(){
    this.moviesService.getSearch(this.search).subscribe((movies)=>{
      this.results = movies.results;
      return false;

  
    });
  }

}

interface Movie {
  id: number,
  title: string,
  poster_path: string,
  overview: string,
  release_date: string
}
