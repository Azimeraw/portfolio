import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div class="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>
        
        <div class="space-y-8">
          <div 
            *ngFor="let exp of experiences; let i = index" 
            class="bg-white rounded-2xl shadow-lg hover-lift overflow-hidden"
          >
            <div class="p-8">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ exp.role }}</h3>
                  <p class="text-xl text-primary-600 font-semibold">{{ exp.company }}</p>
                  <p class="text-gray-600">{{ exp.location }}</p>
                </div>
                <div class="mt-4 md:mt-0">
                  <span class="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                    {{ exp.period }}
                  </span>
                </div>
              </div>
              
              <p class="text-gray-700 mb-6 leading-relaxed">{{ exp.description }}</p>
              
              <div class="mb-6">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul class="space-y-2">
                  <li *ngFor="let achievement of exp.achievements" class="flex items-start space-x-3">
                    <i class="fas fa-arrow-right text-primary-600 mt-1 text-sm"></i>
                    <span class="text-gray-700">{{ achievement }}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    *ngFor="let tech of exp.technologies" 
                    class="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            <div class="max-w-2xl mx-auto">
              <div class="flex items-center justify-center space-x-4 mb-4">
                <i class="fas fa-graduation-cap text-primary-600 text-2xl"></i>
                <div class="text-left">
                  <p class="text-xl font-semibold text-gray-900">Bachelor's Degree in Software Engineering</p>
                  <p class="text-gray-600">Wolkite University • 2017 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'ISZO',
      role: 'Full Stack Developer',
      period: 'Feb 2023 - Present',
      location: 'Remote - Netherlands',
      description: 'Leading full-stack development initiatives, building scalable microservices architecture, and managing end-to-end project delivery in a fast-paced international environment.',
      achievements: [
        'Built microservices with Java, Spring Boot, REST APIs, and Angular',
        'Designed system architectures and integrated frontend/backend components',
        'Deployed on AWS (S3, SNS, SQS), Docker, Kubernetes, and Rancher',
        'Managed CI/CD pipelines using GitHub and YAML',
        'Led full-cycle development from planning to deployment'
      ],
      technologies: ['Java', 'Spring Boot', 'Kafka', 'Angular', 'REST APIs', 'AWS', 'Docker', 'Kubernetes', 'Rancher', 'GitHub', 'YAML']
    },
    {
      company: 'Jumbo Supermarkten',
      role: 'Java Developer',
      period: 'Feb 2022 - Jan 2023',
      location: 'Remote - Netherlands',
      description: 'Developed robust backend services for one of the Netherlands\' largest retail chains, focusing on system stability, performance optimization, and seamless CI/CD integration.',
      achievements: [
        'Developed backend services with Java, Spring Boot, REST APIs',
        'Deployed using OpenShift, Docker, and Kubernetes',
        'Migrated CI/CD pipelines from GitLab to OpenShift',
        'Supported production, resolved bugs, updated dependencies, and improved system stability'
      ],
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'OpenShift', 'Docker', 'Kubernetes', 'GitLab']
    },
    {
      company: 'Smart Technology PLC',
      role: 'Software Engineer',
      period: 'Jun 2020 - Feb 2022',
      location: 'Addis Ababa, Ethiopia',
      description: 'Led software development initiatives and team management while building critical communication infrastructure including SMS Gateway APIs and desktop applications.',
      achievements: [
        'Led software development and team management for SMS Gateway APIs',
        'Developed desktop applications and API solutions',
        'Implemented both SOAP and REST API integrations',
        'Managed full project lifecycle from requirements to deployment'
      ],
      technologies: ['Java-Maven', 'PHP', 'SOAP API', 'REST API']
    }
  ];
}