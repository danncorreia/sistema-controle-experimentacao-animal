import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItemModel } from '../../models/menu-item';
import { Router } from '@angular/router';
import { AuthLoginModel } from '../../../auth/models/auth';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  user: AuthLoginModel;

  @Output() nomeRotaEvent = new EventEmitter<string>();

  menus: MenuItemModel[] = [
    {
      name: 'Docentes',
      path: '/docentes',
      icon: 'school',
      auth: 2
    },
    {
      name: 'Discentes',
      path: '/discentes',
      icon: 'person',
      auth: 2
    },
    {
      name: 'Bioterio',
      path: '/bioterio',
      icon: 'pets',
      auth: 1
    },
    {
      name: 'Animais',
      path: '/animais',
      icon: 'cruelty_free',
      auth: 1
    }
  ]

  constructor(public router: Router) {
    this.user = JSON.parse(localStorage.getItem('user') || "");
  }

  ngOnInit(): void {
  }

  mudanomeRota(nomeRota:string){
    this.nomeRotaEvent.emit(nomeRota);
  }

  sair(){
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }
}
