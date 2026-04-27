import { Component } from '@angular/core';
import { PageDivisor } from '../../components/PageDivisor/pageDivisor';
import { MidText } from '../../components/Texts/Mid_Text/mid_text.component';
import { LargeText } from '../../components/Texts/Large_Text/large_text.component';
import { SmallText } from '../../components/Texts/Small_Text/small_text.component';
import { MidTitle } from '../../components/Title/Mid_Title/mid_title.component';
import { ButtonComponent } from '../../components/Button/button.component';

@Component({
    selector: 'home',
    standalone: true,
    imports: [
        PageDivisor,
        ButtonComponent,
        SmallText,
        MidText,
        LargeText,
        MidTitle,
    ],
    templateUrl: './home.component.html',
})

export class Home {
    start_searching(){}
}