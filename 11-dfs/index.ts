// ============================================
// 📚 DFS (Depth-First Search - Busca em Profundidade)
// ============================================
// Explora o grafo indo o mais FUNDO possível antes de voltar.
// Como entrar num labirinto: segue um caminho até o fundo,
// se não achar saída, volta e tenta outro.
//
// Pode ser feito com:
//   1. Recursão (a call stack do JavaScript funciona como pilha)
//   2. Pilha explícita (Stack)
//
// 🧠 Complexidade:
//   Tempo:  O(V + E) onde V = vértices e E = arestas
//   Espaço: O(V) para o Set de visitados
//
// 💡 Quando usar:
//   - Detectar CICLOS no grafo
//   - Encontrar TODOS os caminhos possíveis
//   - Topological Sort (ordenação de dependências)
//   - Verificar se o grafo está conectado
//   - Resolver labirintos
// ============================================

// ---- DFS RECURSIVO ----
function dfsRecursive(
  graph: Map<string, string[]>,
  startNode: string,
  visited: Set<string> = new Set(),
  result: string[] = [],
): string[] {
  // Marca como visitado
  visited.add(startNode);
  result.push(startNode);
  console.log(`  👁️  Visitando: ${startNode}`);

  // Para cada vizinho não visitado, mergulha mais fundo
  const neighbors = graph.get(startNode) || [];
  for (const neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      console.log(`    ⬇️  Mergulhando de "${startNode}" para "${neighbor}"`);
      dfsRecursive(graph, neighbor, visited, result);
      console.log(`    ⬆️  Voltando para "${startNode}"`);
    }
  }

  return result;
}

// ---- DFS ITERATIVO (com pilha explícita) ----
function dfsIterative(
  graph: Map<string, string[]>,
  startNode: string,
): string[] {
  const visited = new Set<string>();
  const stack: string[] = []; // Usamos uma pilha em vez de recursão
  const result: string[] = [];

  stack.push(startNode);

  while (stack.length > 0) {
    // Remove o ÚLTIMO da pilha (LIFO)
    const currentNode = stack.pop()!;

    if (visited.has(currentNode)) continue;

    visited.add(currentNode);
    result.push(currentNode);
    console.log(`  👁️  Visitando: ${currentNode}`);

    // Adiciona os vizinhos na pilha (em ordem reversa para manter a ordem natural)
    const neighbors = graph.get(currentNode) || [];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      if (!visited.has(neighbors[i])) {
        stack.push(neighbors[i]);
      }
    }
    console.log(`    📚 Pilha: [${stack.join(", ")}]`);
  }

  return result;
}

// ---- DFS: Detectar Ciclos (grafo dirigido) ----
function hasCycle(graph: Map<string, string[]>): boolean {
  const visited = new Set<string>();
  const inStack = new Set<string>(); // Nós no "caminho atual"

  function dfs(node: string): boolean {
    visited.add(node);
    inStack.add(node); // Marca que está no caminho atual

    const neighbors = graph.get(node) || [];
    for (const neighbor of neighbors) {
      // Se o vizinho está no caminho atual, é um ciclo!
      if (inStack.has(neighbor)) {
        console.log(
          `    🔄 Ciclo detectado: "${node}" → "${neighbor}" (já estava no caminho)`,
        );
        return true;
      }
      // Se ainda não foi visitado, mergulha
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) return true;
      }
    }

    inStack.delete(node); // Remove do caminho atual ao voltar
    return false;
  }

  // Tenta DFS a partir de cada nó (para grafos desconectados)
  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      if (dfs(node)) return true;
    }
  }

  return false;
}

// ---- DFS: Encontrar todos os caminhos entre dois nós ----
function findAllPaths(
  graph: Map<string, string[]>,
  start: string,
  target: string,
  currentPath: string[] = [],
  allPaths: string[][] = [],
): string[][] {
  currentPath.push(start);

  if (start === target) {
    // Encontrou um caminho! Salva uma cópia
    allPaths.push([...currentPath]);
  } else {
    const neighbors = graph.get(start) || [];
    for (const neighbor of neighbors) {
      // Evita revisitar nós do caminho atual (evita ciclos)
      if (!currentPath.includes(neighbor)) {
        findAllPaths(graph, neighbor, target, currentPath, allPaths);
      }
    }
  }

  // Backtrack: remove o último nó para explorar outros caminhos
  currentPath.pop();
  return allPaths;
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  DFS (Busca em Profundidade) ===\n");

// Montando o grafo
const graph = new Map<string, string[]>();
graph.set("A", ["B", "C"]);
graph.set("B", ["A", "D", "E"]);
graph.set("C", ["A", "F"]);
graph.set("D", ["B"]);
graph.set("E", ["B", "F"]);
graph.set("F", ["C", "E"]);

console.log("--- DFS Recursivo (a partir de A) ---");
const recursiveResult = dfsRecursive(graph, "A");
console.log(`  📊 Ordem: ${recursiveResult.join(" → ")}\n`);

console.log("--- DFS Iterativo (a partir de A) ---");
const iterativeResult = dfsIterative(graph, "A");
console.log(`  📊 Ordem: ${iterativeResult.join(" → ")}\n`);

console.log("--- Detectar Ciclos (grafo dirigido) ---");
const directedGraph = new Map<string, string[]>();
directedGraph.set("A", ["B"]);
directedGraph.set("B", ["C"]);
directedGraph.set("C", ["A"]); // Ciclo! C → A
directedGraph.set("D", []);
console.log(`  Grafo: A → B → C → A`);
console.log(`  Tem ciclo? ${hasCycle(directedGraph) ? "Sim 🔄" : "Não ✅"}\n`);

console.log("--- Todos os Caminhos (A → F) ---");
const paths = findAllPaths(graph, "A", "F");
for (const path of paths) {
  console.log(`  🛤️  ${path.join(" → ")}`);
}
