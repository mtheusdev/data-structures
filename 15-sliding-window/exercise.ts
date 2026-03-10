export {};

// ============================================
// 🏋️ EXERCÍCIO: Sliding Window
// ============================================
// Rode: npx tsx data-structures/15-sliding-window/exercise.ts
// ============================================

// TODO 1: Maior soma de K elementos consecutivos (Janela Fixa)
// Entrada: [2, 1, 5, 1, 3, 2], k=3 → 9 (subarray [5, 1, 3])
// 💡 Dica: Calcule a soma da primeira janela. Depois, a cada passo:
//   soma = soma + arr[i] - arr[i - k]
function maxSumSubarray(arr: number[], k: number): number {
  // Sua implementação aqui
  return 0;
}

// TODO 2: Menor subarray cuja soma é >= target (Janela Variável)
// Entrada: [2, 3, 1, 2, 4, 3], target=7 → 2 (subarray [4, 3])
// 💡 Dica: Dois ponteiros. Expande pela direita, encolhe pela esquerda.
function minSubarrayLength(arr: number[], target: number): number {
  // Sua implementação aqui
  return 0;
}

// TODO 3: Longest Substring Without Repeating Characters
// Entrada: "abcabcbb" → 3 ("abc")
// 💡 Dica: Use um Set para rastrear caracteres na janela atual
function longestSubstring(s: string): number {
  // Sua implementação aqui
  return 0;
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

console.log("=== 🏋️ TESTES: Sliding Window ===\n");

test("MaxSum [2,1,5,1,3,2] k=3", maxSumSubarray([2, 1, 5, 1, 3, 2], 3), 9);
test("MaxSum [1,2,3,4,5] k=2", maxSumSubarray([1, 2, 3, 4, 5], 2), 9);

console.log("");
test(
  "MinSubarray [2,3,1,2,4,3] target=7",
  minSubarrayLength([2, 3, 1, 2, 4, 3], 7),
  2,
);
test(
  "MinSubarray [1,1,1,1,1,1] target=11",
  minSubarrayLength([1, 1, 1, 1, 1, 1], 11),
  0,
);

console.log("");
test('Longest "abcabcbb"', longestSubstring("abcabcbb"), 3);
test('Longest "bbbbb"', longestSubstring("bbbbb"), 1);
test('Longest "pwwkew"', longestSubstring("pwwkew"), 3);
test('Longest ""', longestSubstring(""), 0);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO!");
