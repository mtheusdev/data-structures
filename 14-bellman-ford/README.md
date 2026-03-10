# 📚 Bellman-Ford (Menor Caminho com Pesos Negativos)

## O que é?

Encontra o menor caminho de um nó para todos os outros, assim como o Dijkstra. Porém, ele **funciona com pesos negativos** e consegue **detectar ciclos negativos**.

## Dijkstra vs Bellman-Ford

| Característica  |      Dijkstra       |    Bellman-Ford     |
| --------------- | :-----------------: | :-----------------: |
| Pesos negativos |   ❌ Não funciona   |     ✅ Funciona     |
| Ciclo negativo  |   ❌ Não detecta    |     ✅ Detecta      |
| Complexidade    |  O((V+E) log V) ✅  |     O(V · E) ❌     |
| Quando usar     | Sem pesos negativos | Com pesos negativos |

## Como funciona

1. Define distância do início como **0**, resto como **∞**
2. **Relaxa** todas as arestas **(V-1) vezes**
3. "Relaxar" = se `dist[from] + peso < dist[to]`, atualiza `dist[to]`
4. Se na iteração **V** (a extra) ainda conseguir relaxar, existe **ciclo negativo**

## O que é um Ciclo Negativo?

```
  A →(1)→ B →(-1)→ C →(-1)→ A

  Soma do ciclo: 1 + (-1) + (-1) = -1
  Cada volta reduz a distância... infinitamente!
  Resultado: distância mínima = -∞ (impossível calcular)
```

## Complexidade

| Métrica |    Valor     |
| ------- | :----------: |
| Tempo   | **O(V · E)** |
| Espaço  |   **O(V)**   |

## Como rodar

```bash
npx tsx data-structures/14-bellman-ford/index.ts
```

## Dicas para Entrevistas

1. Se o problema tem **pesos negativos**, Bellman-Ford é a resposta.
2. Usado no protocolo de roteamento **RIP** da internet.
3. É mais **lento** que Dijkstra, então só use quando necessário.
4. A detecção de ciclo negativo é um bônus poderoso que Dijkstra não tem.
