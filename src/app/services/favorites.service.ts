import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: {};

  constructor() {
    const userFavorite = localStorage.getItem('favorite');
    this.favorites = userFavorite ? JSON.parse(userFavorite) : {};
  }

  getFavorites(): object {
    return this.favorites;
  }

  toggleFavorite(id: number): void {
    this.favorites[id]
      ? (this.favorites[id].isFavorite = !this.favorites[id].isFavorite)
      : (this.favorites[id] = { isFavorite: true });

    this.saveFavorites(this.favorites);
  }

  saveFavorites(favoritesObj: object) {
    // save to local storage;
    localStorage.setItem('favorite', JSON.stringify(favoritesObj));
  }
}
