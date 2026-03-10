# 📚 Hash Table (Tabela Hash)

## O que é?

Uma estrutura que mapeia **chaves** a **valores** com acesso em tempo (quase) constante. É o que o JavaScript usa por baixo dos panos em objetos `{}` e `Map()`.

## Analogia do Mundo Real

```
  🗄️ ARMÁRIO COM GAVETAS NUMERADAS:

  Você quer guardar o telefone do "Matheus".

  1. "Matheus" passa pela função hash → resultado: 3
  2. Guarda na gaveta 3

  Para buscar? Mesmo processo: "Matheus" → hash → 3 → abre gaveta 3 → achou!

  ┌──── Gaveta 0: (vazia)
  ├──── Gaveta 1: ["idade" → 25]
  ├──── Gaveta 2: (vazia)
  ├──── Gaveta 3: ["nome" → "Matheus"]    ← hash("nome") = 3
  ├──── Gaveta 4: (vazia)
  └──── Gaveta 5: ["email" → "mat@email"]
```

## Como funciona?

```
  PASSO A PASSO:

  ┌─────────┐     ┌──────────────┐     ┌──────────┐     ┌──────────────┐
  │  Chave   │ ──→ │  Função Hash │ ──→ │  Índice  │ ──→ │    Bucket    │
  │ "nome"   │     │  hash("nome")│     │    3     │     │ "Matheus"    │
  └─────────┘     └──────────────┘     └──────────┘     └──────────────┘

  Exemplo com vários dados:

  hash("nome")  = 3  ──→  Bucket[3] = "Matheus"
  hash("idade") = 1  ──→  Bucket[1] = 25
  hash("email") = 5  ──→  Bucket[5] = "mat@email.com"
```

## Colisões

Quando duas chaves diferentes geram o **mesmo índice**:

```
  💥 COLISÃO:

  hash("nome")  = 3  ─┐
                       ├──→  Bucket[3]: ???
  hash("email") = 3  ─┘

  Solução: CHAINING (cada bucket é uma lista)

  Bucket[0]: ∅
  Bucket[1]: ∅
  Bucket[2]: ∅
  Bucket[3]: ┌────────────────┐   ┌──────────────────────┐
             │ "nome"→"Matheus"│──→│ "email"→"mat@email"  │──→ null
             └────────────────┘   └──────────────────────┘
  Bucket[4]: ∅
  Bucket[5]: ∅

  Buscar "email":
  1. hash("email") = 3
  2. Vai no Bucket[3]
  3. Percorre a lista: "nome"? Não. "email"? SIM! → "mat@email"
```

## O que é uma boa Função Hash?

```
  ✅ BOA HASH:                    ❌ MÁ HASH:
  Distribui uniformemente         Tudo cai no mesmo bucket

  Bucket[0]: ██                   Bucket[0]: ████████████████
  Bucket[1]: ███                  Bucket[1]:
  Bucket[2]: ██                   Bucket[2]:
  Bucket[3]: ███                  Bucket[3]:
  Bucket[4]: ██                   Bucket[4]:

  Buscas rápidas: O(1)           Vira uma lista: O(n) 😢
```

## Complexidade

| Operação          | Melhor/Médio | Pior (muitas colisões) |
| ----------------- | :----------: | :--------------------: |
| `set(key, value)` |   **O(1)**   |          O(n)          |
| `get(key)`        |   **O(1)**   |          O(n)          |
| `delete(key)`     |   **O(1)**   |          O(n)          |

## Como rodar

```bash
npx tsx data-structures/08-hash-table/index.ts
```

## Dicas para Entrevistas

1. **Two Sum** (o problema que você já resolveu!) usa Hash Table.
2. Sempre que precisar contar **frequências** de elementos, use Hash Table.
3. Hash Tables são a resposta para: "Como buscar algo em O(1)?"
4. A diferença entre `Map` e objeto `{}` em JS: `Map` aceita qualquer tipo como chave.
