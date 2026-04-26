import { Component } from "@angular/core";
import { ButtonComponent } from "../Button/button.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        ButtonComponent,
    ],
    templateUrl: './navbar.component.html',    
})

export class Navbar {
    
    register() {
    }
    
    login() {
    }

    contact(){
    }
    
    help(){
    }

    language(){
    }
}