import { Component }    from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule }  from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,    // for <mat-card>
    MatChipsModule    // for <mat-chip-grid> & <mat-chip-row>
  ],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {}
