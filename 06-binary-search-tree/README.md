# 📚 Binary Search Tree (Árvore Binária de Busca)

## O que é?

Uma árvore onde cada nó segue a regra:

- **Esquerda** → valores **menores** que o pai
- **Direita** → valores **maiores** que o pai

## Visualização

```
  Inserindo: 50, 30, 70, 20, 40, 60, 80

            50              ← raiz
           /  \
         30    70           ← menores à esquerda, maiores à direita
        /  \   / \
      20  40  60  80        ← mesma regra se repete recursivamente

  Para QUALQUER nó:
    ┌───────────────────────────────┐
    │  TUDO à esquerda < nó < TUDO à direita  │
    └───────────────────────────────┘
```

## Como a Busca Funciona

```
  Procurando 40 na BST:

            50
           /  \
         30    70
        /  \   / \
      20  40  60  80

  Passo 1: 40 < 50 → vou pra ESQUERDA
            50
           ╱
         30

  Passo 2: 40 > 30 → vou pra DIREITA
         30
           ╲
           40

  Passo 3: 40 == 40 → ACHEI! ✅

  Apenas 3 comparações em vez de 7 (se fosse linear)!
```

## Inserção Passo a Passo

```
  Inserindo 25 na árvore:

            50
           /  \
         30    70
        /  \
      20   40

  25 < 50 → esquerda
  25 < 30 → esquerda
  25 > 20 → direita de 20

            50
           /  \
         30    70
        /  \
      20   40
        \
        25  ← novo nó!
```

## Tipos de Travessia (como percorrer)

```
            50
           /  \
         30    70
        /  \   / \
      20  40  60  80

  IN-ORDER (Esquerda → Raiz → Direita):
  ┌────────────────────────────────────────┐
  │  20 → 30 → 40 → 50 → 60 → 70 → 80   │  ← Valores ORDENADOS! 🎯
  └────────────────────────────────────────┘

  PRE-ORDER (Raiz → Esquerda → Direita):
  ┌────────────────────────────────────────┐
  │  50 → 30 → 20 → 40 → 70 → 60 → 80   │  ← Útil para COPIAR a árvore
  └────────────────────────────────────────┘

  POST-ORDER (Esquerda → Direita → Raiz):
  ┌────────────────────────────────────────┐
  │  20 → 40 → 30 → 60 → 80 → 70 → 50   │  ← Útil para DELETAR a árvore
  └────────────────────────────────────────┘
```

| Tipo           | Ordem                     | Resultado no exemplo | Uso                   |
| -------------- | ------------------------- | :------------------: | --------------------- |
| **In-Order**   | Esquerda → Raiz → Direita | 20,30,40,50,60,70,80 | Valores **ordenados** |
| **Pre-Order**  | Raiz → Esquerda → Direita | 50,30,20,40,70,60,80 | **Copiar** a árvore   |
| **Post-Order** | Esquerda → Direita → Raiz | 20,40,30,60,80,70,50 | **Deletar** a árvore  |

## ⚠️ O Problema: BST Degenerada

```
  Inserindo [1, 2, 3, 4, 5] em ordem:

  BST "normal":          BST degenerada (virou uma lista!):

       3                     1
      / \                     \
     2   4                     2
    /     \                     \
   1       5                     3
                                  \
  O(log n) 😎                     4
                                    \
                                     5

                              O(n) 😢  ← PÉSSIMO!

  Solução? Árvore AVL! (próxima pasta)
```

## Complexidade

| Operação | Balanceada | Pior Caso (degenerada) |
| -------- | :--------: | :--------------------: |
| Inserir  |  O(log n)  |          O(n)          |
| Buscar   |  O(log n)  |          O(n)          |
| Deletar  |  O(log n)  |          O(n)          |
| Espaço   |    O(n)    |          O(n)          |

> ⚠️ Se inserir valores já ordenados (1,2,3,4,5...), a árvore vira uma "lista" e perde performance. Por isso existem as **Árvores AVL** (próximo algoritmo).

## Como rodar

```bash
npx tsx data-structures/06-binary-search-tree/index.ts
```

## Dicas para Entrevistas

1. **In-Order Traversal** de uma BST SEMPRE dá os valores em ordem crescente.
2. Muitos problemas de árvore usam **recursão**. Pratique bastante!
3. Perguntas comuns: "Valide se uma árvore é BST", "Encontre o LCA (ancestral comum mais baixo)".
