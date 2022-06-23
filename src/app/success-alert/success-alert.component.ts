import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {

  serverID: number = 10;
  serverStatus: string = 'online';
  enableAddServerButton: boolean = false;
  serverCreationStatus: string = "No instance created";
  serverName: string = '';
  serverName2: string = '';


  constructor() {
    setTimeout((): void => {
      this.enableAddServerButton = true
    }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getServerStatusStyles = (): any => {
    console.log('serverStatus', this.serverStatus);
    if (this.serverStatus == 'online') {
      return {color: 'green'};
    }
    return {color: 'red'};
  }

  getServerStatusClasses = () => {
      return {online :this.serverStatus == 'online'  };
  }

  alertStatus = (): void => {
    alert('The Server is in good state !');
  }

  addNewServer = (): void => {
    if (this.serverName2 == '') {
      this.serverCreationStatus = 'No instance created';
      return;
    }
    this.serverCreationStatus = `Created a new server instance with name :  ${this.serverName2}`
  }

  onInputChange = (event: any): void => {
    this.serverName = event.target.value;
  }
}
