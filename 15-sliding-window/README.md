# 📚 Sliding Window (Janela Deslizante)

## O que é?

Uma técnica para processar **sub-arrays** ou **sub-strings contíguas** de forma eficiente, "deslizando" uma janela pela entrada em vez de recalcular tudo do zero.

## Visualização

```
  Array: [2, 1, 5, 1, 3, 2]   K = 3

  Passo 1: [2, 1, 5] 1, 3, 2  → soma = 8
  Passo 2:  2 [1, 5, 1] 3, 2  → soma = 8 - 2 + 1 = 7
  Passo 3:  2, 1 [5, 1, 3] 2  → soma = 7 - 1 + 3 = 9  ← MÁXIMO!
  Passo 4:  2, 1, 5 [1, 3, 2] → soma = 9 - 5 + 2 = 6
```

## Dois tipos

### 1. Janela de Tamanho Fixo

A janela sempre tem tamanho `K`. A cada passo, adiciona um à direita e remove um à esquerda.

**Problemas:** Maior soma de K elementos, média de K elementos

### 2. Janela de Tamanho Variável

Os dois ponteiros se movem independentemente. A janela cresce e encolhe conforme necessário.

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
