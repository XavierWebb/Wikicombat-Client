import { Injectable, signal } from "@angular/core";

type ModalType = 'login' | 'register' | 'contact' | 'help' | 'language';

type ModalState = {
    [key in ModalType]: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class ModalsStore {
    private state = signal<ModalState>({
        login: false,
        register: false,
        contact: false,
        help: false,
        language: false,
    })

    readonly modals = this.state.asReadonly();

    changeModalState(modal: ModalType){
        this.state.update(state => ({
            ...state,
            [modal]: !state[modal]
        }))
    }
}