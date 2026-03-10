export {};

// ============================================
// 🏋️ EXERCÍCIO: Implemente uma Trie
// ============================================
// Rode: npx tsx data-structures/20-trie/exercise.ts
// ============================================

class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  // TODO: Insere uma palavra — O(m)
  // 💡 Dica: Para cada char, se não tem filho, cria. Desce. No final, marca isEndOfWord.
  insert(word: string): void {}

  // TODO: Busca uma palavra EXATA — O(m)
  search(word: string): boolean {
    return false;
  }

  // TODO: Verifica se ALGUMA palavra começa com o prefixo — O(m)
  startsWith(prefix: string): boolean {
    return false;
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

console.log("=== 🏋️ TESTES: Trie ===\n");
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("banana");

test('search("apple")', trie.search("apple"), true);
test('search("app")', trie.search("app"), true);
test('search("ap") — incompleto', trie.search("ap"), false);
test('search("banana")', trie.search("banana"), true);
test('search("ban")', trie.search("ban"), false);
test('search("xyz")', trie.search("xyz"), false);

console.log("");
test('startsWith("app")', trie.startsWith("app"), true);
test('startsWith("ban")', trie.startsWith("ban"), true);
test('startsWith("xyz")', trie.startsWith("xyz"), false);
test('startsWith("appl")', trie.startsWith("appl"), true);

console.log(
  `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
);
if (failed === 0) console.log("🎉 PERFEITO!");
