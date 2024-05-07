package orcamento.app;

import java.util.Scanner;

public class App {
	
	    
	    public static double calcularTamanhoParede() {
	        Scanner scanner = new Scanner(System.in);
	        System.out.print("Digite a largura da parede em metros: ");
	        double largura = scanner.nextDouble();
	        System.out.print("Digite a altura da parede em metros: ");
	        double altura = scanner.nextDouble();
	        scanner.close();
	        return largura * altura;
	    }
	    
	    public static double calcularValorMarmorizacao(String tipoMarmorizacao) {
	        double valorMarmorizacao = 0;
	        switch (tipoMarmorizacao.toLowerCase().trim()) {
	            case "simples":
	                valorMarmorizacao = 50; // Valor por metro quadrado
	                break;
	            case "intermediaria":
	                valorMarmorizacao = 80; // Valor por metro quadrado
	                break;
	            case "complexa":
	                valorMarmorizacao = 120; // Valor por metro quadrado
	                break;
	            default:
	                System.out.println("Tipo de marmorização inválido.");
	        }
	        return valorMarmorizacao;
	    }
	    
	    public static double calcularCustoMateriais(double areaParede, double valorMarmorizacao) {
	        return areaParede * valorMarmorizacao;
	    }
	    
	    public static double calcularCustoMaoDeObra(double areaParede) {
	        return areaParede * 30; // Exemplo de custo por metro quadrado
	    }
	    
	    public static void main(String[] args) {
	        Scanner scanner = new Scanner(System.in);
	        
	        // Calcular o tamanho da parede
	        double areaParede = calcularTamanhoParede();
	        
	        // Solicitar o tipo de marmorização ao usuário
	        System.out.print("Digite o tipo de marmorização desejada (Simples, Intermediaria, Complexa): ");
	        String tipoMarmorizacao = scanner.nextLine();
	        
	        // Calcular o valor da marmorização
	        double valorMarmorizacao = calcularValorMarmorizacao(tipoMarmorizacao);
	        
	        // Calcular o custo dos materiais
	        double custoMateriais = calcularCustoMateriais(areaParede, valorMarmorizacao);
	        
	        // Calcular o custo da mão de obra
	        double custoMaoDeObra = calcularCustoMaoDeObra(areaParede);
	        
	        // Calcular o custo total
	        double custoTotal = custoMateriais + custoMaoDeObra;
	        
	        // Imprimir o orçamento
	        System.out.println("Orçamento para marmorização de parede:");
	        System.out.println("Área da parede: " + areaParede + " metros quadrados");
	        System.out.println("Tipo de marmorização: " + tipoMarmorizacao);
	        System.out.println("Custo dos materiais: R$" + custoMateriais);
	        System.out.println("Custo da mão de obra: R$" + custoMaoDeObra);
	        System.out.println("Custo total: R$" + custoTotal);
	        
	        scanner.close();
	    }
	}


