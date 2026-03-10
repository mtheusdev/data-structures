# 📚 Backtracking (Retrocesso)

## O que é?

Uma técnica de **busca exaustiva** que explora todas as possibilidades e **volta atrás** quando descobre que o caminho atual não leva a uma solução válida.

## Analogia do Mundo Real

```
  🧩 RESOLVENDO UM SUDOKU:

  Tenta colocar um número → funciona? Continua!
                           → não funciona? APAGA e tenta outro!

  ┌───┬───┬───┐
  │ 1 │ ? │ 3 │    Tenta 2 → conflito! APAGA ← (backtrack)
  ├───┼───┼───┤    Tenta 4 → ok! Continua ✅
  │ ? │ 5 │ 6 │
  ├───┼───┼───┤
  │ 7 │ 8 │ 9 │
  └───┴───┴───┘
```

## Os 3 Passos Fundamentais

```
  ┌──────────────────────────────────────┐
  │  1. ESCOLHER  → adiciona candidato   │
  │  2. EXPLORAR  → chama recursão       │
  │  3. DESFAZER  → remove candidato     │
  └──────────────────────────────────────┘

  É como experimentar roupas:
  1. VESTE a camisa     (escolha)
  2. OLHA no espelho    (explora)
  3. TIRA a camisa      (desfaz)
  4. VESTE outra        (próxima escolha)
```

## Template Universal

```typescript
function backtrack(candidatos, caminhoAtual, resultado) {
  // 1. Condição de parada (achei uma solução?)
  if (soluçãoEncontrada) {
    resultado.push(cópia do caminhoAtual);
    return;
  }

  // 2. Para cada opção disponível
  for (cada candidato) {
    caminhoAtual.push(candidato);     // ← ESCOLHA
    backtrack(próximos candidatos);   // ← EXPLORAR
    caminhoAtual.pop();               // ← DESFAZER (backtrack!)
  }
}
```

## Árvore de Decisão (Subsets de [1,2,3])

```
  Cada nível = uma DECISÃO: "incluo ou não incluo?"

                              []
                     ╱         |          ╲
                  [1]         [2]         [3]
                ╱     ╲        |
            [1,2]   [1,3]   [2,3]
              |
           [1,2,3]

  ─────────────────────────────────────────────────

  Visualização do backtracking passo a passo:

  caminho = []

  ESCOLHA: adiciona 1      → caminho = [1]
    ESCOLHA: adiciona 2    → caminho = [1, 2]
      ESCOLHA: adiciona 3  → caminho = [1, 2, 3]  ✅ salva!
      DESFAZ: remove 3     → caminho = [1, 2]      ✅ salva!
    DESFAZ: remove 2       → caminho = [1]
    ESCOLHA: adiciona 3    → caminho = [1, 3]       ✅ salva!
    DESFAZ: remove 3       → caminho = [1]          ✅ salva!
  DESFAZ: remove 1         → caminho = []
  ESCOLHA: adiciona 2      → caminho = [2]
    ESCOLHA: adiciona 3    → caminho = [2, 3]       ✅ salva!
    DESFAZ: remove 3       → caminho = [2]          ✅ salva!
  DESFAZ: remove 2         → caminho = []
  ESCOLHA: adiciona 3      → caminho = [3]          ✅ salva!
  DESFAZ: remove 3         → caminho = []           ✅ salva!

  Resultado: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
```

## Exemplo: Permutações de [1, 2, 3]

```
  "Todas as ordens possíveis"

                         []
               ╱          |          ╲
            [1]          [2]          [3]
           ╱   ╲        ╱   ╲        ╱   ╲
       [1,2]  [1,3]  [2,1]  [2,3]  [3,1]  [3,2]
         |      |      |      |      |      |
     [1,2,3] [1,3,2] [2,1,3] [2,3,1] [3,1,2] [3,2,1]

  6 permutações = 3! = 3 × 2 × 1
```

## Complexidade

| Problema    | Tempo  |
| ----------- | :----: |
| Subsets     | O(2^n) |
| Permutações | O(n!)  |
| N-Queens    | O(n!)  |

## Como rodar

```bash
npx tsx data-structures/18-backtracking/index.ts
```

## Problemas clássicos do LeetCode

| #   | Problema                            | Tipo       |
| --- | ----------------------------------- | ---------- |
| 46  | Permutations                        | Permutação |
| 78  | Subsets                             | Subset     |
| 39  | Combination Sum                     | Combinação |
| 51  | N-Queens                            | Constraint |
| 79  | Word Search                         | Grid       |
| 22  | Generate Parentheses                | String     |
| 17  | Letter Combinations of Phone Number | Combinação |

## Dicas para Entrevistas

1. Se o problema pedir **"todas as combinações/permutações"**, é Backtracking.
2. O segredo é **3 passos**: ESCOLHA → EXPLORAR → DESFAZER.
3. Para evitar duplicatas, ordene o input e pule candidatos iguais ao anterior.
