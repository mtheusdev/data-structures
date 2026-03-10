// ============================================
// 📚 UNION-FIND (Disjoint Set / Conjunto Disjunto)
// ============================================
// Estrutura para agrupar elementos em CONJUNTOS e rapidamente
// responder: "Esses dois elementos estão no MESMO conjunto?"
//
// Duas operações:
//   find(x)    → Descobre a qual conjunto x pertence (retorna o "líder")
//   union(x,y) → Junta os conjuntos de x e y
//
// Otimizações:
//   1. Path Compression: ao fazer find(), faz os nós apontarem direto pro líder
//   2. Union by Rank: ao unir, o menor conjunto vai pra baixo do maior
//
// 🧠 Complexidade (com ambas otimizações):
//   find()  → O(α(n)) ≈ O(1) amortizado (quase constante!)
//   union() → O(α(n)) ≈ O(1) amortizado
//
// 💡 Usos:
//   - Number of Islands (variante)
//   - Kruskal's MST (Árvore Geradora Mínima)
//   - Detectar ciclos em grafos não-dirigidos
//   - Connected Components
// ============================================

class UnionFind {
  private parent: number[]; // parent[i] = pai do nó i
  private rank: number[]; // rank[i] = altura estimada da árvore do nó i
  private count: number; // Número de conjuntos distintos

  constructor(size: number) {
    this.parent = new Array(size);
    this.rank = new Array(size);
    this.count = size;

    // Inicialmente, cada elemento é seu próprio líder (conjunto de 1)
    for (let i = 0; i < size; i++) {
      this.parent[i] = i; // Cada um aponta para si mesmo
      this.rank[i] = 0;
    }
  }

  // ---- FIND (com Path Compression) ----
  // Encontra o LÍDER (raiz) do conjunto de x
  // Path Compression: faz todos os nós no caminho apontarem direto pro líder
  find(x: number): number {
    if (this.parent[x] !== x) {
      // Recursivamente encontra o líder e ACHATA o caminho
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  // ---- UNION (por Rank) ----
  // Junta os conjuntos de x e y
  // Union by Rank: o conjunto menor vai pra baixo do maior
  union(x: number, y: number): boolean {
    const rootX = this.find(x);
    const rootY = this.find(y);

    // Já estão no mesmo conjunto!
    if (rootX === rootY) {
      console.log(`  ℹ️  ${x} e ${y} já estão no mesmo grupo`);
      return false;
    }

    // O de menor rank vai pra baixo do de maior rank
    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      // Mesmo rank: escolhe um e aumenta o rank dele
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }

    this.count--; // Um conjunto a menos!
    console.log(
      `  🔗 Union(${x}, ${y}): juntou grupo ${rootX} com ${rootY} → ${this.count} grupos restantes`,
    );
    return true;
  }

  // Verifica se x e y estão no mesmo conjunto
  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }

  // Retorna o número de conjuntos distintos
  getCount(): number {
    return this.count;
  }

  // Mostra os conjuntos
  print(): void {
    const groups = new Map<number, number[]>();
    for (let i = 0; i < this.parent.length; i++) {
      const root = this.find(i);
      if (!groups.has(root)) groups.set(root, []);
      groups.get(root)!.push(i);
    }
    console.log(`\n  📦 ${this.count} conjuntos:`);
    for (const [root, members] of groups) {
      console.log(`    Líder ${root}: {${members.join(", ")}}`);
    }
  }
}

// ============================================
// 🧪 EXEMPLO: Number of Connected Components
// ============================================
function numberOfComponents(n: number, edges: [number, number][]): number {
  const uf = new UnionFind(n);
  for (const [a, b] of edges) {
    uf.union(a, b);
  }
  return uf.getCount();
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  UNION-FIND (Conjunto Disjunto) ===\n");

console.log("--- Operações Básicas (0 a 6) ---");
const uf = new UnionFind(7);
uf.union(0, 1);
uf.union(2, 3);
uf.union(4, 5);
uf.union(1, 3); // Junta {0,1} com {2,3}
uf.union(5, 6);
uf.print();

console.log(
  `\n  🔍 0 e 3 conectados? ${uf.connected(0, 3) ? "Sim ✅" : "Não ❌"}`,
);
console.log(
  `  🔍 0 e 4 conectados? ${uf.connected(0, 4) ? "Sim ✅" : "Não ❌"}`,
);

console.log("\n--- Connected Components ---");
const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [3, 4],
];
console.log(`  5 nós, arestas: ${JSON.stringify(edges)}`);
console.log(`  ✅ Componentes conectados: ${numberOfComponents(5, edges)}`);
// Resultado: 3 (grupo {0,1,2}, grupo {3,4}, nó 4 sozinho... ops, {3,4} e {5 não existe aqui})
