import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class MoviesService {

  constructor(private http:Http) {

   }

   getMovies(query){
    return this.http.get("https://api.themoviedb.org/3/movie/" + query + "?api_key=07be893fcd01b5672ff9f2e5594b3204&")
    .map(res => res.json());
  }
  getSearch(query){
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=07be893fcd01b5672ff9f2e5594b3204&query=" + query)
    .map(res => res.json());
  }

}
