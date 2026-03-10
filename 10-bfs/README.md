# 📚 BFS (Breadth-First Search - Busca em Largura)

## O que é?

Explora o grafo **"camada por camada"**, como ondas se espalhando na água. Visita primeiro todos os vizinhos diretos, depois os vizinhos dos vizinhos, e assim por diante.

## Analogia do Mundo Real

```
  💧 PEDRA CAINDO NA ÁGUA:

  As ondas se espalham em TODAS as direções ao mesmo tempo,
  nível por nível:

        . . . 3 . . .       Nível 0: ponto de impacto
       . . 3 2 3 . .        Nível 1: primeira onda
      . 3 2 1 2 3 .         Nível 2: segunda onda
     . 3 2 1 0 1 2 3 .      Nível 3: terceira onda
      . 3 2 1 2 3 .
       . . 3 2 3 . .
        . . . 3 . . .

  BFS funciona igual: explora TODOS os vizinhos antes de ir mais fundo
```

## Visualização Passo a Passo

```
  Grafo:
       A ─── B
       |     |
       C ─── D ─── E

  BFS a partir de A (usa uma FILA/Queue):

  ═══════════════════════════════════════════════════════
  PASSO     FILA            VISITADOS       AÇÃO
  ═══════════════════════════════════════════════════════
  Início    [A]             {}              Começa por A
  1         [B, C]          {A}             Visita A, enfileira vizinhos B,C
  2         [C, D]          {A, B}          Visita B, enfileira vizinho D
  3         [D]             {A, B, C}       Visita C (D já na fila)
  4         [E]             {A, B, C, D}    Visita D, enfileira vizinho E
  5         []              {A, B, C, D, E} Visita E, fila vazia → FIM!

  Ordem: A → B → C → D → E

  ─────────────────────────────────────────────────────

  Visualização por NÍVEIS:

       A              Nível 0: A
      / \
     B   C            Nível 1: B, C
     |
     D                Nível 2: D
     |
     E                Nível 3: E
```

## BFS em Grid (muito comum no LeetCode!)

```
  Encontrar menor caminho de S até E:

  ┌───┬───┬───┬───┬───┐
  │ S │   │   │ ▓ │   │
  ├───┼───┼───┼───┼───┤
  │   │ ▓ │   │ ▓ │   │
  ├───┼───┼───┼───┼───┤
  │   │   │   │   │ E │
  └───┴───┴───┴───┴───┘
  ▓ = parede

  BFS explora nível por nível:

  ┌───┬───┬───┬───┬───┐
  │ 0 │ 1 │ 2 │ ▓ │   │     0 = início
  ├───┼───┼───┼───┼───┤     1 = 1 passo
  │ 1 │ ▓ │ 3 │ ▓ │   │     2 = 2 passos
  ├───┼───┼───┼───┼───┤     ...
  │ 2 │ 3 │ 4 │ 5 │ 6 │     6 = menor caminho!
  └───┴───┴───┴───┴───┘
```

## BFS vs DFS

```
  BFS (Largura):                 DFS (Profundidade):
  Explora por NÍVEIS             Mergulha até o FUNDO

       A                              A
      / \                            / \
     B   C    → A, B, C, D, E      B   C    → A, B, D, E, C
    / \                            / \
   D   E                         D   E

  Usa FILA (Queue)               Usa PILHA (Stack)
```

| Característica           |            BFS             |            DFS             |
| ------------------------ | :------------------------: | :------------------------: |
| Estrutura usada          |      **Fila** (Queue)      |     **Pilha** (Stack)      |
| Exploração               | Largura (nível por nível)  | Profundidade (até o fundo) |
| Menor caminho (sem peso) |         **Sim** ✅         |           Não ❌           |
| Uso de memória           | Mais (guarda todo o nível) |           Menos            |

## Complexidade

| Métrica | Complexidade |
| ------- | :----------: |
| Tempo   | **O(V + E)** |
| Espaço  |   **O(V)**   |

V = Vértices, E = Arestas

## Como rodar

```bash
npx tsx data-structures/10-bfs/index.ts
```

## Dicas para Entrevistas

1. BFS garante o **menor caminho em grafos sem peso**.
2. Sempre que o problema pedir **distância mínima** ou **nível**, pense BFS.
3. BFS em **Grid (Matriz)** é extremamente comum no LeetCode ("Number of Islands", "Shortest Path in Binary Matrix").
4. Não esqueça do `visited`! Sem ele, cria loop infinito.
