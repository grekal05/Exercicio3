import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) { }

  private api_key = 'tdPvAGDGFpN6JDD3qnOsNvdn3SkYALNf';
  private url = 'https://api.giphy.com/v1/gifs/search';
  private limit = '24';
  
  getGifs(s) {
  	let url = `${this.url}?api_key=${this.api_key}&q=${s}&limit=${this.limit}`;
  	console.log(url);
  	
  	return this.http.get(url);
  }
}
