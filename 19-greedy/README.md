# 📚 Greedy (Algoritmo Guloso)

## O que é?

A cada passo, faz a **escolha que parece melhor** naquele momento (ganância!). Funciona quando a **melhor escolha local** garante a **melhor solução global**.

## Greedy vs DP

| Característica             |         Greedy         |           DP           |
| -------------------------- | :--------------------: | :--------------------: |
| Faz a melhor escolha local |         ✅ Sim         |      Testa todas       |
| Garante ótimo global       |       Nem sempre       |       ✅ Sempre        |
| Velocidade                 |      Mais rápido       |       Mais lento       |
| Quando usar                | Intervalos, scheduling | Mochila, subsequências |

## Como saber se Greedy funciona?

Se você pode provar que:

> "Fazer a melhor escolha agora **nunca** prejudica as escolhas futuras"

...então Greedy funciona!

## Complexidade

| Problema           |   Tempo    |
| ------------------ | :--------: |
| Activity Selection | O(n log n) |
| Jump Game          |    O(n)    |
| Merge Intervals    | O(n log n) |

## Como rodar

```bash
npx tsx data-structures/19-greedy/index.ts
```

## Problemas clássicos do LeetCode

| #   | Problema                  | Dificuldade |
| --- | ------------------------- | :---------: |
| 55  | Jump Game                 |    Médio    |
| 56  | Merge Intervals           |    Médio    |
| 435 | Non-overlapping Intervals |    Médio    |
| 763 | Partition Labels          |    Médio    |
| 45  | Jump Game II              |    Médio    |
| 134 | Gas Station               |    Médio    |

## Dicas para Entrevistas

1. Se o problema envolve **intervalos/scheduling**, quase sempre é Greedy.
2. Ordene o input antes de aplicar a lógica gulosa.
3. Se Greedy não funciona (ex: Coin Change com moedas "estranhas"), use DP.
