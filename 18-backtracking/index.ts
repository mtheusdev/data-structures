// ============================================
// 📚 BACKTRACKING (Retrocesso)
// ============================================
// Uma técnica de busca exaustiva que EXPLORA TODAS as possibilidades
// e VOLTA ATRÁS quando descobre que o caminho atual não leva a lugar nenhum.
//
// É como resolver um Sudoku: tenta um número, se não funcionar,
// apaga e tenta o próximo.
//
// Template genérico:
//   function backtrack(candidatos, caminho_atual, resultado) {
//     if (condição de parada) { salvar caminho_atual; return; }
//     for (cada candidato) {
//       fazer escolha (adicionar ao caminho)
//       backtrack(candidatos restantes, caminho_atual, resultado)
//       DESFAZER escolha (backtrack!)
//     }
//   }
//
// 🧠 Complexidade: Geralmente O(2^n) ou O(n!)
//
// 💡 Quando usar:
//   - Gerar todas as COMBINAÇÕES
//   - Gerar todas as PERMUTAÇÕES
//   - Resolver Sudoku / N-Queens
//   - Encontrar todos os SUBSETS
// ============================================

// ============================================
// PROBLEMA 1: Subsets (todos os subconjuntos)
// ============================================
// Entrada: [1, 2, 3] → [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]

function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, currentSubset: number[]): void {
    // Cada caminho parcial é um subset válido! Salva.
    result.push([...currentSubset]);
    console.log(`    Subset: [${currentSubset.join(", ")}]`);

    for (let i = start; i < nums.length; i++) {
      currentSubset.push(nums[i]); // ← ESCOLHA
      backtrack(i + 1, currentSubset); // ← EXPLORAR
      currentSubset.pop(); // ← DESFAZER (backtrack!)
    }
  }

  backtrack(0, []);
  return result;
}

// ============================================
// PROBLEMA 2: Permutações
// ============================================
// Entrada: [1, 2, 3] → [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

function permutations(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(currentPerm: number[], used: Set<number>): void {
    // Se a permutação tem o mesmo tamanho do array, é uma permutação completa
    if (currentPerm.length === nums.length) {
      result.push([...currentPerm]);
      console.log(`    Permutação: [${currentPerm.join(", ")}]`);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used.has(i)) continue; // Pula elementos já usados

      currentPerm.push(nums[i]); // ← ESCOLHA
      used.add(i);
      backtrack(currentPerm, used); // ← EXPLORAR
      currentPerm.pop(); // ← DESFAZER
      used.delete(i);
    }
  }

  backtrack([], new Set());
  return result;
}

// ============================================
// PROBLEMA 3: Combination Sum (LeetCode #39)
// ============================================
// Encontrar combinações que somam target (pode reusar elementos)
// Entrada: candidates=[2,3,6,7], target=7 → [[2,2,3], [7]]

function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];

  function backtrack(
    start: number,
    currentCombo: number[],
    remaining: number,
  ): void {
    if (remaining === 0) {
      result.push([...currentCombo]);
      console.log(`    ✅ Combinação: [${currentCombo.join(", ")}]`);
      return;
    }

    if (remaining < 0) return; // Ultrapassou o target, volta!

    for (let i = start; i < candidates.length; i++) {
      currentCombo.push(candidates[i]); // ← ESCOLHA
      backtrack(i, currentCombo, remaining - candidates[i]); // ← EXPLORAR (i, não i+1, pois pode reusar)
      currentCombo.pop(); // ← DESFAZER
    }
  }

  backtrack(0, [], target);
  return result;
}

// ============================================
// PROBLEMA 4: N-Queens (o clássico dos clássicos!)
// ============================================
// Colocar N rainhas num tabuleiro N×N sem que nenhuma ataque outra

function solveNQueens(n: number): string[][] {
  const result: string[][] = [];
  const board: string[][] = Array.from({ length: n }, () => Array(n).fill("."));

  // Verifica se é seguro colocar uma rainha em (row, col)
  function isSafe(row: number, col: number): boolean {
    // Verifica a coluna acima
    for (let i = 0; i < row; i++) {
      if (board[i][col] === "Q") return false;
    }
    // Verifica diagonal superior esquerda
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === "Q") return false;
    }
    // Verifica diagonal superior direita
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === "Q") return false;
    }
    return true;
  }

  function backtrack(row: number): void {
    if (row === n) {
      // Todas as N rainhas foram colocadas!
      result.push(board.map((r) => r.join("")));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = "Q"; // ← ESCOLHA
        backtrack(row + 1); // ← EXPLORAR próxima linha
        board[row][col] = "."; // ← DESFAZER
      }
    }
  }

  backtrack(0);
  return result;
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  BACKTRACKING (Retrocesso) ===\n");

console.log("--- Subsets de [1, 2, 3] ---");
const subs = subsets([1, 2, 3]);
console.log(`  Total: ${subs.length} subsets\n`);

console.log("--- Permutações de [1, 2, 3] ---");
const perms = permutations([1, 2, 3]);
console.log(`  Total: ${perms.length} permutações\n`);

console.log("--- Combination Sum: candidates=[2,3,6,7], target=7 ---");
const combos = combinationSum([2, 3, 6, 7], 7);
console.log(`  Total: ${combos.length} combinações\n`);

console.log("--- N-Queens (N=4) ---");
const queens = solveNQueens(4);
console.log(`  Total de soluções: ${queens.length}\n`);
for (let i = 0; i < queens.length; i++) {
  console.log(`  Solução ${i + 1}:`);
  for (const row of queens[i]) {
    console.log(`    ${row.split("").join(" ")}`);
  }
  console.log("");
}
