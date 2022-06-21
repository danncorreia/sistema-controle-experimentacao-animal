export class AuthModel{
  user:{
    email: string;
    id: number;
  };
  accessToken: string;

  constructor(user: {email:string, id:number}, accessToken: string){
    this.user = user;
    this.accessToken = accessToken;
  }
}

export class AuthLoginModel{
  tipo: number;
  nome: string;

  constructor(tipo: number, nome: string){
    this.tipo = tipo;
    this.nome = nome;
  }
}
