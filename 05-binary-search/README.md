# 📚 Binary Search (Busca Binária)

## O que é?

Um algoritmo que encontra um elemento num **array ordenado** cortando o espaço de busca pela **metade** a cada iteração.

## Analogia do Mundo Real

```
  📖 PROCURANDO UMA PALAVRA NO DICIONÁRIO:

  Procurando "Mango"...

  1. Abro no MEIO → "House" → M vem DEPOIS → ignoro toda metade esquerda
  2. Vou pro MEIO da metade direita → "Queen" → M vem ANTES → ignoro direita
  3. Vou pro MEIO do que sobrou → "Mango" → ACHEI! 🎉

  A cada passo, ELIMINO METADE das páginas!
```

## Visualização Passo a Passo

```
  Procurando o 23 em: [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]

  ═══════════════════════════════════════════════════════════════

  Passo 1:
  [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]
   ↑                 ↑                    ↑
  left              mid                 right
                   (23)

  23 > 23? Não.  23 < 23? Não.  ACHEI! ✅

  ═══════════════════════════════════════════════════════════════

  Outro exemplo: Procurando o 38

  Passo 1:
  [ 2,  5,  8, 12, 16, 23, 38, 45, 56, 72, 91]
    ↑                  ↑                     ↑
   left               mid                  right
                      (23)
  38 > 23 → busca na metade DIREITA

  Passo 2:
                              [38, 45, 56, 72, 91]
                                ↑       ↑       ↑
                              left     mid    right
                                      (56)
  38 < 56 → busca na metade ESQUERDA

  Passo 3:
                              [38, 45]
                                ↑   ↑
                              left right
                               ↑
                              mid
                              (38)
  38 == 38 → ACHEI! ✅

  Em 11 elementos, achei em 3 passos em vez de 7!
```

## Por que é tão rápido?

```
  BUSCA LINEAR — O(n):
  Verifica um por um... no pior caso, todos.

  [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]
   ✕  ✕  ✕   ✕   ✕   ✕   ✅
   1  2  3   4   5   6   7 passos

  BUSCA BINÁRIA — O(log n):
  Corta pela metade a cada passo.

  [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91]
   ──────────────────╱╲──────────────────
                    23                         Passo 1
                     ╲──────────╱╲──────
                               56              Passo 2
                    ╱──────────╱
                   38                          Passo 3 ✅
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
