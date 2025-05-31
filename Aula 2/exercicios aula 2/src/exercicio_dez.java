
import javax.swing.JOptionPane;

public class exercicio_dez{

    public static void main(String[] args){

    verificar();
    };

    private static void verificar(){

        int pergunta_um = Integer.parseInt(JOptionPane.showInputDialog("Quantos anos o candidato tem?"));
        String perugunta_dois = JOptionPane.showInputDialog("O candidato sabe nadar?");
        String pergunta_tres = JOptionPane.showInputDialog("O candidato veio por meio de recomendação");

        if(pergunta_um > 16 && perugunta_dois.toUpperCase() == "SIM"){

            JOptionPane.showMessageDialog(null, "Aprovado para o navio!");
        
        } else if(pergunta_um >= 14 && perugunta_dois.toUpperCase() == "NÃO" && pergunta_tres.toUpperCase() == "SIM"){

            JOptionPane.showMessageDialog(null, "Aprovado sob recomendação. Monitorar nas primeiras viagens.");

        } else {

            JOptionPane.showMessageDialog(null, "Reprovado. Volte quando estiver mais preparado para o mar");
        };
    };
}