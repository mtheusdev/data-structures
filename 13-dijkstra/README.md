# 📚 Dijkstra (Menor Caminho em Grafos Ponderados)

## O que é?

Encontra a **menor distância** de um vértice para **todos os outros** em um grafo com pesos **não-negativos**.

## Analogia do Mundo Real

```
  🗺️ GPS (Google Maps):

  "Qual o caminho mais CURTO da sua casa até o trabalho?"

  Casa ──5km── Escola ──3km── Shopping ──2km── Trabalho
    |                                            |
    └─────────────── 15km ───────────────────────┘

  Caminho pela escola: 5 + 3 + 2 = 10km ✅ mais curto!
  Caminho direto: 15km ❌ mais longo
```

## Visualização

```
   A ──4── B ──2── E
   |       |       |
   1       3       6
   |       |       |
   C ──2── D ──1── F

  Dijkstra a partir de A:
    A → A: 0
    A → C: 1  (A→C)
    A → D: 3  (A→C→D)
    A → B: 4  (A→B)
    A → F: 4  (A→C→D→F)
    A → E: 6  (A→B→E)
```

## Passo a Passo Detalhado

```
  Grafo:
   A ──4── B
   |       |
   1       3
   |       |
   C ──2── D

  ═══════════════════════════════════════════════════════════
  PASSO   VISITANDO   DISTÂNCIAS           AÇÃO
  ═══════════════════════════════════════════════════════════

  Início               A=0, B=∞, C=∞, D=∞  Tudo começa em ∞
                        ↑
                    menor distância

  1       A (dist=0)   A=0, B=4, C=1, D=∞  Atualiza vizinhos:
                             ↑    ↑          B=0+4=4, C=0+1=1
                        via A  via A

  2       C (dist=1)   A=0, B=4, C=1, D=3  Atualiza vizinhos:
                                       ↑    D=1+2=3
                                   via A→C

  3       D (dist=3)   A=0, B=4, C=1, D=3  Vizinho B: 3+? Não melhora
                                            (já tem 4 via A)

  4       B (dist=4)   A=0, B=4, C=1, D=3  Todos visitados → FIM!

  ═══════════════════════════════════════════════════════════

  Resultado final (menores distâncias a partir de A):

  A ═══0═══ A
  A ═══1═══ C     (caminho: A → C)
  A ═══3═══ D     (caminho: A → C → D)
  A ═══4═══ B     (caminho: A → B)
```

## Como funciona (passo a passo)

1. Define distância do nó inicial como **0**, todos os outros como **∞**
2. Escolhe o nó **não visitado** com **menor distância**
3. Para cada vizinho: calcula `distância_atual + peso_aresta`
4. Se for **menor** que a distância conhecida, **atualiza**!
5. Marca o nó como **visitado**
6. Repete até visitar todos

## Dijkstra vs BFS

```
  BFS (sem peso):                    Dijkstra (com peso):

  A ─── B ─── C                      A ──1── B ──10── C
  |           |                      |                |
  D ─── E ─── F                      5                2
                                     |                |
  Todas arestas = 1                  D ──1── E ──1── F
  Menor caminho A→F: A→D→E→F (3)
                                     Menor caminho A→C:
  BFS funciona! ✅                    NÃO é A→B→C (1+10=11)
                                     É A→D→E→F→C (5+1+1+2=9) ✅
                                     Dijkstra necessário!
```

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
