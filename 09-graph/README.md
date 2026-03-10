# 📚 Graph (Grafo)

## O que é?

Uma coleção de **vértices** (nós) conectados por **arestas** (ligações). A estrutura mais poderosa para representar **relações** entre coisas.

## Tipos de Grafo

| Tipo              | Descrição                   | Exemplo          |
| ----------------- | --------------------------- | ---------------- |
| **Não-Dirigido**  | A ↔ B (amizade no Facebook) | Redes sociais    |
| **Dirigido**      | A → B (seguir no Twitter)   | Links de sites   |
| **Ponderado**     | A →(5)→ B (aresta com peso) | GPS/distâncias   |
| **Não-ponderado** | A → B (sem peso)            | Relações simples |

## Representações

### Lista de Adjacência (usamos esta ✅)

```
  A → [B, C]
  B → [A, D]
  C → [A, D]
```

- Usa **menos memória**
- Melhor para grafos **esparsos** (poucas arestas)

### Matriz de Adjacência

```
    A  B  C  D
  A [0, 1, 1, 0]
  B [1, 0, 0, 1]
  C [1, 0, 0, 1]
```

- Usa **mais memória** (n²)
- Verificar se existe aresta é **O(1)**

## Como rodar

```bash
npx tsx data-structures/09-graph/index.ts
```

## Dicas para Entrevistas

1. A maioria dos problemas de grafo usa **BFS** ou **DFS** (próximas pastas).
2. Saber a diferença entre **Lista de Adjacência** vs **Matriz** é essencial.
3. Problemas comuns: "encontrar caminho", "detectar ciclos", "componentes conectados".
