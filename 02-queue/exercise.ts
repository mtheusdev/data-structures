export {};

// ============================================
// 🏋️ EXERCÍCIO: Implemente uma Queue (Fila)
// ============================================
// Implemente TODAS as funções abaixo.
//
// ⚠️ DESAFIO EXTRA: NÃO use Array.shift()! Ele é O(n).
// Tente fazer o dequeue() em O(1) usando um objeto com ponteiros.
//
// Rode: npx tsx data-structures/02-queue/exercise.ts
// ============================================

class Queue<T> {
  // 💡 Dica 1: Use um objeto como dicionário + dois ponteiros (headIndex, tailIndex)
  // private items: Record<number, T> = {};
  // private headIndex = 0;
  // private tailIndex = 0;

  private queue: T[] = [];

  constructor() {
    this.queue = [];
  }

  // TODO: Implemente o constructor

  // TODO: Adiciona um elemento no FINAL da fila
  enqueue(element: T): void {
    this.queue.push(element);
  }

  // TODO: Remove e retorna o PRIMEIRO elemento da fila
  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;

    return this.queue.shift();
  }

  // TODO: Retorna o PRIMEIRO elemento sem remover
  front(): T | undefined {
    // Sua implementação aqui
    if (this.isEmpty()) return undefined;

    return this.queue[0];
  }

  // TODO: Retorna true se a fila estiver vazia
  isEmpty(): boolean {
    return !this.queue.length;
  }

  // TODO: Retorna o número de elementos
  size(): number {
    return this.queue.length;
  }
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
    console.log(
      `  ❌ ${name}\n     Esperado: ${JSON.stringify(expected)}\n     Recebido: ${JSON.stringify(actual)}`,
    );
    failed++;
  }
}

console.log("=== 🏋️ TESTES: Queue ===\n");

const q = new Queue<number>();
test("Queue começa vazia", q.isEmpty(), true);
test("Queue começa com tamanho 0", q.size(), 0);

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
test("Tamanho após 3 enqueues", q.size(), 3);
test("Front retorna o primeiro (10)", q.front(), 10);

test("Dequeue retorna 10", q.dequeue(), 10);
test("Dequeue retorna 20", q.dequeue(), 20);
test("Tamanho após 2 dequeues", q.size(), 1);
test("Front agora é 30", q.front(), 30);

test("Dequeue retorna 30", q.dequeue(), 30);
test("Queue vazia após tudo", q.isEmpty(), true);
test("Dequeue em fila vazia", q.dequeue(), undefined);

// Teste de ordem FIFO
const q2 = new Queue<string>();
q2.enqueue("A");
q2.enqueue("B");
q2.enqueue("C");
test("FIFO: primeiro a sair é A", q2.dequeue(), "A");
test("FIFO: segundo a sair é B", q2.dequeue(), "B");
test("FIFO: terceiro a sair é C", q2.dequeue(), "C");

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO! Todos os testes passaram!");
