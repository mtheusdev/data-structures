export {};

// ============================================
// 🏋️ EXERCÍCIO: Implemente uma Stack (Pilha)
// ============================================
// Implemente TODAS as funções abaixo.
// Não olhe o index.ts antes de tentar!
//
// Quando terminar, rode:
//   npx tsx data-structures/01-stack/exercise.ts
//
// Os testes no final dirão se você acertou ✅ ou errou ❌
// ============================================

class Stack<T> {
  // 💡 Dica 1: Que estrutura interna usar para guardar os elementos?
  // (descomente quando travar)
  // DICA: Use um array privado: private items: T[] = [];
  private items: T[] = [];

  constructor() {
    this.items = [];
  }

  // TODO: Implemente o constructor

  // TODO: Coloca um elemento no TOPO da pilha
  push(element: T): void {
    this.items.push(element);
  }

  // TODO: Remove e retorna o elemento do TOPO
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    // Sua implementação aqui
    return this.items.pop();
  }

  // TODO: Retorna o elemento do TOPO sem remover
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.size() - 1];
  }

  // TODO: Retorna true se a pilha estiver vazia
  isEmpty(): boolean {
    return !this.items.length;
  }

  // TODO: Retorna o número de elementos na pilha
  size(): number {
    // Sua implementação aqui
    return this.items.length;
  }
}

// ============================================
// 🏋️ DESAFIO BÔNUS: Validador de Parênteses
// ============================================
// Dada uma string contendo '(', ')', '{', '}', '[' e ']',
// determine se a string é válida (todos os pares fecham corretamente).
//
// Exemplos:
//   "({[]})" → true
//   "([)]"   → false
//   ""       → true

// 💡 Dica 2: Use sua Stack! Empilhe os caracteres de abertura.
//    Quando encontrar um de fechamento, desempilhe e compare.

function isValidParentheses(expression: string): boolean {
  const stack = new Stack<string>();

  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of expression) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      const popped = stack.pop();

      if (pairs[char] !== popped) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

// ============================================
// ✅ TESTES (NÃO MODIFIQUE ABAIXO)
// ============================================
let passed = 0;
let failed = 0;

function test(name: string, actual: any, expected: any) {
  const pass = JSON.stringify(actual) === JSON.stringify(expected);
  if (pass) {
    console.log(`  ✅ ${name}`);
    passed++;
  } else {
    console.log(`  ❌ ${name}`);
    console.log(`     Esperado: ${JSON.stringify(expected)}`);
    console.log(`     Recebido: ${JSON.stringify(actual)}`);
    failed++;
  }
}

console.log("=== 🏋️ TESTES: Stack ===\n");

const s = new Stack<number>();
test("Stack começa vazia", s.isEmpty(), true);
test("Stack começa com tamanho 0", s.size(), 0);

s.push(10);
s.push(20);
s.push(30);
test("Tamanho após 3 pushes", s.size(), 3);
test("Peek retorna o topo (30)", s.peek(), 30);
test("Peek não remove (tamanho continua 3)", s.size(), 3);

test("Pop retorna 30", s.pop(), 30);
test("Pop retorna 20", s.pop(), 20);
test("Tamanho após 2 pops", s.size(), 1);
test("Peek retorna 10", s.peek(), 10);

test("Pop retorna 10", s.pop(), 10);
test("Stack vazia após remover tudo", s.isEmpty(), true);
test("Pop em stack vazia retorna undefined", s.pop(), undefined);
test("Peek em stack vazia retorna undefined", s.peek(), undefined);

console.log("\n=== 🏋️ TESTES: Validador de Parênteses ===\n");

test('"{}" é válido', isValidParentheses("{}"), true);
test('"({[]})" é válido', isValidParentheses("({[]})"), true);
test('"([)]" é inválido', isValidParentheses("([)]"), false);
test('"((()))" é válido', isValidParentheses("((()))"), true);
test('"{[}" é inválido', isValidParentheses("{[}"), false);
test('"" é válido', isValidParentheses(""), true);
test('"(" é inválido', isValidParentheses("("), false);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO! Todos os testes passaram!");
