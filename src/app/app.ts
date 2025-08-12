import { Component, NgZone, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @ts-ignore
import Mirador from 'mirador/dist/es/src/index';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'mirador-performance';

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(async () => {
      const manifestUrl =
        'https://iiif.io/api/cookbook/recipe/0001-mvm-image/manifest.json';

      const config = {
        id: 'mirador',

        windows: [
          {
            manifestId: manifestUrl,
          },
        ],
      };

      const miradorInstance = Mirador.viewer(config);
    });
  }
}
