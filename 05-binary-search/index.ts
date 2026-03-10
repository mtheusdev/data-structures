// ============================================
// 📚 BINARY SEARCH (Busca Binária)
// ============================================
// A Busca Binária encontra um elemento num array ORDENADO
// cortando a busca pela METADE a cada passo.
//
// É como abrir um dicionário: se você quer a palavra "gato",
// abre no meio. Se "gato" vem depois, joga fora a primeira metade.
// Repete até achar.
//
// ⚠️ REQUISITO: O array PRECISA estar ORDENADO!
//
// 🧠 Complexidade:
//   Tempo:  O(log n) — muito mais rápido que busca linear O(n)
//   Espaço: O(1) na versão iterativa, O(log n) na recursiva
//
// 💡 Comparação prática:
//   Array com 1.000.000 de elementos:
//   - Busca Linear: até 1.000.000 comparações
//   - Busca Binária: no máximo ~20 comparações!
// ============================================

// ---- VERSÃO ITERATIVA (com while) ----
function binarySearchIterative(arr: number[], target: number): number {
  let left = 0; // Ponteiro da esquerda (início)
  let right = arr.length - 1; // Ponteiro da direita (fim)
  let steps = 0; // Contador de passos (para aprendizado)

  while (left <= right) {
    steps++;

    // Calcula o meio do intervalo atual
    const mid = Math.floor((left + right) / 2);

    console.log(
      `    Passo ${steps}: olhando índice ${mid} (valor: ${arr[mid]})`,
    );
    console.log(`    Intervalo: [${left}...${right}]`);

    if (arr[mid] === target) {
      // Achamos o valor!
      console.log(`    ✅ Encontrado no índice ${mid} em ${steps} passos!\n`);
      return mid;
    }

    if (arr[mid] < target) {
      // O valor está na metade DIREITA
      console.log(`    ${arr[mid]} < ${target} → buscar na metade DIREITA\n`);
      left = mid + 1;
    } else {
      // O valor está na metade ESQUERDA
      console.log(`    ${arr[mid]} > ${target} → buscar na metade ESQUERDA\n`);
      right = mid - 1;
    }
  }

  console.log(`    ❌ Valor ${target} não encontrado! (${steps} passos)\n`);
  return -1;
}

// ---- VERSÃO RECURSIVA ----
function binarySearchRecursive(
  arr: number[],
  target: number,
  left: number = 0,
  right: number = arr.length - 1,
): number {
  // Caso base: intervalo inválido, não encontrou
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  // Achamos!
  if (arr[mid] === target) return mid;

  // Busca na metade correta
  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1);
  }
}

// ---- VARIAÇÃO: Encontrar a PRIMEIRA ocorrência ----
// Útil quando o array tem elementos repetidos
function findFirstOccurrence(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid; // Salva o índice encontrado
      right = mid - 1; // Mas continua procurando mais à ESQUERDA
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// ---- VARIAÇÃO: Encontrar a ÚLTIMA ocorrência ----
function findLastOccurrence(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      result = mid; // Salva o índice encontrado
      left = mid + 1; // Mas continua procurando mais à DIREITA
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  BINARY SEARCH (Busca Binária) ===\n");

const sortedArray = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72, 91];
console.log(`  Array ordenado: [${sortedArray.join(", ")}]\n`);

console.log("--- Busca Iterativa (procurando o 23) ---");
binarySearchIterative(sortedArray, 23);

console.log("--- Busca Iterativa (procurando o 99 - não existe) ---");
binarySearchIterative(sortedArray, 99);

console.log("--- Busca Recursiva ---");
const result = binarySearchRecursive(sortedArray, 45);
console.log(`  🔍 Recursiva: 45 encontrado no índice ${result}\n`);

console.log("--- Primeira e Última Ocorrência ---");
const repeated = [1, 2, 2, 2, 3, 4, 5];
console.log(`  Array: [${repeated.join(", ")}]`);
console.log(
  `  Primeira ocorrência de 2: índice ${findFirstOccurrence(repeated, 2)}`,
);
console.log(
  `  Última ocorrência de 2: índice ${findLastOccurrence(repeated, 2)}`,
);
