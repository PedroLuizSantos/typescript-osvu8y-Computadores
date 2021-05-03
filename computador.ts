import { Placa } from "./placa";
import { Processador } from "./processador";

export class Computador {
  private _processador: Processador;
  private _placa_video: PlacaVideo;
  private _memoria_ram: MemoriaRam;

  testeProcessador() {
    console.log("Realizando Teste");
    this._processador.frequencia;
    const frequencia = this._processador.frequencia;
    console.log("frequencia" + frequencia);
  }
}

class PlacaVideo extends Placa {
  private memoriaplaca: string;

}

class MemoriaRam extends Placa {
  private memoria: string;
}
(new PlacaVideo()).tipoConexao