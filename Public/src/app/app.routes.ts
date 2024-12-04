import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RoominfoComponent } from './components/roominfo/roominfo.component';
import { LostpassComponent } from './components/lostpass/lostpass.component';
import { LogoutComponent } from './components/logout/logout.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { Component } from '@angular/core';
import { ManageRoomsComponent } from './components/manage-rooms/manage-rooms.component';
import { ManageBookingsComponent } from './components/manage-bookings/manage-bookings.component';

export const routes: Routes = [

  //logged out routes
  {
    path: 'login', component: LoginComponent
  },
  
  {
    path: 'registration', component: RegistrationComponent
  },
  {
    path: 'lostpass', component: LostpassComponent
  },
  {
    path: 'rooms', component: RoomsComponent
  },
  {
    path: 'rooms/:id', component: RoominfoComponent
  },
  
  //login
  {
    path: 'logout', component: LogoutComponent
  },
  //user
  {
    path:'bookings',component:BookingsComponent
  },

  //admin
  {
    path:'admin',
    children:[{
      path:'rooms', component:ManageRoomsComponent
    },
    {
      path:'bookings', component:ManageBookingsComponent
    }
    ]
    
  },

  //minden más
  {
    path: '', redirectTo: 'rooms', pathMatch: 'full'
  },
  {
    path: '**', component: NotfoundComponent
  }
];
