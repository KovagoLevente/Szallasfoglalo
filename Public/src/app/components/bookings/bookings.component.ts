import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user';
import { Booking } from '../../interfaces/booking';
import { CommonModule } from '@angular/common';
import moment from 'moment';
import { Accomondation } from '../../interfaces/accomodations';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent implements OnInit{
  constructor(
    private api:ApiService,
    private auth:AuthService
  ){}
  loggeUser:User={
    id:'',
    name:'',
    email:'',
    passwd:'',
    confirm:'',
    role:''

  };
  accoms:Accomondation[]=[];
  bookings:Booking[]=[];
  ngOnInit(): void {
    this.loggeUser = this.auth.loggedUser();
    this.api.select('bookings', 'userID', 'eq', this.loggeUser.id).subscribe(res=>{

      this.bookings = res as Booking[];
      this.bookings.forEach(booking   =>{
        booking.bookingDate=moment(booking.bookingDate).format('YYYY-MM-DD');
        booking.startDate=moment(booking.startDate).format('YYYY-MM-DD');
        booking.endDate =moment(booking.endDate).format('YYYY-MM-DD');

        booking.accomName = this.accoms.find(item => item.id == booking.accomID)!.title;
        booking.accomAdd = this.accoms.find(item =>item.id == booking.accomID)!.address;
      })
    })

  }
  getAccomodations(){
    this.api.selectAll('accomodations').subscribe(res=>{
      this.accoms = res as any;
    })
  }
}