import { CommonModule } from '@angular/common';
import { Component, Injectable } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
@Injectable({  providedIn: 'any'})

export class LayoutComponent {

}
