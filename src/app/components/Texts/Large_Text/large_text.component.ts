import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'large-text',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './large_text.component.html'
})

export class LargeText {}