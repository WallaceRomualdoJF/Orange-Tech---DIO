// Entrada
// A entrada será o número de meses que o sobrinho polpará o dinheiro.

// Saída
// A saída deve ser o valor que o sobrinho terá ao final dos meses.

import java.util.Scanner;

public class MesadaDoSobrinho {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int meses;
        int salario = 50;
        int total;

        meses = input.nextInt();

        total = meses * salario;

        System.out.println(total);
    }
}