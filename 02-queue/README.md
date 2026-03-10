# 📚 Queue (Fila)

## O que é?

Uma **Queue** (Fila) é uma estrutura de dados que segue o princípio **FIFO** (First In, First Out):  
**O primeiro elemento a entrar é o primeiro a sair.**

Pense numa fila de banco: quem chegou primeiro é atendido primeiro.

## Analogia do Mundo Real

```
  🏦 FILA DE BANCO:

   SAÍDA                                           ENTRADA
     ↓                                                ↓
  ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐   ┌──────┐
  │ 🧑 A │ ← │ 🧑 B │ ← │ 🧑 C │ ← │ 🧑 D │ ← │ 🧑 E │
  └──────┘   └──────┘   └──────┘   └──────┘   └──────┘
  1° a sair                                   último a sair
  (chegou 1°)                                  (chegou por último)
```

## Operações Principais

| Operação     | O que faz                           | Complexidade |
| ------------ | ----------------------------------- | :----------: |
| `enqueue(x)` | Adiciona `x` no final da fila       |   **O(1)**   |
| `dequeue()`  | Remove e retorna o primeiro da fila |   **O(1)**   |
| `front()`    | Retorna o primeiro **sem remover**  |   **O(1)**   |
| `isEmpty()`  | Verifica se a fila está vazia       |   **O(1)**   |
| `size()`     | Retorna o número de elementos       |   **O(1)**   |

## Visualização Passo a Passo

```
  ═══════════════════════════════════════════════════════════════
  OPERAÇÃO           ESTADO DA FILA                   RETORNO
  ═══════════════════════════════════════════════════════════════

  (fila vazia)       FRENTE ← [        ] → FINAL

  enqueue("A")       FRENTE ← [ A ] → FINAL

  enqueue("B")       FRENTE ← [ A | B ] → FINAL

  enqueue("C")       FRENTE ← [ A | B | C ] → FINAL

  front()            FRENTE ← [ A | B | C ] → FINAL     → "A"
                       👀 espia ↑

  dequeue()          FRENTE ← [ B | C ] → FINAL         → "A"
                      🗑️  A removido!

  dequeue()          FRENTE ← [ C ] → FINAL             → "B"
                      🗑️  B removido!

  enqueue("D")       FRENTE ← [ C | D ] → FINAL

  dequeue()          FRENTE ← [ D ] → FINAL             → "C"
```

## Stack (LIFO) vs Queue (FIFO)

```
  STACK (Pilha):                    QUEUE (Fila):
  Entra e sai pelo MESMO lado      Entra por um lado, sai pelo OUTRO

       ↕ push/pop                   enqueue ↓         ↓ dequeue
      ┌────┐                      ┌────┬────┬────┐
      │ 30 │ ← topo              │ C  │ B  │ A  │
      ├────┤                      └────┴────┴────┘
      │ 20 │                       fim          frente
      ├────┤
      │ 10 │
      └────┘
```

## ⚠️ Por que NÃO usar Array.shift()?

```
  Array.shift() — O(n) 😢
  Precisa reindexar TODOS os elementos:

  ANTES:  [A, B, C, D, E]     shift() remove o 'A'
           0  1  2  3  4

  DEPOIS: [B, C, D, E]        TODOS os índices mudam!
           0  1  2  3
           ↑  ↑  ↑  ↑
           Todos se movem para a esquerda... lento!

  ─────────────────────────────────

  Ponteiros head/tail — O(1) 😎
  Nada se move, só o ponteiro avança:

  { 0: "A", 1: "B", 2: "C", 3: "D" }
       ↑                         ↑
      head=0                   tail=3

  dequeue() → retorna "A", head = 1

  { 0: "A", 1: "B", 2: "C", 3: "D" }
              ↑               ↑
            head=1          tail=3

  O "A" fica lá mas é ignorado. Sem reindexação!
```

## Quando usar?

- **BFS** (Busca em Largura) em grafos e árvores
- **Fila de tarefas** (processamento de jobs)
- **Buffer de dados** (streaming, I/O)
- **Fila de impressão**

## Como rodar

```bash
npx tsx data-structures/02-queue/index.ts
```

## Complexidade de Espaço

**O(n)** — onde `n` é o número de elementos armazenados.

## Dicas para Entrevistas

1. Sempre que o problema mencionar "ordem de chegada" ou "processar na ordem", pense em Queue.
2. **BFS** SEMPRE usa uma Queue por baixo dos panos.
3. Saiba explicar por que `shift()` é ruim e como otimizar com ponteiros.
