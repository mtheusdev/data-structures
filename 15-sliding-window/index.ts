// ============================================
// 📚 SLIDING WINDOW (Janela Deslizante)
// ============================================
// O padrão mais amado das entrevistas técnicas!
// Usado quando precisamos analisar SUB-ARRAYS ou SUB-STRINGS
// contíguas de um array/string.
//
// Em vez de recalcular tudo do zero para cada sub-array,
// a janela "desliza" pela entrada, adicionando um elemento
// à direita e removendo um à esquerda.
//
// Dois tipos:
//   1. Janela de tamanho FIXO (ex: máximo de soma de K elementos)
//   2. Janela de tamanho VARIÁVEL (ex: menor sub-array com soma >= X)
//
// 🧠 Complexidade:
//   Tempo:  O(n) — cada elemento é visitado no máximo 2x
//   Espaço: O(1) ou O(k) dependendo do problema
//
// 💡 Palavras-chave que indicam Sliding Window:
//   - "subarray contíguo"
//   - "substring"
//   - "máximo/mínimo de K elementos"
//   - "sem caracteres repetidos"
// ============================================

// ============================================
// TIPO 1: Janela de TAMANHO FIXO
// ============================================

// Problema: Encontrar a maior soma de K elementos consecutivos
// Entrada: [2, 1, 5, 1, 3, 2], k=3 → Saída: 9 (subarray [5, 1, 3])
function maxSumSubarrayFixedWindow(arr: number[], k: number): number {
  if (arr.length < k) return -1;

  // Passo 1: Calcular a soma da PRIMEIRA janela
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  console.log(`  Janela inicial [0..${k - 1}]: soma = ${windowSum}`);

  let maxSum = windowSum;

  // Passo 2: DESLIZA a janela
  // A cada passo: ADICIONA o próximo da direita e REMOVE o primeiro da esquerda
  for (let i = k; i < arr.length; i++) {
    // Adiciona o novo elemento (direita)
    // Remove o elemento que ficou pra trás (esquerda)
    windowSum = windowSum + arr[i] - arr[i - k];

    const windowStart = i - k + 1;
    console.log(`  Janela [${windowStart}..${i}]: soma = ${windowSum}`);

    if (windowSum > maxSum) {
      maxSum = windowSum;
    }
  }

  return maxSum;
}

// ============================================
// TIPO 2: Janela de TAMANHO VARIÁVEL
// ============================================

// Problema: Menor subarray cuja soma é >= target
// Entrada: [2, 3, 1, 2, 4, 3], target=7 → Saída: 2 (subarray [4, 3])
function minSubarrayLength(arr: number[], target: number): number {
  let windowStart = 0;
  let windowSum = 0;
  let minLength = Infinity;

  // O ponteiro "direito" sempre avança
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Expande a janela: adiciona o elemento da direita
    windowSum += arr[windowEnd];

    // Enquanto a soma for >= target, tenta ENCOLHER a janela pela esquerda
    while (windowSum >= target) {
      const currentLength = windowEnd - windowStart + 1;
      minLength = Math.min(minLength, currentLength);

      console.log(
        `  Janela [${windowStart}..${windowEnd}]: soma=${windowSum}, tamanho=${currentLength}`,
      );

      // Encolhe: remove o elemento da esquerda
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

// ============================================
// PROBLEMA CLÁSSICO: Longest Substring Without Repeating Characters
// (Exatamente o problema que você criou no seu arquivo!)
// ============================================

// Entrada: "abcabcbb" → Saída: 3 ("abc")
// Entrada: "bbbbb"    → Saída: 1 ("b")
// Entrada: "pwwkew"   → Saída: 3 ("wke")
function longestSubstringWithoutRepeating(s: string): number {
  const charSet = new Set<string>(); // Caracteres na janela atual
  let windowStart = 0;
  let maxLength = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const currentChar = s[windowEnd];

    // Se o caractere já existe na janela, encolhe até remover o duplicado
    while (charSet.has(currentChar)) {
      charSet.delete(s[windowStart]);
      windowStart++;
    }

    // Adiciona o caractere atual na janela
    charSet.add(currentChar);
    const currentLength = windowEnd - windowStart + 1;
    maxLength = Math.max(maxLength, currentLength);

    console.log(
      `  Janela [${windowStart}..${windowEnd}]: "${s.substring(windowStart, windowEnd + 1)}" ` +
        `tamanho=${currentLength} | max=${maxLength}`,
    );
  }

  return maxLength;
}

// ============================================
// PROBLEMA: Máximo de cada janela de tamanho K
// ============================================

// Entrada: [1, 3, -1, -3, 5, 3, 6, 7], k=3
// Saída:   [3, 3, 5, 5, 6, 7]
function maxInEachWindow(arr: number[], k: number): number[] {
  const result: number[] = [];

  // Deque (double-ended queue) armazena ÍNDICES dos elementos
  // Mantém os índices em ordem decrescente de valor
  const deque: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    // Remove índices que ficaram fora da janela
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove do final os índices cujos valores são MENORES que o atual
    // (nunca serão o máximo com o atual na janela)
    while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[i]) {
      deque.pop();
    }

    deque.push(i);

    // A janela tem tamanho k a partir do índice k-1
    if (i >= k - 1) {
      result.push(arr[deque[0]]);
      const windowStart = i - k + 1;
      console.log(
        `  Janela [${windowStart}..${i}]: [${arr.slice(windowStart, i + 1).join(",")}] → máximo: ${arr[deque[0]]}`,
      );
    }
  }

  return result;
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  SLIDING WINDOW (Janela Deslizante) ===\n");

console.log("--- Tipo 1: Janela Fixa (Maior soma de K=3 consecutivos) ---");
const arr1 = [2, 1, 5, 1, 3, 2];
console.log(`  Array: [${arr1.join(", ")}], K=3\n`);
const maxSum = maxSumSubarrayFixedWindow(arr1, 3);
console.log(`\n  ✅ Maior soma: ${maxSum}\n`);

console.log("--- Tipo 2: Janela Variável (Menor subarray com soma >= 7) ---");
const arr2 = [2, 3, 1, 2, 4, 3];
console.log(`  Array: [${arr2.join(", ")}], target=7\n`);
const minLen = minSubarrayLength(arr2, 7);
console.log(`\n  ✅ Menor tamanho: ${minLen}\n`);

console.log("--- Clássico: Longest Substring Without Repeating ---");
const testStrings = ["abcabcbb", "bbbbb", "pwwkew"];
for (const s of testStrings) {
  console.log(`\n  Input: "${s}"`);
  const result = longestSubstringWithoutRepeating(s);
  console.log(`  ✅ Resultado: ${result}\n`);
}

console.log("--- Máximo de cada janela de tamanho K=3 ---");
const arr3 = [1, 3, -1, -3, 5, 3, 6, 7];
console.log(`  Array: [${arr3.join(", ")}], K=3\n`);
const maxWindows = maxInEachWindow(arr3, 3);
console.log(`\n  ✅ Máximos: [${maxWindows.join(", ")}]`);
