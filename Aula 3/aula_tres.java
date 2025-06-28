import java.util.Scanner;

public class aula_tres{


    public static void main(String[] args){

        Scanner scanner = new Scanner(System.in);

        int contador = 0;

        while(contador < 3){

            System.out.println("Qual seu nome");
            String nome = scanner.nextLine();

            System.out.println("Qual sua idade");
            int idade = scanner.nextInt();

            System.out.println("Qual seu a");
            String a = scanner.nextLine();

            System.out.println("Seu nome é: "+nome + idade + a);
            contador += 1;
        };
    };
}