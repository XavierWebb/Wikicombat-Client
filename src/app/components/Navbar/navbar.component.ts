import { Component } from "@angular/core";
import { ButtonComponent } from "../Button/button.component";
import { ModalsStore } from "../../services/modalsStore";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [
        ButtonComponent,
    ],
    templateUrl: './navbar.component.html',    
})

export class Navbar {
    
    constructor(private modalsStore: ModalsStore){}

    register() {
        this.modalsStore.changeModalState('register')
    }
    
    login() {
        this.modalsStore.changeModalState('login')
    }

    contact(){
        this.modalsStore.changeModalState('contact')
    }
    
    help(){
        this.modalsStore.changeModalState('help')
    }

    language(){
        this.modalsStore.changeModalState('language')
    }
}