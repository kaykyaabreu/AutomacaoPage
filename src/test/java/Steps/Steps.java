package Steps;

import java.sql.Driver;

import Metodos.Metodos;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import elementos.Elementos;

public class Steps {
	
	Metodos m = new Metodos();
	Elementos e = new Elementos();
	
	@Given("^que o usuario acesse a url \"([^\"]*)\"$")
	public void que_o_usuario_acesse_a_url(String url) throws Throwable {
	    m.executarnavegador(url);
	}

	@Given("^selecione o botao abrir nova conta$")
	public void selecione_o_botao_abrir_nova_conta() throws Throwable {
		m.pausa(3000, "esperando para selecionar o botao abrir conta");
	   m.click(e.getBtnAbrirConta(), "Selecionado botao abrir conta");
	   m.click(e.getBtnAbrirConta(), "Selecionado botao abrir conta");
	}

	@Given("^selecionar o botao abrir conta para voce$")
	public void selecionar_o_botao_abrir_conta_para_voce() throws Throwable {
		m.pausa(2000, null);
		m.click(e.getBtnParaVoce(), "Selecionado botao abrir conta");
	}

	@When("^o usuario preencher o formulario$")
	public void o_usuario_preencher_o_formulario() throws Throwable {
		
	   m.preencher(e.getCampoNome(), "Sophia Esther Antônia da Paz", "Preenchendo campo nome");
	   m.preencher(e.getCampoTelefone(), "65982018895", "Preencchendo campo telefone");
	   m.preencher(e.getCampoEmail(), "test@test.com.br", "Preenchendo campo email");
	   m.preencher(e.getCampoCPF(), "457.875.088-40", "Preenchendo campo CPF");
	   //m.preencher(e.getCampoCNPJ(), "75.507.846/0001-11", "preenchendo campo cnpj");
	}
	
	@When("^preencher campo nome \"([^\"]*)\"$")
	public void preencher_campo_nome(String nome) throws Throwable {
		 m.preencher(e.getCampoNome(), nome, "Preenchendo campo nome");
		   m.preencher(e.getCampoTelefone(), "11111111111", "Preencchendo campo telefone");
		   m.preencher(e.getCampoEmail(), "test@test.com.br", "Preenchendo campo email");
		   m.preencher(e.getCampoCPF(), "74548926801", "Preenchendo campo CPF");
		   
		   
	}

	@When("^selecionar o botao quero ser cliente$")
	public void selecionar_o_botao_quero_ser_cliente() throws Throwable {
		m.click(e.getBybtnQueroSerCliente(), "Selecioando campo queros ser cliente");
	   
	}

	@Then("^valido o texto falta pouco$")
	public void valido_o_texto_falta_pouco() throws Throwable {
		m.screnShoot("printando cenario");
		m.fecharnavegador("fechando navegador");
	 
	   
	}
	@Given("^selecionar o botao abrir conta para sua empresa$")
	public void selecionar_o_botao_abrir_conta_para_sua_empresa() throws Throwable {
		m.pausa(2000, null);
		m.click(e.getBtnparasuaempresa(), "Abrindo conta para empresa");
	}

	@Given("^selecionar o botao conta pessoa unica$")
	public void selecionar_o_botao_conta_pessoa_unica() throws Throwable {
	    m.click(e.getBtncontapessoaunica(), "abrindo conta empresa");
	}
	@When("^selecionar o botao continuar$")
	public void selecionar_o_botao_continuar() throws Throwable {
	    m.pausa(1000, null);
		m.click(e.getBtncontinuar(), "clicando botao continuar");
	}
}
