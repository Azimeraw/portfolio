import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="section-padding bg-gray-900 text-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">Let's Connect</h2>
          <div class="w-24 h-1 bg-primary-400 mx-auto rounded-full"></div>
          <p class="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Ready to bring your next project to life? I'm always excited to discuss new opportunities and challenges.
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-bold mb-6">Get In Touch</h3>
              <p class="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're looking for a dedicated full-stack developer for your team, 
                need consultation on your next project, or want to discuss innovative solutions, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-envelope text-white"></i>
                </div>
                <div>
                  <p class="text-gray-400 text-sm">Email</p>
                  <a href="mailto:azimerawsoftware@gmail.com" class="text-white hover:text-primary-400 transition-colors font-medium">
                    azimerawsoftware&#64;gmail.com
                  </a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-phone text-white"></i>
                </div>
                <div>
                  <p class="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+251924978182" class="text-white hover:text-primary-400 transition-colors font-medium">
                    +251 924 978 182
                  </a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fab fa-whatsapp text-white"></i>
                </div>
                <div>
                  <p class="text-gray-400 text-sm">WhatsApp</p>
                  <a href="https://wa.me/251924978182" target="_blank" class="text-white hover:text-primary-400 transition-colors font-medium">
                    +251 924 978 182
                  </a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fab fa-linkedin text-white"></i>
                </div>
                <div>
                  <p class="text-gray-400 text-sm">LinkedIn</p>
                  <a href="https://linkedin.com/in/azimeraw" target="_blank" class="text-white hover:text-primary-400 transition-colors font-medium">
                    linkedin.com/in/azimeraw
                  </a>
                </div>
              </div>
              
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-map-marker-alt text-white"></i>
                </div>
                <div>
                  <p class="text-gray-400 text-sm">Location</p>
                  <p class="text-white font-medium">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-800 p-8 rounded-2xl">
            <h3 class="text-xl font-bold mb-6">Quick Connect</h3>
            <div class="space-y-6">
              <a 
                href="mailto:azimerawsoftware@gmail.com?subject=Project Inquiry&body=Hi Azimeraw, I'm interested in discussing a project opportunity with you."
                class="block w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors"
              >
                <i class="fas fa-envelope mr-2"></i>
                Send Email
              </a>
              
              <a 
                href="https://wa.me/251924978182?text=Hi%20Azimeraw%2C%20I%27m%20interested%20in%20discussing%20a%20project%20opportunity%20with%20you."
                target="_blank"
                class="block w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors"
              >
                <i class="fab fa-whatsapp mr-2"></i>
                Message on WhatsApp
              </a>
              
              <a 
                href="https://linkedin.com/in/azimeraw"
                target="_blank"
                class="block w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
              >
                <i class="fab fa-linkedin mr-2"></i>
                Connect on LinkedIn
              </a>
              
              <a 
                href="tel:+251924978182"
                class="block w-full border-2 border-primary-600 text-primary-400 py-4 px-6 rounded-lg font-semibold text-center hover:bg-primary-600 hover:text-white transition-colors"
              >
                <i class="fas fa-phone mr-2"></i>
                Call Now
              </a>
            </div>
            
            <div class="mt-8 pt-6 border-t border-gray-700">
              <p class="text-gray-400 text-sm text-center">
                Available for freelance projects and full-time opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
}