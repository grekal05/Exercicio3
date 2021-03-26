import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gifsService: GifsService) { }
  s: string;
  gifs: any = [];

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.s = params['s'];

      this.gifsService.getGifs(this.s).subscribe(gifs => {
        console.log(gifs);
        this.gifs = gifs;
      });
    });
  }

}
