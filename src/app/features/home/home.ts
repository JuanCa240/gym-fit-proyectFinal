import { Component } from '@angular/core';
import { Plans } from '../plans/plans';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Plans],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}
