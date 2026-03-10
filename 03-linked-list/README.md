# 📚 Linked List (Lista Encadeada Simples)

## O que é?

Uma **Linked List** é uma coleção de "nós" ligados, onde cada nó guarda:

1. Um **valor** (data)
2. Um **ponteiro** para o próximo nó (next)

Diferente de um Array, os nós **não precisam estar lado a lado na memória**.

## Visualização

```
  head
   ↓
  [5] → [10] → [20] → [30] → null
```

Cada caixinha `[X]` é um nó. A seta `→` é o ponteiro `next`.

## Array vs Linked List

| Característica     |       Array        | Linked List |
| ------------------ | :----------------: | :---------: |
| Acesso por índice  |    **O(1)** ✅     |   O(n) ❌   |
| Inserir no início  |      O(n) ❌       | **O(1)** ✅ |
| Inserir no final   |    **O(1)** ✅     |   O(n) ❌   |
| Remover no início  |      O(n) ❌       | **O(1)** ✅ |
| Buscar um valor    |        O(n)        |    O(n)     |
| Tamanho na memória | Fixo (pré-alocado) |  Dinâmico   |

## Operações Principais

| Operação           | Complexidade |
| ------------------ | :----------: |
| `insertAtHead(x)`  |   **O(1)**   |
| `insertAtTail(x)`  |   **O(n)**   |
| `deleteAtHead()`   |   **O(1)**   |
| `deleteByValue(x)` |   **O(n)**   |
| `search(x)`        |   **O(n)**   |
| `reverse()`        |   **O(n)**   |

## Como rodar

```bash
npx tsx data-structures/03-linked-list/index.ts
```

## Dicas para Entrevistas

1. **Inverter uma Linked List** é uma das perguntas mais clássicas. Domine isso!
2. Use a técnica de **dois ponteiros** (slow/fast) para encontrar o meio da lista ou detectar ciclos.
3. Sempre trate os **casos especiais**: lista vazia, apenas 1 nó, nó no início.
