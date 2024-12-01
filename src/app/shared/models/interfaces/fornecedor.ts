import { LISTA_PRODUTOS, Produto } from "./produto";

export interface Fornecedor {
  nome: string;
  codigo: number;
  produtos: Produto[];
}

export const LISTA_FORNECEDORES: Fornecedor[] = [
  {
    nome: 'João',
    codigo: 1,
    produtos: [LISTA_PRODUTOS[0], LISTA_PRODUTOS[1]]
  },
  {
    nome: 'Maria',
    codigo: 2,
    produtos: [LISTA_PRODUTOS[1], LISTA_PRODUTOS[2]]
  },
  {
    nome: 'Ana',
    codigo: 3,
    produtos: [LISTA_PRODUTOS[2], LISTA_PRODUTOS[3]]
  },
  {
    nome: 'Mateus',
    codigo: 4,
    produtos: [LISTA_PRODUTOS[0], LISTA_PRODUTOS[3]]
  },
  {
    nome: 'Alemão',
    codigo: 5,
    produtos: [LISTA_PRODUTOS[0], LISTA_PRODUTOS[1], LISTA_PRODUTOS[2]]
  },
  {
    nome: 'Levi',
    codigo: 6,
    produtos: [LISTA_PRODUTOS[0], LISTA_PRODUTOS[2], LISTA_PRODUTOS[3]]
  },
  {
    nome: 'Texas',
    codigo: 7,
    produtos: [LISTA_PRODUTOS[0], LISTA_PRODUTOS[1], LISTA_PRODUTOS[3]]
  },
];