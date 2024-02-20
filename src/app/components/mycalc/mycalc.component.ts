import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mycalc',
  templateUrl: './mycalc.component.html',
  styleUrl: './mycalc.component.scss',
})
export class MycalcComponent implements OnInit {
  inputStr: any;

  ngOnInit(): void {
    this.inputStr = new FormGroup({
      text: new FormControl(),
    });
  }

  buttonClick(buttonElement: any) {
    let buttonText = buttonElement.textContent;
    let valueInput = this.inputStr.controls.text.value;

    if (valueInput != null) {
      this.inputStr.controls.text.setValue(valueInput + buttonText);
    } else {
      this.inputStr.controls.text.setValue(buttonText);
    }
  }

  clearDisplay() {
    this.inputStr.controls.text.setValue('');
  }

  clearLast() {
    let valueInput = this.inputStr.controls.text.value;

    if (valueInput != null && valueInput.length > 0) {
      let newValue = valueInput.slice(0, -1);
      this.inputStr.controls.text.setValue(newValue);
    }
  }
}
