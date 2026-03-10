# 📚 BFS (Breadth-First Search - Busca em Largura)

## O que é?

Explora o grafo **"camada por camada"**, como ondas se espalhando na água. Visita primeiro todos os vizinhos diretos, depois os vizinhos dos vizinhos, e assim por diante.

## Visualização

```
  Grafo:         Ordem BFS a partir de A:
  A --- B          Nível 0: A
  |     |          Nível 1: B, C
  C --- D          Nível 2: D

  Resultado: A → B → C → D
```

## BFS vs DFS

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
