import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'large-title',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './large_title.component.html',
})

export class LargeTitle {}