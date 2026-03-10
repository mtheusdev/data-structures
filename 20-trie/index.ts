// ============================================
// 📚 TRIE (Prefix Tree / Árvore de Prefixos)
// ============================================
// Uma árvore especializada para armazenar STRINGS.
// Cada nó representa um CARACTERE, e o caminho da raiz
// até um nó forma um prefixo (ou palavra completa).
//
// É como um autocompletar: ao digitar "ap", ele sugere
// "apple", "app", "application"...
//
// 🧠 Complexidade:
//   insert()     → O(m) onde m = tamanho da palavra
//   search()     → O(m)
//   startsWith() → O(m)
//
// 💡 Usos no mundo real:
//   - Autocompletar (Google, IDE)
//   - Spell checkers (corretor ortográfico)
//   - Roteamento de IPs
//   - Dicionários / filtros de palavras
// ============================================

class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean; // Marca se alguma palavra TERMINA neste nó

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

  // Insere uma palavra na Trie — O(m)
  insert(word: string): void {
    let current = this.root;

    for (const char of word) {
      // Se o caractere não existe como filho, cria um novo nó
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      // Desce para o próximo nó
      current = current.children.get(char)!;
    }

    // Marca que uma palavra termina aqui
    current.isEndOfWord = true;
    console.log(`  ✅ Inserido: "${word}"`);
  }

  // Busca uma palavra EXATA na Trie — O(m)
  search(word: string): boolean {
    const node = this.findNode(word);
    return node !== null && node.isEndOfWord;
  }

  // Verifica se ALGUMA palavra começa com o prefixo — O(m)
  startsWith(prefix: string): boolean {
    return this.findNode(prefix) !== null;
  }

  // Encontra todas as palavras que começam com o prefixo
  autocomplete(prefix: string): string[] {
    const node = this.findNode(prefix);
    if (node === null) return [];

    const results: string[] = [];
    this.collectWords(node, prefix, results);
    return results;
  }

  // ---- Helpers ----

  // Navega até o nó correspondente ao prefixo
  private findNode(prefix: string): TrieNode | null {
    let current = this.root;

    for (const char of prefix) {
      if (!current.children.has(char)) {
        return null; // Prefixo não existe
      }
      current = current.children.get(char)!;
    }

    return current;
  }

  // Coleta todas as palavras a partir de um nó (DFS)
  private collectWords(
    node: TrieNode,
    prefix: string,
    results: string[],
  ): void {
    if (node.isEndOfWord) {
      results.push(prefix);
    }

    for (const [char, childNode] of node.children) {
      this.collectWords(childNode, prefix + char, results);
    }
  }

  // Visualiza a Trie
  print(
    node: TrieNode = this.root,
    prefix: string = "",
    indent: string = "",
  ): void {
    if (node === this.root) {
      console.log(`\n  🌳 Trie:`);
      console.log(`     (root)`);
    }

    for (const [char, childNode] of node.children) {
      const endMarker = childNode.isEndOfWord ? " ★" : "";
      console.log(`     ${indent}├── ${char}${endMarker}`);
      this.print(childNode, prefix + char, indent + "│   ");
    }
  }
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  TRIE (Árvore de Prefixos) ===\n");

const trie = new Trie();

console.log("--- Inserindo palavras ---");
const words = ["apple", "app", "application", "apply", "banana", "band", "bat"];
for (const word of words) {
  trie.insert(word);
}

trie.print();

console.log("\n--- Buscas ---");
const searches = ["app", "apple", "ap", "bat", "batman"];
for (const word of searches) {
  const found = trie.search(word);
  const hasPrefix = trie.startsWith(word);
  console.log(
    `  "${word}" → Exata: ${found ? "✅" : "❌"} | Prefixo: ${hasPrefix ? "✅" : "❌"}`,
  );
}

console.log("\n--- Autocompletar ---");
const prefixes = ["app", "ba", "z"];
for (const prefix of prefixes) {
  const suggestions = trie.autocomplete(prefix);
  console.log(`  "${prefix}" → [${suggestions.join(", ")}]`);
}
