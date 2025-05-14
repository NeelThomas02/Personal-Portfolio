import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { ActivatedRoute }    from '@angular/router';
import { MatCardModule }     from '@angular/material/card';
import { MatButtonModule }   from '@angular/material/button';
import { MatChipsModule }     from '@angular/material/chips';

interface Project {
  slug: string;
  title: string;
  summary: string;
  image: string;
  details: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ],
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;

  // Replace with your real data source or service
  projects: Project[] = [
    {
      slug: 'health-management-tool',
      title: 'Health Management Tool',
      summary: 'Full-stack HMT built with React & Node.js',
      image: 'assets/hmt.png',
      details: `A comprehensive healthcare dashboard ...`,
      tech: ['React', 'Node.js', 'MongoDB'],
      repoUrl: 'https://github.com/you/hmt',
      liveUrl: 'https://hmt.example.com'
    },
    // …more projects…
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = this.projects.find(p => p.slug === slug!)!;
  }
}
