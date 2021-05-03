import { Computador } from "./computador";
import { Placa } from "./placa";

export class Processador  extends Placa{
  private frequencia_maxima: string;
  private nucleo: string;

  get frequencia(): string {
    return this.frequencia_maxima;
  }
  set frequencia(frequencia_maxima: string) {
    this.frequencia_maxima = "3.80Hrz";
  }

  get nucleoInterno(): string {
    return this.nucleo;
  }
  set nucleoInterno(nucleo: string) {
    this.nucleo = "6";
  }
}
