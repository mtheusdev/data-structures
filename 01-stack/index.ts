// ============================================
// 📚 STACK (Pilha) - Estrutura LIFO
// ============================================
// LIFO = Last In, First Out (Último a entrar, primeiro a sair)
// Pense numa pilha de pratos: você coloca um prato por cima
// e quando vai tirar, tira o de cima primeiro.
//
// 🧠 Complexidade:
//   push()  → O(1) - Adicionar no topo
//   pop()   → O(1) - Remover do topo
//   peek()  → O(1) - Ver o topo sem remover
//   size()  → O(1) - Ver o tamanho
//
// 💡 Usos no mundo real:
//   - Ctrl+Z (desfazer) nos editores de texto
//   - Navegação "voltar" no navegador
//   - Chamadas de funções (Call Stack do JavaScript)
//   - Validação de parênteses em expressões
// ============================================

class Stack<T> {
  // Array interno que guarda os elementos da pilha
  private items: T[];

  constructor() {
    this.items = [];
  }

  // Coloca um elemento no TOPO da pilha
  push(element: T): void {
    this.items.push(element);
    console.log(`  ✅ Push: "${element}" adicionado ao topo`);
  }

  // Remove e retorna o elemento do TOPO da pilha
  pop(): T | undefined {
    if (this.isEmpty()) {
      console.log("  ❌ Pop: Pilha está vazia! Nada para remover.");
      return undefined;
    }
    const removed = this.items.pop();
    console.log(`  🗑️  Pop: "${removed}" removido do topo`);
    return removed;
  }

  // Apenas ESPIA o topo sem remover
  peek(): T | undefined {
    if (this.isEmpty()) {
      console.log("  👀 Peek: Pilha está vazia!");
      return undefined;
    }
    const top = this.items[this.items.length - 1];
    console.log(`  👀 Peek: "${top}" está no topo`);
    return top;
  }

  // Retorna true se a pilha estiver vazia
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Retorna o tamanho da pilha
  size(): number {
    return this.items.length;
  }

  // Limpa todos os elementos
  clear(): void {
    this.items = [];
    console.log("  🧹 Clear: Pilha limpa!");
  }

  // Mostra a pilha no console de forma visual
  print(): void {
    console.log("\n  📦 Estado da Pilha (topo → base):");
    if (this.isEmpty()) {
      console.log("    [vazia]");
      return;
    }
    for (let i = this.items.length - 1; i >= 0; i--) {
      const label = i === this.items.length - 1 ? " ← TOPO" : "";
      console.log(`    | ${this.items[i]} |${label}`);
    }
    console.log("    +-------+");
  }
}

// ============================================
// 🧪 EXEMPLO PRÁTICO: Validador de Parênteses
// ============================================
// Dado uma string como "([]{})", verificar se todos os
// parênteses, colchetes e chaves estão balanceados.

function isValidParentheses(expression: string): boolean {
  const stack = new Stack<string>();

  // Mapa de fechamento → abertura
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of expression) {
    // Se for um caractere de ABERTURA, empilha
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }
    // Se for um caractere de FECHAMENTO
    else if (char === ")" || char === "]" || char === "}") {
      const top = stack.pop();
      // Se o topo não bater com o par esperado, está errado
      if (top !== pairs[char]) {
        return false;
      }
    }
  }

  // Se a pilha estiver vazia no final, tudo bateu certinho
  return stack.isEmpty();
}

// ============================================
// 🚀 EXECUÇÃO E TESTES
// ============================================
console.log("=== 🏗️  STACK (Pilha) ===\n");

console.log("--- Operações básicas ---");
const stack = new Stack<number>();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

stack.peek();
stack.pop();
stack.print();

console.log(`\n  📏 Tamanho: ${stack.size()}`);
console.log(`  🔍 Está vazia? ${stack.isEmpty()}`);

console.log("\n--- Validador de Parênteses ---");
const expressions = ["({[]})", "([)]", "((()))", "{[}", ""];
for (const expr of expressions) {
  const display = expr === "" ? '""' : `"${expr}"`;
  const result = isValidParentheses(expr);
  console.log(`  ${display} → ${result ? "✅ Válido" : "❌ Inválido"}`);
}
