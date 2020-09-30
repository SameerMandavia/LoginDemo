import { Component, OnInit, Input, forwardRef, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
@Component({
  selector: 'capstore-input',
  templateUrl: './capstore-input.component.html',
  styleUrls: ['./capstore-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CapstoreInputComponent),
      multi: true,
    },
  ],
})
export class CapstoreInputComponent implements OnInit, ControlValueAccessor {

  userName = new FormControl();
  constructor( private _renderer : Renderer2) {}

  ngOnInit(): void {
    this.userName = new FormControl({value:'',disabled:true});
  }

  // @Input() public id: string;
  // @Input() public type: string;
  // @Input() public label: string;
  // @Input() public placeholder: string;
  // @Input() public disable: boolean;
  // @Input() public readonly: boolean;
  //@Input() public value: string;
  
  
  onTouched = () => {};
  onChange = _ => {};

 
  @ViewChild('input', {static: true, read: ElementRef})
  inputElementRef: ElementRef;
 

  onInputChange() {
    const value = this.inputElementRef.nativeElement.value;
    this.onChange(value);
  }

  onBlur() {
    this.onTouched();
  }
  writeValue(value: string) {
    this._renderer.setProperty(this.inputElementRef.nativeElement, 'value', value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this.inputElementRef.nativeElement, 'disabled', isDisabled);
  }

}
