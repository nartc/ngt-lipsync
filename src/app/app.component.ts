import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';
import { Experience } from './experience/experience';
import { playAudio } from './play-audio';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <ngt-canvas [sceneGraph]="sceneGraph" [camera]="{ position: [0, 0, 8], fov: 45 }" shadows />
    <button class="absolute left-4 top-4 rounded-md border bg-slate-200 px-4 py-2" (click)="playAudio.set(true)">
      Play
    </button>
  `,
  host: { class: 'block h-dvh w-full' },
  imports: [NgtCanvas],
})
export class AppComponent {
  protected readonly sceneGraph = Experience;
  protected readonly playAudio = playAudio;
}
