# 📚 Union-Find (Disjoint Set / Conjunto Disjunto)

## O que é?

Uma estrutura que agrupa elementos em **conjuntos** e responde rapidamente: **"Esses dois estão no mesmo grupo?"**

## Visualização

```
  Antes:  {0} {1} {2} {3} {4} {5}   (6 conjuntos)

  union(0,1) → {0,1} {2} {3} {4} {5}
  union(2,3) → {0,1} {2,3} {4} {5}
  union(1,3) → {0,1,2,3} {4} {5}        ← juntou os dois grupos!
  union(4,5) → {0,1,2,3} {4,5}

  connected(0, 3)? SIM ✅
  connected(0, 4)? NÃO ❌
```

## Otimizações

| Técnica              | O que faz                         | Sem ela |    Com ela     |
| -------------------- | --------------------------------- | :-----: | :------------: |
| **Path Compression** | Achata a árvore no `find()`       |  O(n)   | O(α(n)) ≈ O(1) |
| **Union by Rank**    | Menor árvore vai embaixo da maior |  O(n)   | O(α(n)) ≈ O(1) |

> α(n) é a **inversa de Ackermann**, que é praticamente constante.

## Como rodar

```bash
npx tsx data-structures/21-union-find/index.ts
```

## Problemas clássicos do LeetCode

| #   | Problema                       | Dificuldade |
| --- | ------------------------------ | :---------: |
| 200 | Number of Islands              |    Médio    |
| 323 | Number of Connected Components |    Médio    |
| 547 | Number of Provinces            |    Médio    |
| 684 | Redundant Connection           |    Médio    |
| 721 | Accounts Merge                 |    Médio    |

## Dicas para Entrevistas

1. Union-Find é ideal para problemas de **"conectar componentes"** ou **"agrupar"**.
2. Sempre use **ambas otimizações** (Path Compression + Union by Rank).
3. Alternativa ao BFS/DFS para problemas de componentes conectados.
