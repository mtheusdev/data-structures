export {};

// ============================================
// 🏋️ EXERCÍCIO: Greedy
// ============================================
// Rode: npx tsx data-structures/19-greedy/exercise.ts
// ============================================

// TODO 1: Jump Game (LeetCode #55)
// Dado array onde cada valor é o salto máximo, verificar se chega no final
// Entrada: [2, 3, 1, 1, 4] → true
// Entrada: [3, 2, 1, 0, 4] → false
// 💡 Dica: Mantenha um "maxReach". Se i > maxReach, está preso!
function canJump(nums: number[]): boolean {
  return false;
}

// TODO 2: Merge Intervals (LeetCode #56)
// Juntar intervalos que se sobrepõem
// Entrada: [[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]
// 💡 Dica: Ordene pelo início. Se current[0] <= last[1], mescla.
function mergeIntervals(intervals: number[][]): number[][] {
  return [];
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

console.log("=== 🏋️ TESTES: Greedy ===\n");

test("CanJump [2,3,1,1,4]", canJump([2, 3, 1, 1, 4]), true);
test("CanJump [3,2,1,0,4]", canJump([3, 2, 1, 0, 4]), false);
test("CanJump [0]", canJump([0]), true);
test("CanJump [2,0,0]", canJump([2, 0, 0]), true);

console.log("");
test(
  "Merge [[1,3],[2,6],[8,10],[15,18]]",
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]),
  [
    [1, 6],
    [8, 10],
    [15, 18],
  ],
);
test(
  "Merge [[1,4],[4,5]]",
  mergeIntervals([
    [1, 4],
    [4, 5],
  ]),
  [[1, 5]],
);
test(
  "Merge [[1,4],[0,4]]",
  mergeIntervals([
    [1, 4],
    [0, 4],
  ]),
  [[0, 4]],
);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO!");
