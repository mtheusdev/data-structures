# 📚 Doubly Linked List (Lista Duplamente Encadeada)

## O que é?

Uma lista onde cada nó tem **dois ponteiros**: um para o **próximo** (`next`) e outro para o **anterior** (`prev`).  
Permite navegar **para frente e para trás**.

## Analogia do Mundo Real

```
  🚇 METRÔ (vai e volta entre estações):

   ◀────────────────────────────────────────────▶

  ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐
  │ Estação│◄──►│ Estação│◄──►│ Estação│◄──►│ Estação│
  │   Sé   │    │ Paraíso│    │Ana Rosa│    │Santana │
  └────────┘    └────────┘    └────────┘    └────────┘
      ↑                                        ↑
    head                                      tail
  (primeira)                                 (última)
```

## Estrutura de um Nó

```
  ┌──────────────────────────────────┐
  │              Nó                  │
  │  ┌──────┬───────┬─────────┐     │
  │  │ prev │ valor │  next   │     │
  │  │  ←── │  42   │  ──→    │     │
  │  └──────┴───────┴─────────┘     │
  └──────────────────────────────────┘
```

## Visualização

```
                   head                                  tail
                    ↓                                     ↓
  null ←── ┌────┐ ←──→ ┌────┐ ←──→ ┌────┐ ←──→ ┌────┐ ──→ null
           │  5 │       │ 10 │       │ 20 │       │ 30 │
           └────┘       └────┘       └────┘       └────┘
```

## Operações Visualizadas

### Inserir no início — O(1)

```
  ANTES:
  null ← [10] ↔ [20] ↔ [30] → null

  insertAtHead(5):
  1. Cria novo nó [5]
  2. [5].next = head antigo [10]
  3. [10].prev = [5]
  4. head = [5]

  DEPOIS:
  null ← [5] ↔ [10] ↔ [20] ↔ [30] → null
          ↑
        novo!
```

### Inserir no final — O(1) ✅

```
  ANTES:
  null ← [10] ↔ [20] ↔ [30] → null
                          ↑
                         tail

  insertAtTail(40):
  1. Cria novo nó [40]
  2. [30].next = [40]       ← acesso direto pelo tail!
  3. [40].prev = [30]
  4. tail = [40]

  DEPOIS:
  null ← [10] ↔ [20] ↔ [30] ↔ [40] → null
                                 ↑
                        novo tail (O(1)!)
```

### Remover no final — O(1) ✅

```
  ANTES:
  null ← [10] ↔ [20] ↔ [30] → null
                          ↑
                         tail

  removeAtTail():
  1. tail = [30].prev = [20]    ← sabe o anterior pelo prev!
  2. [20].next = null

  DEPOIS:                    💨 [30] removido
  null ← [10] ↔ [20] → null
                  ↑
              novo tail
```

### Remover no meio — O(1) se tiver a referência

```
  ANTES:
  null ← [10] ↔ [20] ↔ [30] → null
                  ↑
          remover este nó

  1. [10].next = [30]     (pula o [20])
  2. [30].prev = [10]     (volta pro [10])

  DEPOIS:
  null ← [10] ↔ [30] → null
            ↑       ↑
        ligados diretamente
```

## Lista Simples vs Duplamente Encadeada

```
  LISTA SIMPLES (só vai pra frente):
  head → [A] → [B] → [C] → [D] → null
         ──→   ──→   ──→   ──→
         Pra remover D, preciso percorrer até C → O(n)

  LISTA DUPLA (vai e volta):
  null ← [A] ↔ [B] ↔ [C] ↔ [D] → null
         ←→    ←→    ←→    ←→    ↑ tail
         Pra remover D, acesso direto pelo tail → O(1)
```

| Operação          | Lista Simples |           Lista Dupla           |
| ----------------- | :-----------: | :-----------------------------: |
| Inserir no início |     O(1)      |            **O(1)**             |
| Inserir no final  |    O(n) ❌    |           **O(1)** ✅           |
| Remover no início |     O(1)      |            **O(1)**             |
| Remover no final  |    O(n) ❌    |           **O(1)** ✅           |
| Navegar para trás | Impossível ❌ |           **O(1)** ✅           |
| Uso de memória    |     Menor     | Maior (1 ponteiro extra por nó) |

## Como rodar

```bash
npx tsx data-structures/04-doubly-linked-list/index.ts
```

## Dicas para Entrevistas

1. A Doubly Linked List é a base da implementação de **LRU Cache** (problema muito pedido!).
2. Remover um nó no **meio** é O(1) se você já tiver a referência ao nó (não precisa percorrer).
3. O trade-off é usar **mais memória** (ponteiro `prev` extra) em troca de **mais flexibilidade**.
