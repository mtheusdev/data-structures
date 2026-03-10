// ============================================
// 📚 GRAPH (Grafo) - Representação com Lista de Adjacência
// ============================================
// Um Grafo é um conjunto de VÉRTICES (nós) conectados por ARESTAS (ligações).
// É a estrutura mais flexível e poderosa para representar relações.
//
// Tipos:
//   - Dirigido: A → B (mão única, A aponta para B mas B não aponta para A)
//   - Não-Dirigido: A ↔ B (mão dupla, ambos se conectam)
//   - Ponderado: cada aresta tem um "peso" (custo/distância)
//
// Representações:
//   1. Matriz de Adjacência: array 2D (bom quando tem muitas arestas)
//   2. Lista de Adjacência:  Map<nó, vizinhos[]> (bom quando tem poucas arestas) ← usamos essa!
//
// 🧠 Complexidade (Lista de Adjacência):
//   addVertex()  → O(1)
//   addEdge()    → O(1)
//   removeEdge() → O(E) onde E = arestas do vértice
//   hasEdge()    → O(E)
//
// 💡 Usos no mundo real:
//   - Redes sociais (quem segue quem)
//   - GPS / Mapas (cidades e estradas)
//   - Internet (roteamento de dados)
//   - Recomendações (produtos relacionados)
// ============================================

class Graph {
  // Map onde a chave é o nome do vértice e o valor é a lista de vizinhos
  private adjacencyList: Map<string, Array<{ node: string; weight: number }>>;
  private directed: boolean;

  constructor(directed: boolean = false) {
    this.adjacencyList = new Map();
    this.directed = directed;
  }

  // Adiciona um vértice (nó) ao grafo
  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
      console.log(`  ✅ Vértice "${vertex}" adicionado`);
    }
  }

  // Adiciona uma aresta (ligação) entre dois vértices
  addEdge(vertex1: string, vertex2: string, weight: number = 1): void {
    // Cria os vértices se ainda não existirem
    if (!this.adjacencyList.has(vertex1)) this.addVertex(vertex1);
    if (!this.adjacencyList.has(vertex2)) this.addVertex(vertex2);

    // Adiciona vertex2 como vizinho de vertex1
    this.adjacencyList.get(vertex1)!.push({ node: vertex2, weight });

    // Se o grafo NÃO for dirigido, a ligação é nos dois sentidos
    if (!this.directed) {
      this.adjacencyList.get(vertex2)!.push({ node: vertex1, weight });
    }

    const arrow = this.directed ? "→" : "↔";
    const weightLabel = weight !== 1 ? ` (peso: ${weight})` : "";
    console.log(
      `  🔗 Aresta: "${vertex1}" ${arrow} "${vertex2}"${weightLabel}`,
    );
  }

  // Remove uma aresta entre dois vértices
  removeEdge(vertex1: string, vertex2: string): void {
    const list1 = this.adjacencyList.get(vertex1);
    if (list1) {
      this.adjacencyList.set(
        vertex1,
        list1.filter((neighbor) => neighbor.node !== vertex2),
      );
    }

    if (!this.directed) {
      const list2 = this.adjacencyList.get(vertex2);
      if (list2) {
        this.adjacencyList.set(
          vertex2,
          list2.filter((neighbor) => neighbor.node !== vertex1),
        );
      }
    }
    console.log(`  🗑️  Aresta removida: "${vertex1}" - "${vertex2}"`);
  }

  // Verifica se existe uma aresta entre dois vértices
  hasEdge(vertex1: string, vertex2: string): boolean {
    const neighbors = this.adjacencyList.get(vertex1);
    if (!neighbors) return false;
    return neighbors.some((neighbor) => neighbor.node === vertex2);
  }

  // Retorna os vizinhos de um vértice
  getNeighbors(vertex: string): Array<{ node: string; weight: number }> {
    return this.adjacencyList.get(vertex) || [];
  }

  // Retorna todos os vértices
  getVertices(): string[] {
    return Array.from(this.adjacencyList.keys());
  }

  // Retorna a lista de adjacência (para BFS, DFS, Dijkstra usarem)
  getAdjacencyList(): Map<string, Array<{ node: string; weight: number }>> {
    return this.adjacencyList;
  }

  // Mostra o grafo de forma visual
  print(): void {
    const type = this.directed ? "Dirigido" : "Não-Dirigido";
    console.log(`\n  📦 Grafo (${type}):`);
    for (const [vertex, neighbors] of this.adjacencyList) {
      const arrow = this.directed ? "→" : "↔";
      const neighborNames = neighbors
        .map((n) => (n.weight !== 1 ? `${n.node}(${n.weight})` : n.node))
        .join(", ");
      console.log(`    ${vertex} ${arrow} [${neighborNames}]`);
    }
  }
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  GRAPH (Grafo) ===\n");

console.log("--- Grafo Não-Dirigido (rede de amigos) ---");
const friendsGraph = new Graph(false);
friendsGraph.addEdge("Alice", "Bob");
friendsGraph.addEdge("Alice", "Carol");
friendsGraph.addEdge("Bob", "David");
friendsGraph.addEdge("Carol", "David");
friendsGraph.addEdge("David", "Eve");
friendsGraph.print();

console.log(
  `\n  🔍 Alice conhece Bob? ${friendsGraph.hasEdge("Alice", "Bob") ? "Sim ✅" : "Não ❌"}`,
);
console.log(
  `  🔍 Alice conhece Eve? ${friendsGraph.hasEdge("Alice", "Eve") ? "Sim ✅" : "Não ❌"}`,
);
console.log(
  `  👥 Vizinhos de David: ${friendsGraph
    .getNeighbors("David")
    .map((n) => n.node)
    .join(", ")}`,
);

console.log("\n--- Grafo Dirigido e Ponderado (mapa de cidades) ---");
const cityGraph = new Graph(true);
cityGraph.addEdge("SP", "RJ", 430);
cityGraph.addEdge("SP", "BH", 585);
cityGraph.addEdge("RJ", "BH", 440);
cityGraph.addEdge("BH", "Brasília", 735);
cityGraph.addEdge("SP", "Brasília", 1015);
cityGraph.print();

// Exportamos a classe para ser usada no BFS, DFS, Dijkstra...
export { Graph };
