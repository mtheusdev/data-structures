# 📚 Greedy (Algoritmo Guloso)

## O que é?

A cada passo, faz a **escolha que parece melhor** naquele momento (ganância!). Funciona quando a **melhor escolha local** garante a **melhor solução global**.

## Analogia do Mundo Real

```
  💰 DANDO TROCO COM MENOS MOEDAS:

  Troco: R$ 0,63 — Moedas: [25¢, 10¢, 5¢, 1¢]

  Greedy: sempre pega a MAIOR moeda possível!

  63¢ → pega 25¢ → sobra 38¢
  38¢ → pega 25¢ → sobra 13¢
  13¢ → pega 10¢ → sobra 3¢
   3¢ → pega  1¢ → sobra 2¢
   2¢ → pega  1¢ → sobra 1¢
   1¢ → pega  1¢ → sobra 0¢

  Total: 6 moedas (25+25+10+1+1+1) ✅ ÓTIMO!

  ⚠️ Nem sempre funciona! Com moedas [1, 3, 4]:
  Troco de 6: Greedy = 4+1+1 = 3 moedas ❌
              DP     = 3+3   = 2 moedas ✅
```

## Greedy vs DP

```
  GREEDY:                          DP:
  "Pego o melhor AGORA"           "Testo TODAS as opções"

    🤑 → 💰 maior                   🤔 → testa opção A
              → continua                     → testa opção B
                                             → testa opção C
                                             → escolhe a melhor

  Mais RÁPIDO                     Mais LENTO
  Nem sempre CORRETO              Sempre CORRETO
```

| Característica             |         Greedy         |           DP           |
| -------------------------- | :--------------------: | :--------------------: |
| Faz a melhor escolha local |         ✅ Sim         |      Testa todas       |
| Garante ótimo global       |       Nem sempre       |       ✅ Sempre        |
| Velocidade                 |      Mais rápido       |       Mais lento       |
| Quando usar                | Intervalos, scheduling | Mochila, subsequências |

## Exemplo: Activity Selection (Seleção de Atividades)

```
  "Maximize o número de atividades sem sobreposição"

  Atividades (início, fim):
  A: [1, 4]    ████████
  B: [3, 5]      ██████
  C: [0, 6]  ████████████████
  D: [5, 7]          ████████
  E: [3, 8]      ██████████████
  F: [5, 9]          ██████████████
  G: [6, 10]           ████████████████
  H: [8, 11]                ██████████████

  Linha do tempo:
  0  1  2  3  4  5  6  7  8  9  10  11
  ├──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼───┤

  ESTRATÉGIA GREEDY: ordena pelo FIM e pega os que não conflitam

  1. Ordena por fim: A[1,4], B[3,5], C[0,6], D[5,7], E[3,8], F[5,9], G[6,10], H[8,11]

  2. Pega A [1,4] ✅
     Pega B [3,5]? Conflita com A (3 < 4) ❌
     Pega C [0,6]? Conflita com A ❌
     Pega D [5,7]? 5 ≥ 4 ✅
     Pega E [3,8]? Conflita com D ❌
     Pega F [5,9]? Conflita com D ❌
     Pega G [6,10]? Conflita com D ❌
     Pega H [8,11]? 8 ≥ 7 ✅

  Resultado: A, D, H → 3 atividades (máximo possível!)
```

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
