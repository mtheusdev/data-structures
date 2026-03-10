// ============================================
// 📚 DIJKSTRA (Menor Caminho em Grafos Ponderados)
// ============================================
// Encontra o MENOR CAMINHO de um vértice para TODOS os outros
// em um grafo com pesos NÃO NEGATIVOS nas arestas.
//
// Ideia central:
//   1. Começa do nó inicial com distância 0
//   2. Sempre escolhe o nó NÃO VISITADO com MENOR DISTÂNCIA
//   3. Atualiza as distâncias dos vizinhos
//   4. Marca o nó como visitado
//   5. Repete até visitar tudo
//
// 🧠 Complexidade:
//   Com fila de prioridade: O((V + E) * log V)
//   Sem fila de prioridade: O(V²)
//
// ⚠️ NÃO FUNCIONA com pesos negativos! Use Bellman-Ford.
//
// 💡 Usos no mundo real:
//   - GPS (Google Maps, Waze, Uber)
//   - Roteamento de rede (internet)
//   - Jogos (pathfinding)
// ============================================

// Usamos uma versão simplificada sem heap para maior clareza
function dijkstra(
  graph: Map<string, Array<{ node: string; weight: number }>>,
  startNode: string,
): { distances: Map<string, number>; previous: Map<string, string | null> } {
  // Distâncias de startNode para cada nó (começa com Infinity = infinito)
  const distances = new Map<string, number>();

  // De onde viemos para chegar em cada nó (para reconstruir o caminho)
  const previous = new Map<string, string | null>();

  // Set de nós já visitados
  const visited = new Set<string>();

  // Inicializa todas as distâncias como infinito
  for (const vertex of graph.keys()) {
    distances.set(vertex, Infinity);
    previous.set(vertex, null);
  }

  // A distância do nó inicial para ele mesmo é 0
  distances.set(startNode, 0);

  console.log(`  🏁 Iniciando Dijkstra a partir de "${startNode}"\n`);

  // Repete até visitar todos os nós
  while (visited.size < graph.size) {
    // Encontra o nó NÃO VISITADO com MENOR distância
    let currentNode: string | null = null;
    let smallestDistance = Infinity;

    for (const [node, distance] of distances) {
      if (!visited.has(node) && distance < smallestDistance) {
        smallestDistance = distance;
        currentNode = node;
      }
    }

    // Se não encontrou nenhum nó acessível, para
    if (currentNode === null) break;

    visited.add(currentNode);
    console.log(
      `  👁️  Visitando: "${currentNode}" (distância: ${smallestDistance})`,
    );

    // Para cada vizinho do nó atual
    const neighbors = graph.get(currentNode) || [];
    for (const neighbor of neighbors) {
      if (visited.has(neighbor.node)) continue;

      // Calcula a nova distância passando pelo nó atual
      const newDistance = smallestDistance + neighbor.weight;

      // Se a nova distância é MENOR que a conhecida, atualiza!
      const currentBest = distances.get(neighbor.node)!;
      if (newDistance < currentBest) {
        distances.set(neighbor.node, newDistance);
        previous.set(neighbor.node, currentNode);
        console.log(
          `    📐 "${neighbor.node}": ${currentBest === Infinity ? "∞" : currentBest} → ${newDistance} ` +
            `(via "${currentNode}", aresta: ${neighbor.weight})`,
        );
      }
    }
    console.log("");
  }

  return { distances, previous };
}

// ---- Reconstruir o caminho ----
function reconstructPath(
  previous: Map<string, string | null>,
  target: string,
): string[] {
  const path: string[] = [];
  let current: string | null = target;

  while (current !== null) {
    path.push(current);
    current = previous.get(current) || null;
  }

  return path.reverse();
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  DIJKSTRA (Menor Caminho) ===\n");

// Criando o grafo ponderado
//
//     A --4-- B --2-- E
//     |       |       |
//     1       3       6
//     |       |       |
//     C --2-- D --1-- F
//
const graph = new Map<string, Array<{ node: string; weight: number }>>();
graph.set("A", [
  { node: "B", weight: 4 },
  { node: "C", weight: 1 },
]);
graph.set("B", [
  { node: "A", weight: 4 },
  { node: "D", weight: 3 },
  { node: "E", weight: 2 },
]);
graph.set("C", [
  { node: "A", weight: 1 },
  { node: "D", weight: 2 },
]);
graph.set("D", [
  { node: "C", weight: 2 },
  { node: "B", weight: 3 },
  { node: "F", weight: 1 },
]);
graph.set("E", [
  { node: "B", weight: 2 },
  { node: "F", weight: 6 },
]);
graph.set("F", [
  { node: "D", weight: 1 },
  { node: "E", weight: 6 },
]);

console.log("  Grafo:");
console.log("     A --4-- B --2-- E");
console.log("     |       |       |");
console.log("     1       3       6");
console.log("     |       |       |");
console.log("     C --2-- D --1-- F\n");

const { distances, previous } = dijkstra(graph, "A");

console.log("--- Resultado Final ---");
console.log("\n  📊 Distâncias mínimas a partir de A:");
for (const [node, distance] of distances) {
  const path = reconstructPath(previous, node);
  console.log(
    `    A → ${node}: distância ${distance} | caminho: ${path.join(" → ")}`,
  );
}
