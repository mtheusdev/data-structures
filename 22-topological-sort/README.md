# 📚 Topological Sort (Ordenação Topológica)

## O que é?

Ordena os vértices de um grafo **dirigido** de forma que todas as **dependências** vêm antes dos seus dependentes.

## Visualização

```
  Pré-requisitos:
  Matemática → Física → ML → IA
  Matemática → Programação → ML
                Programação → BD → IA

  Ordenação Topológica:
  Matemática → Física → Programação → ML → BD → IA
```

## Dois Métodos

### 1. BFS (Kahn's Algorithm)

- Usa **grau de entrada** (quantas setas chegam no nó)
- Começa pelos nós com grau 0 (sem pré-requisitos)
- Remove arestas e repete

### 2. DFS

- Faz DFS normal e adiciona nó ao resultado na **pós-visita**
- Inverte o resultado no final

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
