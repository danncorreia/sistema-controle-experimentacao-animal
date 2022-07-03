import { BioterioModel } from '../../bioterio/models/bioterio';
export class ProtocoloModel{
  id: number;
  matricula: number;
  justificativa: string;
  resumoPt: string;
  resumoEng: string;
  dataPrevInicio: Date | null;
  dataPrevTermino: Date | null;
  especies: {qtd: number, especie: string}[];
  bioterio: BioterioModel | null

  constructor(id: number, matricula: number, justificativa: string, resumoPt: string, resumoEng: string, dataPrevInicio: Date | null, dataPrevTermino: Date | null, especies: {qtd: number, especie: string}[], bioterio: BioterioModel | null){
    this.id = id;
    this.matricula = matricula;
    this.justificativa = justificativa;
    this.resumoPt = resumoPt;
    this.resumoEng = resumoEng;
    this.dataPrevInicio = dataPrevInicio;
    this.dataPrevTermino = dataPrevTermino;
    this.especies = especies;
    this.bioterio = bioterio;
  }
}
