# 📚 Linked List (Lista Encadeada Simples)

## O que é?

Uma **Linked List** é uma coleção de "nós" ligados, onde cada nó guarda:

1. Um **valor** (data)
2. Um **ponteiro** para o próximo nó (next)

Diferente de um Array, os nós **não precisam estar lado a lado na memória**.

## Analogia do Mundo Real

```
  🚂 TREM:

  Cada vagão (nó) se conecta ao próximo por um engate (ponteiro).
  Para chegar no 3° vagão, você TEM que passar pelo 1° e 2° primeiro.

  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
  │ Vagão 1 │───→│ Vagão 2 │───→│ Vagão 3 │───→│ Vagão 4 │───→ ✕
  └─────────┘    └─────────┘    └─────────┘    └─────────┘   (null)
       ↑
  Locomotiva
   (head)
```

## Estrutura de um Nó

```
  ┌───────────────────────┐
  │         Nó            │
  │  ┌───────┬──────────┐ │
  │  │ valor │   next ──────→  (próximo nó ou null)
  │  │  42   │    *     │ │
  │  └───────┴──────────┘ │
  └───────────────────────┘
```

## Visualização

```
  head
   ↓
  ┌────┬──┐    ┌────┬──┐    ┌────┬──┐    ┌────┬──┐
  │  5 │ ─┼───→│ 10 │ ─┼───→│ 20 │ ─┼───→│ 30 │ ─┼───→ null
  └────┴──┘    └────┴──┘    └────┴──┘    └────┴──┘
   valor next   valor next   valor next   valor next
```

## Operações Visualizadas

### Inserir no início — O(1)

```
  ANTES:
  head → [10] → [20] → [30] → null

  insertAtHead(5):
  1. Cria novo nó [5]
  2. [5].next = head (aponta pro antigo primeiro)
  3. head = [5]

  DEPOIS:
  head → [5] → [10] → [20] → [30] → null
          ↑
        novo!
```

### Inserir no final — O(n)

```
  ANTES:
  head → [10] → [20] → [30] → null

  insertAtTail(40):
  1. Percorre até o último nó [30]    ← precisa andar tudo! O(n)
  2. [30].next = novo nó [40]

  DEPOIS:
  head → [10] → [20] → [30] → [40] → null
                                 ↑
                               novo!
```

### Deletar no início — O(1)

```
  ANTES:
  head → [10] → [20] → [30] → null

  deleteAtHead():
  1. head = head.next

  DEPOIS:           💨 [10] removido (garbage collected)
  head → [20] → [30] → null
```

### Deletar por valor — O(n)

```
  ANTES:
  head → [10] → [20] → [30] → null

  deleteByValue(20):
  1. Percorre até achar 20
  2. O nó anterior [10].next = [20].next

  DEPOIS:
  head → [10] ─────→ [30] → null
                 ↑
          💨 [20] pulado/removido
```

### Reverter — O(n)

```
  ANTES:
  head → [1] → [2] → [3] → null

  Passo 1:  null ← [1]   [2] → [3] → null
  Passo 2:  null ← [1] ← [2]   [3] → null
  Passo 3:  null ← [1] ← [2] ← [3]
                                  ↑
  DEPOIS:                       head
  head → [3] → [2] → [1] → null
```

## Array vs Linked List

```
  ARRAY (acesso direto por índice):
  ┌────┬────┬────┬────┬────┐
  │ 10 │ 20 │ 30 │ 40 │ 50 │    array[2] = 30  ← O(1)!
  └────┴────┴────┴────┴────┘
   [0]  [1]  [2]  [3]  [4]

  LINKED LIST (acesso sequencial):
  [10] → [20] → [30] → [40] → [50] → null
                  ↑
  Para chegar aqui, passou por [10] e [20] ← O(n)!
```

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
