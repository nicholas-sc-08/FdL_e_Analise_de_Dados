import java.util.Scanner;

public class aula_quatro {

    public static void main(String[] args){

        Scanner scanner = new Scanner(System.in);

        //Mano Juca tá estudando para um entrevista de emprego na Harry Plotter Serviços de Impressão!!
        //Mas é claro, ele está apavorado. Na condição dele eu também estaria. Nesse emprego ele deverá usar multiplicações durante o dia todo e o abobado é muito ruim em matemática!
        // Óbvio, vamos ajudar ele. Crie um programa para mostrar a tabuada de um número que ele digitar.
        //Ex: se o MJ digitar 2, mostrar
        //1x2=2
        //2x2=4
        //3x2=6
        //4x2=8
        //5x2=10
        //6x2=12
        //7x2=14
        //8x2=16
        //9x2=18
        //10x2=20

        System.out.println("Digite um número para saber a tabuada dele:");
        String numero_digitado = scanner.nextLine();

        for(int i = 1; i <= 10; i++){

            int resultado = Integer.parseInt(numero_digitado) * i;
            System.out.println(numero_digitado+" x "+i+" = "+resultado);
        };
    }
}
