import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component } from '@angular/core';
import { NgtsEnvironment } from 'angular-three-soba/staging';
import { Avatar } from './avatar';
import { Background } from './background';

@Component({
  standalone: true,
  template: `
    <app-avatar [options]="{ position: [0, -3, 5], scale: 2 }" />

    <ngts-environment [options]="{ preset: 'sunset' }" />

    <app-background />
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Avatar, NgtsEnvironment, Background],
})
export class Experience {}
