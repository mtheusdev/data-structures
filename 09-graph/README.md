# 📚 Graph (Grafo)

## O que é?

Uma coleção de **vértices** (nós) conectados por **arestas** (ligações). A estrutura mais poderosa para representar **relações** entre coisas.

## Analogia do Mundo Real

```
  🌐 REDE SOCIAL:

  Matheus ──── Ana            Cada pessoa = vértice
     |    \    |              Cada amizade = aresta
     |     \   |
    Pedro ── João

  Matheus é amigo de Ana, Pedro e João
  Ana é amiga de Matheus e João
  Pedro é amigo de Matheus e João
```

## Tipos de Grafo

```
  NÃO-DIRIGIDO:                DIRIGIDO:
  (amizade — vai e volta)      (Twitter — seguir é unilateral)

    A ─── B                     A ───→ B
    |     |                     ↑      |
    C ─── D                     C ←─── D

  A amigo de B = B amigo de A   A segue B ≠ B segue A

  ──────────────────────────────────────────────

  NÃO-PONDERADO:               PONDERADO:
  (todas arestas iguais)       (arestas com peso/custo)

    A ─── B                     A ─4── B
    |     |                     |      |
    C ─── D                     1      3
                                |      |
                                C ─2── D

                                Peso = distância, custo, tempo...
```

| Tipo              | Descrição                   | Exemplo          |
| ----------------- | --------------------------- | ---------------- |
| **Não-Dirigido**  | A ↔ B (amizade no Facebook) | Redes sociais    |
| **Dirigido**      | A → B (seguir no Twitter)   | Links de sites   |
| **Ponderado**     | A →(5)→ B (aresta com peso) | GPS/distâncias   |
| **Não-ponderado** | A → B (sem peso)            | Relações simples |

## Representações

### Lista de Adjacência (usamos esta ✅)

```
  Grafo:                    Lista de Adjacência:

    A ─── B                   A → [B, C]
    |     |                   B → [A, D]
    C ─── D                   C → [A, D]
                              D → [B, C]

  Lê-se: "A é vizinho de B e C"
```

- Usa **menos memória**
- Melhor para grafos **esparsos** (poucas arestas)

### Matriz de Adjacência

```
  Grafo:                    Matriz:

    A ─── B                     A  B  C  D
    |     |                 A [ 0, 1, 1, 0 ]
    C ─── D                 B [ 1, 0, 0, 1 ]
                            C [ 1, 0, 0, 1 ]
                            D [ 0, 1, 1, 0 ]

  1 = existe aresta, 0 = não existe
```

- Usa **mais memória** (n²)
- Verificar se existe aresta é **O(1)**

### Quando usar qual?

```
  ESPARSO (poucas arestas):       DENSO (muitas arestas):
  → Lista de Adjacência ✅         → Matriz de Adjacência ✅

  A ─ B    C    D                  A ─ B
       \                           |╲ |╱|
        E                          C ─ D
                                    \ /
  Arestas: 2                        E
  Memória lista: O(V + E) ✅      Arestas: 10
                                   Memória matriz: O(V²) ok
```

## Como rodar

```bash
npx tsx data-structures/09-graph/index.ts
```

## Dicas para Entrevistas

1. A maioria dos problemas de grafo usa **BFS** ou **DFS** (próximas pastas).
2. Saber a diferença entre **Lista de Adjacência** vs **Matriz** é essencial.
3. Problemas comuns: "encontrar caminho", "detectar ciclos", "componentes conectados".
