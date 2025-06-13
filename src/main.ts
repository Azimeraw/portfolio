import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { ExperienceComponent } from './components/experience.component';
import { SkillsComponent } from './components/skills.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-experience></app-experience>
        <app-skills></app-skills>
        <app-contact></app-contact>
      </main>
      <app-footer></app-footer>
    </div>
  `
})
export class App {
}

bootstrapApplication(App);