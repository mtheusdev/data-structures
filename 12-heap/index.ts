// ============================================
// 📚 HEAP (Min-Heap) & Fila de Prioridade
// ============================================
// Um Heap é uma árvore binária especial com duas propriedades:
//   1. É COMPLETA (todos os níveis preenchidos, exceto talvez o último)
//   2. Min-Heap: o PAI é sempre MENOR que os filhos
//      Max-Heap: o PAI é sempre MAIOR que os filhos
//
// Armazenamos em um ARRAY (não precisa de nós/ponteiros!)
// Para um nó no índice i:
//   Pai:           Math.floor((i - 1) / 2)
//   Filho esquerdo: 2 * i + 1
//   Filho direito:  2 * i + 2
//
// 🧠 Complexidade:
//   insert()      → O(log n)
//   extractMin()  → O(log n)
//   peek()        → O(1)
//
// 💡 Usos no mundo real:
//   - Fila de prioridade (hospital: quem é mais urgente)
//   - Dijkstra (menor caminho em grafos)
//   - Merge K Sorted Lists
//   - Top K elements
//   - Mediana de stream de dados
// ============================================

class MinHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  // ---- Funções auxiliares para navegar na árvore ----
  private parentIndex(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  private leftChildIndex(i: number): number {
    return 2 * i + 1;
  }

  private rightChildIndex(i: number): number {
    return 2 * i + 2;
  }

  // Troca dois elementos de posição
  private swap(i: number, j: number): void {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // ---- INSERIR ----
  // Coloca no final e "sobe" até a posição correta
  insert(value: number): void {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
    console.log(`  ✅ Insert: ${value} → Heap: [${this.heap.join(", ")}]`);
  }

  // "Subir" o elemento até sua posição correta
  // Se o filho é MENOR que o pai, troca! Repete até estar certo.
  private bubbleUp(index: number): void {
    while (index > 0) {
      const parent = this.parentIndex(index);

      // Se o pai é maior que o filho, troca
      if (this.heap[parent] > this.heap[index]) {
        this.swap(parent, index);
        index = parent; // Continua subindo
      } else {
        break; // Já está na posição certa
      }
    }
  }

  // ---- EXTRAIR MÍNIMO ----
  // Remove e retorna o MENOR elemento (raiz)
  // Coloca o último na raiz e "desce" até a posição correta
  extractMin(): number | undefined {
    if (this.heap.length === 0) return undefined;

    const min = this.heap[0];

    // Coloca o último na raiz
    const last = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }

    console.log(`  🗑️  ExtractMin: ${min} → Heap: [${this.heap.join(", ")}]`);
    return min;
  }

  // "Descer" o elemento até sua posição correta
  // Compara com os dois filhos e troca com o MENOR
  private bubbleDown(index: number): void {
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const left = this.leftChildIndex(index);
      const right = this.rightChildIndex(index);

      // Se o filho da esquerda é menor
      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      // Se o filho da direita é menor ainda
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      // Se o menor não é o próprio nó, troca e continua descendo
      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break; // Já está na posição certa
      }
    }
  }

  // Apenas espia o menor elemento sem remover
  peek(): number | undefined {
    return this.heap[0];
  }

  size(): number {
    return this.heap.length;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  // Mostra o heap como árvore
  print(): void {
    console.log(`\n  📦 Heap: [${this.heap.join(", ")}]`);
    if (this.heap.length === 0) return;

    // Mostra a árvore nível por nível
    let level = 0;
    let index = 0;
    console.log("  🌳 Visualização:");
    while (index < this.heap.length) {
      const levelSize = Math.pow(2, level);
      const elements: string[] = [];
      for (let i = 0; i < levelSize && index < this.heap.length; i++) {
        elements.push(String(this.heap[index]));
        index++;
      }
      const padding = " ".repeat(Math.pow(2, 3 - level));
      console.log(`     ${padding}${elements.join(padding)}`);
      level++;
    }
  }
}

// ============================================
// 🧪 EXEMPLO: Heap Sort (ordenar usando heap)
// ============================================
function heapSort(arr: number[]): number[] {
  const heap = new MinHeap();

  // Insere todos no heap
  for (const num of arr) {
    heap.insert(num);
  }

  // Extrai em ordem (vem sempre o menor primeiro!)
  const sorted: number[] = [];
  while (!heap.isEmpty()) {
    sorted.push(heap.extractMin()!);
  }

  return sorted;
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  HEAP (Min-Heap) ===\n");

console.log("--- Operações Básicas ---");
const heap = new MinHeap();
heap.insert(15);
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(8);
heap.insert(25);
heap.print();

console.log(`\n  👀 Menor elemento (peek): ${heap.peek()}\n`);

console.log("--- Extraindo mínimos em ordem ---");
heap.extractMin(); // 5
heap.extractMin(); // 8
heap.extractMin(); // 10
heap.print();

console.log("\n--- Heap Sort ---");
const unsorted = [38, 27, 43, 3, 9, 82, 10];
console.log(`  Antes:  [${unsorted.join(", ")}]`);
const sorted = heapSort(unsorted);
console.log(`  Depois: [${sorted.join(", ")}]`);
