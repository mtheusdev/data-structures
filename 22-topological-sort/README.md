# 📚 Topological Sort (Ordenação Topológica)

## O que é?

Ordena os vértices de um grafo **dirigido** de forma que todas as **dependências** vêm antes dos seus dependentes.

## Analogia do Mundo Real

```
  👨‍🎓 GRADE CURRICULAR:

  Antes de fazer IA, preciso de ML.
  Antes de ML, preciso de Matemática e Programação.
  Antes de BD, preciso de Programação.

  Ordem de matrícula válida:
  Matemática → Programação → Física → ML → BD → IA

  Não posso fazer IA antes de ML! (dependência)
```

## Visualização

```
  Pré-requisitos (grafo dirigido):

  Matemática ───→ Física ──────→ ML ───→ IA
       |                         ↑        ↑
       └──→ Programação ────────┘   BD ──┘
                  |                  ↑
                  └─────────────────┘

  Grau de entrada (quantas setas CHEGAM em cada nó):

  ┌────────────┬────────────────┐
  │    Nó      │ Grau de Entrada│
  ├────────────┼────────────────┤
  │ Matemática │       0        │ ← sem pré-requisito!
  │ Física     │       1        │ ← precisa de Matemática
  │ Programação│       1        │ ← precisa de Matemática
  │ ML         │       2        │ ← precisa de Física + Prog
  │ BD         │       1        │ ← precisa de Programação
  │ IA         │       2        │ ← precisa de ML + BD
  └────────────┴────────────────┘
```

## Passo a Passo (Kahn's Algorithm - BFS)

```
  ═══════════════════════════════════════════════════════════
  PASSO    FILA               RESULTADO          AÇÃO
  ═══════════════════════════════════════════════════════════

  Início   [Mat]              []                 Grau 0 na fila
                                                 (só Mat tem grau 0)

  1        [Fís, Prog]        [Mat]              Remove Mat,
                                                 reduz grau dos filhos:
                                                 Fís: 1→0 ✅, Prog: 1→0 ✅

  2        [Prog]             [Mat, Fís]         Remove Fís,
                                                 reduz grau de ML: 2→1

  3        [ML, BD]           [Mat, Fís, Prog]   Remove Prog,
                                                 ML: 1→0 ✅, BD: 1→0 ✅

  4        [BD]               [Mat,Fís,Prog,ML]  Remove ML,
                                                 IA: 2→1

  5        [IA]               [Mat,Fís,Prog,     Remove BD,
                                ML,BD]            IA: 1→0 ✅

  6        []                 [Mat,Fís,Prog,     Remove IA → FIM!
                                ML,BD,IA]

  ═══════════════════════════════════════════════════════════

  Resultado: Matemática → Física → Programação → ML → BD → IA ✅
```

## Detectando Ciclos

```
  Se o grafo tem CICLO, Topo Sort é IMPOSSÍVEL!

  A → B → C → A  (ciclo!)

  Nenhum nó tem grau 0 → fila começa vazia → CICLO DETECTADO!

  ┌────────────────────────────────────────┐
  │  Se o resultado tem MENOS nós que o    │
  │  grafo, existe um ciclo! ❌            │
  └────────────────────────────────────────┘
```

## Dois Métodos

### 1. BFS (Kahn's Algorithm)

```
  1. Calcula grau de entrada de todos os nós
  2. Coloca nós com grau 0 na fila
  3. Remove da fila, adiciona ao resultado
  4. Reduz grau dos vizinhos
  5. Se grau virou 0 → entra na fila
  6. Repete até fila vazia
```

### 2. DFS

```
  1. Faz DFS normal
  2. Na PÓS-VISITA, adiciona ao resultado
  3. Inverte o resultado no final

  DFS(A):
    DFS(B):
      DFS(D): → resultado = [D]         (pós-visita)
    → resultado = [D, B]                 (pós-visita)
    DFS(C):
      DFS(D): já visitado
    → resultado = [D, B, C]             (pós-visita)
  → resultado = [D, B, C, A]            (pós-visita)

  Inverso: [A, C, B, D] ← ordenação topológica ✅
```

## Complexidade

| Métrica |    Valor     |
| ------- | :----------: |
| Tempo   | **O(V + E)** |
| Espaço  |   **O(V)**   |

## Como rodar

```bash
npx tsx data-structures/22-topological-sort/index.ts
```

## Problemas clássicos do LeetCode

| #   | Problema             | Dificuldade |
| --- | -------------------- | :---------: |
| 207 | Course Schedule      |    Médio    |
| 210 | Course Schedule II   |    Médio    |
| 269 | Alien Dictionary     |   Difícil   |
| 310 | Minimum Height Trees |    Médio    |

## Dicas para Entrevistas

1. Se o problema falar em **"pré-requisitos"** ou **"dependências"**, é Topological Sort.
2. Sempre pergunte: **"O grafo pode ter ciclos?"** — Se sim, Topo Sort não funciona.
3. Kahn's (BFS) é mais fácil de implementar e detecta ciclos naturalmente.
