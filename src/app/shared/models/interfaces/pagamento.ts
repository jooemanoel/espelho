import { Parcela } from "./parcela";

export interface Pagamento {
  valor: number;
  percentual: number;
  parcelado: boolean;
  numParcelas: number;
  parcelas: Parcela[];
}