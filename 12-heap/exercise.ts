export {};

// ============================================
// 🏋️ EXERCÍCIO: Implemente um Min-Heap
// ============================================
// Rode: npx tsx data-structures/12-heap/exercise.ts
// ============================================

class MinHeap {
  private heap: number[];
  constructor() {
    this.heap = [];
  }

  // Helpers prontos pra você usar:
  private parentIdx(i: number): number {
    return Math.floor((i - 1) / 2);
  }
  private leftIdx(i: number): number {
    return 2 * i + 1;
  }
  private rightIdx(i: number): number {
    return 2 * i + 2;
  }
  private swap(i: number, j: number): void {
    const t = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = t;
  }

  // TODO: Insere um valor e "sobe" ele até a posição correta
  // 💡 Dica: push no final, depois bubbleUp (compara com pai, troca se menor)
  insert(value: number): void {}

  // TODO: Remove e retorna o MENOR elemento (raiz)
  // 💡 Dica: salva raiz, coloca último na raiz, bubbleDown
  extractMin(): number | undefined {
    return undefined;
  }

  // TODO: Retorna o menor sem remover
  peek(): number | undefined {
    return undefined;
  }

  size(): number {
    return this.heap.length;
  }
  isEmpty(): boolean {
    return this.heap.length === 0;
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

console.log("=== 🏋️ TESTES: Min-Heap ===\n");
const h = new MinHeap();
h.insert(15);
h.insert(10);
h.insert(20);
h.insert(5);
h.insert(8);

test("Peek retorna o menor (5)", h.peek(), 5);
test("Tamanho é 5", h.size(), 5);

test("ExtractMin retorna 5", h.extractMin(), 5);
test("ExtractMin retorna 8", h.extractMin(), 8);
test("ExtractMin retorna 10", h.extractMin(), 10);
test("Peek agora é 15", h.peek(), 15);
test("Tamanho é 2", h.size(), 2);

// Heap Sort test
const unsorted = [38, 27, 43, 3, 9, 82, 10];
const heap2 = new MinHeap();
for (const n of unsorted) heap2.insert(n);
const sorted: number[] = [];
while (!heap2.isEmpty()) sorted.push(heap2.extractMin()!);
test("Heap Sort: [3,9,10,27,38,43,82]", sorted, [3, 9, 10, 27, 38, 43, 82]);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO!");
