# 📚 DFS (Depth-First Search - Busca em Profundidade)

## O que é?

Explora o grafo indo o **mais fundo possível** antes de voltar. Como entrar num labirinto: segue um caminho até o final, se bater numa parede, volta e tenta outro.

## Visualização

```
  Grafo:          Ordem DFS a partir de A:
  A --- B --- D     A → B → D → E → F → C
  |     |
  C     E --- F

  (Mergulha até o fundo de cada ramo antes de ir pro próximo)
```

## Duas formas de implementar

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
