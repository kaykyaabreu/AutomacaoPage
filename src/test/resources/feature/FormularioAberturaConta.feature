
@tag
Feature: Abertura de conta
 

  @pessoafisica
  
  Scenario Outline: Fluxo formulario de abertura de conta pessoa fisica

   Given que o usuario acesse a url "https://www.original.com.br/"
   And selecione o botao abrir nova conta
   And selecionar o botao abrir conta para voce
   #When o usuario preencher o formulario
   When preencher campo nome "<nome>"
   And selecionar o botao quero ser cliente
   Then valido o texto falta pouco
   
Examples:
         |nome   |
         |roberto|
         
   @pessoajuridica
         Scenario: Fluxo formulario de abertura de conta pessoa fisica

   Given que o usuario acesse a url "https://www.original.com.br/"
   And selecione o botao abrir nova conta
   And selecionar o botao abrir conta para sua empresa
   And selecionar o botao conta pessoa unica
   When o usuario preencher o formulario
   #When preencher campo nome "<nome>"
   And selecionar o botao continuar
   Then valido o texto falta pouco