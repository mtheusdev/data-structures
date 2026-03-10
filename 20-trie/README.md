# 📚 Trie (Prefix Tree / Árvore de Prefixos)

## O que é?

Uma árvore especializada para guardar **strings**, onde cada caminho da raiz até um nó forma um **prefixo**. Perfeita para autocompletar!

## Visualização

```
  Palavras: ["apple", "app", "bat"]

        (root)
        /    \
       a      b
       |      |
       p      a
       |      |
       p ★    t ★
       |
       l
       |
       e ★

  ★ = fim de palavra
```

## Complexidade

| Operação               |    Tempo     |
| ---------------------- | :----------: |
| `insert(word)`         |   **O(m)**   |
| `search(word)`         |   **O(m)**   |
| `startsWith(prefix)`   |   **O(m)**   |
| `autocomplete(prefix)` | **O(m + k)** |

m = tamanho da palavra, k = número de resultados

## Como rodar

```bash
npx tsx data-structures/20-trie/index.ts
```

## Problemas clássicos do LeetCode

| #   | Problema                    | Dificuldade |
| --- | --------------------------- | :---------: |
| 208 | Implement Trie              |    Médio    |
| 211 | Design Add and Search Words |    Médio    |
| 212 | Word Search II              |   Difícil   |
| 648 | Replace Words               |    Médio    |

## Dicas para Entrevistas

1. Sempre que o problema envolver **prefixos**, pense em Trie.
2. Tries são mais eficientes que Hash Tables para **busca por prefixo**.
3. Use Trie + DFS/BFS para resolver problemas como "Word Search II".
