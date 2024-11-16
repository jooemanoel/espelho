import { Produtos } from "../enums/produtos";

export interface Fornecedor {
  nome: string;
  codigo: number;
  produtos: string[];
}

export const LISTA_FORNECEDORES: Fornecedor[] = [
  {
    nome: 'João',
    codigo: 1,
    produtos: [Produtos.p1, Produtos.p2]
  },
  {
    nome: 'Maria',
    codigo: 2,
    produtos: [Produtos.p2, Produtos.p3]
  },
  {
    nome: 'Ana',
    codigo: 3,
    produtos: [Produtos.p3, Produtos.p4]
  },
  {
    nome: 'Mateus',
    codigo: 4,
    produtos: [Produtos.p1, Produtos.p4]
  },
  {
    nome: 'Alemão',
    codigo: 5,
    produtos: [Produtos.p1, Produtos.p2, Produtos.p3]
  },
  {
    nome: 'Levi',
    codigo: 6,
    produtos: [Produtos.p1, Produtos.p3, Produtos.p4]
  },
  {
    nome: 'Texas',
    codigo: 7,
    produtos: [Produtos.p1, Produtos.p2, Produtos.p4]
  },
];