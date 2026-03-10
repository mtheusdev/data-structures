# 📚 Binary Search Tree (Árvore Binária de Busca)

## O que é?

Uma árvore onde cada nó segue a regra:

- **Esquerda** → valores **menores** que o pai
- **Direita** → valores **maiores** que o pai

## Visualização

```
        50
       /  \
     30    70
    /  \   / \
  20  40  60  80
```

## Tipos de Travessia (como percorrer)

| Tipo           | Ordem                     | Resultado no exemplo | Uso                   |
| -------------- | ------------------------- | :------------------: | --------------------- |
| **In-Order**   | Esquerda → Raiz → Direita | 20,30,40,50,60,70,80 | Valores **ordenados** |
| **Pre-Order**  | Raiz → Esquerda → Direita | 50,30,20,40,70,60,80 | **Copiar** a árvore   |
| **Post-Order** | Esquerda → Direita → Raiz | 20,40,30,60,80,70,50 | **Deletar** a árvore  |

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
