export class ParecerModel{
  parecer: string;
  usoRecomendado: number;

  constructor(parecer: string, usoRecomendado: number){
    this.parecer = parecer;
    this.usoRecomendado = usoRecomendado;
  }
}
