// ============================================
// 📚 BINARY SEARCH TREE (BST - Árvore Binária de Busca)
// ============================================
// Uma árvore onde cada nó tem NO MÁXIMO 2 filhos.
// Regra de ouro:
//   - Filhos da ESQUERDA são MENORES que o pai
//   - Filhos da DIREITA  são MAIORES que o pai
//
// 🧠 Complexidade (árvore balanceada):
//   insert()  → O(log n)
//   search()  → O(log n)
//   delete()  → O(log n)
//   ⚠️ Pior caso (árvore degenerada): O(n)
//
// 💡 Usos no mundo real:
//   - Bancos de dados (índices de busca)
//   - Autocompletar em editores de texto
//   - Sistemas de arquivos
// ============================================

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null; // Filho da esquerda (valores MENORES)
  right: TreeNode<T> | null; // Filho da direita (valores MAIORES)

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  // ---- INSERÇÃO ----
  // Desce a árvore comparando: menor vai pra esquerda, maior vai pra direita
  insert(value: T): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      console.log(`  ✅ Insert: "${value}" é a raiz da árvore`);
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        // Vai para a ESQUERDA
        if (current.left === null) {
          current.left = newNode;
          console.log(
            `  ✅ Insert: "${value}" → esquerda de "${current.value}"`,
          );
          return;
        }
        current = current.left;
      } else {
        // Vai para a DIREITA
        if (current.right === null) {
          current.right = newNode;
          console.log(
            `  ✅ Insert: "${value}" → direita de "${current.value}"`,
          );
          return;
        }
        current = current.right;
      }
    }
  }

  // ---- BUSCA ----
  search(value: T): boolean {
    let current = this.root;

    while (current !== null) {
      if (value === current.value) return true;

      if (value < current.value) {
        current = current.left; // Menor: vai pra esquerda
      } else {
        current = current.right; // Maior: vai pra direita
      }
    }

    return false;
  }

  // ---- ENCONTRAR MÍNIMO ----
  findMin(): T | undefined {
    if (this.root === null) return undefined;

    // O menor valor SEMPRE está na extrema esquerda
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.value;
  }

  // ---- ENCONTRAR MÁXIMO ----
  findMax(): T | undefined {
    if (this.root === null) return undefined;

    // O maior valor SEMPRE está na extrema direita
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.value;
  }

  // ---- TRAVESSIAS (formas de percorrer a árvore) ----

  // In-Order: Esquerda → Raiz → Direita
  // Resultado: valores em ORDEM CRESCENTE!
  inOrder(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      this.inOrder(node.left, result); // Visita esquerda
      result.push(node.value); // Visita o nó atual
      this.inOrder(node.right, result); // Visita direita
    }
    return result;
  }

  // Pre-Order: Raiz → Esquerda → Direita
  // Útil para: copiar/serializar a árvore
  preOrder(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      result.push(node.value); // Visita o nó atual PRIMEIRO
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
    return result;
  }

  // Post-Order: Esquerda → Direita → Raiz
  // Útil para: deletar a árvore inteira
  postOrder(node: TreeNode<T> | null = this.root, result: T[] = []): T[] {
    if (node !== null) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value); // Visita o nó atual POR ÚLTIMO
    }
    return result;
  }

  // ---- ALTURA DA ÁRVORE ----
  height(node: TreeNode<T> | null = this.root): number {
    if (node === null) return -1;
    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
  }

  // Mostra a árvore de forma visual (simplificada)
  print(
    node: TreeNode<T> | null = this.root,
    prefix: string = "",
    isLeft: boolean = true,
  ): void {
    if (node === null) return;

    if (node === this.root) {
      console.log(`\n  🌳 Árvore BST:`);
      console.log(`     ${node.value}`);
    } else {
      console.log(`     ${prefix}${isLeft ? "├── " : "└── "}${node.value}`);
    }

    const newPrefix = prefix + (isLeft ? "│   " : "    ");
    this.print(node.left, newPrefix, true);
    this.print(node.right, newPrefix, false);
  }
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  BINARY SEARCH TREE (BST) ===\n");

const bst = new BinarySearchTree<number>();

console.log("--- Inserções ---");
//       Árvore resultante:
//            50
//           /  \
//         30    70
//        /  \   / \
//      20  40  60  80
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

bst.print();

console.log("\n--- Buscas ---");
console.log(
  `  🔍 Buscar 40: ${bst.search(40) ? "Encontrado ✅" : "Não encontrado ❌"}`,
);
console.log(
  `  🔍 Buscar 99: ${bst.search(99) ? "Encontrado ✅" : "Não encontrado ❌"}`,
);

console.log("\n--- Mínimo e Máximo ---");
console.log(`  ⬇️  Mínimo: ${bst.findMin()}`);
console.log(`  ⬆️  Máximo: ${bst.findMax()}`);

console.log("\n--- Travessias ---");
console.log(`  In-Order (crescente):  [${bst.inOrder().join(", ")}]`);
console.log(`  Pre-Order:             [${bst.preOrder().join(", ")}]`);
console.log(`  Post-Order:            [${bst.postOrder().join(", ")}]`);

console.log(`\n  📏 Altura da árvore: ${bst.height()}`);
