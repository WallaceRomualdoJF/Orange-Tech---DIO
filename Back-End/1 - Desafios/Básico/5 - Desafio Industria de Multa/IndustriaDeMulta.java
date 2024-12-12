import java.util.Scanner;

public class Desafio {

    public static void main(String[] args) {
        Scanner leitor = new Scanner(System.in);
        int velocidade = leitor.nextInt();
        leitor.close();

        System.out.println(verificarMulta(velocidade));
    }

    public static String verificarMulta(int velocidade) {
        if (velocidade <= 60) {
            return "Nao foi multado";
        } else {
            return "Foi multado";
        }
    }
}