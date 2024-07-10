import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';



@Component({
  selector: 'inv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {


  @Input() title: string ='';
  @Input() rooms:RoomList []=[];
  @Output() selectedRoom = new EventEmitter <RoomList>()

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room)
  }

}
