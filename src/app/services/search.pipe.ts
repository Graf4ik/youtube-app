import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(videos, search: string = '') {
        
        if (!search.trim()) {
            return videos
          }

        return videos.filter(video => {
            return video.snippet.title.toLowerCase().includes(search.toLowerCase())
          })
    }
}