export {};

// ============================================
// 🏋️ EXERCÍCIO: Implemente uma AVL Tree
// ============================================
// Rode: npx tsx data-structures/07-avl-tree/exercise.ts
// ============================================

class AVLNode {
  value: number;
  left: AVLNode | null;
  right: AVLNode | null;
  height: number;

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

  // TODO: Retorna a altura de um nó (se null, retorna -1)
  private getHeight(node: AVLNode | null): number {
    return -1;
  }

  // TODO: Atualiza a altura do nó baseado nos filhos
  private updateHeight(node: AVLNode): void {
    // Sua implementação aqui
  }

  // TODO: Calcula o fator de balanceamento (altura Esq - altura Dir)
  private getBalanceFactor(node: AVLNode): number {
    return 0;
  }

  // TODO: Implemente a rotação para a DIREITA
  // Dica:
  //       Y            X
  //      /       →      \
  //     X                Y
  private rotateRight(node: AVLNode): AVLNode {
    // Sua implementação aqui
    return node;
  }

  // TODO: Implemente a rotação para a ESQUERDA
  // Dica:
  //     X                Y
  //      \       →      /
  //       Y            X
  private rotateLeft(node: AVLNode): AVLNode {
    // Sua implementação aqui
    return node;
  }

  // TODO: Balanceia o nó verificando o fator de balanceamento
  // Considere os 4 casos: Esquerda-Esquerda, Esquerda-Direita, Direita-Direita e Direita-Esquerda
  private balance(node: AVLNode): AVLNode {
    // Sua implementação aqui
    return node;
  }

  // TODO: Insere um valor na AVL mantendo o balanceamento
  insert(value: number): void {
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(node: AVLNode | null, value: number): AVLNode {
    // Caso base
    if (node === null) return new AVLNode(value);

    // 1. Inserção normal de BST
    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      return node; // Valor duplicado
    }

    // 2. Atualizar altura
    // 3. Balancear e retornar
    return node;
  }

  // TODO: Busca um valor — retorna true/false
  search(value: number): boolean {
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

console.log("=== 🏋️ TESTES: AVL TREE ===\n");
const avl = new AVLTree();

// Inserindo em ordem (quebraria uma BST normal, mas a AVL se equilibra)
// avl.insert(10);
// avl.insert(20);
// avl.insert(30);

// // Após essas inserções, a raiz deve ser 20
// test("Inserção + Rotação à Esquerda (Raiz deve ser 20)", avl.root?.value, 20);
// test("Filho esquerdo de 20 deve ser 10", avl.root?.left?.value, 10);
// test("Filho direito de 20 deve ser 30", avl.root?.right?.value, 30);

// avl.insert(40);
// avl.insert(50);
// avl.insert(25);

// test("Search(25) encontra", avl.search(25), true);
// test("Search(99) não encontra", avl.search(99), false);

// // A raiz deve ser 30 após essas inserções
// test("Raiz após inserções deve ser 30", avl.root?.value, 30);
// test("Filho esquerdo da raiz deve ser 20", avl.root?.left?.value, 20);
// test("Filho direito da raiz deve ser 40", avl.root?.right?.value, 40);

// console.log(
//   `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
// );
// if (failed === 0) console.log("🎉 PERFEITO!");
