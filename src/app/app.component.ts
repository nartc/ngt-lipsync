import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <ngt-canvas [sceneGraph]="sceneGraph" [camera]="{ position: [0, 0, 8], fov: 45 }" shadows />
  `,
  host: { class: 'block h-dvh w-full' },
  imports: [NgtCanvas],
})
export class AppComponent {
  sceneGraph = Experience;
}
