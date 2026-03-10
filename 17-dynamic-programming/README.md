# 📚 Dynamic Programming (Programação Dinâmica)

## O que é?

Uma técnica que resolve problemas **quebrando em sub-problemas** e salvando os resultados para não recalcular.

## Dois estilos

### Top-Down (Memoization)

Recursão normal + salva resultados num `Map` ou array.

```typescript
function fib(n, memo) {
  if (memo.has(n)) return memo.get(n); // Já calculei? Retorna!
  const result = fib(n - 1) + fib(n - 2);
  memo.set(n, result); // Salva para o futuro
}
```

### Bottom-Up (Tabulation)

Constrói a resposta de baixo para cima usando um array `dp[]`.

```typescript
dp[0] = 0;
dp[1] = 1;
for (i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];
```

## 5 Passos para resolver qualquer DP

1. **Definir** o que `dp[i]` representa
2. **Encontrar** a **relação de recorrência** (como dp[i] depende dos anteriores)
3. **Definir** os **casos base**
4. **Definir** a **ordem** de cálculo
5. **Retornar** a resposta

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
