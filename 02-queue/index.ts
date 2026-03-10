// ============================================
// 📚 QUEUE (Fila) - Estrutura FIFO
// ============================================
// FIFO = First In, First Out (Primeiro a entrar, primeiro a sair)
// Pense na fila do banco: quem chegou primeiro é atendido primeiro.
//
// 🧠 Complexidade:
//   enqueue() → O(1) - Adicionar no final
//   dequeue() → O(1) - Remover do início (usando ponteiro de início)
//   front()   → O(1) - Ver o primeiro da fila
//   size()    → O(1) - Ver o tamanho
//
// 💡 Usos no mundo real:
//   - Fila de impressão
//   - Processamento de tarefas (Job Queue)
//   - BFS (Busca em Largura) em grafos
//   - Buffer de dados (streaming de vídeo)
// ============================================

class Queue<T> {
  // Usamos um objeto como "dicionário" para evitar o custo de shift() em arrays
  // shift() em array é O(n) porque precisa reindexar tudo.
  // Com objeto + ponteiros, removemos em O(1)!
  private items: Record<number, T>;
  private headIndex: number; // Ponteiro para o início da fila
  private tailIndex: number; // Ponteiro para o final da fila

  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  // Coloca um elemento no FINAL da fila
  enqueue(element: T): void {
    this.items[this.tailIndex] = element;
    this.tailIndex++;
    console.log(`  ✅ Enqueue: "${element}" entrou na fila`);
  }

  // Remove e retorna o elemento do INÍCIO da fila
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      console.log("  ❌ Dequeue: Fila está vazia!");
      return undefined;
    }
    const removed = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    console.log(`  🗑️  Dequeue: "${removed}" saiu da fila`);
    return removed;
  }

  // Apenas ESPIA o primeiro da fila sem remover
  front(): T | undefined {
    if (this.isEmpty()) {
      console.log("  👀 Front: Fila está vazia!");
      return undefined;
    }
    return this.items[this.headIndex];
  }

  // Retorna true se a fila estiver vazia
  isEmpty(): boolean {
    return this.tailIndex - this.headIndex === 0;
  }

  // Retorna o tamanho da fila
  size(): number {
    return this.tailIndex - this.headIndex;
  }

  // Limpa todos os elementos
  clear(): void {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
    console.log("  🧹 Clear: Fila limpa!");
  }

  // Mostra a fila no console de forma visual
  print(): void {
    console.log("\n  📦 Estado da Fila (início → fim):");
    if (this.isEmpty()) {
      console.log("    [vazia]");
      return;
    }
    const elements: string[] = [];
    for (let i = this.headIndex; i < this.tailIndex; i++) {
      elements.push(String(this.items[i]));
    }
    console.log(`    INÍCIO → [${elements.join(" → ")}] → FIM`);
  }
}

// ============================================
// 🧪 EXEMPLO PRÁTICO: Simulador de Fila de Atendimento
// ============================================

function simulateServiceQueue(): void {
  console.log("\n--- 🏦 Simulador de Fila de Atendimento ---\n");

  const queue = new Queue<string>();

  // Clientes chegam na fila
  queue.enqueue("Maria");
  queue.enqueue("João");
  queue.enqueue("Ana");
  queue.enqueue("Carlos");
  queue.print();

  // Atendimento começa
  console.log("\n  🏁 Iniciando atendimento...\n");
  while (!queue.isEmpty()) {
    const client = queue.dequeue();
    console.log(`  🎯 Atendendo: ${client}`);
  }

  queue.print();
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  QUEUE (Fila) ===\n");

console.log("--- Operações básicas ---");
const queue = new Queue<number>();
queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.print();

console.log(`\n  👀 Primeiro da fila: ${queue.front()}`);
console.log(`  📏 Tamanho: ${queue.size()}`);

queue.dequeue();
queue.print();

simulateServiceQueue();
