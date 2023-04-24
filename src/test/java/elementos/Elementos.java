package elementos;

import org.openqa.selenium.By;

public class Elementos {
	
	private By btnAbrirConta = By.cssSelector("body > div.viewport-primary > nav.nav-desktop > div.right > div.nav-item.nav-item-nova-conta > a");
	private By btnParaVoce = By.id("bt1");
	private By campoNome = By.id("nome");
	private By campoTelefone = By.id("telefone");
	private By campoEmail = By.id("email");
	private By campoCPF = By.id("cpf");
	private By BybtnQueroSerCliente = By.id("btnEnviar");
	private By textoFaltaPouco = By.cssSelector("#pu-modalSucesso > div > div:nth-child(2) > p > span:nth-child(1)");

	public By getBtnAbrirConta() {
		return btnAbrirConta;
	}

	public By getBtnParaVoce() {
		return btnParaVoce;
	}

	public By getCampoNome() {
		return campoNome;
	}

	public By getCampoTelefone() {
		return campoTelefone;
	}

	public By getCampoEmail() {
		return campoEmail;
	}

	public By getCampoCPF() {
		return campoCPF;
	}

	public By getBybtnQueroSerCliente() {
		return BybtnQueroSerCliente;
	}

	public By getTextoFaltaPouco() {
		return textoFaltaPouco;
	}
}
