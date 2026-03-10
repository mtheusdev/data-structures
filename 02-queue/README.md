# 📚 Queue (Fila)

## O que é?

Uma **Queue** (Fila) é uma estrutura de dados que segue o princípio **FIFO** (First In, First Out):  
**O primeiro elemento a entrar é o primeiro a sair.**

Pense numa fila de banco: quem chegou primeiro é atendido primeiro.

## Operações Principais

| Operação     | O que faz                           | Complexidade |
| ------------ | ----------------------------------- | :----------: |
| `enqueue(x)` | Adiciona `x` no final da fila       |   **O(1)**   |
| `dequeue()`  | Remove e retorna o primeiro da fila |   **O(1)**   |
| `front()`    | Retorna o primeiro **sem remover**  |   **O(1)**   |
| `isEmpty()`  | Verifica se a fila está vazia       |   **O(1)**   |
| `size()`     | Retorna o número de elementos       |   **O(1)**   |

## Visualização

```
  enqueue("A") → enqueue("B") → enqueue("C")

  INÍCIO → [ A → B → C ] → FIM

  dequeue() → remove A
  dequeue() → remove B
  dequeue() → remove C
```

## ⚠️ Por que NÃO usar Array.shift()?

Em JavaScript, `array.shift()` tem complexidade **O(n)** porque ele precisa **reindexar todos os elementos** do array após remover o primeiro.

Na nossa implementação, usamos um **objeto com ponteiros** (`headIndex` e `tailIndex`), garantindo que o `dequeue()` seja **O(1)**.

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
