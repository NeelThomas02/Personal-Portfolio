import { Component }    from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule }  from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule }      from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

interface Skill {
  name: string;
  icon: string; // use Material icon names or your own SVG icons
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,       // for <mat-card>
    MatGridListModule,   // for <mat-grid-list> & <mat-grid-tile>
    MatIconModule        // for <mat-icon>
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Angular',    icon: 'angular' },
    { name: 'TypeScript', icon: 'code' },
    { name: 'Node.js',    icon: 'storage' },
    { name: 'Express',    icon: 'cloud' },
    { name: 'MongoDB',    icon: 'dns' },
    { name: 'Docker',     icon: 'view_in_ar' },
  ];
}

