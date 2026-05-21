import { Component } from "@angular/core";
import { BaseModal } from "../BaseModal/baseModal.component";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { TextInput } from "../../Inputs/TextInput/textInput.component";
import { ButtonComponent } from "../../Button/button.component";
import { ModalsStore } from "../../../services/modalsStore";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'register-modal',
    standalone: true,
    imports: [BaseModal, ReactiveFormsModule, TextInput, ButtonComponent, CommonModule],
    templateUrl: './registerModal.component.html'
})

export class RegisterModal{    


    cancel(){
        this.registerForm.reset();
        this.modalsStore.changeModalState('register');
    }
    
    registerForm: FormGroup;

    username: FormControl;
    password: FormControl;
    repeat_password: FormControl;
    email: FormControl;

    constructor(private modalsStore: ModalsStore){

        this.username = new FormControl('');
        this.password = new FormControl('');
        this.repeat_password = new FormControl('');
        this.email = new FormControl('');

        this.registerForm = new FormGroup({
            username: this.username,
            password: this.password,
            repeat_password: this.repeat_password,
            email: this.email
        })
    }
    
    handleSubmit(){
        console.log('Submiting form')
    }

    isOpen = () => this.modalsStore.modals().register
}