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
	private By btnparasuaempresa = By.id("bt2");
	private By btncontapessoaunica = By.id("bt5");
	private By btncontinuar = By.id("btnEnviar");
	private By getBtncontaempresa = By.id("btnContatoForm");
	private By campoCNPJ = By.id("cnpj");
	
	public By getCampoCNPJ() {
		return campoCNPJ;
	}

	public void setCampoCNPJ(By campoCNPJ) {
		this.campoCNPJ = campoCNPJ;
	}

	public By getGetBtncontaempresa() {
		return getBtncontaempresa;
	}

	public void setGetBtncontaempresa(By getBtncontaempresa) {
		this.getBtncontaempresa = getBtncontaempresa;
	}

	public By getBtncontinuar() {
		return btncontinuar;
	}

	public void setBtncontinuar(By btncontinuar) {
		this.btncontinuar = btncontinuar;
	}

	public By getBtncontapessoaunica() {
		return btncontapessoaunica;
	}

	public void setBtncontapessoaunica(By btncontapessoaunica) {
		this.btncontapessoaunica = btncontapessoaunica;
	}

	public By getBtnAbrirConta() {
		return btnAbrirConta;
	}

	public By getBtnparasuaempresa() {
		return btnparasuaempresa;
	}

	public void setBtnparasuaempresa(By btnparasuaempresa) {
		this.btnparasuaempresa = btnparasuaempresa;
	}

	public void setBtnAbrirConta(By btnAbrirConta) {
		this.btnAbrirConta = btnAbrirConta;
	}

	public void setBtnParaVoce(By btnParaVoce) {
		this.btnParaVoce = btnParaVoce;
	}

	public void setCampoNome(By campoNome) {
		this.campoNome = campoNome;
	}

	public void setCampoTelefone(By campoTelefone) {
		this.campoTelefone = campoTelefone;
	}

	public void setCampoEmail(By campoEmail) {
		this.campoEmail = campoEmail;
	}

	public void setCampoCPF(By campoCPF) {
		this.campoCPF = campoCPF;
	}

	public void setBybtnQueroSerCliente(By bybtnQueroSerCliente) {
		BybtnQueroSerCliente = bybtnQueroSerCliente;
	}

	public void setTextoFaltaPouco(By textoFaltaPouco) {
		this.textoFaltaPouco = textoFaltaPouco;
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
