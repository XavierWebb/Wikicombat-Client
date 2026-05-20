import { Component, forwardRef,Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";


@Component({
    selector: 'text-input',
    standalone: true,
    templateUrl: './textInput.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TextInput),
            multi: true
        }
    ]
})

export class TextInput implements ControlValueAccessor{
    @Input() placeholder: string = ''
    @Input() type: string = 'string'

    value: string ='';

    onChange = (value: string) => {};
    onTouched = () => {}

    writeValue(value: string): void {
        this.value = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    handleInput(event: Event) {
        const value = (event.target as HTMLInputElement).value;

        this.value = value;
        this.onChange(value);
    }

}