export {};

// ============================================
// 🏋️ EXERCÍCIO: Implemente uma BST
// ============================================
// Rode: npx tsx data-structures/06-binary-search-tree/exercise.ts
// ============================================

class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: TreeNode<number> | null;
  constructor() {
    this.root = null;
  }

  // TODO: Insere um valor na BST
  // 💡 Dica: menor → esquerda, maior → direita
  insert(value: number): void {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }

        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // TODO: Busca um valor — retorna true/false
  search(value: number): boolean {
    let current = this.root;

    while (true) {
      if (current === null) return false;

      if (value === current.value) return true;

      if (value < current.value) {
        current = current?.left;
      } else {
        current = current.right;
      }
    }
  }

  // TODO: Encontra o MENOR valor (extrema esquerda)
  findMin(): number | undefined {
    let current = this.root;

    while (current !== null) {
      if (current.left === null) return current.value;
      current = current.left;
    }

    return undefined;
  }

  // TODO: Encontra o MAIOR valor (extrema direita)
  findMax(): number | undefined {
    let current = this.root;

    while (current !== null) {
      if (current.right === null) return current.value;
      current = current.right;
    }

    return undefined;
  }

  // TODO: In-Order Traversal (Esquerda → Raiz → Direita)
  // Deve retornar os valores em ORDEM CRESCENTE
  inOrder(
    node: TreeNode<number> | null = this.root,
    result: number[] = [],
  ): number[] {
    // Sua implementação aqui
    return result;
  }

  // TODO: Pre-Order Traversal (Raiz → Esquerda → Direita)
  preOrder(
    node: TreeNode<number> | null = this.root,
    result: number[] = [],
  ): number[] {
    return result;
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

console.log("=== 🏋️ TESTES: BST ===\n");
const bst = new BST();
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

test("Search(40) encontra", bst.search(40), true);
test("Search(99) não encontra", bst.search(99), false);
test("FindMin é 20", bst.findMin(), 20);
test("FindMax é 80", bst.findMax(), 80);
// test("InOrder (crescente)", bst.inOrder(), [20, 30, 40, 50, 60, 70, 80]);
// test("PreOrder", bst.preOrder(), [50, 30, 20, 40, 70, 60, 80]);

// console.log(
//   `\n📊 Resultado: ${passed} passaram, ${failed} falharam de ${passed + failed} testes`,
// );
// if (failed === 0) console.log("🎉 PERFEITO!");
