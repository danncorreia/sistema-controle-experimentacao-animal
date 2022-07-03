import { Component, OnInit, ViewChild } from '@angular/core';
import { ProtocoloController } from '../../controllers/protocolo.controller';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ProtocoloModel } from '../../models/protocolo';
import { MatTableDataSource } from '@angular/material/table';
import { ProtocoloDialogComponent } from '../protocolo-dialog/protocolo-dialog.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ParecerDialogComponent } from '../../../protocolo/components/parecer-dialog/parecer-dialog.component';
import { ParecerModel } from '../../models/parecer';
import { AuthLoginModel } from '../../../auth/models/auth';

@Component({
  selector: 'app-procolo-view',
  templateUrl: './procolo-view.component.html',
  styleUrls: ['./procolo-view.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProcoloViewComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  protocolo: ProtocoloModel[] = [];
  dataSource = new MatTableDataSource(this.protocolo);
  user: AuthLoginModel;

  constructor(public controller: ProtocoloController, public dialog: MatDialog) {
    this.user = JSON.parse(localStorage.getItem('user') || "");
  }

  ngOnInit(): void {
    this.get();
  }

  displayedColumns: string[] = ['matricula', 'bioterio', 'dataPrevInicio', 'dataPrevTermino', 'actions'];
  displayedColumnsEspecies: string[] = ['especie', 'qtd'];
  expandedElement: ProtocoloModel | null;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  get(){
    this.controller.get().then( (data: ProtocoloModel[]) => {
      this.protocolo = data;
      this.dataSource = new MatTableDataSource(this.protocolo);
      this.dataSource.paginator = this.paginator;
    });
  }

  excluir(id: number){
    this.controller.del(id).then(() => {
      this.get();
    });
  }

  alterar(protocolo: ProtocoloModel){
    const dialogRef = this.dialog.open(ProtocoloDialogComponent, {
      data: protocolo
    });

    dialogRef.afterClosed().subscribe(result => {
      this.get();
    });
  }

  createDataSource(array:any[]) {
    return new MatTableDataSource(array);
  }

  parecer(protocolo: ProtocoloModel){
    if(!protocolo.parecer) {
      protocolo.parecer = new ParecerModel(null, 1);
    }

    const dialogRef = this.dialog.open(ParecerDialogComponent, {
      data: protocolo
    });

    dialogRef.afterClosed().subscribe(result => {
      this.get();
    });
  }
}
