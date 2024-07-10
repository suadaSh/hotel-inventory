import { Component, Output,  } from '@angular/core';
import { Room, RoomList } from './rooms';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
    selector: 'inv-rooms',
    standalone: true,
    templateUrl: './rooms.component.html',
    styleUrl: './rooms.component.scss',
    imports: [CommonModule, RoomsListComponent]
})
export class RoomsComponent implements OnInit{

    selectedRoom!: RoomList
    hotelName= 'addaced'
   numberOfRooms = 30
    hideRooms:boolean = false

    
  rooms:Room={
    totalRooms:20,
    availableRooms:10, 
    bookedRooms:5
  }
roomList:RoomList[]=[]

  constructor(){}

  ngOnInit(): void {
    this.roomList =[{
    roomNumber:1,
    roomType: 'ahfs',
    amenities:'strasing',
    price:5,
    checkingTime: new Date('2021-11-11'),
    checkOutTime: new Date('2021-11-11'),
    rating: 4.5,

  },
{
  roomNumber:2,
    roomType: 'segset',
    amenities:'strasing',
    price:5,
    checkingTime: new Date('2021-11-11'),
    checkOutTime: new Date('2021-11-11'),
    rating: 4.1,

  },
{
  roomNumber:3,
    roomType: 'sgsggsg',
    amenities:'strasing',
    price:5,
    checkingTime: new Date('2021-11-11'),
    checkOutTime: new Date('2021-11-11'),
    rating: 3.1545153,

  }]

  }

//  @Output() roomList:RoomList []=[];

  


  
  toggle(){
   this.hideRooms = !this.hideRooms 
  }



  selectRoom(room: RoomList){
  this.selectedRoom = room  
}

addRoom(){
  const room: RoomList = {
    roomNumber:4,
    roomType: 'ahfs',
    amenities:'strasing',
    price:5,
    checkingTime: new Date('2021-11-11'),
    checkOutTime: new Date('2021-11-11'),
    rating: 4.5,


  };

  this.roomList = [...this.roomList, room]
}
}
