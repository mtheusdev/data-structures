# 📚 Dijkstra (Menor Caminho em Grafos Ponderados)

## O que é?

Encontra a **menor distância** de um vértice para **todos os outros** em um grafo com pesos **não-negativos**.

## Visualização

```
  A --4-- B --2-- E
  |       |       |
  1       3       6
  |       |       |
  C --2-- D --1-- F

  Dijkstra a partir de A:
    A → A: 0
    A → C: 1  (A→C)
    A → D: 3  (A→C→D)
    A → B: 4  (A→B)
    A → F: 4  (A→C→D→F)
    A → E: 6  (A→B→E)
```

## Como funciona (passo a passo)

1. Define distância do nó inicial como **0**, todos os outros como **∞**
2. Escolhe o nó **não visitado** com **menor distância**
3. Para cada vizinho: calcula `distância_atual + peso_aresta`
4. Se for **menor** que a distância conhecida, **atualiza**!
5. Marca o nó como **visitado**
6. Repete até visitar todos

## Complexidade

| Implementação     |         Tempo          |
| ----------------- | :--------------------: |
| Com array simples |       **O(V²)**        |
| Com Min-Heap      | **O((V + E) · log V)** |

## ⚠️ Limitação

Dijkstra **NÃO FUNCIONA** com pesos negativos! Para isso, use **Bellman-Ford** (próxima pasta).

## Como rodar

```bash
npx tsx data-structures/13-dijkstra/index.ts
```

## Dicas para Entrevistas

1. Dijkstra é a base do **GPS** (Google Maps, Waze).
2. Se o problema falar "menor caminho" + "grafo com pesos", é Dijkstra.
3. Saiba diferenciar: **BFS** = menor caminho sem peso, **Dijkstra** = com peso.
4. A versão otimizada usa um **Min-Heap** como fila de prioridade.
