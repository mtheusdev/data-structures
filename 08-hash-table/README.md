# 📚 Hash Table (Tabela Hash)

## O que é?

Uma estrutura que mapeia **chaves** a **valores** com acesso em tempo (quase) constante. É o que o JavaScript usa por baixo dos panos em objetos `{}` e `Map()`.

## Como funciona?

```
  Chave "nome" → Função Hash → número 3 → Bucket[3] → valor "Matheus"
  Chave "idade" → Função Hash → número 7 → Bucket[7] → valor "25"
```

## Colisões

Quando duas chaves diferentes geram o **mesmo índice**. Solução: **Chaining** (cada bucket é uma lista).

```
  Bucket[3]: ["nome" → "Matheus", "email" → "mat@email.com"]
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
