import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styles: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

	videos: any[] = [];
	constructor(private youtubeService: YoutubeService,
				private favoriteService: FavoritesService) { }

	ngOnInit(): void {

		const favorites = this.favoriteService.getFavorites();
		for (const key in favorites) {
			if (favorites.hasOwnProperty(key)) {
				this.youtubeService.getVideos().subscribe( video => {
						this.videos.push(video)
						console.log(this.videos);
				});
			}
		}
			console.log(this.videos);
	}
}
