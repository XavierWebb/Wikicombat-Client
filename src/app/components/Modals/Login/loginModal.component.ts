import { Component } from "@angular/core";
import { BaseModal } from "../BaseModal/baseModal.component";
import { ButtonComponent } from "../../Button/button.component";
import { TextInput } from "../../Inputs/TextInput/textInput.component";
import { ModalsStore } from "../../../services/modalsStore";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'login-modal',
    templateUrl: './loginModal.component.html',
    standalone: true,
    imports: [BaseModal, ButtonComponent, TextInput, ReactiveFormsModule, CommonModule]
})

export class LoginModal{
    cancel(){
        this.loginForm.reset();
        this.modalStore.changeModalState('login');
    }

    loginForm: FormGroup;

    email: FormControl;
    password: FormControl;


    constructor(private modalStore: ModalsStore){
        this.email = new FormControl('')
        this.password = new FormControl('')

        this.loginForm = new FormGroup({
            email: this.email,
            password: this.password
        })
    }

    handleSubmit(){
        console.log('Submiting Form')
    }

    isOpen = ()=> this.modalStore.modals().login
}