# 📚 AVL Tree (Árvore AVL - Balanceada)

## O que é?

Uma **BST que se auto-balanceia** usando rotações. Garante que a diferença de altura entre subárvores esquerda e direita de qualquer nó é **no máximo 1**.

## Por que existe?

Uma BST normal, ao receber valores na ordem `[1, 2, 3, 4, 5]`, vira uma "lista":

```
BST Normal:        AVL:
  1                  3
   \                / \
    2              2   4
     \            /     \
      3          1       5
       \
        4
         \
          5
  O(n) 😢          O(log n) 😎
```

## Os 4 Casos de Rotação

| Caso                  | Quando acontece                              | Solução                    |
| --------------------- | -------------------------------------------- | -------------------------- |
| **Esquerda-Esquerda** | Pesado na esquerda, filho pesado na esquerda | Rotação Direita            |
| **Direita-Direita**   | Pesado na direita, filho pesado na direita   | Rotação Esquerda           |
| **Esquerda-Direita**  | Pesado na esquerda, filho pesado na direita  | Rotação Esquerda + Direita |
| **Direita-Esquerda**  | Pesado na direita, filho pesado na esquerda  | Rotação Direita + Esquerda |

## Complexidade

| Operação |        Tempo        |
| -------- | :-----------------: |
| Inserir  | **O(log n)** sempre |
| Buscar   | **O(log n)** sempre |
| Deletar  | **O(log n)** sempre |
| Espaço   |        O(n)         |

## Como rodar

```bash
npx tsx data-structures/07-avl-tree/index.ts
```

## Dicas para Entrevistas

1. A AVL é a resposta para: "Como garantir que a BST tenha performance O(log n)?"
2. O **Fator de Balanceamento** é `altura(esquerda) - altura(direita)`. Se for `> 1` ou `< -1`, rotaciona.
3. Na prática, linguagens como Java usam **Red-Black Trees** (similar à AVL) internamente no `TreeMap`.
