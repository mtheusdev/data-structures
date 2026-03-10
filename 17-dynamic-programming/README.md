# 📚 Dynamic Programming (Programação Dinâmica)

## O que é?

Uma técnica que resolve problemas **quebrando em sub-problemas** e salvando os resultados para não recalcular.

## Analogia do Mundo Real

```
  📝 PROVA DE MATEMÁTICA:

  "Quanto é 3 + 5?"  → calculo: 8
  "Quanto é 3 + 5 + 2?"  → já sei que 3+5=8, então 8+2=10!

  Sem DP: recalcula 3+5 toda vez 😢
  Com DP: salva o resultado e reaproveita 😎
```

## O Problema Clássico: Fibonacci

```
  Sem DP (recursão pura) — recalcula tudo:

                          fib(5)
                        /        \
                   fib(4)        fib(3)        ← fib(3) calculado 2x!
                  /      \       /     \
             fib(3)    fib(2) fib(2) fib(1)    ← fib(2) calculado 3x!
            /     \
        fib(2)  fib(1)
        /    \
    fib(1) fib(0)

  Tempo: O(2^n) — EXPONENCIAL! 💀

  ─────────────────────────────────────────────

  Com DP (memoization) — salva resultados:

  fib(5): preciso de fib(4) e fib(3)
  fib(4): preciso de fib(3) e fib(2)
  fib(3): preciso de fib(2) e fib(1)
  fib(2): preciso de fib(1) e fib(0)

  memo = {}
  fib(0) = 0  → memo[0] = 0
  fib(1) = 1  → memo[1] = 1
  fib(2) = 0 + 1 = 1  → memo[2] = 1
  fib(3) = 1 + 1 = 2  → memo[3] = 2  ← calculou SÓ 1 VEZ
  fib(4) = 2 + 1 = 3  → memo[4] = 3
  fib(5) = 3 + 2 = 5  → memo[5] = 5

  Tempo: O(n) — LINEAR! ✅
```

## Dois estilos

### Top-Down (Memoization)

```
  Começa do TOPO e desce recursivamente
  Salva resultados num Map/array

  fib(5) → "preciso de fib(4) e fib(3)"
           → fib(4) → "preciso de fib(3) e fib(2)"
                     → fib(3) → "preciso de fib(2) e fib(1)"
                               → fib(2): já sei! → 1  (memo)
                               → fib(1): já sei! → 1  (memo)
                     → fib(3): JÁ CALCULEI! → 2  (memo) ✅
```

```typescript
function fib(n, memo) {
  if (memo.has(n)) return memo.get(n); // Já calculei? Retorna!
  const result = fib(n - 1) + fib(n - 2);
  memo.set(n, result); // Salva para o futuro
}
```

### Bottom-Up (Tabulation)

```
  Constrói a resposta DE BAIXO PRA CIMA
  Preenche uma tabela dp[] do início ao fim

  dp[0] = 0
  dp[1] = 1
  dp[2] = dp[1] + dp[0] = 1
  dp[3] = dp[2] + dp[1] = 2
  dp[4] = dp[3] + dp[2] = 3
  dp[5] = dp[4] + dp[3] = 5

  ┌─────┬─────┬─────┬─────┬─────┬─────┐
  │ dp0 │ dp1 │ dp2 │ dp3 │ dp4 │ dp5 │
  │  0  │  1  │  1  │  2  │  3  │  5  │
  └─────┴─────┴─────┴─────┴─────┴─────┘
    ↑     ↑     ↑     ↑     ↑     ↑
  base  base  0+1   1+1   2+1   3+2
```

```typescript
dp[0] = 0;
dp[1] = 1;
for (i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
```

## 5 Passos para resolver qualquer DP

```
  1. DEFINIR o que dp[i] representa
     → dp[i] = o i-ésimo número de Fibonacci

  2. ENCONTRAR a relação de recorrência
     → dp[i] = dp[i-1] + dp[i-2]

  3. DEFINIR os casos base
     → dp[0] = 0, dp[1] = 1

  4. DEFINIR a ordem de cálculo
     → da esquerda para a direita (i = 2, 3, 4, ...)

  5. RETORNAR a resposta
     → dp[n]
```

## Exemplo: Coin Change

```
  Moedas: [1, 3, 4]    Troco: 6
  "Qual o MÍNIMO de moedas para dar troco de 6?"

  dp[i] = mínimo de moedas para troco i

  dp[0] = 0                         (0 moedas pra troco 0)
  dp[1] = dp[1-1]+1 = 1             (1 moeda de 1)
  dp[2] = dp[2-1]+1 = 2             (2 moedas de 1)
  dp[3] = min(dp[3-1]+1, dp[3-3]+1) = min(3, 1) = 1  (1 moeda de 3)
  dp[4] = min(dp[4-1]+1, dp[4-3]+1, dp[4-4]+1) = min(2, 2, 1) = 1
  dp[5] = min(dp[5-1]+1, dp[5-3]+1, dp[5-4]+1) = min(2, 3, 2) = 2
  dp[6] = min(dp[6-1]+1, dp[6-3]+1, dp[6-4]+1) = min(3, 2, 3) = 2

  ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┐
  │ dp0 │ dp1 │ dp2 │ dp3 │ dp4 │ dp5 │ dp6 │
  │  0  │  1  │  2  │  1  │  1  │  2  │  2  │
  └─────┴─────┴─────┴─────┴─────┴─────┴─────┘

  Resposta: dp[6] = 2 moedas (3 + 3) ✅
```

## Complexidade (varia por problema)

| Problema    |  Tempo   |     Espaço     |
| ----------- | :------: | :------------: |
| Fibonacci   |   O(n)   | O(1) otimizado |
| Coin Change | O(n × m) |      O(n)      |
| Knapsack    | O(n × W) |    O(n × W)    |
| LCS         | O(m × n) |    O(m × n)    |

## Como rodar

```bash
npx tsx data-structures/17-dynamic-programming/index.ts
```

## Problemas clássicos do LeetCode

| #    | Problema                       | Padrão                 |
| ---- | ------------------------------ | ---------------------- |
| 70   | Climbing Stairs                | Fibonacci              |
| 198  | House Robber                   | Decisão (pegar ou não) |
| 322  | Coin Change                    | Mínimo de itens        |
| 300  | Longest Increasing Subsequence | Subsequência           |
| 1143 | Longest Common Subsequence     | Duas strings           |
| 62   | Unique Paths                   | Grid/Matriz            |
| 416  | Partition Equal Subset Sum     | Knapsack               |

## Dicas para Entrevistas

1. Se o problema pede **"mínimo/máximo"** ou **"quantos jeitos"**, provavelmente é DP.
2. Comece com a **recursão pura**, depois adicione memoization.
3. Se conseguir identificar que `dp[i]` depende só de `dp[i-1]` e `dp[i-2]`, otimize o espaço para O(1).
4. Sempre comece desenhando exemplos pequenos e preenchendo a tabela **manualmente**.
