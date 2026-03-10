# 📚 DFS (Depth-First Search - Busca em Profundidade)

## O que é?

Explora o grafo indo o **mais fundo possível** antes de voltar. Como entrar num labirinto: segue um caminho até o final, se bater numa parede, volta e tenta outro.

## Analogia do Mundo Real

```
  🏰 LABIRINTO:

  Você entra e segue sempre em frente.
  Quando bate numa parede, VOLTA e tenta outro caminho.

  ┌───────┬───────────┐
  │ START │           │
  │   ↓   │   ┌───┐   │
  │   ↓   │   │   │   │
  │   ↓───────→   │   │
  │       │   │   ↓   │
  │   ┌───┤   │   ↓   │
  │   │   │   │  END  │
  └───┴───┴───┴───────┘

  Se chegar num beco sem saída → VOLTA (backtrack)
  e tenta outro caminho!
```

## Visualização Passo a Passo

```
  Grafo:
       A ─── B ─── D
       |     |
       C     E ─── F

  DFS a partir de A (usa uma PILHA/Stack):

  ═══════════════════════════════════════════════════════
  PASSO     PILHA           VISITADOS          AÇÃO
  ═══════════════════════════════════════════════════════
  Início    [A]             {}                 Começa por A
  1         [C, B]          {A}                Visita A, empilha vizinhos
  2         [C, E, D]       {A, B}             Visita B, empilha vizinhos
  3         [C, E, F]       {A, B, D}          Visita D (sem vizinhos novos)
                                                empilha F
  4         [C, E]          {A, B, D, F}       Visita F
  5         [C]             {A, B, D, F, E}    Visita E
  6         []              {A, B, D, F, E, C} Visita C → FIM!

  Ordem: A → B → D → F → E → C

  ─────────────────────────────────────────────────────

  Visualização do "mergulho":

       A                     A ←── começa aqui
      / \                    ↓
     B   C                   B ←── mergulha
    /|                       ↓
   D  E                     D ←── mais fundo!
      |                      ↑ volta (beco sem saída)
      F                     E ←── tenta outro caminho
                             ↓
                            F ←── mais fundo!
                             ↑ volta
                            C ←── finalmente visita C
```

## DFS Recursiva vs Iterativa

```
  RECURSIVA (usa a call stack do JavaScript):

  function dfs(node):
    visitar(node)
    para cada vizinho:
      se não visitado:
        dfs(vizinho)    ← chamada recursiva = empilha na call stack

  Call Stack:
  ┌─────────┐
  │  dfs(D) │ ← topo (executando agora)
  ├─────────┤
  │  dfs(B) │
  ├─────────┤
  │  dfs(A) │ ← base (primeira chamada)
  └─────────┘

  ─────────────────────────────────────────────────

  ITERATIVA (usa uma Stack explícita):

  stack = [A]
  enquanto stack não vazia:
    node = stack.pop()
    visitar(node)
    empilha vizinhos de node
```

| Implementação | Como funciona                                  |
| ------------- | ---------------------------------------------- |
| **Recursiva** | A call stack do JavaScript funciona como pilha |
| **Iterativa** | Usamos uma pilha (`Stack`) explícita           |

## Complexidade

| Métrica | Complexidade |
| ------- | :----------: |
| Tempo   | **O(V + E)** |
| Espaço  |   **O(V)**   |

## Como rodar

```bash
npx tsx data-structures/11-dfs/index.ts
```

## Dicas para Entrevistas

1. DFS é perfeito para problemas de **backtracking** (combinações, permutações, Sudoku).
2. Use DFS para **detectar ciclos** em grafos dirigidos.
3. **Topological Sort** (ordenar dependências) usa DFS.
4. Sempre que o problema pedir **todos os caminhos possíveis**, use DFS.
5. Cuidado com **stack overflow** na versão recursiva em grafos muito profundos!
