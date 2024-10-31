/**Auto-generated by: https://github.com/angular-threejs/gltf
Command: npx angular-three-gltf&#64;1.0.5 public/67219b35aa658e812daccbd7.glb -o src/app/experience/avatar.ts --selector avatar --transform
**/

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  inject,
  input,
  signal,
  Signal,
  viewChild,
} from '@angular/core';
import {
  extend,
  injectBeforeRender,
  NgtArgs,
  NgtGroup,
  NgtObjectEvents,
  NgtObjectEventsInputs,
  NgtObjectEventsOutputs,
} from 'angular-three';
import { injectFBX, injectGLTF } from 'angular-three-soba/loaders';
import { injectAnimations } from 'angular-three-soba/misc';
import type * as THREE from 'three';
import { Bone, Group, SkinnedMesh } from 'three';
import { GLTF } from 'three-stdlib';
import { playAudio } from '../play-audio';

type GLTFResult = GLTF & {
  nodes: {
    Wolf3D_Headwear: THREE.SkinnedMesh;
    Wolf3D_Body: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    Wolf3D_Headwear: THREE.MeshStandardMaterial;
    Wolf3D_Body: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
  };
};

const mouthCuesMap: Record<string, string> = {
  A: 'viseme_PP',
  B: 'viseme_kk',
  C: 'viseme_I',
  D: 'viseme_aa',
  E: 'viseme_O',
  F: 'viseme_U',
  G: 'viseme_FF',
  H: 'viseme_TH',
  X: 'viseme_PP',
};

