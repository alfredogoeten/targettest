// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K += 1;
    SOMA += K;
}

console.log(SOMA);
// SOMA = 91

// --------------------------------------------------------------------------------------------------------------------------------------------------

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo
// valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci
// e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function isFibonacci(inputNumber: number): boolean {
    let firstValue = 0;
    let secondValue = 1;

    while (secondValue < inputNumber) {
        const shiftedValue = secondValue;
        secondValue = firstValue + secondValue;
        firstValue = shiftedValue;
    }

    return secondValue === inputNumber || inputNumber === 0;
}

const inputNumber = Number(prompt("Insira um número para ser verificado: "));
const result = isFibonacci(inputNumber);

console.log(
    `${inputNumber} ${
        result ? "pertence" : "não pertence"
    } à sequência de Fibonacci.`
);

// --------------------------------------------------------------------------------------------------------------------------------------------------

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

async function fetchDailyRevenue() {
    try {
        const response = await fetch("./dadosjson.json");
        const dailyRevenue = await response.json();

        const validRevenue = dailyRevenue.filter((value: number) => value > 0);
        const minRevenue = Math.min(...validRevenue);
        const maxRevenue = Math.max(...validRevenue);
        const averageRevenue =
            validRevenue.reduce(
                (sum: number, value: number) => sum + value,
                0
            ) / validRevenue.length;

        const daysAboveAverage = validRevenue.filter(
            (value: number) => value > averageRevenue
        ).length;

        console.log(`Menor faturamento: ${minRevenue}`);
        console.log(`Maior faturamento: ${maxRevenue}`);
        console.log(`Dias com faturamento acima da média: ${daysAboveAverage}`);
    } catch (error) {
        console.error("Erro ao ler arquivo:", error);
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação
// que cada estado teve dentro do valor total mensal da distribuidora.

const revenues = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

const totalRevenue = Object.values(revenues).reduce(
    (sum, value) => sum + value,
    0
);

for (const state in revenues) {
    const percentage = (
        (revenues[state as keyof typeof revenues] / totalRevenue) *
        100
    ).toFixed(2);
    console.log(`${state}: ${percentage}%`);
}

// --------------------------------------------------------------------------------------------------------------------------------------------------

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function reverseString(input: string): string {
    const reversedArray: string[] = [];
    for (const char of input) {
        reversedArray.unshift(char);
    }
    return reversedArray.join('');
}

const inputString = prompt("String a ser invertida:") || "";
const reversedString = reverseString(inputString);

console.log(`String original: ${inputString}`);
console.log(`String invertida: ${reversedString}`);

// codigo pode ser testado em https://www.typescriptlang.org/play/
