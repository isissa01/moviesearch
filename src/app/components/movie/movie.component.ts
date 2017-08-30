import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: string;
  details : {}

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.id = params['id'];
      console.log(this.id);
      this.moviesService.getMovies(this.id).subscribe((details)=>{
        this.details = details;
        console.log(this.details);
      });

    });
  }

}