@Component({
  selector: 'app-avatar',
  standalone: true,
  template: `
    @if (gltf(); as gltf) {
      <ngt-group #model [parameters]="options()">
        <ngt-group name="Armature" [userData]="{ name: 'Armature' }">
          <ngt-primitive #bone *args="[gltf.nodes.Hips]" />
          <ngt-skinned-mesh
            [geometry]="gltf.nodes.Wolf3D_Headwear.geometry"
            [material]="gltf.materials.Wolf3D_Headwear"
            [skeleton]="gltf.nodes.Wolf3D_Headwear.skeleton"
          />
          <ngt-skinned-mesh
            [geometry]="gltf.nodes.Wolf3D_Body.geometry"
            [material]="gltf.materials.Wolf3D_Body"
            [skeleton]="gltf.nodes.Wolf3D_Body.skeleton"
          />
          <ngt-skinned-mesh
            [geometry]="gltf.nodes.Wolf3D_Outfit_Bottom.geometry"
            [material]="gltf.materials.Wolf3D_Outfit_Bottom"
            [skeleton]="gltf.nodes.Wolf3D_Outfit_Bottom.skeleton"
          />
          <ngt-skinned-mesh
            [geometry]="gltf.nodes.Wolf3D_Outfit_Footwear.geometry"
            [material]="gltf.materials.Wolf3D_Outfit_Footwear"
            [skeleton]="gltf.nodes.Wolf3D_Outfit_Footwear.skeleton"
          />
          <ngt-skinned-mesh
            [geometry]="gltf.nodes.Wolf3D_Outfit_Top.geometry"
            [material]="gltf.materials.Wolf3D_Outfit_Top"
            [skeleton]="gltf.nodes.Wolf3D_Outfit_Top.skeleton"
          />
          <ngt-skinned-mesh
            name="EyeLeft"
            [geometry]="gltf.nodes.EyeLeft.geometry"
            [material]="gltf.materials.Wolf3D_Eye"
            [skeleton]="gltf.nodes.EyeLeft.skeleton"
            [morphTargetDictionary]="gltf.nodes.EyeLeft.morphTargetDictionary"
            [morphTargetInfluences]="gltf.nodes.EyeLeft.morphTargetInfluences"
          />
          <ngt-skinned-mesh
            name="EyeRight"
            [geometry]="gltf.nodes.EyeRight.geometry"
            [material]="gltf.materials.Wolf3D_Eye"
            [skeleton]="gltf.nodes.EyeRight.skeleton"
            [morphTargetDictionary]="gltf.nodes.EyeRight.morphTargetDictionary"
            [morphTargetInfluences]="gltf.nodes.EyeRight.morphTargetInfluences"
          />
          <ngt-skinned-mesh
            name="Wolf3D_Head"
            [geometry]="gltf.nodes.Wolf3D_Head.geometry"
            [material]="gltf.materials.Wolf3D_Skin"
            [skeleton]="gltf.nodes.Wolf3D_Head.skeleton"
            [morphTargetDictionary]="gltf.nodes.Wolf3D_Head.morphTargetDictionary"
            [morphTargetInfluences]="gltf.nodes.Wolf3D_Head.morphTargetInfluences"
          />
          <ngt-skinned-mesh
            name="Wolf3D_Teeth"
            [geometry]="gltf.nodes.Wolf3D_Teeth.geometry"
            [material]="gltf.materials.Wolf3D_Teeth"
            [skeleton]="gltf.nodes.Wolf3D_Teeth.skeleton"
            [morphTargetDictionary]="gltf.nodes.Wolf3D_Teeth.morphTargetDictionary"
            [morphTargetInfluences]="gltf.nodes.Wolf3D_Teeth.morphTargetInfluences"
          />
        </ngt-group>

        <ng-content />
      </ngt-group>
    }
  `,
  imports: [NgtArgs],
  hostDirectives: [{ directive: NgtObjectEvents, inputs: NgtObjectEventsInputs, outputs: NgtObjectEventsOutputs }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Avatar {
  protected readonly Math = Math;

  options = input({} as Partial<NgtGroup>);

  private modelRef = viewChild<ElementRef<Group>>('model');
  private boneRef = viewChild<ElementRef<Bone>>('bone');

  protected gltf = injectGLTF(() => '/67219b35aa658e812daccbd7-transformed.glb', {
    useDraco: true,
  }) as unknown as Signal<GLTFResult | null>;

  private objectEvents = inject(NgtObjectEvents, { host: true });

  constructor() {
    extend({ Group, SkinnedMesh });

    const fbxModels = injectFBX(() => ({
      Breathing: './Breathing Idle.fbx',
      Stretching: './Arm Stretching.fbx',
    }));
    const fbxAnimations = computed(() => {
      const models = fbxModels();
      if (!models) return null;

      const breathingIdle = models.Breathing.animations[0];
      breathingIdle.name = 'Breathing';

      const armStretching = models.Stretching.animations[0];
      armStretching.name = 'Stretching';

      return [breathingIdle, armStretching];
    });

    const animationHost = computed(() => (this.boneRef() ? this.modelRef() : null));
    const animations = injectAnimations(fbxAnimations, animationHost);

    const lipSync = signal<Record<string, any> | null>(null);
    const animation = signal('Stretching');
    const audio = new Audio('/nx-cloud-speech.mp3');

    injectBeforeRender(() => {
      const [_lipSync, gltf] = [lipSync(), this.gltf()];
      if (!_lipSync || !gltf) return;

      if (!playAudio()) return;

      if (!('mouthCues' in _lipSync)) return;

      const head = gltf.nodes.Wolf3D_Head;
      const teeth = gltf.nodes.Wolf3D_Teeth;

      if (
        !head.morphTargetInfluences ||
        !head.morphTargetDictionary ||
        !teeth.morphTargetDictionary ||
        !teeth.morphTargetInfluences
      )
        return;

      const { morphTargetDictionary: headTargetDictionary, morphTargetInfluences: headTargetInfluences } = head;
      const { morphTargetDictionary: teethTargetDictionary, morphTargetInfluences: teethTargetInfluences } = teeth;

      Object.values(mouthCuesMap).forEach((target) => {
        headTargetInfluences[headTargetDictionary[target]] = 0;
        teethTargetInfluences[teethTargetDictionary[target]] = 0;
      });

      const currentAudioTime = audio.currentTime;
      for (let i = 0; i < _lipSync['mouthCues'].length; i++) {
        const mouthCue = _lipSync['mouthCues'][i];
        if (mouthCue.start <= currentAudioTime && mouthCue.end >= currentAudioTime) {
          headTargetInfluences[headTargetDictionary[mouthCuesMap[mouthCue.value]]] = 1;
          teethTargetInfluences[teethTargetDictionary[mouthCuesMap[mouthCue.value]]] = 1;
          break;
        }
      }
    });

    effect(() => {
      fetch('/nx-cloud-speech.json')
        .then((res) => res.json())
        .then((json) => {
          lipSync.set(json);
        });
    });

    effect(() => {
      if (!playAudio()) {
        audio.pause();
      } else {
        void audio.play();
      }
    });

    effect((onCleanup) => {
      if (!animations.ready()) return;

      const action = animations.actions[animation()];
      if (!action) return;

      // TODO: not sure why fadeIn doesn't work
      // action.reset().fadeIn(0.5).play();
      action.reset().play();
      onCleanup(() => action.fadeOut(0.5));
    });

    effect(
      () => {
        const modelRef = this.modelRef()?.nativeElement;
        if (!modelRef) return;

        this.objectEvents.ngtObjectEvents.set(modelRef);
      },
      { allowSignalWrites: true },
    );
  }
}
