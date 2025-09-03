
/*
// ===== Utilidades =====
function limparApenasDigitos(str = "") {
  return String(str).replace(/[^\d]+/g, "");
}

function formatarCPF(cpf) {
  const d = limparApenasDigitos(cpf);
  if (d.length !== 11) return cpf;
  return `${d.slice(0,3)}.${d.slice(3,6)}.${d.slice(6,9)}-${d.slice(9)}`;
}

function mascararCPF(cpf) {
  const d = limparApenasDigitos(cpf);
  if (d.length !== 11) return cpf;
  return `${d.slice(0,3)}.***.***-${d.slice(9)}`;
}

// Validação oficial de CPF
function validarCPF(cpf) {
  cpf = limparApenasDigitos(cpf);

  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false; // todos os dígitos iguais

  // 1º dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += Number(cpf[i]) * (10 - i);
  let resto = 11 - (soma % 11);
  const dv1 = resto > 9 ? 0 : resto;
  if (dv1 !== Number(cpf[9])) return false;

  // 2º dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) soma += Number(cpf[i]) * (11 - i);
  resto = 11 - (soma % 11);
  const dv2 = resto > 9 ? 0 : resto;
  if (dv2 !== Number(cpf[10])) return false;

  return true;
}

function validarCEP(cep) {
  const d = limparApenasDigitos(cep);
  return d.length === 8;
}

function formatarCEP(cep) {
  const d = limparApenasDigitos(cep);
  if (d.length !== 8) return cep;
  return `${d.slice(0,5)}-${d.slice(5)}`;
}

function validarEmail(email) {
  // Validação simples (suficiente para a maioria dos usos comuns)
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(email).trim());
}

function parseData(data) {
  // Aceita Date ou string (YYYY-MM-DD, DD/MM/YYYY etc. — desde que o Date entenda)
  const d = data instanceof Date ? data : new Date(data);
  if (Number.isNaN(d.getTime())) throw new Error("Data inválida.");
  return d;
}

function calcularIdade(dataNascimento) {
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  const m = hoje.getMonth() - dataNascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < dataNascimento.getDate())) {
    idade--;
  }
  return idade;
}

// ===== Modelos =====
class Endereco {
  constructor({ estado, cidade, cep, rua }) {
    this.estado = String(estado ?? "").toUpperCase().trim();
    this.cidade = String(cidade ?? "").trim();
    this.rua = String(rua ?? "").trim();

    const cepLimpo = limparApenasDigitos(cep ?? "");
    if (!validarCEP(cepLimpo)) throw new Error("CEP inválido.");
    this.cep = cepLimpo; // armazeno limpo
  }

  get estadoUF() { return this.estado; }
  set estadoUF(v) { this.estado = String(v ?? "").toUpperCase().trim(); }

  get cidadeNome() { return this.cidade; }
  set cidadeNome(v) { this.cidade = String(v ?? "").trim(); }

  get cepFormatado() { return formatarCEP(this.cep); }
  get cepValor() { return this.cep; }
  set cepValor(v) {
    const d = limparApenasDigitos(v);
    if (!validarCEP(d)) throw new Error("CEP inválido.");
    this.cep = d;
  }

  get ruaNome() { return this.rua; }
  set ruaNome(v) { this.rua = String(v ?? "").trim(); }
}

class Pessoa {
  #cpf; // campo privado
  constructor({ nomeCompleto, dataNascimento, cpf, email, endereco }) {
    // Obrigatórios
    if (!nomeCompleto?.trim()) throw new Error("nomeCompleto é obrigatório.");
    if (!cpf) throw new Error("cpf é obrigatório.");
    if (!email) throw new Error("email é obrigatório.");
    if (!endereco) throw new Error("endereco é obrigatório.");

    this.nomeCompleto = String(nomeCompleto).trim();
    this.dataNascimento = parseData(dataNascimento);

    // valida e define CPF via setter para já aplicar regras
    this.cpf = cpf;

    // valida e-mail
    const email = String(email).trim();
    if (!validarEmail(email)) throw new Error("E-mail inválido.");
    this.email = email;

    // composição: Pessoa TEM um Endereco
    this.endereco = endereco instanceof Endereco ? endereco : new Endereco(endereco);
  }

  // --- Nome completo
  get nome() { return this.nomeCompleto; }
  set nome(v) {
    const s = String(v ?? "").trim();
    if (!s) throw new Error("nomeCompleto não pode ser vazio.");
    this.nomeCompleto = s;
  }

  // --- Data de nascimento e idade calculada
  get nascimento() { return this.dataNascimento; }
  set nascimento(v) { this.dataNascimento = parseData(v); }

  get idade() { return calcularIdade(this.dataNascimento); }

  // --- CPF (privado), com validação e formatos úteis
  get cpf() { return this.#cpf; }
  set cpf(v) {
    const d = limparApenasDigitos(v);
    if (!validarCPF(d)) throw new Error("CPF inválido.");
    this.#cpf = d;
  }
  get cpfFormatado() { return formatarCPF(this.#cpf); }
  get cpfMascarado() { return mascararCPF(this.#cpf); }

  // --- E-mail
  get email() { return this.email; }
  set email(v) {
    const em = String(v).trim();
    if (!validarEmail(email)) throw new Error("E-mail inválido.");
    this.email = email;
  }

  // --- Endereço (composição)
  get enderecoAtual() { return this.endereco; }
  set enderecoAtual(v) {
    this.endereco = v instanceof Endereco ? v : new Endereco(v);
  }

  // --- Métodos de conveniência
  apresentar() {
    return `Olá, eu sou ${this.nomeCompleto}, tenho ${this.idade} anos e moro em ${this.endereco.rua}, ${this.endereco.cidade} - ${this.endereco.estado}.`;
  }
}

// ===== Exemplo de uso =====
const endereco = new Endereco({
  estado: "PE",
  cidade: "Recife",
  cep: "52061-010",
  rua: "Rua Exemplo, 123",
});

const p = new Pessoa({
  nomeCompleto: "Iverton Mello",
  dataNascimento: "1993-06-15",
  cpf: "529.982.247-25",
  email: "iverton@example.com",
  endereco,
});

console.log(p.apresentar());
console.log("CPF:", p.cpfFormatado, "| mascarado:", p.cpfMascarado);
*/




