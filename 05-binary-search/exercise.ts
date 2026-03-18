export {};

// ============================================
// 🏋️ EXERCÍCIO: Implemente Binary Search
// ============================================
// Rode: npx tsx data-structures/05-binary-search/exercise.ts
// ============================================

// TODO: Busca binária ITERATIVA
// Retorna o ÍNDICE do target no array ordenado, ou -1 se não encontrar
// 💡 Dica: Use dois ponteiros (left, right). Calcule o mid. Compare.

//  [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91] target =5

function binarySearch(arr: number[], target: number): number {
  let leftIndex = 0;
  let rightIndex = arr.length;

  while (leftIndex <= rightIndex) {
    const midle = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midle] === target) return midle;
    if (arr[midle] < target) {
      leftIndex = midle + 1;
    } else {
      rightIndex = midle - 1;
    }
  }

  // Sua implementação aqui
  return -1;
}

// TODO: Busca binária RECURSIVA
function binarySearchRecursive(
  arr: number[],
  target: number,
  left: number = 0,
  right: number = arr.length - 1,
): number {
  // Sua implementação aqui
  return -1;
}

// TODO: Encontrar a PRIMEIRA ocorrência de target
// 💡 Dica: Quando encontrar, salve o índice mas continue buscando à ESQUERDA
function findFirstOccurrence(arr: number[], target: number): number {
  // Sua implementação aqui
  return -1;
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

console.log("=== 🏋️ TESTES: Binary Search ===\n");
const sorted = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];

test("Encontrar 23", binarySearch(sorted, 23), 5);
test("Encontrar 2 (primeiro)", binarySearch(sorted, 2), 0);
test("Encontrar 91 (último)", binarySearch(sorted, 91), 10);
test("Não encontrar 99", binarySearch(sorted, 99), -1);
test("Não encontrar 1", binarySearch(sorted, 1), -1);

console.log("\n--- Recursiva ---");
test("Recursiva: encontrar 45", binarySearchRecursive(sorted, 45), 7);
test("Recursiva: não encontrar 100", binarySearchRecursive(sorted, 100), -1);

console.log("\n--- Primeira Ocorrência ---");
const repeated = [1, 2, 2, 2, 3, 4, 5];
test("Primeira ocorrência de 2", findFirstOccurrence(repeated, 2), 1);
test("Primeira ocorrência de 1", findFirstOccurrence(repeated, 1), 0);
test("Primeira ocorrência de 5", findFirstOccurrence(repeated, 5), 6);
test("Não existe (6)", findFirstOccurrence(repeated, 6), -1);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO!");
