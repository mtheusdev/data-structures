export {};

// ============================================
// 🏋️ EXERCÍCIO: Implemente uma Hash Table
// ============================================
// Rode: npx tsx data-structures/08-hash-table/exercise.ts
// ============================================

class HashTable<V> {
  private buckets: Array<Array<[string, V]>>;
  private capacity: number;
  private count: number;

  constructor(capacity: number = 16) {
    this.capacity = capacity;
    this.count = 0;
    this.buckets = new Array(capacity).fill(null).map(() => []);
  }

  // TODO: Função Hash — transforma string num índice
  // 💡 Dica: Para cada char, hashValue = (hashValue * 31 + charCodeAt(i)) % capacity
  private hash(key: string): number {
    return 0;
  }

  // TODO: Inserir ou atualizar um par chave-valor
  set(key: string, value: V): void {}

  // TODO: Buscar o valor pela chave
  get(key: string): V | undefined {
    return undefined;
  }

  // TODO: Verificar se a chave existe
  has(key: string): boolean {
    return false;
  }

  // TODO: Deletar um par chave-valor
  delete(key: string): boolean {
    return false;
  }

  size(): number {
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

console.log("=== 🏋️ TESTES: Hash Table ===\n");
const ht = new HashTable<string>(8);
ht.set("nome", "Matheus");
ht.set("idade", "25");
ht.set("cidade", "SP");

test("Get 'nome'", ht.get("nome"), "Matheus");
test("Get 'idade'", ht.get("idade"), "25");
test("Get inexistente", ht.get("salário"), undefined);
test("Has 'cidade'", ht.has("cidade"), true);
test("Has 'país'", ht.has("país"), false);
test("Tamanho é 3", ht.size(), 3);

ht.set("idade", "26"); // Atualizar
test("Update: idade agora é 26", ht.get("idade"), "26");
test("Tamanho continua 3", ht.size(), 3);

ht.delete("cidade");
test("Após delete: has 'cidade'", ht.has("cidade"), false);
test("Tamanho é 2", ht.size(), 2);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO!");
