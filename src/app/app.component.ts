import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';

import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,NavbarComponent,HomeComponent, MoviesComponent, ComingSoonComponent,NewsLetterComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   movies:any[]=[
    {
      id:0,movieTitle:"venom",movieDuration:120,type:"Action",thumbnail:"../assets/m1.jpg"
    },
    {
      id:1,movieTitle:"Dunkerk",movieDuration:105,type:"Adventure",thumbnail:"../assets/m2.jpg"
    },
    {
      id:2,movieTitle:"Batman & Superman",movieDuration:100,type:"Thriller",thumbnail:"../assets/m3.jpg"

    },
    {
      id:3,movieTitle:"John Wick",movieDuration:120,type:"Adventure",thumbnail:"../assets/m4.jpg"

    },
    {
      id:4,movieTitle:"Aquaman",movieDuration:130,type:"Action",thumbnail:"../assets/m5.jpg"

    },
    {
      id:5,movieTitle:"Black Panther",movieDuration:90,type:"Thriller",thumbnail:"../assets/m6.jpg"

    },
    {
      id:6,movieTitle:"Thor",movieDuration:130,type:"Action",thumbnail:"../assets/m7.jpg"

    },
    {
      id:7,movieTitle:"Bumblebee",movieDuration:100,type:"Thriller",thumbnail:"../assets/m8.png"

    },
    {
      id:8,movieTitle:"Mortal Engines",movieDuration:100,type:"Action",thumbnail:"../assets/m9.jpg"

    },
    {
      id:9,movieTitle:"UnderWorld Blood Wars",movieDuration:100,type:"Action",thumbnail:"../assets/m10.jpg"

    },

   ]
   comingSoon:any[]=[
    {
      id:0,movieTitle:"Joney English",movieDuration:80,type:"Comedy",thumbnail:"../assets/coming1.jpg"
    },
    {
      id:1,movieTitle:"WarCrafet",movieDuration:120,type:"Action",thumbnail:"../assets/coming2.jpg"
    },
    {
      id:2,movieTitle:"Rampage",movieDuration:108,type:"Adventure",thumbnail:"../assets/coming3.jpg"
    },
    {
      id:3,movieTitle:"Airon Lady",movieDuration:120,type:"Comedy",thumbnail:"../assets/coming4.jpg"
    },
    {
      id:4,movieTitle:"Justice League",movieDuration:120,type:"Adventure",thumbnail:"../assets/coming5.jpg"
    },
    {
      id:5,movieTitle:"Doctor Strange",movieDuration:120,type:"Adventure",thumbnail:"../assets/coming6.jpeg"
    },
    {
      id:6,movieTitle:"Captain Marvel",movieDuration:120,type:"Adventure",thumbnail:"../assets/coming7.jpg"
    },
    {
      id:7,movieTitle:"Black Widow",movieDuration:90,type:"Action",thumbnail:"../assets/coming8.jpg"
    },
    {
      id:8,movieTitle:"Ant Man",movieDuration:110,type:"Adventure",thumbnail:"../assets/coming9.jpg"
    },
    {
      id:9,movieTitle:"Guardiance Of The Galaxy",movieDuration:120,type:"Adventure",thumbnail:"../assets/coming10.jpg"
    },

   ]
}
