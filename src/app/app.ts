import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/Navbar/navbar.component';
import { RegisterModal } from './components/Modals/Register/registerModal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Navbar,
    RegisterModal
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Wikicombat-Client');
}
