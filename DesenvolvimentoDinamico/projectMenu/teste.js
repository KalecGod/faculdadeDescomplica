// ========== Motos ==========
class Motos {
  constructor(modelo, marca, placa, anoFabricacao, cor) {
    this.modelo = modelo;
    this.marca = marca;
    this.placa = placa;
    this.anoFabricacao = anoFabricacao;
    this.cor = cor;
  }

  // GETTERS
  get getModelo() { return this.modelo }
  get getMarca() { return this.marca }
  get getPlaca() { return this.placa }
  get getAnoFabricacao() { return this.anoFabricacao }
  get getCor() { return this.cor }

  // SETTERS
  set setModelo(v) { this.modelo = v }
  set setMarca(v) { this.marca = v }
  set setPlaca(v) { this.placa = v }
  set setAnoFabricacao(v) { this.anoFabricacao = v }
  set setCor(v) { this.cor = v }
}

// ========== Cliente (múltiplas motos, privadas e validação) ==========
class Cliente {
  #motos = [];
  #placas = new Set(); // guarda placas normalizadas

  constructor(nomeCompleto, idade, cpf, endereco, motos = []) {
    this.nomeCompleto = nomeCompleto;
    this.idade = idade;
    this.cpf = cpf;
    this.endereco = endereco;

    if (Array.isArray(motos)) {
      motos.forEach((m) => this.addMoto(m));
    }
  }

  static #normalizePlaca(placa) {
    return String(placa).toUpperCase().replace(/\s+/g, '');
  }

  static #placaValida(placa) {
    const p = Cliente.#normalizePlaca(placa);
    // Antiga: ABC-1234 (traço opcional)
    const antigo = /^[A-Z]{3}-?\d{4}$/;
    // Mercosul: ABC1D23 (3 letras, 1 número, 1 letra, 2 números)
    const mercosul = /^[A-Z]{3}\d[A-Z]\d{2}$/;
    return antigo.test(p) || mercosul.test(p);
  }

  // --- CRUD de motos ---
  addMoto(moto) {
    if (!(moto instanceof Motos)) {
      throw new TypeError("addMoto: parâmetro precisa ser instância de Motos.");
    }
    const placaNorm = Cliente.#normalizePlaca(moto.getPlaca);
    if (!Cliente.#placaValida(placaNorm)) {
      throw new Error(`addMoto: placa inválida (${moto.getPlaca}).`);
    }
    if (this.#placas.has(placaNorm)) {
      throw new Error(`addMoto: já existe moto com a placa ${moto.getPlaca}.`);
    }
    this.#motos.push(moto);
    this.#placas.add(placaNorm);
    return this; // chaining
  }

  getMotos() {
    // retorna cópia superficial para evitar mutações externas
    return [...this.#motos];
  }

  listarMotosResumo() {
    return this.#motos.map(
      (m) => `${m.getMarca} ${m.getModelo} (${m.getPlaca})`
    );
  }

  buscarMotoPorPlaca(placa) {
    const alvo = Cliente.#normalizePlaca(placa);
    return this.#motos.find((m) => Cliente.#normalizePlaca(m.getPlaca) === alvo) ?? null;
  }

  atualizarMoto(placaAtual, dados = {}) {
    const moto = this.buscarMotoPorPlaca(placaAtual);
    if (!moto) return false;

    // Atualização de placa precisa validar formato e duplicidade
    if (dados.novaPlaca) {
      const novaNorm = Cliente.#normalizePlaca(dados.novaPlaca);
      if (!Cliente.#placaValida(novaNorm)) {
        throw new Error(`atualizarMoto: placa inválida (${dados.novaPlaca}).`);
      }
      const atualNorm = Cliente.#normalizePlaca(moto.getPlaca);
      if (novaNorm !== atualNorm && this.#placas.has(novaNorm)) {
        throw new Error(`atualizarMoto: já existe moto com a placa ${dados.novaPlaca}.`);
      }
      // atualizar Set de placas
      this.#placas.delete(atualNorm);
      moto.setPlaca = dados.novaPlaca;
      this.#placas.add(novaNorm);
    }

    if (dados.modelo) moto.setModelo = dados.modelo;
    if (dados.marca) moto.setMarca = dados.marca;
    if (dados.anoFabricacao) moto.setAnoFabricacao = dados.anoFabricacao;
    if (dados.cor) moto.setCor = dados.cor;

    return true;
  }

  removerMoto(placa) {
    const alvo = Cliente.#normalizePlaca(placa);
    const idx = this.#motos.findIndex((m) => Cliente.#normalizePlaca(m.getPlaca) === alvo);
    if (idx === -1) return false;

    // remove do Set de placas também
    this.#placas.delete(alvo);
    this.#motos.splice(idx, 1);
    return true;
  }

  // Iterável (bônus): permite for..of em Cliente para percorrer as motos
  *[Symbol.iterator]() {
    for (const m of this.#motos) yield m;
  }

  // --- Descrição do cliente + motos ---
  descricao() {
    if (!this.#motos.length) {
      return `${this.nomeCompleto} não possui motos cadastradas.`;
    }
    const lista = this.listarMotosResumo().join(", ");
    return `${this.nomeCompleto} possui ${this.#motos.length} moto(s): ${lista}.`;
  }
}

// ===== Exemplo de uso =====
const m1 = new Motos("Titan 160", "Honda", "ABC-1234", 2022, "Vermelha");
const m2 = new Motos("Fazer 250", "Yamaha", "DEF-5678", 2021, "Azul");

const cliente = new Cliente("Adalberto Carlos", 27, "70520754409", "Rua Vinte Quatro, N: 70");
cliente.addMoto(m1).addMoto(m2);

console.log(cliente.descricao());                   // lista 2 motos
console.log(cliente.listarMotosResumo());           // ["Honda Titan 160 (ABC-1234)", "Yamaha Fazer 250 (DEF-5678)"]

// Atualizar modelo e cor
cliente.atualizarMoto("DEF-5678", { modelo: "Fazer 250 ABS", cor: "Preta" });

// Atualizar PLACA (com validação e bloqueio de duplicata)
cliente.atualizarMoto("ABC-1234", { novaPlaca: "ABC1D23" }); // Mercosul ok
console.log(cliente.listarMotosResumo());

// Remover
cliente.removerMoto("ABC1D23");
console.log(cliente.descricao());

// Iterar motos (graças ao Symbol.iterator)
for (const moto of cliente) {
  console.log(moto.getMarca, moto.getModelo);
}
