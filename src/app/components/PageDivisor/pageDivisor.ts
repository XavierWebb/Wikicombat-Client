import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-divisor',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './pageDivisor.component.html'
})

export class PageDivisor {
    @Input() variant: 'first' | 'second' = 'first'
    
}