import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  displayDetails = true;
  buttonClickLogger: any = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  getButtonName = () => {
    if (!this.displayDetails) {
      return 'Display Details';
    }
    return 'Hide Details';
  }

  getDisplayDetails = () => {
    this.displayDetails = !this.displayDetails;
    this.buttonClickLogger.push(`Button clicked  with current value - ${this.getButtonName()}`);
  }

  getLoggerStyles = (indexValue: number) => {
    if (indexValue > 4) {
      return {
        backgroundColor: 'blue',
        padding: '20px',
        margin: '5px'
      }
    }
    return {};
  }

  getLoggerClassNames = (indexValue: number) => {
    return {color : indexValue > 4};
  }
}
