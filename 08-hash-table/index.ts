// ============================================
// 📚 HASH TABLE (Tabela Hash)
// ============================================
// Uma estrutura que mapeia CHAVES → VALORES com acesso quase instantâneo.
// O Map() do JavaScript É uma Hash Table por baixo dos panos!
// Aqui implementamos uma do zero para entender como funciona.
//
// Conceito:
//   1. Pega a chave (ex: "nome")
//   2. Passa por uma FUNÇÃO HASH que transforma a string num número
//   3. Usa esse número como índice de um array
//   4. Guarda o valor naquela posição do array
//
// ⚠️ COLISÕES: Quando dois valores caem no mesmo índice.
//   Solução: "Chaining" (cada posição guarda uma LISTA de pares)
//
// 🧠 Complexidade:
//   set()    → O(1) amortizado
//   get()    → O(1) amortizado
//   delete() → O(1) amortizado
//   ⚠️ Pior caso (muitas colisões): O(n)
//
// 💡 Usos no mundo real:
//   - Dicionários / Objetos em JavaScript
//   - Caches
//   - Contagem de frequência de elementos
//   - Detecção de duplicatas
// ============================================

class HashTable<V> {
  // Cada posição do "buckets" guarda uma lista de pares [chave, valor]
  private buckets: Array<Array<[string, V]>>;
  private capacity: number;
  private count: number;

  constructor(capacity: number = 16) {
    this.capacity = capacity;
    this.count = 0;
    // Cria o array com "baldes" vazios
    this.buckets = new Array(capacity).fill(null).map(() => []);
  }

  // ---- FUNÇÃO HASH ----
  // Transforma uma string em um número (índice do bucket)
  // Pega cada caractere, multiplica por um primo e soma tudo
  private hash(key: string): number {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      // charCodeAt() retorna o código ASCII do caractere
      // O primo 31 ajuda a distribuir melhor os valores
      hashValue = (hashValue * 31 + key.charCodeAt(i)) % this.capacity;
    }
    return hashValue;
  }

  // ---- INSERIR / ATUALIZAR ----
  set(key: string, value: V): void {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // Verifica se a chave já existe no bucket (para atualizar)
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Atualiza o valor
        console.log(`  🔄 Update: "${key}" = ${value} (bucket ${index})`);
        return;
      }
    }

    // Se não existe, adiciona um novo par
    bucket.push([key, value]);
    this.count++;
    console.log(`  ✅ Set: "${key}" = ${value} (bucket ${index})`);

    // Se houver colisão (mais de 1 par no bucket), avisa!
    if (bucket.length > 1) {
      console.log(
        `    ⚠️  Colisão! Bucket ${index} agora tem ${bucket.length} itens`,
      );
    }
  }

  // ---- BUSCAR ----
  get(key: string): V | undefined {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }

    return undefined;
  }

  // ---- DELETAR ----
  delete(key: string): boolean {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.count--;
        console.log(`  🗑️  Delete: "${key}" removido (bucket ${index})`);
        return true;
      }
    }

    return false;
  }

  // ---- VERIFICAR EXISTÊNCIA ----
  has(key: string): boolean {
    return this.get(key) !== undefined;
  }

  // Retorna todas as chaves
  keys(): string[] {
    const allKeys: string[] = [];
    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        allKeys.push(pair[0]);
      }
    }
    return allKeys;
  }

  // Retorna todos os valores
  values(): V[] {
    const allValues: V[] = [];
    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        allValues.push(pair[1]);
      }
    }
    return allValues;
  }

  size(): number {
    return this.count;
  }

  // Mostra o estado interno dos buckets
  print(): void {
    console.log(
      `\n  📦 Hash Table (${this.count} itens, ${this.capacity} buckets):`,
    );
    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i].length > 0) {
        const items = this.buckets[i]
          .map((pair) => `"${pair[0]}" → ${pair[1]}`)
          .join(", ");
        console.log(`    [${i}]: ${items}`);
      }
    }
  }
}

// ============================================
// 🧪 EXEMPLO PRÁTICO: Contagem de Frequência de Palavras
// ============================================
function wordFrequency(text: string): void {
  const table = new HashTable<number>(8);
  const words = text.toLowerCase().split(/\s+/);

  for (const word of words) {
    const count = table.get(word);
    if (count === undefined) {
      table.set(word, 1);
    } else {
      table.set(word, count + 1);
    }
  }

  console.log("\n  📊 Frequência das palavras:");
  for (const key of table.keys()) {
    console.log(`    "${key}" apareceu ${table.get(key)} vez(es)`);
  }
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  HASH TABLE (Tabela Hash) ===\n");

console.log("--- Operações Básicas ---");
const ht = new HashTable<string>(8);
ht.set("nome", "Matheus");
ht.set("idade", "25");
ht.set("cidade", "São Paulo");
ht.set("linguagem", "TypeScript");
ht.print();

console.log(`\n  🔍 Buscar "nome": ${ht.get("nome")}`);
console.log(`  🔍 Buscar "salário": ${ht.get("salário")}`);
console.log(`  ❓ Tem "cidade"? ${ht.has("cidade")}`);

console.log("\n--- Atualizar e Deletar ---");
ht.set("idade", "26");
ht.delete("cidade");
ht.print();

console.log("\n--- Contagem de Frequência ---");
wordFrequency("o gato viu o rato e o rato viu o gato");
