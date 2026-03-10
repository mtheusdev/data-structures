// ============================================
// 📚 DOUBLY LINKED LIST (Lista Duplamente Encadeada)
// ============================================
// Cada nó tem DOIS ponteiros: um para o PRÓXIMO e um para o ANTERIOR.
// Isso permite navegar tanto para frente quanto para trás.
//
// 🧠 Complexidade:
//   insertAtHead() → O(1)
//   insertAtTail() → O(1) ← Melhor que a lista simples! Temos ponteiro pro tail.
//   deleteNode()   → O(1) se já tivermos o nó
//   search()       → O(n)
//
// 💡 Usos no mundo real:
//   - Navegador (botões voltar/avançar)
//   - Playlist (música anterior/próxima)
//   - Cache LRU (Least Recently Used)
//   - Editor de texto (cursor se move nos dois sentidos)
// ============================================

class DoublyNode<T> {
  value: T;
  prev: DoublyNode<T> | null; // ← Ponteiro para o ANTERIOR
  next: DoublyNode<T> | null; // → Ponteiro para o PRÓXIMO

  constructor(value: T) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList<T> {
  head: DoublyNode<T> | null; // Primeiro nó
  tail: DoublyNode<T> | null; // Último nó (novidade!)
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Insere no INÍCIO — O(1)
  insertAtHead(value: T): void {
    const newNode = new DoublyNode(value);

    if (this.head === null) {
      // Lista vazia: o novo nó é head E tail ao mesmo tempo
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // Novo nó aponta pra frente (pro antigo head)
      this.head.prev = newNode; // O antigo head aponta pra trás (pro novo nó)
      this.head = newNode; // O novo nó vira o head
    }

    this.length++;
    console.log(`  ✅ InsertAtHead: "${value}"`);
  }

  // Insere no FINAL — O(1) graças ao ponteiro tail!
  insertAtTail(value: T): void {
    const newNode = new DoublyNode(value);

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail; // Novo nó aponta pra trás (pro antigo tail)
      this.tail.next = newNode; // O antigo tail aponta pra frente (pro novo nó)
      this.tail = newNode; // O novo nó vira o tail
    }

    this.length++;
    console.log(`  ✅ InsertAtTail: "${value}"`);
  }

  // Remove o PRIMEIRO — O(1)
  deleteAtHead(): T | undefined {
    if (this.head === null) return undefined;

    const removedValue = this.head.value;

    if (this.head === this.tail) {
      // Só tinha 1 elemento
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next; // O segundo vira o primeiro
      this.head!.prev = null; // Corta a ligação com o nó removido
    }

    this.length--;
    console.log(`  🗑️  DeleteAtHead: "${removedValue}"`);
    return removedValue;
  }

  // Remove o ÚLTIMO — O(1) graças ao ponteiro tail!
  deleteAtTail(): T | undefined {
    if (this.tail === null) return undefined;

    const removedValue = this.tail.value;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev; // O penúltimo vira o último
      this.tail!.next = null; // Corta a ligação com o nó removido
    }

    this.length--;
    console.log(`  🗑️  DeleteAtTail: "${removedValue}"`);
    return removedValue;
  }

  // Remove um nó pelo VALOR — O(n) na busca, O(1) na remoção
  deleteByValue(value: T): boolean {
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        // Caso 1: É o head
        if (current === this.head) {
          this.deleteAtHead();
          return true;
        }
        // Caso 2: É o tail
        if (current === this.tail) {
          this.deleteAtTail();
          return true;
        }
        // Caso 3: Está no meio — "pula" o nó atual
        current.prev!.next = current.next; // O anterior aponta pro próximo
        current.next!.prev = current.prev; // O próximo aponta pro anterior
        this.length--;
        console.log(`  🗑️  DeleteByValue: "${value}"`);
        return true;
      }
      current = current.next;
    }

    return false;
  }

  // Busca — O(n)
  search(value: T): boolean {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  size(): number {
    return this.length;
  }

  // Mostra a lista para FRENTE
  printForward(): void {
    const elements: string[] = [];
    let current = this.head;
    while (current !== null) {
      elements.push(String(current.value));
      current = current.next;
    }
    console.log(`\n  ➡️  Frente: null ↔ ${elements.join(" ↔ ")} ↔ null`);
  }

  // Mostra a lista para TRÁS
  printBackward(): void {
    const elements: string[] = [];
    let current = this.tail;
    while (current !== null) {
      elements.push(String(current.value));
      current = current.prev;
    }
    console.log(`  ⬅️  Trás:   null ↔ ${elements.join(" ↔ ")} ↔ null`);
  }
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  DOUBLY LINKED LIST (Lista Duplamente Encadeada) ===\n");

const dll = new DoublyLinkedList<number>();

console.log("--- Inserções ---");
dll.insertAtTail(10);
dll.insertAtTail(20);
dll.insertAtTail(30);
dll.insertAtHead(5);
dll.printForward();
dll.printBackward();
// Frente: 5 ↔ 10 ↔ 20 ↔ 30
// Trás:   30 ↔ 20 ↔ 10 ↔ 5

console.log("\n--- Remoções ---");
dll.deleteAtHead();
dll.deleteAtTail();
dll.printForward();
// Esperado: 10 ↔ 20

dll.deleteByValue(10);
dll.printForward();
// Esperado: 20

console.log(`\n  📏 Tamanho: ${dll.size()}`);
