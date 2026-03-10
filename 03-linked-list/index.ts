// ============================================
// 📚 LINKED LIST (Lista Encadeada Simples)
// ============================================
// Uma sequência de "nós" onde cada nó aponta para o próximo.
// Diferente de um Array, os elementos NÃO ficam lado a lado na memória.
// Cada nó sabe apenas quem é o "próximo" (next).
//
// 🧠 Complexidade:
//   insertAtHead() → O(1) - Inserir no início
//   insertAtTail() → O(n) - Inserir no final (precisa percorrer tudo)
//   deleteNode()   → O(n) - Remover um nó (precisa encontrar primeiro)
//   search()       → O(n) - Buscar um valor
//   get(index)     → O(n) - Acessar por índice
//
// 💡 Usos no mundo real:
//   - Implementação de Stacks e Queues
//   - Listas de "desfazer" (undo)
//   - Playlists de música (próxima música)
//   - Alocação dinâmica de memória
// ============================================

// Cada "caixinha" da lista
class ListNode<T> {
  value: T;
  next: ListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null; // Por padrão, não aponta para ninguém
  }
}

class LinkedList<T> {
  head: ListNode<T> | null; // O primeiro nó da lista
  private length: number;

  constructor() {
    this.head = null;
    this.length = 0;
  }

  // ---- INSERÇÕES ----

  // Insere um novo nó NO INÍCIO da lista — O(1)
  insertAtHead(value: T): void {
    const newNode = new ListNode(value);
    newNode.next = this.head; // O novo nó aponta para quem era o antigo primeiro
    this.head = newNode; // Agora o novo nó é o primeiro
    this.length++;
    console.log(`  ✅ InsertAtHead: "${value}" inserido no início`);
  }

  // Insere um novo nó NO FINAL da lista — O(n)
  insertAtTail(value: T): void {
    const newNode = new ListNode(value);

    // Se a lista estiver vazia, o novo nó é o primeiro
    if (this.head === null) {
      this.head = newNode;
      this.length++;
      console.log(
        `  ✅ InsertAtTail: "${value}" inserido (lista estava vazia)`,
      );
      return;
    }

    // Caso contrário, percorre até o último nó
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode; // O último nó agora aponta para o novo
    this.length++;
    console.log(`  ✅ InsertAtTail: "${value}" inserido no final`);
  }

  // ---- REMOÇÕES ----

  // Remove o PRIMEIRO nó da lista — O(1)
  deleteAtHead(): T | undefined {
    if (this.head === null) {
      console.log("  ❌ DeleteAtHead: Lista vazia!");
      return undefined;
    }
    const removedValue = this.head.value;
    this.head = this.head.next; // O segundo nó vira o primeiro
    this.length--;
    console.log(`  🗑️  DeleteAtHead: "${removedValue}" removido do início`);
    return removedValue;
  }

  // Remove um nó pelo VALOR — O(n)
  deleteByValue(value: T): boolean {
    if (this.head === null) return false;

    // Caso especial: o valor está logo no primeiro nó
    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      console.log(`  🗑️  DeleteByValue: "${value}" removido`);
      return true;
    }

    // Percorre procurando o nó ANTERIOR ao que queremos remover
    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        // "Pula" o nó que queremos remover
        current.next = current.next.next;
        this.length--;
        console.log(`  🗑️  DeleteByValue: "${value}" removido`);
        return true;
      }
      current = current.next;
    }

    console.log(`  ❌ DeleteByValue: "${value}" não encontrado`);
    return false;
  }

  // ---- BUSCAS ----

  // Busca um valor e retorna true/false — O(n)
  search(value: T): boolean {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  // Acessa o valor pelo índice — O(n)
  get(index: number): T | undefined {
    if (index < 0 || index >= this.length) return undefined;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current?.value;
  }

  // ---- UTILITÁRIOS ----

  // Inverte a lista inteira — O(n)
  // Essa é uma questão CLÁSSICA de entrevista!
  reverse(): void {
    let prev: ListNode<T> | null = null;
    let current = this.head;

    while (current !== null) {
      const nextTemp = current.next; // Salva o próximo
      current.next = prev; // Inverte a seta
      prev = current; // Avança o "anterior"
      current = nextTemp; // Avança o "atual"
    }

    this.head = prev; // O último nó agora é o primeiro
    console.log("  🔄 Reverse: Lista invertida!");
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  // Mostra a lista de forma visual
  print(): void {
    if (this.head === null) {
      console.log("\n  📦 Lista: [vazia]");
      return;
    }

    const elements: string[] = [];
    let current: ListNode<T> | null = this.head;
    while (current !== null) {
      elements.push(String(current.value));
      current = current.next;
    }
    console.log(`\n  📦 Lista: ${elements.join(" → ")} → null`);
  }
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  LINKED LIST (Lista Encadeada) ===\n");

const list = new LinkedList<number>();

console.log("--- Inserções ---");
list.insertAtTail(10);
list.insertAtTail(20);
list.insertAtTail(30);
list.insertAtHead(5);
list.print();
// Esperado: 5 → 10 → 20 → 30 → null

console.log("\n--- Buscas ---");
console.log(
  `  🔍 Buscar 20: ${list.search(20) ? "Encontrado ✅" : "Não encontrado ❌"}`,
);
console.log(
  `  🔍 Buscar 99: ${list.search(99) ? "Encontrado ✅" : "Não encontrado ❌"}`,
);
console.log(`  📍 Elemento no índice 2: ${list.get(2)}`);

console.log("\n--- Remoções ---");
list.deleteByValue(20);
list.print();
// Esperado: 5 → 10 → 30 → null

list.deleteAtHead();
list.print();
// Esperado: 10 → 30 → null

console.log("\n--- Inverter a Lista ---");
list.insertAtTail(40);
list.insertAtTail(50);
list.print();
// Antes: 10 → 30 → 40 → 50 → null

list.reverse();
list.print();
// Depois: 50 → 40 → 30 → 10 → null

console.log(`\n  📏 Tamanho: ${list.size()}`);
