# 📚 Binary Search (Busca Binária)

## O que é?

Um algoritmo que encontra um elemento num **array ordenado** cortando o espaço de busca pela **metade** a cada iteração.

## Visualização

```
  Procurando o 23 em: [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]

  Passo 1: mid = 23? → 23 < 23? Não. 23 > 23? Não. ACHEI! ✅

  (Se fosse outro valor, cortaria metade e repetiria)
```

## Complexidade

| Caso               |                 Tempo                  |
| ------------------ | :------------------------------------: |
| Melhor caso        |  **O(1)** — achou no meio de primeira  |
| Caso médio         |              **O(log n)**              |
| Pior caso          |              **O(log n)**              |
| Espaço (iterativa) |                **O(1)**                |
| Espaço (recursiva) | **O(log n)** — por causa da call stack |

## Comparação: Linear vs Binária

| Tamanho do Array | Busca Linear (O(n)) | Busca Binária (O(log n)) |
| :--------------: | :-----------------: | :----------------------: |
|       100        |   100 comparações   |      ~7 comparações      |
|      10.000      |       10.000        |           ~14            |
|    1.000.000     |      1.000.000      |           ~20            |

## Como rodar

```bash
npx tsx data-structures/05-binary-search/index.ts
```

## Dicas para Entrevistas

1. **Sempre pergunte se o array está ordenado**. Se não estiver, Binary Search não funciona.
2. Use `Math.floor((left + right) / 2)` para evitar overflow de inteiros.
3. Variações comuns: encontrar a **primeira/última ocorrência**, o **menor/maior** que o target.
4. Muitos problemas do LeetCode que parecem "busca" são na verdade Binary Search disfarçados.
