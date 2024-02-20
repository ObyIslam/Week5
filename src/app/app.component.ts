import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { Movie } from './movie.model';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddMovieComponent,ListMoviesComponent,MovieDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'week5';

  public mySelectedMovie!:Movie;

  setSelectedMovie(movie:Movie){
    this.mySelectedMovie=movie;
  }
}
