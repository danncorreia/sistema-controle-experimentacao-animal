export class MenuItemModel {
  name: string;
  path: string;
  icon: string;
  auth: number;

  constructor(name: string, path: string, icon: string = "home", auth: number = 0) {
    this.name = name;
    this.path = path;
    this.icon = icon;
    this.auth = auth;
  }
}
