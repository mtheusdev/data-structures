# 📚 Bellman-Ford (Menor Caminho com Pesos Negativos)

## O que é?

Encontra o menor caminho de um nó para todos os outros, assim como o Dijkstra. Porém, ele **funciona com pesos negativos** e consegue **detectar ciclos negativos**.

## Dijkstra vs Bellman-Ford

| Característica  |      Dijkstra       |    Bellman-Ford     |
| --------------- | :-----------------: | :-----------------: |
| Pesos negativos |   ❌ Não funciona   |     ✅ Funciona     |
| Ciclo negativo  |   ❌ Não detecta    |     ✅ Detecta      |
| Complexidade    |  O((V+E) log V) ✅  |     O(V · E) ❌     |
| Quando usar     | Sem pesos negativos | Com pesos negativos |

## Como funciona

```
  A ideia é SIMPLES: relaxa TODAS as arestas, V-1 vezes.

  "Relaxar" uma aresta (u → v, peso w):
  ┌─────────────────────────────────────────────┐
  │  Se dist[u] + w < dist[v]:                  │
  │     dist[v] = dist[u] + w    ← ATUALIZA!   │
  └─────────────────────────────────────────────┘
```

## Passo a Passo Detalhado

```
  Grafo:
    A ──6──→ B
    |        ↑
    2       -3
    ↓        |
    C ──4──→ D

  Arestas: A→B(6), A→C(2), C→D(4), D→B(-3)

  ═══════════════════════════════════════════════════════
  ITER.   RELAXANDO         DISTÂNCIAS
  ═══════════════════════════════════════════════════════

  Início                    A=0, B=∞, C=∞, D=∞

  V-1 = 3 iterações:

  Iter 1:  A→B: 0+6=6 < ∞    A=0, B=6, C=2, D=6
           A→C: 0+2=2 < ∞         ↑      ↑
           C→D: 2+4=6 < ∞
           D→B: 6+(-3)=3 < 6  A=0, B=3, C=2, D=6
                                    ↑
                               melhorou! (via D)

  Iter 2:  A→B: 6 > 3 (não melhora)
           A→C: 2 (não melhora)    Nada muda.
           C→D: 6 (não melhora)
           D→B: 3 (não melhora)

  Iter 3:  Nada muda.

  ═══════════════════════════════════════════════════════

  Resultado:
  A → A: 0
  A → C: 2   (A → C)
  A → B: 3   (A → C → D → B)    ← o peso negativo AJUDOU!
  A → D: 6   (A → C → D)

  Dijkstra diria A→B = 6 (errado!), Bellman-Ford acha 3 ✅
```

## O que é um Ciclo Negativo?

```
  CICLO NEGATIVO — distância pode diminuir INFINITAMENTE:

    A ──(1)──→ B
    ↑          |
    |        (-1)
  (-1)         ↓
    └──── C ←──┘

  Soma do ciclo: 1 + (-1) + (-1) = -1

  Volta 1: A=0 → B=1 → C=0 → A=-1
  Volta 2: A=-1 → B=0 → C=-1 → A=-2
  Volta 3: A=-2 → B=-1 → C=-2 → A=-3
  ...                                    → -∞  (IMPOSSÍVEL calcular!)

  ┌────────────────────────────────────────────────────┐
  │  DETECÇÃO: Se na iteração V (a EXTRA) ainda       │
  │  conseguir relaxar alguma aresta → CICLO NEGATIVO │
  └────────────────────────────────────────────────────┘
```

## Por que V-1 iterações?

```
  No pior caso, o menor caminho passa por V-1 arestas:

  A → B → C → D → E       (4 arestas = V-1 arestas)
  V=5 nós

  Iteração 1: descobre melhor caminho até B
  Iteração 2: descobre melhor caminho até C
  Iteração 3: descobre melhor caminho até D
  Iteração 4: descobre melhor caminho até E

  Se na iteração 5 (V) algo AINDA melhorar → ciclo negativo!
```

## Complexidade

| Métrica |    Valor     |
| ------- | :----------: |
| Tempo   | **O(V · E)** |
| Espaço  |   **O(V)**   |

## Como rodar

```bash
npx tsx data-structures/14-bellman-ford/index.ts
```

## Dicas para Entrevistas

1. Se o problema tem **pesos negativos**, Bellman-Ford é a resposta.
2. Usado no protocolo de roteamento **RIP** da internet.
3. É mais **lento** que Dijkstra, então só use quando necessário.
4. A detecção de ciclo negativo é um bônus poderoso que Dijkstra não tem.
