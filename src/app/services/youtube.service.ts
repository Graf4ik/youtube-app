import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { VideoDetail } from '../models/video-detail.model';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey: string = 'AIzaSyBwgDlqnn_8-Rfltubs4zOWuGeeCjQCHXo';
  url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + 
    '&channelId=UCMCgOm8GZkHp8zJ6l7_hIuA&order=date&part=snippet &type=video,id&maxResults=20'

  constructor(public http: HttpClient) { }

  public getVideos(): Observable<VideoDetail[]> {
  return this.http.get<VideoDetail[]>(this.url).pipe(map(response => {
    return response['items'].map(video => {
      return new VideoDetail({
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnailUrl: video.snippet.thumbnails.medium.url
      });
    });
  }));
}

	getVideo(id: number): Observable<VideoDetail[]> {
		return this.http.get<any>(`${this.url}/${id}`);
  }
  
}
