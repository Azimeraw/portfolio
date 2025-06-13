import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div class="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-900 mb-4">
              Building Tomorrow's Solutions Today
            </h3>
            
            <p class="text-gray-700 leading-relaxed text-lg">
              I'm a passionate Full Stack Developer with over 5 years of experience creating robust, 
              scalable solutions that drive business success. My expertise spans across Java Spring Boot 
              and Angular, with a strong focus on microservices architecture and cloud-native design.
            </p>
            
            <p class="text-gray-700 leading-relaxed text-lg">
              Throughout my career, I've had the privilege of working with innovative companies across 
              fintech, retail, and enterprise domains, delivering B2B applications that make a real impact. 
              I'm deeply committed to clean code practices, Agile methodologies, and building systems that 
              are not just functional, but maintainable and scalable.
            </p>
            
            <div class="flex items-center space-x-4 pt-4">
              <div class="flex items-center space-x-2">
                <i class="fas fa-map-marker-alt text-primary-600"></i>
                <span class="text-gray-700">Addis Ababa, Ethiopia</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-calendar-alt text-primary-600"></i>
                <span class="text-gray-700">5+ Years Experience</span>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl shadow-lg">
            <h4 class="text-xl font-semibold text-gray-900 mb-6">What I Bring to the Table</h4>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <i class="fas fa-check-circle text-primary-600 mt-1"></i>
                <div>
                  <p class="font-medium text-gray-900">Scalable Architecture</p>
                  <p class="text-gray-600 text-sm">Expertise in both monolithic and hexagonal architectures</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <i class="fas fa-check-circle text-primary-600 mt-1"></i>
                <div>
                  <p class="font-medium text-gray-900">Cloud-Native Solutions</p>
                  <p class="text-gray-600 text-sm">AWS, Docker, Kubernetes deployment and management</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <i class="fas fa-check-circle text-primary-600 mt-1"></i>
                <div>
                  <p class="font-medium text-gray-900">Full-Cycle Development</p>
                  <p class="text-gray-600 text-sm">From planning and design to deployment and maintenance</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <i class="fas fa-check-circle text-primary-600 mt-1"></i>
                <div>
                  <p class="font-medium text-gray-900">Quality Focus</p>
                  <p class="text-gray-600 text-sm">Clean code, performance optimization, and maintainability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
}