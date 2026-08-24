let nome = 'Gabriel';
let idade = 27;
let peso = 123;
let altura = 1.72;
let IMC = peso / (altura * altura);
let anoNascimento = 2026 - idade;

console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura, seu IMC é de', IMC, 'e nasceu em', anoNascimento);

//temos também o método de unir valores

console.log(nome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg, tem ' + altura + ' de altura, seu IMC é de ' + IMC + ' e nasceu em ' + anoNascimento);

//temos também o método de template string para valores pré-definidos

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura, seu IMC é de ${IMC} e nasceu em ${anoNascimento}`);