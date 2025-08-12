import { Component, NgZone, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @ts-ignore
import Mirador from 'mirador/dist/es/src/index';
// @ts-ignore
import textOverlayPlugin from 'mirador-textoverlay/es/index';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected title = 'mirador-performance';

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(async () => {
      const manifestUrl =
        'https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb11163886/manifest';

      const config = {
        id: 'mirador',
        window: {
          textOverlay: {
            enabled: true,
            selectable: false,
            visible: true,
          },
        },
        windows: [
          {
            manifestId: manifestUrl,
          },
        ],
      };

      Mirador.viewer(config, [...textOverlayPlugin]);
    });
  }
}
