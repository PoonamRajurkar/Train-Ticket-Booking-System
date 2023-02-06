import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Train_Booking_System';

  trainName = 'Garibhrath Pune Express [12121]';
  availTicket = 100 ;

  bookTicket(){
   console.log("Your ticket is booked successfully!!!")
   if(this.availTicket<=100){
    this.availTicket-- ;
   }
    }

    cancelTicket(){
      console.log("Ticket Canceled.")
      if(this.availTicket<100){
        this.availTicket++ ;
      }
    }
}
