# 📚 Heap (Min-Heap) & Fila de Prioridade

## O que é?

Uma árvore binária **completa** onde o pai é sempre **menor** (Min-Heap) ou **maior** (Max-Heap) que os filhos. Armazenada como um **array**!

## Visualização

```
  Array:    [5, 8, 10, 15, 20, 25]

  Árvore:       5          ← Raiz = sempre o MENOR
               / \
              8   10
             / \   /
           15  20 25

  Relação de índices:
    Pai de i:          (i - 1) / 2
    Filho esquerdo:     2*i + 1
    Filho direito:      2*i + 2
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
