import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-950 text-white py-8">
      <div class="container-max">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="text-center md:text-left mb-4 md:mb-0">
            <p class="text-gray-400">
              © {{ currentYear }} Azimeraw Taye. All rights reserved.
            </p>
          </div>
          
          <div class="flex space-x-6">
            <a 
              href="mailto:azimerawsoftware@gmail.com" 
              class="text-gray-400 hover:text-primary-400 transition-colors"
              title="Email"
            >
              <i class="fas fa-envelope text-xl"></i>
            </a>
            <a 
              href="https://linkedin.com/in/azimeraw" 
              target="_blank" 
              class="text-gray-400 hover:text-primary-400 transition-colors"
              title="LinkedIn"
            >
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="tel:+251924978182" 
              class="text-gray-400 hover:text-primary-400 transition-colors"
              title="Phone"
            >
              <i class="fas fa-phone text-xl"></i>
            </a>
          </div>
        </div>
        
        <div class="mt-6 pt-6 border-t border-gray-800 text-center">
          <p class="text-gray-500 text-sm">
            Develop using Angular and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}