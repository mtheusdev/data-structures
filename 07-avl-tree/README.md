# 📚 AVL Tree (Árvore AVL - Balanceada)

## O que é?

Uma **BST que se auto-balanceia** usando rotações. Garante que a diferença de altura entre subárvores esquerda e direita de qualquer nó é **no máximo 1**.

## Por que existe?

Uma BST normal, ao receber valores na ordem `[1, 2, 3, 4, 5]`, vira uma "lista":

```
  BST Normal:              AVL (auto-balanceada):

      1                         3
       \                       / \
        2                     2   4
         \                   /     \
          3                 1       5
           \
            4             Altura: 3
             \            O(log n) 😎
              5

  Altura: 5
  O(n) 😢
```

## Como o Balanceamento Funciona

```
  Fator de Balanceamento (FB) = altura(esquerda) - altura(direita)

  FB = -1, 0, +1 → ✅ BALANCEADO
  FB < -1 ou FB > +1 → ❌ DESBALANCEADO → precisa ROTACIONAR!

  Exemplo:
            30 (FB = +2) ❌
           /
         20 (FB = +1)
        /
      10 (FB = 0)

  FB de 30 = altura_esq(2) - altura_dir(0) = +2 → DESBALANCEADO!
```

## Os 4 Casos de Rotação

### Caso 1: Esquerda-Esquerda (LL) → Rotação Direita

```
  ANTES:              DEPOIS:
       30                20
      /                 /  \
    20        →       10    30
   /
  10

  O nó 20 "sobe" e vira a nova raiz
```

### Caso 2: Direita-Direita (RR) → Rotação Esquerda

```
  ANTES:              DEPOIS:
  10                    20
    \                  /  \
     20       →      10    30
      \
       30

  O nó 20 "sobe" e vira a nova raiz
```

### Caso 3: Esquerda-Direita (LR) → Rotação Esquerda + Direita

```
  ANTES:         Passo 1 (rot. esq):    Passo 2 (rot. dir):
       30              30                    20
      /               /                    /  \
    10       →      20           →       10    30
      \            /
       20        10

  Primeiro "endireita" para virar caso LL, depois rotaciona direita
```

### Caso 4: Direita-Esquerda (RL) → Rotação Direita + Esquerda

```
  ANTES:         Passo 1 (rot. dir):    Passo 2 (rot. esq):
  10              10                       20
    \               \                     /  \
     30      →       20         →       10    30
    /                  \
   20                   30

  Primeiro "endireita" para virar caso RR, depois rotaciona esquerda
```

## Exemplo Completo de Inserção

```
  Inserindo [1, 2, 3] numa AVL:

  Passo 1: insert(1)      Passo 2: insert(2)      Passo 3: insert(3)
                                                    DESBALANCEADO!
      1                       1                         1 (FB=-2)
                                \                        \
                                 2                        2
                                                           \
                                                            3
  Rotação Esquerda no nó 1:

          2             ← nova raiz
         / \
        1   3           ← BALANCEADO! ✅
```

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
