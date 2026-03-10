# 📚 Trie (Prefix Tree / Árvore de Prefixos)

## O que é?

Uma árvore especializada para guardar **strings**, onde cada caminho da raiz até um nó forma um **prefixo**. Perfeita para autocompletar!

## Analogia do Mundo Real

```
  📱 AUTOCOMPLETE DO CELULAR:

  Você digita "ap"...

  ┌──────────┐
  │  ap_     │
  │          │
  │  apple   │  ← sugestão 1
  │  app     │  ← sugestão 2
  │  apex    │  ← sugestão 3
  └──────────┘

  A Trie organiza todas as palavras por PREFIXO,
  então encontrar "todas que começam com ap" é super rápido!
```

## Visualização

```
  Palavras: ["apple", "app", "bat", "ball"]

           (root)
          ╱      ╲
         a        b
         |        |
         p        a
         |       ╱ ╲
         p ★    t ★  l
         |            |
         l            l ★
         |
         e ★

  ★ = fim de palavra (isEndOfWord = true)

  Caminhos:
  root → a → p → p        = "app" ★
  root → a → p → p → l → e = "apple" ★
  root → b → a → t        = "bat" ★
  root → b → a → l → l    = "ball" ★
```

## Estrutura de um Nó

```
  ┌────────────────────────────────────────┐
  │              TrieNode                  │
  │                                        │
  │  children: Map<char, TrieNode>        │
  │  ┌───┬───┬───┬───┐                    │
  │  │ a │ b │ c │...│  ← cada char é     │
  │  │ ↓ │ ↓ │ ↓ │   │    um filho        │
  │  └───┴───┴───┴───┘                    │
  │                                        │
  │  isEndOfWord: boolean                  │
  │  (marca se uma palavra termina aqui)   │
  └────────────────────────────────────────┘
```

## Operações Visualizadas

### Insert("cat")

```
  (root) → 'c' não existe? CRIA!
                → 'a' não existe? CRIA!
                      → 't' não existe? CRIA! marca ★

  (root)
    |
    c
    |
    a
    |
    t ★
```

### Search("cat") → true

```
  (root) → 'c' existe? SIM → segue
              → 'a' existe? SIM → segue
                    → 't' existe? SIM → é fim de palavra (★)? SIM ✅
```

### Search("ca") → false

```
  (root) → 'c' existe? SIM → segue
              → 'a' existe? SIM → é fim de palavra (★)? NÃO ❌
```

### StartsWith("ca") → true

```
  (root) → 'c' existe? SIM → segue
              → 'a' existe? SIM → prefixo existe! ✅
              (não importa se é fim de palavra)
```

### Autocomplete("ap")

```
  1. Navega até o nó de "ap":  root → a → p
  2. A partir daí, faz DFS para encontrar todas as palavras:

         p
         |
         p ★     ← "app"
         |
         l
         |
         e ★     ← "apple"

  Resultado: ["app", "apple"]
```

## Trie vs Hash Table para Strings

```
  HASH TABLE:                    TRIE:
  Busca "app" → O(1)            Busca "app" → O(m)
  Busca "palavras com            Busca "palavras com
   prefixo ap" → O(n) 😢         prefixo ap" → O(m+k) 😎
  (percorre TUDO)                (navega direto!)

  n = total de palavras, m = tamanho do prefixo, k = resultados
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
