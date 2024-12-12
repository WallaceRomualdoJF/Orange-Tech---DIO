// Para ler e escrever dados em Java, aqui na DIO padronizamos da seguinte forma:
// - new Scanner(System.in): cria um leitor de Entradas, com métodos úteis com prefixo "next";
// - System.out.println:.imprime um texto de Saída (Output) e pulando uma linha.

import java.util.Scanner;

public class PontosCarteira {
    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        int velocidade = leitor.nextInt();
        int multas = leitor.nextInt();
        leitor.close();

        System.out.println(verificarPontosNaCarteira(multas, velocidade));
    }

    public static String verificarPontosNaCarteira(int multas, int velocidade) {
        String resultado = "";
        if (velocidade <= 80) {
            resultado = multas + " multas. Nao levou pontos na carteira";
        } else if (multas < 2) {
            resultado = ++multas + " multas. Nao levou pontos na carteira";
        } else {
            resultado = ++multas + " multas. Levou pontos na carteira";
        }
        return resultado;
    }
}