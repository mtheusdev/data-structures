# 📚 Union-Find (Disjoint Set / Conjunto Disjunto)

## O que é?

Uma estrutura que agrupa elementos em **conjuntos** e responde rapidamente: **"Esses dois estão no mesmo grupo?"**

## Analogia do Mundo Real

```
  👥 GRUPOS DE AMIGOS:

  Início: todo mundo separado
  🧑A  🧑B  🧑C  🧑D  🧑E  🧑F

  "A e B viraram amigos" (union)
  🧑A─🧑B  🧑C  🧑D  🧑E  🧑F

  "C e D viraram amigos" (union)
  🧑A─🧑B  🧑C─🧑D  🧑E  🧑F

  "B e D viraram amigos" (union) → os GRUPOS se juntam!
  🧑A─🧑B─🧑C─🧑D  🧑E  🧑F

  "A e D estão no mesmo grupo?" → SIM! ✅
  "A e E estão no mesmo grupo?" → NÃO! ❌
```

## Visualização com Árvores

```
  Cada conjunto é uma ÁRVORE, e cada nó aponta pro seu "pai".
  A RAIZ é o "representante" do grupo.

  Antes:  {0} {1} {2} {3} {4} {5}   (6 conjuntos)

  Cada um é sua própria raiz:
   0   1   2   3   4   5
   ↑   ↑   ↑   ↑   ↑   ↑
  (raiz de si mesmo)

  ─────────────────────────────────────────────

  union(0, 1):
   0       2   3   4   5
   ↑
   1

  union(2, 3):
   0       2       4   5
   ↑       ↑
   1       3

  union(1, 3):  → junta os dois grupos!
       0            4   5
      ↗ ↖
     1    2
          ↑
          3

  find(3) = 0  (sobe até a raiz)
  find(1) = 0  (mesma raiz!)
  connected(1, 3)? → find(1) == find(3) → 0 == 0 → SIM! ✅
```

## Otimizações

### Path Compression (Compressão de Caminho)

```
  ANTES (sem path compression):
  Para find(4): sobe 4 → 3 → 2 → 1 → 0   (4 passos)

       0
       ↑
       1
       ↑
       2
       ↑
       3
       ↑
       4

  DEPOIS (com path compression):
  find(4) achata TUDO direto pra raiz:

          0
       ╱╱ | ╲╲
      1   2  3  4     ← TODOS apontam pra raiz agora!

  Próxima vez: find(4) = 0 em 1 passo! 😎
```

### Union by Rank (União por Rank)

```
  SEM Union by Rank:              COM Union by Rank:
  Árvore pode ficar alta          Menor vai EMBAIXO da maior

       0                              0
       ↑                            ╱ | ╲
       1                           1   2  5
       ↑                              ↑
       2                              3
       ↑                              ↑
       3                              4
       ↑
       4
       ↑
       5

  find() = O(n) 😢              find() ≈ O(1) 😎
```

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
