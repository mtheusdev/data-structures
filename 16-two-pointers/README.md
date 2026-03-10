# 📚 Two Pointers (Dois Ponteiros)

## O que é?

Uma técnica que usa **dois ponteiros** para percorrer a entrada de formas estratégicas, reduzindo a complexidade de O(n²) para O(n).

## Os 3 Padrões

### 1. Ponteiros Opostos (início ↔ fim)

```
  [1, 2, 4, 6, 8, 9]
   ↑                ↑
  left            right
  (se aproximam até se encontrarem)
```

**Problemas:** Two Sum (ordenado), Palíndromo, Container With Most Water

### 2. Fast & Slow (Rápido e Lento)

```
  [1, 1, 2, 2, 3, 4]
   ↑  ↑
  slow fast
  (fast avança sempre, slow avança condicionalmente)
```

**Problemas:** Remover duplicatas, Mover zeros, Detectar ciclo em Linked List

### 3. Três Ponteiros

```
  [-4, -1, -1, 0, 1, 2]
    i   ↑            ↑
       left        right
```

**Problemas:** Three Sum, Three Sum Closest

## Complexidade

| Métrica |  Valor   |
| ------- | :------: |
| Tempo   | **O(n)** |
| Espaço  | **O(1)** |

## Como rodar

```bash
npx tsx data-structures/16-two-pointers/index.ts
```

## Problemas clássicos do LeetCode

| #   | Problema                            | Dificuldade |
| --- | ----------------------------------- | :---------: |
| 11  | Container With Most Water           |    Médio    |
| 15  | Three Sum                           |    Médio    |
| 26  | Remove Duplicates from Sorted Array |    Fácil    |
| 125 | Valid Palindrome                    |    Fácil    |
| 141 | Linked List Cycle (fast/slow)       |    Fácil    |
| 167 | Two Sum II - Input Array Is Sorted  |    Médio    |
| 283 | Move Zeroes                         |    Fácil    |
