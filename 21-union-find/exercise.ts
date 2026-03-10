export {};

// ============================================
// 🏋️ EXERCÍCIO: Implemente Union-Find
// ============================================
// Rode: npx tsx data-structures/21-union-find/exercise.ts
// ============================================

class UnionFind {
  private parent: number[];
  private rank: number[];
  private count: number;

  // TODO: Inicializa cada elemento como seu próprio líder
  // 💡 Dica: parent[i] = i, rank[i] = 0, count = size
  constructor(size: number) {
    this.parent = new Array(size);
    this.rank = new Array(size);
    this.count = size;
    // Sua implementação aqui
  }

  // TODO: Encontra o LÍDER do conjunto de x (com Path Compression)
  // 💡 Dica: Se parent[x] !== x, faça parent[x] = find(parent[x]) recursivamente
  find(x: number): number {
    return x;
  }

  // TODO: Junta os conjuntos de x e y (com Union by Rank)
  // 💡 Dica: Encontre os líderes. Se iguais, retorna false. Senão, o menor rank vai sob o maior.
  union(x: number, y: number): boolean {
    return false;
  }

  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }

  getCount(): number {
    return this.count;
  }
}

// ============================================
// ✅ TESTES
// ============================================
let passed = 0;
let failed = 0;
function test(n: string, a: any, e: any) {
  const p = JSON.stringify(a) === JSON.stringify(e);
  if (p) {
    console.log(`  ✅ ${n}`);
    passed++;
  } else {
    console.log(
      `  ❌ ${n}\n     Esperado: ${JSON.stringify(e)}\n     Recebido: ${JSON.stringify(a)}`,
    );
    failed++;
  }
}

console.log("=== 🏋️ TESTES: Union-Find ===\n");
const uf = new UnionFind(7);
test("Começa com 7 conjuntos", uf.getCount(), 7);

uf.union(0, 1);
uf.union(2, 3);
test("Após 2 unions: 5 conjuntos", uf.getCount(), 5);

test("0 e 1 conectados", uf.connected(0, 1), true);
test("2 e 3 conectados", uf.connected(2, 3), true);
test("0 e 2 NÃO conectados", uf.connected(0, 2), false);

uf.union(1, 3); // junta {0,1} com {2,3}
test("Após juntar: 0 e 3 conectados", uf.connected(0, 3), true);
test("4 conjuntos restantes", uf.getCount(), 4);

uf.union(4, 5);
uf.union(5, 6);
test("4, 5, 6 todos conectados", uf.connected(4, 6), true);
test("2 conjuntos restantes", uf.getCount(), 2);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO!");
