# 📚 Stack (Pilha)

## O que é?

Uma **Stack** (Pilha) é uma estrutura de dados que segue o princípio **LIFO** (Last In, First Out):  
**O último elemento a entrar é o primeiro a sair.**

Imagine uma pilha de pratos: você coloca pratos por cima e, quando precisa tirar, tira o de cima primeiro.

## Analogia do Mundo Real

```
  🍽️ PILHA DE PRATOS:

    ┌─────────┐
    │  Prato 3 │ ← Último a entrar, PRIMEIRO a sair
    ├─────────┤
    │  Prato 2 │
    ├─────────┤
    │  Prato 1 │ ← Primeiro a entrar, ÚLTIMO a sair
    └─────────┘
       Mesa
```

## Operações Principais

| Operação    | O que faz                           | Complexidade |
| ----------- | ----------------------------------- | :----------: |
| `push(x)`   | Adiciona `x` no topo da pilha       |   **O(1)**   |
| `pop()`     | Remove e retorna o elemento do topo |   **O(1)**   |
| `peek()`    | Retorna o topo **sem remover**      |   **O(1)**   |
| `isEmpty()` | Verifica se a pilha está vazia      |   **O(1)**   |
| `size()`    | Retorna o número de elementos       |   **O(1)**   |

## Visualização Passo a Passo

```
  ═══════════════════════════════════════════════════════════════
  OPERAÇÃO        ESTADO DA PILHA              RETORNO
  ═══════════════════════════════════════════════════════════════

  (pilha vazia)       ┌───┐
                      │   │   ← vazia
                      └───┘

  push(10)            ┌────┐
                      │ 10 │  ← topo
                      └────┘

  push(20)            ┌────┐
                      │ 20 │  ← topo
                      ├────┤
                      │ 10 │
                      └────┘

  push(30)            ┌────┐
                      │ 30 │  ← topo
                      ├────┤
                      │ 20 │
                      ├────┤
                      │ 10 │
                      └────┘

  peek()              ┌────┐
                      │ 30 │  ← 👀 espia sem remover    → 30
                      ├────┤
                      │ 20 │
                      ├────┤
                      │ 10 │
                      └────┘

  pop()               ┌────┐
                  ┌── │ 30 │  ← 🗑️ removido!            → 30
                  │   ├────┤
                  │   │ 20 │  ← novo topo
                  │   ├────┤
                  │   │ 10 │
                  │   └────┘
                  └→ 💨

  pop()               ┌────┐
                  ┌── │ 20 │  ← 🗑️ removido!            → 20
                  │   ├────┤
                  │   │ 10 │  ← novo topo
                  │   └────┘
                  └→ 💨

  pop()               ┌────┐
                  ┌── │ 10 │  ← 🗑️ removido!            → 10
                  │   └────┘
                  │
                  └→ 💨  (pilha vazia agora!)
```

## Exemplo Prático: Validar Parênteses

```
  Entrada: "({[]})"

  Lê '('  →  push '('     Pilha: │ ( │
  Lê '{'  →  push '{'     Pilha: │ { │ ( │
  Lê '['  →  push '['     Pilha: │ [ │ { │ ( │
  Lê ']'  →  pop  '['  ✅ par!   Pilha: │ { │ ( │
  Lê '}'  →  pop  '{'  ✅ par!   Pilha: │ ( │
  Lê ')'  →  pop  '('  ✅ par!   Pilha: (vazia)

  Pilha vazia no final → ✅ VÁLIDO!

  ─────────────────────────────────

  Entrada: "([)]"

  Lê '('  →  push '('     Pilha: │ ( │
  Lê '['  →  push '['     Pilha: │ [ │ ( │
  Lê ')'  →  pop  '['  ❌ ERRO!  ']' esperado mas ')' apareceu

  → ❌ INVÁLIDO!
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
