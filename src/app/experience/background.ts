import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend, injectStore, NgtArgs, pick } from 'angular-three';
import { injectTexture } from 'angular-three-soba/loaders';
import { Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

@Component({
  selector: 'app-background',
  standalone: true,
  template: `
    <ngt-mesh>
      <ngt-plane-geometry *args="[width(), height()]" />
      <ngt-mesh-basic-material [map]="texture()" />
    </ngt-mesh>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgtArgs],
})
export class Background {
  protected texture = injectTexture(() => './youtubeBackground.jpg');
  private store = injectStore();

  private viewport = this.store.select('viewport');
  protected height = pick(this.viewport, 'height');
  protected width = pick(this.viewport, 'width');

  constructor() {
    extend({ Mesh, PlaneGeometry, MeshBasicMaterial });
  }
}
