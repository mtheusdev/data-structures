// ============================================
// 📚 AVL TREE (Árvore AVL - Balanceada)
// ============================================
// Uma BST que se AUTO-BALANCEIA.
// Garante que a diferença de altura entre as subárvores
// esquerda e direita de qualquer nó é no máximo 1.
//
// Quando essa regra é violada, a árvore faz ROTAÇÕES
// para se reequilibrar automaticamente.
//
// 🧠 Complexidade (SEMPRE):
//   insert() → O(log n)
//   search() → O(log n)
//   delete() → O(log n)
//   ⚠️ Ao contrário da BST, a AVL NUNCA degrada para O(n)!
//
// 💡 Usos no mundo real:
//   - Bancos de dados que precisam de busca rápida garantida
//   - Memória de sistemas operacionais
// ============================================

class AVLNode {
  value: number;
  left: AVLNode | null;
  right: AVLNode | null;
  height: number; // Altura do nó (folhas = 0)

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
  }
}

class AVLTree {
  root: AVLNode | null;

  constructor() {
    this.root = null;
  }

  // Retorna a altura de um nó (null = -1)
  private getHeight(node: AVLNode | null): number {
    if (node === null) return -1;
    return node.height;
  }

  // Atualiza a altura de um nó baseado nos filhos
  private updateHeight(node: AVLNode): void {
    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  // FATOR DE BALANCEAMENTO = altura(esquerda) - altura(direita)
  // Se o resultado for > 1 ou < -1, está desbalanceado!
  private getBalanceFactor(node: AVLNode): number {
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // ---- ROTAÇÃO PARA A DIREITA ----
  // Usada quando a árvore está "pesada" para a ESQUERDA
  //
  //       30            20
  //      /       →     /  \
  //    20             10   30
  //   /
  //  10
  private rotateRight(node: AVLNode): AVLNode {
    const newRoot = node.left!; // O filho da esquerda sobe
    node.left = newRoot.right; // A subárvore direita do novo root vai pro antigo root
    newRoot.right = node; // O antigo root desce pra direita

    this.updateHeight(node);
    this.updateHeight(newRoot);

    console.log(`    🔄 Rotação DIREITA no nó ${node.value}`);
    return newRoot;
  }

  // ---- ROTAÇÃO PARA A ESQUERDA ----
  // Usada quando a árvore está "pesada" para a DIREITA
  //
  //  10                20
  //    \       →      /  \
  //    20            10   30
  //      \
  //      30
  private rotateLeft(node: AVLNode): AVLNode {
    const newRoot = node.right!; // O filho da direita sobe
    node.right = newRoot.left; // A subárvore esquerda do novo root vai pro antigo root
    newRoot.left = node; // O antigo root desce pra esquerda

    this.updateHeight(node);
    this.updateHeight(newRoot);

    console.log(`    🔄 Rotação ESQUERDA no nó ${node.value}`);
    return newRoot;
  }

  // ---- BALANCEAMENTO ----
  // Verifica o fator de balanceamento e faz as rotações necessárias
  private balance(node: AVLNode): AVLNode {
    const balanceFactor = this.getBalanceFactor(node);

    // Pesado para a ESQUERDA (fator > 1)
    if (balanceFactor > 1) {
      // Caso Esquerda-Direita: precisa de rotação dupla
      if (this.getBalanceFactor(node.left!) < 0) {
        console.log(`    ⚡ Caso Esquerda-Direita detectado`);
        node.left = this.rotateLeft(node.left!);
      }
      return this.rotateRight(node);
    }

    // Pesado para a DIREITA (fator < -1)
    if (balanceFactor < -1) {
      // Caso Direita-Esquerda: precisa de rotação dupla
      if (this.getBalanceFactor(node.right!) > 0) {
        console.log(`    ⚡ Caso Direita-Esquerda detectado`);
        node.right = this.rotateRight(node.right!);
      }
      return this.rotateLeft(node);
    }

    // Já está balanceado, retorna sem mexer
    return node;
  }

  // ---- INSERÇÃO ----
  insert(value: number): void {
    console.log(`  ✅ Inserindo ${value}...`);
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(node: AVLNode | null, value: number): AVLNode {
    // Caso base: chegou num espaço vazio, cria o nó
    if (node === null) return new AVLNode(value);

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      return node; // Valor duplicado, ignora
    }

    // Atualiza a altura e rebalanceia
    this.updateHeight(node);
    return this.balance(node);
  }

  // ---- BUSCA ----
  search(value: number): boolean {
    let current = this.root;
    while (current !== null) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  // In-Order Traversal (ordem crescente)
  inOrder(node: AVLNode | null = this.root, result: number[] = []): number[] {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.value);
      this.inOrder(node.right, result);
    }
    return result;
  }

  // Visualização
  print(
    node: AVLNode | null = this.root,
    prefix: string = "",
    isLeft: boolean = true,
  ): void {
    if (node === null) return;
    if (node === this.root) {
      console.log(`\n  🌳 Árvore AVL (valor [altura, fator]):`);
      const bf = this.getBalanceFactor(node);
      console.log(`     ${node.value} [h:${node.height}, bf:${bf}]`);
    } else {
      const bf = this.getBalanceFactor(node);
      console.log(
        `     ${prefix}${isLeft ? "├── " : "└── "}${node.value} [h:${node.height}, bf:${bf}]`,
      );
    }
    const newPrefix = prefix + (isLeft ? "│   " : "    ");
    this.print(node.left, newPrefix, true);
    this.print(node.right, newPrefix, false);
  }
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  AVL TREE (Árvore Balanceada) ===\n");

const avl = new AVLTree();

// Inserindo em ordem crescente (o que quebraria uma BST normal!)
console.log("--- Inserindo 10, 20, 30, 40, 50, 25 ---");
console.log("(numa BST normal, isso viraria uma lista!)");
console.log("(na AVL, ela se auto-balanceia com rotações)\n");

avl.insert(10);
avl.insert(20);
avl.insert(30);
avl.insert(40);
avl.insert(50);
avl.insert(25);

avl.print();

console.log(`\n  📊 In-Order: [${avl.inOrder().join(", ")}]`);
console.log(
  `  🔍 Buscar 25: ${avl.search(25) ? "Encontrado ✅" : "Não encontrado ❌"}`,
);
console.log(
  `  🔍 Buscar 99: ${avl.search(99) ? "Encontrado ✅" : "Não encontrado ❌"}`,
);
