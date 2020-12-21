import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeUntil } from 'rxjs/operators';
import { YoutubeService } from 'src/app/services/youtube.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos = [];
  favorites = {};
  searchStr = '';

  private unsubscribe$: Subject<any> = new Subject();

  constructor(private spinner: NgxSpinnerService, 
              private youTubeService: YoutubeService,
              private favoriteService: FavoritesService
              ) {}

  ngOnInit() {
    this.getFavorites();

    this.spinner.show()
    setTimeout(()=>
    {
      this.spinner.hide()
    },2000)
    this.youTubeService
      .getVideos()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(videos => {
        this.videos = videos 
      });
    }
    
    loadMore() {
      this.videos = this.videos.concat(this.videos)
    }

    getFavorites(): void {
      this.favorites = this.favoriteService.getFavorites();
    }
  
    favoriteToggle(id: number): void {
      this.favoriteService.toggleFavorite(id);
    }
}
