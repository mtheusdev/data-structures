export {};

// ============================================
// 🏋️ EXERCÍCIO: Backtracking
// ============================================
// Rode: npx tsx data-structures/18-backtracking/exercise.ts
// ============================================

// TODO 1: Gerar todos os Subsets
// Entrada: [1, 2, 3] → [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
// 💡 Template: escolha → explorar → DESFAZER
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  // Sua implementação aqui (use uma função recursiva interna "backtrack")
  return result;
}

// TODO 2: Gerar todas as Permutações
// Entrada: [1, 2, 3] → [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 💡 Dica: Use um Set<number> para rastrear índices já usados
function permutations(nums: number[]): number[][] {
  const result: number[][] = [];
  // Sua implementação aqui
  return result;
}

// TODO 3: Combination Sum (LeetCode #39)
// Encontrar combinações que somam target (pode reusar elementos)
// Entrada: [2,3,6,7], target=7 → [[2,2,3],[7]]
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  // Sua implementação aqui
  return result;
}

// ============================================
// ✅ TESTES
// ============================================
let passed = 0;
let failed = 0;
function test(n: string, a: any, e: any) {
  // Ordena arrays para comparação
  const sortArr = (arr: any[]) =>
    JSON.stringify(
      arr.map((x: any) => (Array.isArray(x) ? x.sort() : x)).sort(),
    );
  const p = sortArr(a) === sortArr(e);
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

console.log("=== 🏋️ TESTES: Backtracking ===\n");

const subs = subsets([1, 2, 3]);
test("Subsets [1,2,3] tem 8 resultados", subs.length, 8);
test(
  "Subsets contém []",
  subs.some((s) => s.length === 0),
  true,
);
test(
  "Subsets contém [1,2,3]",
  subs.some((s) => JSON.stringify(s) === "[1,2,3]"),
  true,
);

console.log("");
const perms = permutations([1, 2, 3]);
test("Permutações [1,2,3] tem 6 resultados", perms.length, 6);

console.log("");
test("CombSum [2,3,6,7] target=7", combinationSum([2, 3, 6, 7], 7), [
  [2, 2, 3],
  [7],
]);
test("CombSum [2,3,5] target=8", combinationSum([2, 3, 5], 8), [
  [2, 2, 2, 2],
  [2, 3, 3],
  [3, 5],
]);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO!");
