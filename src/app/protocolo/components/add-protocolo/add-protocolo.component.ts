import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProtocoloModel } from '../../models/protocolo';
import { ProtocoloDialogComponent } from '../protocolo-dialog/protocolo-dialog.component';

@Component({
  selector: 'app-add-protocolo',
  templateUrl: './add-protocolo.component.html',
  styleUrls: ['./add-protocolo.component.scss']
})
export class AddProtocoloComponent implements OnInit {

  @Output() updateList = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ProtocoloDialogComponent, {
      data: new ProtocoloModel(0, null, "", "", "", null, null, [], null),
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateList.emit();
    });
  }

  ngOnInit(): void {
  }

}
