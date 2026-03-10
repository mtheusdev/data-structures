# 📚 Heap (Min-Heap) & Fila de Prioridade

## O que é?

Uma árvore binária **completa** onde o pai é sempre **menor** (Min-Heap) ou **maior** (Max-Heap) que os filhos. Armazenada como um **array**!

## Analogia do Mundo Real

```
  🏥 PRONTO SOCORRO (Fila de Prioridade):

  Quem é atendido primeiro? Quem tem MAIOR urgência!

  Chegou: Dor de cabeça (5), Infarto (1), Fratura (3), Gripe (4)

  Fila normal:    Dor de cabeça → Infarto → Fratura → Gripe
  Min-Heap:       Infarto(1) → Fratura(3) → Gripe(4) → Dor(5)
                    ↑
              Sempre atende o menor número primeiro (maior prioridade)
```

## Visualização

```
  Array:    [5, 8, 10, 15, 20, 25]

  Árvore:           5             ← Raiz = sempre o MENOR
                   / \
                  8   10
                / \   /
              15  20 25

  ┌─────────────────────────────────────────────┐
  │  A MÁGICA: a árvore é armazenada num ARRAY! │
  └─────────────────────────────────────────────┘

  Índice:    [0]  [1]  [2]  [3]  [4]  [5]
  Valor:     [ 5,   8,  10,  15,  20,  25]
               ↑    ↑    ↑
              raiz  filho filho
                    esq   dir

  Relação de índices:
  ┌──────────────────────────────────────┐
  │  Pai de i:          Math.floor((i - 1) / 2)  │
  │  Filho esquerdo:    2 * i + 1        │
  │  Filho direito:     2 * i + 2        │
  └──────────────────────────────────────┘
```

## Inserção (Bubble Up / Sift Up)

```
  Inserindo 3 no Min-Heap:

  Passo 1: Adiciona no FINAL do array
           5
          / \
         8   10        [5, 8, 10, 15, 20, 25, 3]
        / \  / \                               ↑
      15 20 25  3 ← novo (no final)           aqui

  Passo 2: Compara com o pai (10). 3 < 10? Sim → TROCA!
           5
          / \
         8   3         [5, 8, 3, 15, 20, 25, 10]
        / \  / \
      15 20 25 10

  Passo 3: Compara com o pai (5). 3 < 5? Sim → TROCA!
           3            ← nova raiz!
          / \
         8   5         [3, 8, 5, 15, 20, 25, 10]
        / \  / \
      15 20 25 10

  3 é a nova raiz (menor de todos) ✅
```

## Remoção do Mínimo (Bubble Down / Sift Down)

```
  Removendo o mínimo (raiz = 3):

  Passo 1: Troca raiz com último elemento
          10            ← antigo último agora na raiz
          / \
         8   5         [10, 8, 5, 15, 20, 25]
        / \  /
      15 20 25

  Passo 2: 10 > menor filho (5)? TROCA com 5!
           5
          / \
         8  10         [5, 8, 10, 15, 20, 25]
        / \  /
      15 20 25

  Passo 3: 10 > filhos? 25 é o único e 10 < 25 → PARA!
  Heap restaurado ✅
```

## Min-Heap vs Max-Heap

```
  MIN-HEAP (menor no topo):       MAX-HEAP (maior no topo):

         5                              80
        / \                            /  \
       8   10                         50   70
      / \                            / \
    15  20                          30  40

  extractMin() → 5                extractMax() → 80
  Uso: Dijkstra, Top K menores    Uso: Top K maiores
```

## Complexidade

| Operação       |     Tempo      |
| -------------- | :------------: |
| `insert()`     |  **O(log n)**  |
| `extractMin()` |  **O(log n)**  |
| `peek()`       |    **O(1)**    |
| `heapSort()`   | **O(n log n)** |

## Como rodar

```bash
npx tsx data-structures/12-heap/index.ts
```

## Dicas para Entrevistas

1. Heap é a estrutura ideal para **"Top K" problems** (K maiores, K menores, K mais frequentes).
2. O algoritmo de **Dijkstra** usa um Min-Heap como fila de prioridade.
3. **Merge K sorted lists** usa Min-Heap.
4. Em JavaScript, não existe Heap nativo! Você precisa implementar ou usar uma lib.
