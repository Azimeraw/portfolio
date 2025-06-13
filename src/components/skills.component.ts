import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div class="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in enterprise software development
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let category of skillCategories" 
            class="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl shadow-lg hover-lift"
          >
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i [class]="category.icon + ' text-white text-2xl'"></i>
              </div>
              <h3 class="text-xl font-bold text-gray-900">{{ category.title }}</h3>
            </div>
            
            <div class="space-y-3">
              <div *ngFor="let skill of category.skills" class="flex items-center space-x-3">
                <i class="fas fa-check text-primary-600 text-sm"></i>
                <span class="text-gray-700 font-medium">{{ skill }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">Core Competencies</h3>
            <p class="text-primary-100 mb-6 max-w-3xl mx-auto">
              Beyond technical skills, I bring a strong foundation in software engineering principles and best practices
            </p>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="text-center">
                <i class="fas fa-code text-3xl mb-3 text-primary-200"></i>
                <p class="font-semibold">Clean Code</p>
                <p class="text-sm text-primary-200">Writing maintainable, readable code</p>
              </div>
              <div class="text-center">
                <i class="fas fa-sync-alt text-3xl mb-3 text-primary-200"></i>
                <p class="font-semibold">Agile Practices</p>
                <p class="text-sm text-primary-200">Iterative development approach</p>
              </div>
              <div class="text-center">
                <i class="fas fa-cloud text-3xl mb-3 text-primary-200"></i>
                <p class="font-semibold">Cloud-Native</p>
                <p class="text-sm text-primary-200">Scalable cloud solutions</p>
              </div>
              <div class="text-center">
                <i class="fas fa-chart-line text-3xl mb-3 text-primary-200"></i>
                <p class="font-semibold">Performance</p>
                <p class="text-sm text-primary-200">Optimization & monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'Backend Development',
      icon: 'fas fa-server',
      skills: [
        'Java & Core Java',
        'Spring Boot',
        'Spring Framework',
        'REST APIs',
        'Microservices',
        'Hexagonal Architecture'
      ]
    },
    {
      title: 'Frontend Development',
      icon: 'fas fa-laptop-code',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5 & CSS3',
        'Responsive Design',
        'Component Architecture'
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      skills: [
        'AWS (S3, SNS, SQS)',
        'Docker',
        'Kubernetes',
        'OpenShift',
        'Rancher',
        'CI/CD Pipelines'
      ]
    },
    {
      title: 'Database & APIs',
      icon: 'fas fa-database',
      skills: [
        'SQL Databases',
        'API Design',
        'SOAP APIs',
        'Database Design',
        'Data Modeling',
        'Performance Tuning'
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: 'fas fa-tools',
      skills: [
        'GitHub',
        'GitLab',
        'Maven',
        'YAML',
        'IntelliJ IDEA',
        'Visual Studio Code'
      ]
    },
    {
      title: 'Methodologies',
      icon: 'fas fa-project-diagram',
      skills: [
        'Agile Development',
        'Scrum',
        'Test-Driven Development',
        'Code Reviews',
        'System Design',
        'Team Leadership'
      ]
    }
  ];
}