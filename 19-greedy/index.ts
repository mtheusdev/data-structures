// ============================================
// 📚 GREEDY (Algoritmo Guloso)
// ============================================
// A cada passo, faz a escolha que PARECE a melhor naquele momento,
// sem se preocupar com o futuro. E espera que esteja certo!
//
// ⚠️ NÃO funciona para todos os problemas!
// Só funciona quando a "escolha local ótima" leva à "solução global ótima".
//
// 🧠 Complexidade: Geralmente O(n log n) por causa do sort
//
// 💡 Quando usar:
//   - Problemas de INTERVALOS (scheduling, meetings)
//   - Problemas de TROCO/MOEDAS (quando as moedas são "nice")
//   - Jump Game
//   - Atividades não sobrepostas
// ============================================

// ============================================
// PROBLEMA 1: Activity Selection (Seleção de Atividades)
// ============================================
// Dado várias atividades com início e fim, escolher o MÁXIMO
// de atividades que não se sobrepõem.

interface Activity {
  name: string;
  start: number;
  end: number;
}

function activitySelection(activities: Activity[]): Activity[] {
  // Estratégia Gulosa: Ordena pelo HORÁRIO DE TÉRMINO
  // Sempre escolhe a atividade que TERMINA MAIS CEDO
  const sorted = [...activities].sort((a, b) => a.end - b.end);

  const selected: Activity[] = [sorted[0]]; // Primeira atividade (termina mais cedo)
  let lastEnd = sorted[0].end;

  console.log(`  Atividades ordenadas por fim:`);
  for (const act of sorted) {
    console.log(`    ${act.name}: [${act.start}-${act.end}]`);
  }
  console.log(`\n  Selecionando...`);
  console.log(`    ✅ "${sorted[0].name}" selecionada (primeira)`);

  for (let i = 1; i < sorted.length; i++) {
    // Se a atividade começa DEPOIS (ou junto) da última terminar
    if (sorted[i].start >= lastEnd) {
      selected.push(sorted[i]);
      lastEnd = sorted[i].end;
      console.log(
        `    ✅ "${sorted[i].name}" selecionada (começa em ${sorted[i].start} >= ${lastEnd - (sorted[i].end - sorted[i].start)})`,
      );
    } else {
      console.log(
        `    ❌ "${sorted[i].name}" conflita (começa em ${sorted[i].start} < ${lastEnd})`,
      );
    }
  }

  return selected;
}

// ============================================
// PROBLEMA 2: Jump Game (LeetCode #55)
// ============================================
// Dado array onde cada valor é o salto máximo, verificar se chega no final
// Entrada: [2, 3, 1, 1, 4] → true
// Entrada: [3, 2, 1, 0, 4] → false

function canJump(nums: number[]): boolean {
  let maxReach = 0; // A posição mais longe que consigo alcançar

  for (let i = 0; i < nums.length; i++) {
    // Se a posição atual está além do alcance, impossível
    if (i > maxReach) {
      console.log(`  ❌ Preso no índice ${i}! maxReach=${maxReach}`);
      return false;
    }

    // Atualiza o alcance máximo
    maxReach = Math.max(maxReach, i + nums[i]);
    console.log(`  Índice ${i} (salto: ${nums[i]}): maxReach=${maxReach}`);

    // Se já alcança o final, retorna true
    if (maxReach >= nums.length - 1) {
      console.log(`  ✅ Alcança o final!`);
      return true;
    }
  }

  return maxReach >= nums.length - 1;
}

// ============================================
// PROBLEMA 3: Troco com o mínimo de moedas (versão Greedy)
// ============================================
// ⚠️ Funciona APENAS quando as moedas são "canônicas" (ex: [1, 5, 10, 25])

function greedyCoinChange(coins: number[], amount: number): number[] {
  // Ordena as moedas do MAIOR para o menor
  const sorted = [...coins].sort((a, b) => b - a);
  const result: number[] = [];
  let remaining = amount;

  for (const coin of sorted) {
    // Usa a maior moeda o máximo de vezes possível
    while (remaining >= coin) {
      result.push(coin);
      remaining -= coin;
      console.log(`  💰 Usa moeda de ${coin} → restante: ${remaining}`);
    }
  }

  return result;
}

// ============================================
// PROBLEMA 4: Merge Intervals (LeetCode #56)
// ============================================
// Juntar intervalos que se sobrepõem
// Entrada: [[1,3],[2,6],[8,10],[15,18]] → [[1,6],[8,10],[15,18]]

function mergeIntervals(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  // Ordena pelo início
  intervals.sort((a, b) => a[0] - b[0]);
  const merged: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const last = merged[merged.length - 1];
    const current = intervals[i];

    console.log(`  Comparando [${last}] com [${current}]`);

    if (current[0] <= last[1]) {
      // Se sobrepõe, junta (pega o maior fim)
      last[1] = Math.max(last[1], current[1]);
      console.log(`    🔗 Mesclado → [${last}]`);
    } else {
      // Não sobrepõe, adiciona como novo intervalo
      merged.push(current);
      console.log(`    ➕ Novo intervalo: [${current}]`);
    }
  }

  return merged;
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  GREEDY (Algoritmo Guloso) ===\n");

console.log("--- Activity Selection ---");
const activities: Activity[] = [
  { name: "Aula", start: 1, end: 3 },
  { name: "Reunião", start: 2, end: 5 },
  { name: "Almoço", start: 4, end: 7 },
  { name: "Gym", start: 6, end: 8 },
  { name: "Estudo", start: 5, end: 9 },
  { name: "Jantar", start: 8, end: 10 },
];
const selected = activitySelection(activities);
console.log(
  `\n  ✅ Máximo: ${selected.length} atividades: ${selected.map((a) => a.name).join(", ")}\n`,
);

console.log("--- Jump Game ---");
console.log(`  [2, 3, 1, 1, 4]:`);
console.log(`  Resultado: ${canJump([2, 3, 1, 1, 4])}\n`);
console.log(`  [3, 2, 1, 0, 4]:`);
console.log(`  Resultado: ${canJump([3, 2, 1, 0, 4])}\n`);

console.log("--- Troco Guloso ---");
console.log(`  Moedas: [1, 5, 10, 25], Valor: 41`);
const change = greedyCoinChange([1, 5, 10, 25], 41);
console.log(
  `  ✅ Moedas usadas: [${change.join(", ")}] (${change.length} moedas)\n`,
);

console.log("--- Merge Intervals ---");
const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(`  Entrada: ${JSON.stringify(intervals)}`);
const merged = mergeIntervals(intervals);
console.log(`  ✅ Resultado: ${JSON.stringify(merged)}`);
