// ============================================
// 📚 TOPOLOGICAL SORT (Ordenação Topológica)
// ============================================
// Ordena vértices de um grafo DIRIGIDO de forma que,
// se existe aresta A → B, então A aparece ANTES de B.
//
// Pense em DEPENDÊNCIAS:
//   "Para fazer B, preciso fazer A primeiro"
//   Resultado: A vem antes de B na lista
//
// Funciona APENAS em DAGs (Directed Acyclic Graphs)
// Se o grafo tem CICLO, não existe ordenação topológica!
//
// Dois métodos:
//   1. BFS (Kahn's Algorithm) — usa grau de entrada
//   2. DFS — usa pilha de pós-visita
//
// 🧠 Complexidade: O(V + E)
//
// 💡 Usos:
//   - Ordem de compilação de módulos
//   - Resolução de dependências (npm, Maven)
//   - Scheduling de tarefas
//   - Ordem de cursos (pré-requisitos)
// ============================================

// ---- MÉTODO 1: BFS (Kahn's Algorithm) ----
function topologicalSortBFS(
  numNodes: number,
  edges: [number, number][], // [A, B] significa A → B (A é pré-requisito de B)
): number[] | null {
  // Monta o grafo e calcula o "grau de entrada" de cada nó
  // Grau de entrada = quantas arestas CHEGAM no nó
  const graph = new Map<number, number[]>();
  const inDegree = new Array(numNodes).fill(0);

  for (let i = 0; i < numNodes; i++) {
    graph.set(i, []);
  }

  for (const [from, to] of edges) {
    graph.get(from)!.push(to);
    inDegree[to]++;
  }

  console.log(`  Graus de entrada: [${inDegree.join(", ")}]`);

  // Coloca na fila todos os nós com grau de entrada 0
  // (nós que não têm pré-requisitos)
  const queue: number[] = [];
  for (let i = 0; i < numNodes; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  const result: number[] = [];

  while (queue.length > 0) {
    const node = queue.shift()!;
    result.push(node);
    console.log(`  📤 Processando nó ${node}`);

    // Para cada vizinho, "remove" a aresta (reduz grau de entrada)
    for (const neighbor of graph.get(node)!) {
      inDegree[neighbor]--;
      console.log(
        `    Grau de ${neighbor} diminuiu para ${inDegree[neighbor]}`,
      );

      // Se o grau chegou a 0, todos os pré-requisitos foram cumpridos!
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
        console.log(`    ✅ ${neighbor} liberado (grau 0)!`);
      }
    }
  }

  // Se não processamos todos os nós, tem ciclo!
  if (result.length !== numNodes) {
    console.log("  ❌ CICLO detectado! Não é possível ordenar.");
    return null;
  }

  return result;
}

// ---- MÉTODO 2: DFS ----
function topologicalSortDFS(
  numNodes: number,
  edges: [number, number][],
): number[] | null {
  const graph = new Map<number, number[]>();
  for (let i = 0; i < numNodes; i++) {
    graph.set(i, []);
  }
  for (const [from, to] of edges) {
    graph.get(from)!.push(to);
  }

  const visited = new Set<number>();
  const inStack = new Set<number>(); // Para detectar ciclos
  const result: number[] = [];
  let hasCycle = false;

  function dfs(node: number): void {
    if (hasCycle) return;

    visited.add(node);
    inStack.add(node);

    for (const neighbor of graph.get(node)!) {
      if (inStack.has(neighbor)) {
        hasCycle = true;
        return;
      }
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    inStack.delete(node);
    result.push(node); // Adiciona DEPOIS de processar todos os vizinhos
  }

  for (let i = 0; i < numNodes; i++) {
    if (!visited.has(i)) {
      dfs(i);
    }
  }

  if (hasCycle) return null;
  return result.reverse(); // Inverte porque adicionamos na pós-visita
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  TOPOLOGICAL SORT (Ordenação Topológica) ===\n");

// Exemplo: Ordem de cursos
// 0="Matemática"  1="Física"  2="Programação"  3="Machine Learning"  4="Banco de Dados"  5="IA"
console.log("--- Exemplo: Pré-requisitos de cursos ---");
console.log(
  "  Cursos: 0=Matemática, 1=Física, 2=Programação, 3=ML, 4=BD, 5=IA",
);
console.log("  Pré-requisitos:");
const courseEdges: [number, number][] = [
  [0, 1], // Matemática → Física
  [0, 2], // Matemática → Programação
  [1, 3], // Física → ML
  [2, 3], // Programação → ML
  [2, 4], // Programação → BD
  [3, 5], // ML → IA
  [4, 5], // BD → IA
];
for (const [a, b] of courseEdges) {
  const names = ["Matemática", "Física", "Programação", "ML", "BD", "IA"];
  console.log(`    ${names[a]} → ${names[b]}`);
}

console.log("\n--- BFS (Kahn's Algorithm) ---");
const bfsResult = topologicalSortBFS(6, courseEdges);
if (bfsResult) {
  const names = ["Matemática", "Física", "Programação", "ML", "BD", "IA"];
  console.log(`\n  ✅ Ordem: ${bfsResult.map((i) => names[i]).join(" → ")}`);
}

console.log("\n--- DFS ---");
const dfsResult = topologicalSortDFS(6, courseEdges);
if (dfsResult) {
  const names = ["Matemática", "Física", "Programação", "ML", "BD", "IA"];
  console.log(`  ✅ Ordem: ${dfsResult.map((i) => names[i]).join(" → ")}`);
}

console.log("\n--- Grafo com CICLO (impossível ordenar) ---");
const cycleEdges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 0], // Ciclo!
];
const cycleResult = topologicalSortBFS(3, cycleEdges);
console.log(
  `  Resultado: ${cycleResult === null ? "Impossível (ciclo!) ❌" : cycleResult}`,
);
