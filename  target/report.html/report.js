$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FormularioAberturaConta.feature");
formatter.feature({
  "line": 3,
  "name": "Abertura de conta",
  "description": "",
  "id": "abertura-de-conta",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Fluxo formulario de abertura de conta pessoa fisica",
  "description": "",
  "id": "abertura-de-conta;fluxo-formulario-de-abertura-de-conta-pessoa-fisica",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@pessoafisica"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que o usuario acesse a url \"https://www.original.com.br/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "selecione o botao abrir nova conta",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "selecionar o botao abrir conta para voce",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#When o usuario preencher o formulario"
    }
  ],
  "line": 14,
  "name": "preencher campo nome \"\u003cnome\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "selecionar o botao quero ser cliente",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "valido o texto falta pouco",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "abertura-de-conta;fluxo-formulario-de-abertura-de-conta-pessoa-fisica;",
  "rows": [
    {
      "cells": [
        "nome"
      ],
      "line": 19,
      "id": "abertura-de-conta;fluxo-formulario-de-abertura-de-conta-pessoa-fisica;;1"
    },
    {
      "cells": [
        "roberto"
      ],
      "line": 20,
      "id": "abertura-de-conta;fluxo-formulario-de-abertura-de-conta-pessoa-fisica;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Fluxo formulario de abertura de conta pessoa fisica",
  "description": "",
  "id": "abertura-de-conta;fluxo-formulario-de-abertura-de-conta-pessoa-fisica;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    },
    {
      "line": 6,
      "name": "@pessoafisica"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "que o usuario acesse a url \"https://www.original.com.br/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "selecione o botao abrir nova conta",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "selecionar o botao abrir conta para voce",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 13,
      "value": "#When o usuario preencher o formulario"
    }
  ],
  "line": 14,
  "name": "preencher campo nome \"roberto\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "selecionar o botao quero ser cliente",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "valido o texto falta pouco",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.original.com.br/",
      "offset": 28
    }
  ],
  "location": "Steps.que_o_usuario_acesse_a_url(String)"
});
formatter.result({
  "duration": 36435816000,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 111\nCurrent browser version is 114.0.5735.134 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RDKKH11\u0027, ip: \u0027192.168.6.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\t(No symbol) [0x0118DCE3]\n\t(No symbol) [0x011239D1]\n\t(No symbol) [0x01034DA8]\n\t(No symbol) [0x01054F6C]\n\t(No symbol) [0x01050D11]\n\t(No symbol) [0x0104ED19]\n\t(No symbol) [0x010815AE]\n\t(No symbol) [0x0108129C]\n\t(No symbol) [0x0107ACC6]\n\t(No symbol) [0x01056F68]\n\t(No symbol) [0x010580CD]\n\tGetHandleVerifier [0x01403832+2506274]\n\tGetHandleVerifier [0x01439794+2727300]\n\tGetHandleVerifier [0x0143E36C+2746716]\n\tGetHandleVerifier [0x01236690+617600]\n\t(No symbol) [0x0112C712]\n\t(No symbol) [0x01131FF8]\n\t(No symbol) [0x011320DB]\n\t(No symbol) [0x0113C63B]\n\tBaseThreadInitThunk [0x765D00C9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77307B4E+286]\n\tRtlGetAppContainerNamedObjectPath [0x77307B1E+238]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Metodos.Metodos.executarnavegador(Metodos.java:70)\r\n\tat Steps.Steps.que_o_usuario_acesse_a_url(Steps.java:19)\r\n\tat ✽.Given que o usuario acesse a url \"https://www.original.com.br/\"(FormularioAberturaConta.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.selecione_o_botao_abrir_nova_conta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.selecionar_o_botao_abrir_conta_para_voce()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "roberto",
      "offset": 22
    }
  ],
  "location": "Steps.preencher_campo_nome(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.selecionar_o_botao_quero_ser_cliente()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.valido_o_texto_falta_pouco()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Fluxo formulario de abertura de conta pessoa fisica",
  "description": "",
  "id": "abertura-de-conta;fluxo-formulario-de-abertura-de-conta-pessoa-fisica",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@pessoajuridica"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "que o usuario acesse a url \"https://www.original.com.br/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "selecione o botao abrir nova conta",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "selecionar o botao abrir conta para sua empresa",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "selecionar o botao conta pessoa unica",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "o usuario preencher o formulario",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "#When preencher campo nome \"\u003cnome\u003e\""
    }
  ],
  "line": 31,
  "name": "selecionar o botao continuar",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "valido o texto falta pouco",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.original.com.br/",
      "offset": 28
    }
  ],
  "location": "Steps.que_o_usuario_acesse_a_url(String)"
});
formatter.result({
  "duration": 8501680000,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 111\nCurrent browser version is 114.0.5735.134 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-RDKKH11\u0027, ip: \u0027192.168.6.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.17\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\t(No symbol) [0x0118DCE3]\n\t(No symbol) [0x011239D1]\n\t(No symbol) [0x01034DA8]\n\t(No symbol) [0x01054F6C]\n\t(No symbol) [0x01050D11]\n\t(No symbol) [0x0104ED19]\n\t(No symbol) [0x010815AE]\n\t(No symbol) [0x0108129C]\n\t(No symbol) [0x0107ACC6]\n\t(No symbol) [0x01056F68]\n\t(No symbol) [0x010580CD]\n\tGetHandleVerifier [0x01403832+2506274]\n\tGetHandleVerifier [0x01439794+2727300]\n\tGetHandleVerifier [0x0143E36C+2746716]\n\tGetHandleVerifier [0x01236690+617600]\n\t(No symbol) [0x0112C712]\n\t(No symbol) [0x01131FF8]\n\t(No symbol) [0x011320DB]\n\t(No symbol) [0x0113C63B]\n\tBaseThreadInitThunk [0x765D00C9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77307B4E+286]\n\tRtlGetAppContainerNamedObjectPath [0x77307B1E+238]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Metodos.Metodos.executarnavegador(Metodos.java:70)\r\n\tat Steps.Steps.que_o_usuario_acesse_a_url(Steps.java:19)\r\n\tat ✽.Given que o usuario acesse a url \"https://www.original.com.br/\"(FormularioAberturaConta.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.selecione_o_botao_abrir_nova_conta()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.selecionar_o_botao_abrir_conta_para_sua_empresa()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.selecionar_o_botao_conta_pessoa_unica()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.o_usuario_preencher_o_formulario()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.selecionar_o_botao_continuar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.valido_o_texto_falta_pouco()"
});
formatter.result({
  "status": "skipped"
});
});