export {};

// ============================================
// 🏋️ EXERCÍCIO: Implemente uma Linked List
// ============================================
// Rode: npx tsx data-structures/03-linked-list/exercise.ts
// ============================================

class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // TODO: Insere no INÍCIO — O(1)
  // 💡 Dica: newNode.next = this.head; this.head = newNode;
  insertAtHead(value: T): void {
    const newNode = new ListNode(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // TODO: Insere no FINAL — O(n)
  // 💡 Dica: Percorra até o último nó (current.next === null)
  insertAtTail(value: T): void {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
    this.length++;
  }

  // TODO: Remove o PRIMEIRO nó — O(1)
  deleteAtHead(): T | undefined {
    if (!this.head) return undefined;

    const toRemove = this.head.value;

    this.head = this.head.next;
    this.length--;

    return toRemove;
  }

  deleteByValue(value: T): boolean {
    if (!this.head) return false;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;

      return true;
    }

    let current = this.head;

    while (current?.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this.length--;
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // TODO: Busca um valor — O(n)
  search(value: T): boolean {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.next;
    }

    return false;
  }

  // TODO: INVERTE a lista inteira — O(n)
  // 💡 Dica: Use 3 ponteiros: prev, current, nextTemp
  //   A cada passo: salva o next, inverte a seta, avança os ponteiros
  reverse(): void {
    let prev = null;
    let current = this.head;

    while (current) {
      const nextTemp = current.next;
      current.next = prev;
      prev = current;
      current = nextTemp;
    }

    this.head = prev;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  toArray(): T[] {
    const arr: T[] = [];
    let current = this.head;
    while (current !== null) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

// ============================================
// ✅ TESTES
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

console.log("=== 🏋️ TESTES: Linked List ===\n");

const list = new LinkedList<number>();
test("Lista começa vazia", list.isEmpty(), true);

list.insertAtTail(10);
list.insertAtTail(20);
list.insertAtTail(30);
test("InsertAtTail: [10, 20, 30]", list.toArray(), [10, 20, 30]);

list.insertAtHead(5);
test("InsertAtHead(5): [5, 10, 20, 30]", list.toArray(), [5, 10, 20, 30]);
test("Tamanho é 4", list.size(), 4);

test("Search(20) encontra", list.search(20), true);
test("Search(99) não encontra", list.search(99), false);

test("DeleteAtHead retorna 5", list.deleteAtHead(), 5);
test("Após delete: [10, 20, 30]", list.toArray(), [10, 20, 30]);

list.reverse();
test("Reverse: [30, 20, 10]", list.toArray(), [30, 20, 10]);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO! Todos os testes passaram!");
