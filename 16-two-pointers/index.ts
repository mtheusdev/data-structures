// ============================================
// 📚 TWO POINTERS (Dois Ponteiros)
// ============================================
// Usa dois ponteiros que se movem pela entrada de formas diferentes:
//   1. Um no início, outro no fim (se aproximando)
//   2. Um lento, outro rápido (fast & slow)
//
// 🧠 Complexidade: O(n) tempo, O(1) espaço
//
// 💡 Palavras-chave:
//   - "array ORDENADO"
//   - "par que soma X"
//   - "palíndromo"
//   - "remover duplicatas in-place"
//   - "linked list com ciclo"
// ============================================

// ============================================
// PADRÃO 1: Ponteiros opostos (início ↔ fim)
// ============================================

// Problema: Dado array ORDENADO, encontrar par que soma target
// Entrada: [1, 2, 4, 6, 8, 9, 14, 15], target=13 → [2, 5] (4+9=13)
function twoSumSorted(arr: number[], target: number): [number, number] | null {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    console.log(
      `  left=${left}(${arr[left]}) + right=${right}(${arr[right]}) = ${sum}`,
    );

    if (sum === target) {
      return [left, right]; // Achamos!
    }

    if (sum < target) {
      left++; // Soma muito pequena → avança o ponteiro esquerdo
    } else {
      right--; // Soma muito grande → recua o ponteiro direito
    }
  }

  return null;
}

// Problema: Verificar se uma string é palíndromo
// Entrada: "racecar" → true
function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      console.log(`  ❌ "${s[left]}" ≠ "${s[right]}" → NÃO é palíndromo`);
      return false;
    }
    console.log(`  ✅ "${s[left]}" = "${s[right]}"`);
    left++;
    right--;
  }

  return true;
}

// Problema: Container With Most Water (LeetCode #11)
// Encontrar o container que guarda mais água
function maxArea(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;
  let maxWater = 0;

  while (left < right) {
    const width = right - left;
    const height = Math.min(heights[left], heights[right]);
    const area = width * height;

    console.log(
      `  left=${left}(h:${heights[left]}) right=${right}(h:${heights[right]}) → ` +
        `largura=${width} × altura=${height} = ${area}`,
    );

    maxWater = Math.max(maxWater, area);

    // Move o ponteiro que tem a menor altura (buscando uma maior)
    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

// ============================================
// PADRÃO 2: Fast & Slow (Rápido e Lento)
// ============================================

// Problema: Remover duplicatas de array ORDENADO in-place
// Entrada: [1, 1, 2, 2, 3, 4, 4] → [1, 2, 3, 4, ...] retorna 4
function removeDuplicates(arr: number[]): number {
  if (arr.length === 0) return 0;

  let slow = 0; // Aponta para a última posição sem duplicata

  for (let fast = 1; fast < arr.length; fast++) {
    // Se encontrou um valor diferente do slow
    if (arr[fast] !== arr[slow]) {
      slow++; // Avança o slow
      arr[slow] = arr[fast]; // Coloca o novo valor na posição correta
      console.log(
        `  fast=${fast}(${arr[fast]}) ≠ slow → moveu para posição ${slow}`,
      );
    }
  }

  return slow + 1; // Quantidade de elementos únicos
}

// Problema: Mover todos os zeros para o final
// Entrada: [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0]
function moveZeros(arr: number[]): void {
  let slow = 0; // Próxima posição para colocar um não-zero

  // Fast percorre todo o array
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== 0) {
      // Troca o não-zero com a posição do slow
      const temp = arr[slow];
      arr[slow] = arr[fast];
      arr[fast] = temp;
      console.log(
        `  Trocou posição ${fast}(${arr[fast]}) ↔ ${slow}(${arr[slow]}) → [${arr.join(", ")}]`,
      );
      slow++;
    }
  }
}

// ============================================
// PADRÃO 3: Três ponteiros (Three Sum)
// ============================================

// Problema: Encontrar TODOS os trios que somam 0
// Entrada: [-1, 0, 1, 2, -1, -4] → [[-1, -1, 2], [-1, 0, 1]]
function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b); // Ordena primeiro!

  for (let i = 0; i < nums.length - 2; i++) {
    // Pula duplicatas no ponteiro i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        console.log(
          `  ✅ Encontrou: [${nums[i]}, ${nums[left]}, ${nums[right]}]`,
        );

        // Pula duplicatas
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  TWO POINTERS (Dois Ponteiros) ===\n");

console.log("--- Two Sum (array ordenado) ---");
const sorted = [1, 2, 4, 6, 8, 9, 14, 15];
console.log(`  Array: [${sorted.join(", ")}], target=13\n`);
const pair = twoSumSorted(sorted, 13);
console.log(
  `  ✅ Par: [${pair}] → ${sorted[pair![0]]} + ${sorted[pair![1]]} = 13\n`,
);

console.log("--- Palíndromo ---");
for (const word of ["racecar", "hello", "aba"]) {
  console.log(`\n  "${word}":`);
  console.log(
    `  Resultado: ${isPalindrome(word) ? "Palíndromo ✅" : "Não é ❌"}`,
  );
}

console.log("\n--- Container With Most Water ---");
const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(`  Heights: [${heights.join(", ")}]\n`);
console.log(`  ✅ Máxima água: ${maxArea(heights)}\n`);

console.log("--- Remover Duplicatas ---");
const withDups = [1, 1, 2, 2, 3, 4, 4];
console.log(`  Antes: [${withDups.join(", ")}]`);
const uniqueCount = removeDuplicates(withDups);
console.log(
  `  Depois: [${withDups.slice(0, uniqueCount).join(", ")}] (${uniqueCount} únicos)\n`,
);

console.log("--- Mover Zeros ---");
const withZeros = [0, 1, 0, 3, 12];
console.log(`  Antes: [${withZeros.join(", ")}]`);
moveZeros(withZeros);
console.log(`  Depois: [${withZeros.join(", ")}]\n`);

console.log("--- Three Sum (soma zero) ---");
const nums = [-1, 0, 1, 2, -1, -4];
console.log(`  Array: [${nums.join(", ")}]`);
const triplets = threeSum(nums);
console.log(`  ✅ Trios: ${JSON.stringify(triplets)}`);
