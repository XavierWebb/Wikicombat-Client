import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './button.component.html'
})

export class ButtonComponent {
    @Input() text: string = '';
    @Input() onClick!: () => void;
    @Input() variant: 'primary' | 'secondary' = 'primary';

    handleClick() {
        if (this.onClick){
            this.onClick();
        }
    }
}