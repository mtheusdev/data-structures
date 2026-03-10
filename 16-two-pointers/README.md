# 📚 Two Pointers (Dois Ponteiros)

## O que é?

Uma técnica que usa **dois ponteiros** para percorrer a entrada de formas estratégicas, reduzindo a complexidade de O(n²) para O(n).

## Os 3 Padrões

### 1. Ponteiros Opostos (início ↔ fim)

```
  Encontrar dois números que somam 10 em [1, 2, 4, 6, 8, 9]:

  Passo 1:
  [1, 2, 4, 6, 8, 9]
   ↑                ↑
  left             right
  soma = 1 + 9 = 10 ✅ ACHEI!

  ─────────────────────────────

  Encontrar dois números que somam 7:

  Passo 1:  [1, 2, 4, 6, 8, 9]    soma = 1+9 = 10 > 7  → right--
             ↑              ↑

  Passo 2:  [1, 2, 4, 6, 8, 9]    soma = 1+8 = 9 > 7   → right--
             ↑           ↑

  Passo 3:  [1, 2, 4, 6, 8, 9]    soma = 1+6 = 7        ✅ ACHEI!
             ↑        ↑

  ┌──────────────────────────────────────────────┐
  │  Soma grande demais → move right para ←       │
  │  Soma pequena demais → move left para →       │
  └──────────────────────────────────────────────┘
```

**Problemas:** Two Sum (ordenado), Palíndromo, Container With Most Water

### 2. Fast & Slow (Rápido e Lento)

```
  Remover duplicatas de [1, 1, 2, 2, 3, 4]:

  Passo 1:  [1, 1, 2, 2, 3, 4]
             ↑  ↑
            slow fast
            1 == 1? Duplicata → fast avança

  Passo 2:  [1, 1, 2, 2, 3, 4]
             ↑     ↑
            slow  fast
            1 ≠ 2? Novo! → slow avança, copia valor

  Resultado: [1, 2, ...]
              ↑  ↑
             slow avança e copia

  Passo 3:  [1, 2, 2, 2, 3, 4]
                ↑     ↑
               slow  fast
               2 == 2? Duplicata → fast avança

  Passo 4:  [1, 2, 2, 2, 3, 4]
                ↑        ↑
               slow     fast
               2 ≠ 3? Novo! → slow avança, copia

  Final:    [1, 2, 3, 4, ...]   4 elementos únicos!
```

**Problemas:** Remover duplicatas, Mover zeros, Detectar ciclo em Linked List

### Fast & Slow em Linked List (detectar ciclo)

```
  🐢 slow (1 passo)    🐇 fast (2 passos)

  1 → 2 → 3 → 4 → 5
              ↑       |
              └───────┘   ← CICLO!

  Passo 1: 🐢=1, 🐇=2
  Passo 2: 🐢=2, 🐇=4
  Passo 3: 🐢=3, 🐇=3    ← SE ENCONTRARAM! → Tem ciclo! ✅

  Se não tiver ciclo, 🐇 chega em null primeiro.
```

### 3. Três Ponteiros

```
  Three Sum: achar 3 números que somam 0 em [-4, -1, -1, 0, 1, 2]

  Para cada i, usa dois ponteiros (left, right):

  i=0: [-4, -1, -1, 0, 1, 2]
        ↑    ↑             ↑
        i   left         right
       soma = -4 + (-1) + 2 = -3 < 0 → left++

       [-4, -1, -1, 0, 1, 2]
        ↑        ↑         ↑
        i       left     right
       soma = -4 + (-1) + 2 = -3 < 0 → left++
       ...

  i=1: [-4, -1, -1, 0, 1, 2]
             ↑   ↑         ↑
             i  left      right
       soma = -1 + (-1) + 2 = 0  ✅ ACHEI! [-1, -1, 2]
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