class Pessoa {
  #cpf;
  #email;

  constructor({ nomeCompleto, dataNascimento, cpf, email, endereco }) {
    this.nomeCompleto = String(nomeCompleto ?? "").trim();
    this.dataNascimento = new Date(dataNascimento);

    // use os setters (não há recursão porque eles escrevem em campos privados)
    this.cpf = cpf;
    this.email = email;

    this.endereco = endereco instanceof Endereco ? endereco : new Endereco(endereco);
  }

  // --- EMAIL ---
  get email() { 
    return this.#email; 
  }
  set email(v) {
    const em = String(v ?? "").trim();           // <— NÃO chame 'const email'
    if (!validarEmail(em)) throw new Error("E-mail inválido.");
    this.#email = em;                             // <— NÃO use this.email aqui
  }

  // --- CPF ---
  get cpf() { 
    return this.#cpf; 
  }
  set cpf(v) {
    const d = String(v ?? "").replace(/[^\d]+/g, "");
    if (!validarCPF(d)) throw new Error("CPF inválido.");
    this.#cpf = d;                                // <— NÃO use this.cpf aqui
  }
}


class Pessoa {
  constructor(args) { /* ... */ this._email = null; this._cpf = null; this.email = args.email; this.cpf = args.cpf; }
  get email() { return this._email; }
  set email(v) { const em = String(v ?? "").trim(); if (!validarEmail(em)) throw new Error("E-mail inválido."); this._email = em; }
  get cpf() { return this._cpf; }
  set cpf(v) { const d = String(v ?? "").replace(/[^\d]+/g, ""); if (!validarCPF(d)) throw new Error("CPF inválido."); this._cpf = d; }
}
