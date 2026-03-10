// ============================================
// 📚 BFS (Breadth-First Search - Busca em Largura)
// ============================================
// Explora o grafo "camada por camada", como ondas na água.
// Primeiro visita todos os vizinhos diretos, depois os vizinhos dos vizinhos...
//
// Usa uma FILA (Queue) para controlar a ordem de visita.
//
// 🧠 Complexidade:
//   Tempo:  O(V + E) onde V = vértices e E = arestas
//   Espaço: O(V) para o Set de visitados e a fila
//
// 💡 Quando usar:
//   - Encontrar o MENOR CAMINHO (em grafos sem peso)
//   - Explorar todos os nós "nível por nível"
//   - Verificar se dois nós estão conectados
//   - Problemas de "distância mínima"
// ============================================

// ---- BFS em Grafo (usando lista de adjacência simples) ----
function bfs(graph: Map<string, string[]>, startNode: string): string[] {
  const visited = new Set<string>(); // Controla quem já foi visitado
  const queue: string[] = []; // Fila de nós para visitar
  const result: string[] = []; // Ordem em que os nós foram visitados

  // Começa colocando o nó inicial na fila
  queue.push(startNode);
  visited.add(startNode);

  while (queue.length > 0) {
    // Remove o PRIMEIRO da fila (FIFO)
    const currentNode = queue.shift()!;
    result.push(currentNode);

    console.log(`  👁️  Visitando: ${currentNode}`);

    // Pega todos os vizinhos do nó atual
    const neighbors = graph.get(currentNode) || [];

    for (const neighbor of neighbors) {
      // Só adiciona na fila se AINDA NÃO foi visitado
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        console.log(`    📥 Adicionando "${neighbor}" na fila`);
      }
    }

    console.log(`    📋 Fila atual: [${queue.join(", ")}]`);
  }

  return result;
}

// ---- BFS para encontrar o MENOR CAMINHO ----
function bfsShortestPath(
  graph: Map<string, string[]>,
  start: string,
  target: string,
): string[] | null {
  const visited = new Set<string>();
  const queue: string[] = [];

  // Guarda de onde cada nó veio (para reconstruir o caminho)
  const parent = new Map<string, string | null>();

  queue.push(start);
  visited.add(start);
  parent.set(start, null);

  while (queue.length > 0) {
    const current = queue.shift()!;

    // Encontrou o alvo!
    if (current === target) {
      // Reconstroi o caminho de trás pra frente
      const path: string[] = [];
      let node: string | null = target;
      while (node !== null) {
        path.push(node);
        node = parent.get(node) || null;
      }
      return path.reverse();
    }

    const neighbors = graph.get(current) || [];
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        parent.set(neighbor, current);
        queue.push(neighbor);
      }
    }
  }

  return null; // Caminho não encontrado
}

// ---- BFS em Matriz (Grid) ----
// Muito comum no LeetCode! Ex: "Number of Islands"
function bfsGrid(grid: number[][], startRow: number, startCol: number): void {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set<string>();

  // Direções: cima, baixo, esquerda, direita
  const directions = [
    [-1, 0], // cima
    [1, 0], // baixo
    [0, -1], // esquerda
    [0, 1], // direita
  ];

  const queue: [number, number][] = [[startRow, startCol]];
  visited.add(`${startRow},${startCol}`);

  console.log(`\n  🗺️  BFS no Grid (começando em [${startRow},${startCol}]):`);

  while (queue.length > 0) {
    const [row, col] = queue.shift()!;
    console.log(`    Visitando [${row},${col}] = ${grid[row][col]}`);

    for (const [dirRow, dirCol] of directions) {
      const newRow = row + dirRow;
      const newCol = col + dirCol;
      const key = `${newRow},${newCol}`;

      // Verifica se está dentro dos limites, não foi visitado e o valor é 1
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited.has(key) &&
        grid[newRow][newCol] === 1
      ) {
        visited.add(key);
        queue.push([newRow, newCol]);
      }
    }
  }
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  BFS (Busca em Largura) ===\n");

// Montando o grafo
//     A --- B --- E
//     |     |
//     C --- D --- F
const graph = new Map<string, string[]>();
graph.set("A", ["B", "C"]);
graph.set("B", ["A", "D", "E"]);
graph.set("C", ["A", "D"]);
graph.set("D", ["B", "C", "F"]);
graph.set("E", ["B"]);
graph.set("F", ["D"]);

console.log("--- BFS a partir de A ---");
const order = bfs(graph, "A");
console.log(`\n  📊 Ordem de visita: ${order.join(" → ")}\n`);

console.log("--- Menor Caminho (A → F) ---");
const path = bfsShortestPath(graph, "A", "F");
if (path) {
  console.log(
    `  🛤️  Caminho: ${path.join(" → ")} (${path.length - 1} passos)\n`,
  );
}

console.log("--- BFS em Grid (Matriz) ---");
const grid = [
  [1, 1, 0, 0],
  [1, 1, 0, 1],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
];
console.log("  Grid:");
for (const row of grid) {
  console.log(`    [${row.join(", ")}]`);
}
bfsGrid(grid, 0, 0);
