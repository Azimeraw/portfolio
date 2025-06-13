import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav class="container-max">
        <div class="flex items-center justify-between h-16">
          <div class="text-xl font-bold text-primary-600">
            Azimeraw Taye
          </div>
          <div class="hidden md:flex space-x-8">
            <a href="#about" class="text-gray-700 hover:text-primary-600 transition-colors font-medium">About</a>
            <a href="#experience" class="text-gray-700 hover:text-primary-600 transition-colors font-medium">Experience</a>
            <a href="#skills" class="text-gray-700 hover:text-primary-600 transition-colors font-medium">Skills</a>
            <a href="#contact" class="text-gray-700 hover:text-primary-600 transition-colors font-medium">Contact</a>
          </div>
          <button 
            class="md:hidden text-gray-700 hover:text-primary-600 transition-colors"
            (click)="toggleMobileMenu()"
          >
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
        
        <!-- Mobile Menu -->
        <div 
          class="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transition-all duration-300"
          [class.hidden]="!mobileMenuOpen"
        >
          <div class="py-4 space-y-4 px-4">
            <a href="#about" class="block text-gray-700 hover:text-primary-600 transition-colors font-medium" (click)="closeMobileMenu()">About</a>
            <a href="#experience" class="block text-gray-700 hover:text-primary-600 transition-colors font-medium" (click)="closeMobileMenu()">Experience</a>
            <a href="#skills" class="block text-gray-700 hover:text-primary-600 transition-colors font-medium" (click)="closeMobileMenu()">Skills</a>
            <a href="#contact" class="block text-gray-700 hover:text-primary-600 transition-colors font-medium" (click)="closeMobileMenu()">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}