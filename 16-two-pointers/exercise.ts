export {};

// ============================================
// 🏋️ EXERCÍCIO: Two Pointers
// ============================================
// Rode: npx tsx data-structures/16-two-pointers/exercise.ts
// ============================================

// TODO 1: Two Sum em array ORDENADO
// Retorna os ÍNDICES do par que soma target
// Entrada: [1, 2, 4, 6, 8, 9], target=10 → [1, 4] (2+8=10)
// 💡 Dica: left no início, right no fim. Soma < target? left++. Soma > target? right--
function twoSumSorted(arr: number[], target: number): [number, number] | null {
  return null;
}

// TODO 2: Verificar palíndromo
// Entrada: "racecar" → true, "hello" → false
function isPalindrome(s: string): boolean {
  return false;
}

// TODO 3: Remover duplicatas de array ORDENADO in-place
// Retorna a QUANTIDADE de elementos únicos
// Entrada: [1, 1, 2, 2, 3] → 3 (array fica [1, 2, 3, ...])
// 💡 Dica: slow aponta pra última posição única, fast percorre tudo
function removeDuplicates(arr: number[]): number {
  return 0;
}

// TODO 4: Mover zeros para o final
// Entrada: [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0]
function moveZeros(arr: number[]): void {
  // Modifique o array in-place
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

console.log("=== 🏋️ TESTES: Two Pointers ===\n");

test(
  "TwoSum [1,2,4,6,8,9] target=10",
  twoSumSorted([1, 2, 4, 6, 8, 9], 10),
  [1, 4],
);
test("TwoSum [2,7,11,15] target=9", twoSumSorted([2, 7, 11, 15], 9), [0, 1]);
test("TwoSum não encontra", twoSumSorted([1, 2, 3], 10), null);

console.log("");
test('"racecar" é palíndromo', isPalindrome("racecar"), true);
test('"hello" não é', isPalindrome("hello"), false);
test('"aba" é palíndromo', isPalindrome("aba"), true);
test('"a" é palíndromo', isPalindrome("a"), true);

console.log("");
const d1 = [1, 1, 2, 2, 3, 4, 4];
const count1 = removeDuplicates(d1);
test("RemoveDups [1,1,2,2,3,4,4] → 4 únicos", count1, 4);
test("Array fica [1,2,3,4,...]", d1.slice(0, count1), [1, 2, 3, 4]);

console.log("");
const z1 = [0, 1, 0, 3, 12];
moveZeros(z1);
test("MoveZeros [0,1,0,3,12] → [1,3,12,0,0]", z1, [1, 3, 12, 0, 0]);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO!");
