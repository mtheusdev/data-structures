# 📚 Doubly Linked List (Lista Duplamente Encadeada)

## O que é?

Uma lista onde cada nó tem **dois ponteiros**: um para o **próximo** (`next`) e outro para o **anterior** (`prev`).  
Permite navegar **para frente e para trás**.

## Visualização

```
  null ← [5] ↔ [10] ↔ [20] ↔ [30] → null
          ↑                      ↑
         head                   tail
```

## Lista Simples vs Duplamente Encadeada

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
