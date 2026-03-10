export {};

// ============================================
// 🏋️ EXERCÍCIO: Dynamic Programming
// ============================================
// Rode: npx tsx data-structures/17-dynamic-programming/exercise.ts
// ============================================

// TODO 1: Fibonacci (Bottom-Up com tabela)
// 💡 Dica: dp[0]=0, dp[1]=1, dp[i] = dp[i-1] + dp[i-2]
function fibonacci(n: number): number {
  return 0;
}

// TODO 2: Climbing Stairs (LeetCode #70)
// Quantas formas de subir N degraus subindo 1 ou 2 de cada vez?
// 💡 Dica: É igual ao Fibonacci! dp[i] = dp[i-1] + dp[i-2]
function climbStairs(n: number): number {
  return 0;
}

// TODO 3: Coin Change (LeetCode #322)
// Mínimo de moedas para formar "amount"
// Entrada: coins=[1,5,10,25], amount=30 → 2 (25+5)
// 💡 Dica: dp[i] = min(dp[i], 1 + dp[i - coin]) para cada moeda
function coinChange(coins: number[], amount: number): number {
  return -1;
}

// TODO 4: Longest Common Subsequence (LeetCode #1143)
// Entrada: "abcde", "ace" → 3 ("ace")
// 💡 Dica: Se char iguais → dp[i-1][j-1]+1, senão → max(dp[i-1][j], dp[i][j-1])
function lcs(text1: string, text2: string): number {
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

console.log("=== 🏋️ TESTES: Dynamic Programming ===\n");

test("fib(0) = 0", fibonacci(0), 0);
test("fib(1) = 1", fibonacci(1), 1);
test("fib(10) = 55", fibonacci(10), 55);
test("fib(20) = 6765", fibonacci(20), 6765);

console.log("");
test("Stairs(1) = 1", climbStairs(1), 1);
test("Stairs(2) = 2", climbStairs(2), 2);
test("Stairs(5) = 8", climbStairs(5), 8);
test("Stairs(10) = 89", climbStairs(10), 89);

console.log("");
test("CoinChange [1,5,10,25] amount=30", coinChange([1, 5, 10, 25], 30), 2);
test("CoinChange [1,5,10] amount=11", coinChange([1, 5, 10], 11), 2);
test("CoinChange [2] amount=3 (impossível)", coinChange([2], 3), -1);
test("CoinChange [1] amount=0", coinChange([1], 0), 0);

console.log("");
test('LCS "abcde" "ace"', lcs("abcde", "ace"), 3);
test('LCS "abc" "abc"', lcs("abc", "abc"), 3);
test('LCS "abc" "def"', lcs("abc", "def"), 0);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO!");
