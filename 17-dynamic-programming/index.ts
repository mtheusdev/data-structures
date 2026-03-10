// ============================================
// 📚 DYNAMIC PROGRAMMING (Programação Dinâmica)
// ============================================
// A técnica mais temida das entrevistas! Mas não precisa ter medo.
//
// DP = Recursão com MEMÓRIA (memoization) ou construção de "tabela"
//
// Ideia central:
//   1. Quebrar o problema grande em SUB-PROBLEMAS menores
//   2. Resolver cada sub-problema UMA VEZ (salvar o resultado)
//   3. Usar os resultados salvos para construir a resposta final
//
// Dois estilos:
//   Top-Down: Recursão + Memoization (começa do grande e desce)
//   Bottom-Up: Tabulation (começa do pequeno e sobe)
//
// 🧠 Passos para resolver qualquer problema de DP:
//   1. Definir o que dp[i] representa
//   2. Encontrar a RELAÇÃO DE RECORRÊNCIA (como dp[i] depende de anteriores)
//   3. Definir os CASOS BASE
//   4. Definir a ORDEM de cálculo
//   5. Retornar a resposta
// ============================================

// ============================================
// PROBLEMA 1: Fibonacci (o "Hello World" do DP)
// ============================================

// Versão INGÊNUA (sem DP) — O(2^n) MUITO LENTO!
function fibNaive(n: number): number {
  if (n <= 1) return n;
  return fibNaive(n - 1) + fibNaive(n - 2);
}

// Versão TOP-DOWN (Recursão + Memoization) — O(n)
function fibTopDown(n: number, memo: Map<number, number> = new Map()): number {
  if (n <= 1) return n;

  // Se já calculamos esse valor antes, retorna da memória!
  if (memo.has(n)) return memo.get(n)!;

  // Calcula e SALVA na memória
  const result = fibTopDown(n - 1, memo) + fibTopDown(n - 2, memo);
  memo.set(n, result);
  return result;
}

// Versão BOTTOM-UP (Tabulation) — O(n) tempo, O(n) espaço
function fibBottomUp(n: number): number {
  if (n <= 1) return n;

  // Tabela: dp[i] = fibonacci de i
  const dp: number[] = new Array(n + 1);
  dp[0] = 0; // Caso base
  dp[1] = 1; // Caso base

  // Constrói de baixo para cima
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // Relação de recorrência
    console.log(
      `    dp[${i}] = dp[${i - 1}](${dp[i - 1]}) + dp[${i - 2}](${dp[i - 2]}) = ${dp[i]}`,
    );
  }

  return dp[n];
}

// Versão OTIMIZADA — O(n) tempo, O(1) espaço!
function fibOptimized(n: number): number {
  if (n <= 1) return n;

  let prev2 = 0; // dp[i-2]
  let prev1 = 1; // dp[i-1]

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

// ============================================
// PROBLEMA 2: Climbing Stairs (LeetCode #70)
// ============================================
// Você pode subir 1 ou 2 degraus. De quantas formas chega ao topo?
// dp[i] = dp[i-1] + dp[i-2] (é igual ao Fibonacci!)

function climbStairs(n: number): number {
  if (n <= 2) return n;

  const dp: number[] = new Array(n + 1);
  dp[1] = 1; // 1 forma de subir 1 degrau
  dp[2] = 2; // 2 formas de subir 2 degraus (1+1 ou 2)

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// ============================================
// PROBLEMA 3: Coin Change (LeetCode #322)
// ============================================
// Dado um array de moedas e um valor, encontrar o MÍNIMO de moedas
// Entrada: coins=[1, 5, 10, 25], amount=30 → 2 (25 + 5)

function coinChange(coins: number[], amount: number): number {
  // dp[i] = mínimo de moedas para formar o valor i
  const dp: number[] = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // Caso base: 0 moedas para formar 0

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      // Se a moeda cabe no valor atual
      if (coin <= i) {
        // Pegar essa moeda = 1 + o mínimo de moedas para o valor restante
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }

  console.log(
    `  Tabela dp: [${dp.slice(0, Math.min(amount + 1, 20)).join(", ")}${amount > 19 ? "..." : ""}]`,
  );
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// ============================================
// PROBLEMA 4: Longest Common Subsequence (LeetCode #1143)
// ============================================
// Encontrar a maior subsequência comum entre duas strings
// Entrada: "abcde", "ace" → 3 ("ace")

function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;

  // dp[i][j] = tamanho da LCS de text1[0..i-1] e text2[0..j-1]
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    new Array(n + 1).fill(0),
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // Caracteres iguais: pega o diagonal + 1
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // Diferentes: pega o maior entre ignorar um caractere de cada string
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Mostra a tabela
  console.log(`\n  Tabela DP (${text1} × ${text2}):`);
  console.log(
    `       ${" ".repeat(4)}${text2
      .split("")
      .map((c) => c.padStart(3))
      .join("")}`,
  );
  for (let i = 0; i <= m; i++) {
    const label = i === 0 ? " " : text1[i - 1];
    console.log(`    ${label}  [${dp[i].join(", ")}]`);
  }

  return dp[m][n];
}

// ============================================
// PROBLEMA 5: 0/1 Knapsack (Mochila)
// ============================================
// Dado itens com peso e valor, maximizar o valor total sem exceder a capacidade
// Clássico de entrevista e competições!

function knapsack(
  weights: number[],
  values: number[],
  capacity: number,
): number {
  const n = weights.length;

  // dp[i][w] = máximo valor usando os primeiros i itens com capacidade w
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    new Array(capacity + 1).fill(0),
  );

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      // Opção 1: Não pego o item i
      dp[i][w] = dp[i - 1][w];

      // Opção 2: Pego o item i (se ele cabe)
      if (weights[i - 1] <= w) {
        const valueWithItem = values[i - 1] + dp[i - 1][w - weights[i - 1]];
        dp[i][w] = Math.max(dp[i][w], valueWithItem);
      }
    }
  }

  return dp[n][capacity];
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  DYNAMIC PROGRAMMING ===\n");

console.log("--- Fibonacci ---");
console.log(`  Ingênuo fib(10): ${fibNaive(10)}`);
console.log(`  Top-Down fib(10): ${fibTopDown(10)}`);
console.log(`  Bottom-Up fib(10):`);
console.log(`  Resultado: ${fibBottomUp(10)}`);
console.log(`  Otimizado fib(50): ${fibOptimized(50)}\n`);

console.log("--- Climbing Stairs ---");
for (const n of [3, 5, 10]) {
  console.log(`  ${n} degraus → ${climbStairs(n)} formas`);
}

console.log("\n--- Coin Change ---");
const coins = [1, 5, 10, 25];
const amount = 30;
console.log(`  Moedas: [${coins.join(", ")}], Valor: ${amount}`);
console.log(`  ✅ Mínimo de moedas: ${coinChange(coins, amount)}\n`);

console.log("--- Longest Common Subsequence ---");
const lcs = longestCommonSubsequence("abcde", "ace");
console.log(`  ✅ LCS de "abcde" e "ace": ${lcs}\n`);

console.log("--- Knapsack (Mochila) ---");
const w = [2, 3, 4, 5];
const v = [3, 4, 5, 6];
const cap = 8;
console.log(`  Pesos:  [${w.join(", ")}]`);
console.log(`  Valores: [${v.join(", ")}]`);
console.log(`  Capacidade: ${cap}`);
console.log(`  ✅ Valor máximo: ${knapsack(w, v, cap)}`);
