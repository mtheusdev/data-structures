# 📚 Backtracking (Retrocesso)

## O que é?

Uma técnica de **busca exaustiva** que explora todas as possibilidades e **volta atrás** quando descobre que o caminho atual não leva a uma solução válida.

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
                    []
              /      |      \
           [1]      [2]     [3]
          /    \      |
       [1,2]  [1,3] [2,3]
        |
     [1,2,3]
```

## Complexidade

| Problema    | Tempo  |
| ----------- | :----: | --- |
| Subsets     | O(2^n) |
| Permutações | O(n!)  |
| N-Queens    | O(n!)  | .   |

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
