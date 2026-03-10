export {};

// ============================================
// 🏋️ EXERCÍCIO: Implemente uma Doubly Linked List
// ============================================
// Rode: npx tsx data-structures/04-doubly-linked-list/exercise.ts
// ============================================

class DoublyNode<T> {
  value: T;
  prev: DoublyNode<T> | null;
  next: DoublyNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList<T> {
  head: DoublyNode<T> | null;
  tail: DoublyNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // TODO: Insere no INÍCIO — O(1)
  // 💡 Dica: newNode.next = this.head + this.head.prev = newNode
  insertAtHead(value: T): void {}

  // TODO: Insere no FINAL — O(1) graças ao tail!
  insertAtTail(value: T): void {}

  // TODO: Remove o PRIMEIRO — O(1)
  deleteAtHead(): T | undefined {
    return undefined;
  }

  // TODO: Remove o ÚLTIMO — O(1) graças ao tail!
  deleteAtTail(): T | undefined {
    return undefined;
  }

  size(): number {
    return this.length;
  }

  toArray(): T[] {
    const arr: T[] = [];
    let c = this.head;
    while (c) {
      arr.push(c.value);
      c = c.next;
    }
    return arr;
  }
  toArrayReverse(): T[] {
    const arr: T[] = [];
    let c = this.tail;
    while (c) {
      arr.push(c.value);
      c = c.prev;
    }
    return arr;
  }
}

// ============================================
// ✅ TESTES
// ============================================
let passed = 0;
let failed = 0;
function test(n: string, a: any, e: any) {
  const p = JSON.stringify(a) === JSON.stringify(e);
  if (p) {
    console.log(`  ✅ ${n}`);
    passed++;
  } else {
    console.log(
      `  ❌ ${n}\n     Esperado: ${JSON.stringify(e)}\n     Recebido: ${JSON.stringify(a)}`,
    );
    failed++;
  }
}

console.log("=== 🏋️ TESTES: Doubly Linked List ===\n");
const dll = new DoublyLinkedList<number>();

dll.insertAtTail(10);
dll.insertAtTail(20);
dll.insertAtTail(30);
test("InsertAtTail: [10, 20, 30]", dll.toArray(), [10, 20, 30]);
test("Reverso: [30, 20, 10]", dll.toArrayReverse(), [30, 20, 10]);

dll.insertAtHead(5);
test("InsertAtHead(5): [5, 10, 20, 30]", dll.toArray(), [5, 10, 20, 30]);

test("DeleteAtHead retorna 5", dll.deleteAtHead(), 5);
test("Após deleteHead: [10, 20, 30]", dll.toArray(), [10, 20, 30]);

test("DeleteAtTail retorna 30", dll.deleteAtTail(), 30);
test("Após deleteTail: [10, 20]", dll.toArray(), [10, 20]);
test("Reverso: [20, 10]", dll.toArrayReverse(), [20, 10]);
test("Tamanho é 2", dll.size(), 2);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO!");
