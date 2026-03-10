# 📚 Stack (Pilha)

## O que é?

Uma **Stack** (Pilha) é uma estrutura de dados que segue o princípio **LIFO** (Last In, First Out):  
**O último elemento a entrar é o primeiro a sair.**

Imagine uma pilha de pratos: você coloca pratos por cima e, quando precisa tirar, tira o de cima primeiro.

## Operações Principais

| Operação    | O que faz                           | Complexidade |
| ----------- | ----------------------------------- | :----------: |
| `push(x)`   | Adiciona `x` no topo da pilha       |   **O(1)**   |
| `pop()`     | Remove e retorna o elemento do topo |   **O(1)**   |
| `peek()`    | Retorna o topo **sem remover**      |   **O(1)**   |
| `isEmpty()` | Verifica se a pilha está vazia      |   **O(1)**   |
| `size()`    | Retorna o número de elementos       |   **O(1)**   |

## Visualização

```
  push(10) → push(20) → push(30)

  | 30 | ← TOPO (último a entrar, primeiro a sair)
  | 20 |
  | 10 |
  +----+

  pop() → remove o 30
  pop() → remove o 20
  pop() → remove o 10
```

## Quando usar?

- **Ctrl+Z** (desfazer ações)
- **Navegação "voltar"** no browser
- **Call Stack** do JavaScript (pilha de chamadas de funções)
- **Validar parênteses** balanceados em expressões
- **Converter** expressões infixas para pós-fixas

## Como rodar

```bash
npx tsx data-structures/01-stack/index.ts
```

## Complexidade de Espaço

**O(n)** — onde `n` é o número de elementos armazenados na pilha.

## Dicas para Entrevistas

1. Sempre que o problema pedir para "desfazer" algo ou "voltar ao estado anterior", pense em Stack.
2. Problemas de **parênteses balanceados** são clássicos de Stack.
3. **Monotonic Stack** é uma variação avançada usada em problemas como "Next Greater Element".
