// ============================================
// 📚 BELLMAN-FORD (Menor Caminho com Pesos Negativos)
// ============================================
// Assim como o Dijkstra, encontra o menor caminho de um nó para todos.
// MAS ele funciona com PESOS NEGATIVOS!
// E também detecta CICLOS NEGATIVOS (loops infinitos de redução).
//
// Ideia central:
//   Relaxa TODAS as arestas (V - 1) vezes.
//   "Relaxar" = verificar se passar por essa aresta melhora a distância.
//   Após (V-1) iterações, se ainda conseguir melhorar, há ciclo negativo.
//
// 🧠 Complexidade:
//   Tempo:  O(V * E) — mais lento que Dijkstra
//   Espaço: O(V)
//
// 💡 Quando usar:
//   - Quando o grafo tem pesos NEGATIVOS
//   - Quando precisa detectar CICLOS NEGATIVOS
//   - Roteamento de rede (protocolo RIP)
// ============================================

// Representamos arestas como uma lista simples
interface Edge {
  from: string;
  to: string;
  weight: number;
}

function bellmanFord(
  vertices: string[],
  edges: Edge[],
  startNode: string,
): {
  distances: Map<string, number>;
  previous: Map<string, string | null>;
  hasNegativeCycle: boolean;
} {
  // Inicializa as distâncias
  const distances = new Map<string, number>();
  const previous = new Map<string, string | null>();

  for (const vertex of vertices) {
    distances.set(vertex, Infinity);
    previous.set(vertex, null);
  }
  distances.set(startNode, 0);

  console.log(`  🏁 Iniciando Bellman-Ford a partir de "${startNode}"\n`);

  // ---- RELAXAMENTO: repete (V - 1) vezes ----
  // Por que V-1? Porque o maior caminho sem ciclo tem no máximo V-1 arestas.
  for (let i = 1; i < vertices.length; i++) {
    console.log(`  --- Iteração ${i} de ${vertices.length - 1} ---`);
    let updated = false;

    // Para CADA aresta do grafo
    for (const edge of edges) {
      const distFrom = distances.get(edge.from)!;

      // Se a origem é acessível e descobrimos um caminho mais curto
      if (distFrom !== Infinity) {
        const newDist = distFrom + edge.weight;
        const currentDist = distances.get(edge.to)!;

        if (newDist < currentDist) {
          distances.set(edge.to, newDist);
          previous.set(edge.to, edge.from);
          updated = true;
          console.log(
            `    📐 "${edge.to}": ${currentDist === Infinity ? "∞" : currentDist} → ${newDist} ` +
              `(via "${edge.from}", aresta: ${edge.weight})`,
          );
        }
      }
    }

    // Se nenhuma distância foi atualizada, já convergiu!
    if (!updated) {
      console.log(`    ✅ Nenhuma atualização! Convergiu cedo.\n`);
      break;
    }
    console.log("");
  }

  // ---- DETECÇÃO DE CICLO NEGATIVO ----
  // Se AINDA conseguir melhorar após V-1 iterações, existe ciclo negativo
  let hasNegativeCycle = false;
  for (const edge of edges) {
    const distFrom = distances.get(edge.from)!;
    if (distFrom !== Infinity) {
      const newDist = distFrom + edge.weight;
      if (newDist < distances.get(edge.to)!) {
        hasNegativeCycle = true;
        console.log(
          `  🔄 CICLO NEGATIVO detectado na aresta "${edge.from}" → "${edge.to}"!`,
        );
        break;
      }
    }
  }

  if (!hasNegativeCycle) {
    console.log("  ✅ Nenhum ciclo negativo detectado.\n");
  }

  return { distances, previous, hasNegativeCycle };
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
console.log("=== 🏗️  BELLMAN-FORD (Menor Caminho com Pesos Negativos) ===\n");

// ---- Teste 1: Grafo com peso negativo (sem ciclo negativo) ----
console.log("--- Teste 1: Grafo com aresta negativa ---\n");
console.log("  Grafo:");
console.log("     A --6-→ B --(-2)-→ D");
console.log("     |       ↑          ↑");
console.log("     4       5          3");
console.log("     ↓       |          |");
console.log("     C ------+    E ----+");
console.log("     |");
console.log("     +--(-3)-→ E\n");

const vertices1 = ["A", "B", "C", "D", "E"];
const edges1: Edge[] = [
  { from: "A", to: "B", weight: 6 },
  { from: "A", to: "C", weight: 4 },
  { from: "C", to: "B", weight: 5 },
  { from: "C", to: "E", weight: -3 },
  { from: "B", to: "D", weight: -2 },
  { from: "E", to: "D", weight: 3 },
];

const result1 = bellmanFord(vertices1, edges1, "A");

console.log("  📊 Distâncias mínimas a partir de A:");
for (const [node, distance] of result1.distances) {
  const path = reconstructPath(result1.previous, node);
  console.log(
    `    A → ${node}: distância ${distance} | caminho: ${path.join(" → ")}`,
  );
}

// ---- Teste 2: Grafo COM ciclo negativo ----
console.log("\n\n--- Teste 2: Grafo COM ciclo negativo ---\n");
console.log("  Grafo: A → B(1) → C(-1) → A(-1) (ciclo infinito!)\n");

const vertices2 = ["A", "B", "C"];
const edges2: Edge[] = [
  { from: "A", to: "B", weight: 1 },
  { from: "B", to: "C", weight: -1 },
  { from: "C", to: "A", weight: -1 }, // Ciclo: 1 + (-1) + (-1) = -1 (fica cada vez menor)
];

const result2 = bellmanFord(vertices2, edges2, "A");
console.log(
  `\n  Tem ciclo negativo? ${result2.hasNegativeCycle ? "SIM 🔄" : "NÃO ✅"}`,
);
