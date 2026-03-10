# 📚 Sliding Window (Janela Deslizante)

## O que é?

Uma técnica para processar **sub-arrays** ou **sub-strings contíguas** de forma eficiente, "deslizando" uma janela pela entrada em vez de recalcular tudo do zero.

## Analogia do Mundo Real

```
  🔍 LUPA DESLIZANDO SOBRE UM TEXTO:

  Texto: H E L L O _ W O R L D

  Passo 1: [H E L] L O _ W O R L D    → vê "HEL"
  Passo 2:  H [E L L] O _ W O R L D   → vê "ELL"
  Passo 3:  H E [L L O] _ W O R L D   → vê "LLO"
  Passo 4:  H E L [L O _] W O R L D   → vê "LO "

  A lupa (janela) desliza uma posição por vez!
```

## Visualização Detalhada

```
  Array: [2, 1, 5, 1, 3, 2]   K = 3 (janela de tamanho 3)

  Abordagem INGÊNUA - O(n × k):
  Recalcula tudo a cada passo... lento!
  Soma [2,1,5] = 8      (3 somas)
  Soma [1,5,1] = 7      (3 somas)
  Soma [5,1,3] = 9      (3 somas)
  Soma [1,3,2] = 6      (3 somas)
  Total: 12 operações 😢

  ─────────────────────────────────────────

  Abordagem SLIDING WINDOW - O(n):
  Reaproveita o cálculo anterior!

  Passo 1: [2, 1, 5] 1, 3, 2  → soma = 2+1+5 = 8
             \_____/

  Passo 2:  2 [1, 5, 1] 3, 2  → soma = 8 - 2 + 1 = 7
            ↑  \_____/    ↑
         remove          adiciona

  Passo 3:  2, 1 [5, 1, 3] 2  → soma = 7 - 1 + 3 = 9  ← MÁXIMO!
               ↑  \_____/   ↑
            remove          adiciona

  Passo 4:  2, 1, 5 [1, 3, 2] → soma = 9 - 5 + 2 = 6
                  ↑  \_____/
               remove

  Total: 6 operações (1 soma inicial + 3 atualizações) 😎
```

## Dois tipos

### 1. Janela de Tamanho Fixo

```
  Tamanho SEMPRE = K

  ┌─────────────────────────────────────────┐
  │  A janela desliza da esquerda pra direita │
  │  sempre com o mesmo tamanho               │
  └─────────────────────────────────────────┘

  [1, 3, 2, 6, -1, 4, 1, 8, 2]   K=3
   \_____/
      \_____/
         \_____/
            \_____/     ← sempre 3 elementos
```

**Problemas:** Maior soma de K elementos, média de K elementos

### 2. Janela de Tamanho Variável

```
  A janela CRESCE e ENCOLHE conforme necessário

   left        right
    ↓            ↓
  [ a, b, c, d, e, f, g ]
    \________/
     janela cresce →   se condição OK
    janela encolhe ←   se condição violada

  Exemplo: Menor subarray com soma >= 7
  [2, 3, 1, 2, 4, 3]

  [2]                  soma=2 < 7  → expande →
  [2, 3]               soma=5 < 7  → expande →
  [2, 3, 1]            soma=6 < 7  → expande →
  [2, 3, 1, 2]         soma=8 ≥ 7  ✅ tamanho=4, encolhe ←
     [3, 1, 2]         soma=6 < 7  → expande →
     [3, 1, 2, 4]      soma=10 ≥ 7 ✅ tamanho=4, encolhe ←
        [1, 2, 4]       soma=7 ≥ 7 ✅ tamanho=3, encolhe ←
           [2, 4]       soma=6 < 7  → expande →
           [2, 4, 3]    soma=9 ≥ 7 ✅ tamanho=3
              [4, 3]    soma=7 ≥ 7 ✅ tamanho=2 ← MÍNIMO!
```

**Problemas:** Menor subarray com soma >= X, longest substring without repeating

## Como identificar problemas de Sliding Window?

Procure por essas palavras-chave:

- "subarray **contíguo**"
- "**substring**"
- "máximo/mínimo de **K** elementos consecutivos"
- "**sem** caracteres **repetidos**"
- "**menor/maior** subarray que satisfaça..."

## Complexidade

| Métrica |        Valor         |
| ------- | :------------------: |
| Tempo   |       **O(n)**       |
| Espaço  | **O(1)** ou **O(k)** |

## Como rodar

```bash
npx tsx data-structures/15-sliding-window/index.ts
```

## Problemas clássicos do LeetCode

| #   | Problema                                       | Dificuldade |
| --- | ---------------------------------------------- | :---------: |
| 3   | Longest Substring Without Repeating Characters |    Médio    |
| 76  | Minimum Window Substring                       |   Difícil   |
| 209 | Minimum Size Subarray Sum                      |    Médio    |
| 239 | Sliding Window Maximum                         |   Difícil   |
| 438 | Find All Anagrams in a String                  |    Médio    |
