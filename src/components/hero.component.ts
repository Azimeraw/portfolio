import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-100 pt-16">
      <div class="container-max text-center">
        <div class="animate-fade-in">
          <div class="mb-8">
  <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center shadow-2xl overflow-hidden">
  <img src="/assets/11.jpg" alt="AZIMERAW" class="w-full h-full object-cover">
  </div>
</div>                        
          <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            <span class="text-gradient">Azimeraw</span> Taye
          </h1>
          
          <p class="text-2xl md:text-3xl text-gray-600 mb-8 animate-slide-up">
            Full Stack Developer
          </p>
          
          <p class="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Passionate Full Stack Developer with 5+ years of experience crafting scalable solutions using Java Spring Boot and Angular. 
            Specialized in microservices architecture, cloud-native applications, and delivering exceptional user experiences.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a 
              href="#contact" 
              class="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:bg-primary-700 transition-all duration-300 hover:shadow-xl transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="#experience" 
              class="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 hover:shadow-lg"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <i class="fas fa-chevron-down text-primary-600 text-2xl"></i>
      </div>
    </section>
  `
})
export class HeroComponent {
}