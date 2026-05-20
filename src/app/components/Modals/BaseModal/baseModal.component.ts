import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MidTitle } from "../../Title/Mid_Title/mid_title.component";

@Component({
    selector: 'base-modal',
    standalone: true,
    imports: [CommonModule, MidTitle],
    templateUrl: './baseModal.component.html',
})



export class BaseModal{
    @Input() modalTitle: string = ''
}