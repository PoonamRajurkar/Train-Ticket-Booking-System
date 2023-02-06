# Train-Ticket-Booking-System
Concept of Interpolation in Angular


Interpolation refers to embedding expressions into marked up text. By default, interpolation uses the double curly braces {{ and }} as delimiters.

To illustrate how interpolation works, consider an Angular component that contains a "trainName" variable:

------>    trainName = 'Garibhrath Pune Express [12121]';
 
 Use interpolation to display the value of this variable in the corresponding component template:
 
 ------>    <h4 class="text text-primary">
                Train Name - {{ trainName }}
            </h4>
            
            
Angular replaces 'trainName' with the string value of the corresponding component property. In this case, the value is "Garibhrath Pune Express [12121]".
