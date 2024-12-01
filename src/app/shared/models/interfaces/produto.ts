export interface Produto {
  codigo: number;
  nome: string;
}

export const LISTA_PRODUTOS: Produto[] = [
  { codigo: 1, nome: 'Produto 1' },
  { codigo: 2, nome: 'Produto 2' },
  { codigo: 3, nome: 'Produto 3' },
  { codigo: 4, nome: 'Produto 4' },
];