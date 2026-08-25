/* ===================== CURRICULO: Estudo Certo =====================
   Dados especificos deste "produto" - materias, paginas, apostilas, tema e
   configuracao padrao de sincronizacao. O motor (index.html/engine) le
   tudo isso de window.CURRICULO e nao tem nada fixo de Petrobras nele.

   ATUALIZADO EM 25/08/2026 (Fase 3 - pos-edital Transpetro): estrutura
   reconstruida para seguir as matérias do EDITAL real (cada item em negrito
   do conteudo programatico virou uma materia aqui), em vez dos "cursos" do
   site do Estrategia Concursos. Ver contexto/planejamento/fase2-mapeamento-
   conteudo-2026-08-25.md para o mapeamento completo aula-nova <-> aula-antiga
   e o veredito de confianca de cada uma. Lingua Inglesa foi preservada tal
   qual estava (fora de escopo do edital atual, mas sem perder progresso).
   ========================================================================= */
window.CURRICULO = {
  storeKey: "estudo-certo-v1",
  storeKeyLegacy: "petrobras-study-tracker-v1",
  tema: {
    nome: "Estudo Certo",
    corPrimaria: "#046A38",
    corSecundaria: "#FCD116"
  },
  subjects: [
  { name:"Língua Portuguesa", aulas:["00 - Apresentação do Curso","01 - Ortografia e Acentuação","02 - Pronomes","03 - Conjunções","04 - Verbos e Correlação Verbal","05 - Sintaxe da Oração","06 - Orientação Adverbial e Orações Subordinadas","07 - Concordância","08 - Crase","09 - Coesão Textual","10 - Interpretação de Textos","11 - Resumo"] },
  { name:"Matemática Básica", aulas:["00 - Operações Fundamentais","01 - Regra de Três Simples","02 - Porcentagem"] },
  { name:"Lógica", aulas:["00 - Introdução ao Estudo das Funções","01 - Função do 1º Grau","02 - Função do 2º Grau","03 - Exponenciais","04 - Logaritmo","05 - Sequências: PA e PG","06 - Análise Combinatória","07 - Raciocínio Sequencial","08 - Orientação Temporal e Espacial","09 - Associação Lógica e Verdades e Mentiras","10 - Estruturas Lógicas I","11 - Estruturas Lógicas II","12 - Equivalências e Negações Lógicas","13 - Diagramas Lógicos","14 - Conectivos Lógicos: Questões Clássicas"] },
  { name:"Estatística", aulas:["00 - Probabilidade","01 - Introdução à Estatística","02 - Médias","03 - Mediana, Quartil e Box Plot","04 - Moda","05 - Medidas de Dispersão"] },
  { name:"Administração Financeira e Orçamentária", aulas:["00 - Equivalência de Capitais","01 - Análise de Investimentos","02 - Orçamento Empresarial","03 - Análise de Balanços e Alavancagem","04 - Revisão: Orçamento e Caixa","05 - Revisão: Liquidez e Estrutura de Capital"] },
  { name:"Administração da Produção e Compras", aulas:["00 - Gestão da Produção e Operações (Parte 1)","01 - Gestão da Produção e Operações (Parte 2)"] },
  { name:"Contratação", aulas:["01 - Lei das Estatais (13.303/2016)","02 - Estatuto ME e EPP (LC 123/2006)"] },
  { name:"Gerenciamento de Projetos", aulas:["00 - Gestão de Projetos"] },
  { name:"Conflitos e Negociação", aulas:["00 - Gestão de Conflitos","01 - Negociação"] },
  { name:"Administração de Sistemas de Informação", aulas:["Única - Sistemas de Informação"] },
  { name:"Estratégia Empresarial", aulas:["00 - Conceitos Gerais e Introdutórios","01 - Planejamento","02 - Ferramentas Estratégicas","03 - Organização e Estrutura Organizacional"] },
  { name:"Administração Mercadológica", aulas:["00 - Apresentação do Curso","01 - Marketing (Parte 1)","02 - Marketing (Parte 2)","03 - Marketing (Parte 3)","04 - Atendimento"] },
  { name:"Contabilidade", aulas:["00 - Conceitos e Objetivos","01 - Situação Líquida e Patrimônio I","01B - Situação Líquida e Patrimônio II","02 - Plano de Contas I","02B - Plano de Contas II","03 - Regime de Competência e Caixa","04 - Balanço Patrimonial e Operações Diversas","06 - Demonstração do Resultado do Exercício","07 - Princípios Contábeis"] },
  { name:"Processo Decisório", aulas:["00 - Processo Decisório"] },
  { name:"Administração de Recursos Humanos", aulas:["00 - Objetivos e Características da Gestão de Pessoas","01 - Gestão do Desempenho","02 - Treinamento e Desenvolvimento","03 - Gestão do Conhecimento","04 - Análise e Descrição de Cargos e Carreiras","05 - Remuneração, Salários e Benefícios","06 - Direção e Liderança","07 - Cultura e Clima","08 - Trabalho em Equipe"] },
  { name:"Sustentabilidade e Responsabilidade Socioambiental", aulas:["00 - Apresentação do Curso","01 - Responsabilidade Social e Sustentabilidade"] },
  { name:"Inglês", aulas:["00 - Interpretação e Cognatos","01 - Substantivos e Pronomes","02 - Adjetivos e Advérbios","03 - Verbos Frasais","04 - Tempos Verbais I","05 - Tempos Verbais II","06 - Idioms","Extra - Questões CESGRANRIO"] },
  { name:"Conteúdo Fora do Escopo Atual (Pré-Edital)", aulas:["Única - Horas de estudo em conteúdo que saiu do edital pós-edital"] },
  ],
  pageTotals: [[{"total":72,"theory":72},{"total":51,"theory":43},{"total":103,"theory":103},{"total":63,"theory":45},{"total":78,"theory":64},{"total":74,"theory":63},{"total":58,"theory":58},{"total":73,"theory":58},{"total":67,"theory":54},{"total":94,"theory":94},{"total":168,"theory":125},{"total":434,"theory":434}],[{"total":78,"theory":37},{"total":45,"theory":17},{"total":105,"theory":36}],[{"total":93,"theory":50},{"total":220,"theory":56},{"total":124,"theory":69},{"total":148,"theory":51},{"total":144,"theory":69},{"total":91,"theory":36},{"total":120,"theory":80},{"total":104,"theory":21},{"total":126,"theory":42},{"total":141,"theory":36},{"total":162,"theory":70},{"total":143,"theory":45},{"total":138,"theory":75},{"total":88,"theory":22},{"total":73,"theory":24}],[{"total":147,"theory":72},{"total":188,"theory":74},{"total":188,"theory":74},{"total":232,"theory":87},{"total":155,"theory":39},{"total":141,"theory":72}],[{"total":92,"theory":27},{"total":210,"theory":62},{"total":158,"theory":158},{"total":92,"theory":92},{"total":103,"theory":103},{"total":108,"theory":108}],[{"total":68,"theory":68},{"total":77,"theory":77}],[{"total":143,"theory":69},{"total":10,"theory":10}],[{"total":174,"theory":131}],[{"total":63,"theory":50},{"total":42,"theory":30}],[{"total":61,"theory":33}],[{"total":73,"theory":48},{"total":125,"theory":88},{"total":116,"theory":74},{"total":135,"theory":109}],[{"total":8,"theory":8},{"total":104,"theory":104},{"total":73,"theory":73},{"total":99,"theory":54},{"total":148,"theory":96}],[{"total":43,"theory":31},{"total":33,"theory":24},{"total":37,"theory":26},{"total":78,"theory":45},{"total":44,"theory":16},{"total":131,"theory":61},{"total":89,"theory":28},{"total":102,"theory":57},{"total":31,"theory":20}],[{"total":103,"theory":84}],[{"total":122,"theory":110},{"total":117,"theory":102},{"total":110,"theory":101},{"total":94,"theory":75},{"total":56,"theory":44},{"total":76,"theory":68},{"total":97,"theory":70},{"total":109,"theory":83},{"total":110,"theory":95}],[{"total":8,"theory":8},{"total":39,"theory":39}],[{"total":97,"theory":83},{"total":143,"theory":128},{"total":104,"theory":93},{"total":119,"theory":102},{"total":87,"theory":76},{"total":102,"theory":89},{"total":121,"theory":98},{"total":43,"theory":33}],[{"total":0,"theory":0}]],
  apostilaFiles: [["Aula 00 - Apresentacao do Curso.pdf", "Aula 01 - Ortografia e Acentuacao.pdf", "Aula 02 - Pronomes.pdf", "Aula 03 - Conjuncoes.pdf", "Aula 04 - Verbos e Correlacao Verbal.pdf", "Aula 05 - Sintaxe da Oracao.pdf", "Aula 06 - Orientacao Adverbial e Oracoes Subordinadas.pdf", "Aula 07 - Concordancia.pdf", "Aula 08 - Crase.pdf", "Aula 09 - Coesao Textual.pdf", "Aula 10 - Interpretacao de Textos.pdf", "Aula 11 - Resumo.pdf"], ["Aula 00 - Operacoes Fundamentais.pdf", "Aula 01 - Regra de Tres Simples.pdf", "Aula 02 - Porcentagem.pdf"], ["Aula 00 - Introducao ao Estudo das Funcoes.pdf", "Aula 01 - Funcao do 1 Grau.pdf", "Aula 02 - Funcao do 2 Grau.pdf", "Aula 03 - Exponenciais.pdf", "Aula 04 - Logaritmo.pdf", "Aula 05 - Sequencias PA e PG.pdf", "Aula 06 - Analise Combinatoria.pdf", "Aula 07 - Raciocinio Sequencial.pdf", "Aula 08 - Orientacao Temporal e Espacial.pdf", "Aula 09 - Associacao Logica e Verdades e Mentiras.pdf", "Aula 10 - Estruturas Logicas I.pdf", "Aula 11 - Estruturas Logicas II.pdf", "Aula 12 - Equivalencias e Negacoes Logicas.pdf", "Aula 13 - Diagramas Logicos.pdf", "Aula 14 - Conectivos Logicos Questoes Classicas.pdf"], ["Aula 00 - Probabilidade.pdf", "Aula 01 - Introducao a Estatistica.pdf", "Aula 02 - Medias.pdf", "Aula 03 - Mediana Quartil e Box Plot.pdf", "Aula 04 - Moda.pdf", "Aula 05 - Medidas de Dispersao.pdf"], ["Aula 00 - Equivalencia de Capitais.pdf", "Aula 01 - Analise de Investimentos.pdf", "Aula 02 - Orcamento Empresarial.pdf", "Aula 03 - Analise de Balancos e Alavancagem.pdf", "Aula 04 - Revisao Orcamento e Caixa.pdf", "Aula 05 - Revisao Liquidez e Estrutura de Capital.pdf"], ["Aula 00 - Gestao da Producao e Operacoes Parte 1.pdf", "Aula 01 - Gestao da Producao e Operacoes Parte 2.pdf"], ["Aula 01 - Lei das Estatais 13303.pdf", "Aula 02 - Estatuto ME e EPP LC123.pdf"], ["Aula 00 - Gestao de Projetos.pdf"], ["Aula 00 - Gestao de Conflitos.pdf", "Aula 01 - Negociacao.pdf"], ["Aula Unica - Sistemas de Informacao.pdf"], ["Aula 00 - Conceitos Gerais e Introdutorios.pdf", "Aula 01 - Planejamento.pdf", "Aula 02 - Ferramentas Estrategicas.pdf", "Aula 03 - Organizacao e Estrutura Organizacional.pdf"], ["Aula 00 - Apresentacao do Curso.pdf", "Aula 01 - Marketing Parte 1.pdf", "Aula 02 - Marketing Parte 2.pdf", "Aula 03 - Marketing Parte 3.pdf", "Aula 04 - Atendimento.pdf"], ["Aula 00 - Conceitos e Objetivos.pdf", "Aula 01 - Situacao Liquida e Patrimonio I.pdf", "Aula 01B - Situacao Liquida e Patrimonio II.pdf", "Aula 02 - Plano de Contas I.pdf", "Aula 02B - Plano de Contas II.pdf", "Aula 03 - Regime de Competencia e Caixa.pdf", "Aula 04 - Balanco Patrimonial e Operacoes Diversas.pdf", "Aula 06 - Demonstracao do Resultado do Exercicio.pdf", "Aula 07 - Principios Contabeis.pdf"], ["Aula 00 - Processo Decisorio.pdf"], ["Aula 00 - Objetivos e Caracteristicas da Gestao de Pessoas.pdf", "Aula 01 - Gestao do Desempenho.pdf", "Aula 02 - Treinamento e Desenvolvimento.pdf", "Aula 03 - Gestao do Conhecimento.pdf", "Aula 04 - Analise e Descricao de Cargos e Carreiras.pdf", "Aula 05 - Remuneracao Salarios e Beneficios.pdf", "Aula 06 - Direcao e Lideranca.pdf", "Aula 07 - Cultura e Clima.pdf", "Aula 08 - Trabalho em Equipe.pdf"], ["Aula 00 - Apresentacao do Curso.pdf", "Aula 01 - Responsabilidade Social e Sustentabilidade.pdf"], ["Aula 00 - Interpretacao e Cognatos.pdf", "Aula 01 - Substantivos e Pronomes.pdf", "Aula 02 - Adjetivos e Adverbios.pdf", "Aula 03 - Verbos Frasais.pdf", "Aula 04 - Tempos Verbais I.pdf", "Aula 05 - Tempos Verbais II.pdf", "Aula 06 - Idioms.pdf", "Extra - Questoes CESGRANRIO.pdf"], ["(sem apostila - so registro de horas antigas)"]],
  /* ===================== EDITAL: Transpetro, Ênfase 1 - Administração =====================
     Transcrição item a item do conteúdo programático real do edital (não um resumo por bloco).
     Cada item aponta pra aula(s) específica(s) que o cobrem (si = índice da matéria em subjects,
     ai = índice da aula dentro dela). Bloco = categoria/matéria como o PRÓPRIO EDITAL agrupa.
     Um item fica "coberto" quando TODAS as aulas listadas nele estão com studied=true.
     Reconstruído em 25/08/2026 (Fase 3) a partir do mapeamento de conteúdo real (Fase 2) —
     itens sem nenhuma aula listada ainda não têm apostila nova que os cubra (aulas pendentes
     de download ou conteúdo cortado do escopo pós-edital; ver fase2-mapeamento-conteudo-
     2026-08-25.md, seção 12, para o detalhe de cada caso). */
  editalItems: (function(){
    const PT=0, MATBAS=1, LOG=2, EST=3, FIN=4, PROD=5, LEG=6, GP=7, CONF=8, ASI=9, ESTR=10, MKT=11, CONT=12, PD=13, RH=14, SUST=15, ING=16;
    return [
      { bloco:"Língua Portuguesa", item:"Compreensão de textos", aulas:[[PT,10]] },
      { bloco:"Língua Portuguesa", item:"Ortografia oficial", aulas:[[PT,1]] },
      { bloco:"Língua Portuguesa", item:"Mecanismos de coesão textual", aulas:[[PT,9]] },
      { bloco:"Língua Portuguesa", item:"Significação das palavras", aulas:[] },
      { bloco:"Língua Portuguesa", item:"Emprego de tempos e modos verbais", aulas:[[PT,4]] },
      { bloco:"Língua Portuguesa", item:"Emprego das classes de palavras", aulas:[[PT,3],[PT,2]] },
      { bloco:"Língua Portuguesa", item:"Coordenação e de subordinação", aulas:[[PT,5],[PT,6]] },
      { bloco:"Língua Portuguesa", item:"Emprego dos sinais de pontuação", aulas:[] },
      { bloco:"Língua Portuguesa", item:"Concordância verbal e nominal", aulas:[[PT,7]] },
      { bloco:"Língua Portuguesa", item:"Regência verbal e nominal", aulas:[[PT,8]] },
      { bloco:"Língua Portuguesa", item:"Emprego do sinal indicativo de crase", aulas:[[PT,8]] },
      { bloco:"Língua Portuguesa", item:"Colocação dos pronomes átonos", aulas:[[PT,2]] },
      { bloco:"Língua Inglesa", item:"Compreensão de texto escrito em língua inglesa", aulas:[[ING,0],[ING,1],[ING,2],[ING,3],[ING,4],[ING,5],[ING,6]] },
      { bloco:"Língua Inglesa", item:"Itens gramaticais relevantes para a compreensão dos conteúdos semânticos", aulas:[[ING,0],[ING,1],[ING,2],[ING,3],[ING,4],[ING,5],[ING,6]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Matemática Financeira", aulas:[[MATBAS,1],[MATBAS,2],[FIN,0]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Valor do Dinheiro no Tempo", aulas:[[FIN,0]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Risco X Retorno", aulas:[[FIN,1]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Análise de Investimentos", aulas:[[FIN,1]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Alavancagem e Endividamento", aulas:[[FIN,3]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Planejamento Financeiro e Orçamentário", aulas:[[FIN,2]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Administração do Capital de Giro", aulas:[[FIN,2]] },
      { bloco:"Administração Financeira e Orçamentária", item:"Fontes de Financiamento a Longo Prazo", aulas:[[FIN,3]] },
      { bloco:"Administração da Produção e Compras", item:"Estratégia de Suprimento (Strategic Sourcing)", aulas:[] },
      { bloco:"Administração da Produção e Compras", item:"Administração de Compras", aulas:[] },
      { bloco:"Administração da Produção e Compras", item:"Gestão de Estoques: MRP, Ponto de Ressuprimento, Lote Econômico de Compra, Just in Time, Sistema de Rastreamento de Materiais (RFID, Código de Barras e Unique Identification Device)", aulas:[] },
      { bloco:"Administração da Produção e Compras", item:"Planejamento e Controle da Produção", aulas:[[PROD,0]] },
      { bloco:"Administração da Produção e Compras", item:"Gestão da Cadeia de Suprimentos (Supply Chain Management)", aulas:[] },
      { bloco:"Contratação", item:"Artigos 28 ao 91 da Lei nº 13.303 de 30 de junho de 2016 (Estatuto Jurídico da empresa pública, da sociedade de economia mista e de suas subsidiárias)", aulas:[[LEG,0]] },
      { bloco:"Contratação", item:"Artigos 42 ao 49 da Lei complementar nº 123, de 14 de dezembro de 2006 (Estatuto nacional da microempresa e da empresa de pequeno porte) e alterações", aulas:[[LEG,1]] },
      { bloco:"Gerenciamento de Projetos", item:"Ciclo de Vida", aulas:[[GP,0]] },
      { bloco:"Gerenciamento de Projetos", item:"Estrutura analítica de projeto", aulas:[[GP,0]] },
      { bloco:"Gerenciamento de Projetos", item:"Estudo de viabilidade técnica e econômica", aulas:[[GP,0]] },
      { bloco:"Gerenciamento de Projetos", item:"Gerenciamento das Aquisições do Projeto (PMBok 7ª ed)", aulas:[[GP,0]] },
      { bloco:"Gerenciamento de Projetos", item:"Metodologias Ágeis", aulas:[[GP,0]] },
      { bloco:"Conflitos e Negociação", item:"Conflitos e Negociação", aulas:[[CONF,0],[CONF,1]] },
      { bloco:"Administração de Sistemas de Informação", item:"Sistemas operacionais e sistemas de apoio à decisão", aulas:[[ASI,0]] },
      { bloco:"Administração de Sistemas de Informação", item:"Gestão dos sistemas de informação: dimensões, competências, metodologias e ferramentas", aulas:[[ASI,0]] },
      { bloco:"Estratégia Empresarial", item:"Estruturas Organizacionais", aulas:[[ESTR,3]] },
      { bloco:"Estratégia Empresarial", item:"Estratégia Organizacional", aulas:[[ESTR,1],[ESTR,2]] },
      { bloco:"Estratégia Empresarial", item:"Ferramentas da Análise Estratégica", aulas:[[ESTR,1],[ESTR,2]] },
      { bloco:"Estratégia Empresarial", item:"Processo de Administração Estratégica", aulas:[[ESTR,1],[ESTR,2]] },
      { bloco:"Estratégia Empresarial", item:"Avaliação do ambiente Externo e das Capacidades da Empresa", aulas:[[ESTR,1],[ESTR,2]] },
      { bloco:"Estratégia Empresarial", item:"Estratégias no Nível do Negócio", aulas:[[ESTR,1],[ESTR,2]] },
      { bloco:"Estratégia Empresarial", item:"Estratégias Corporativas", aulas:[[ESTR,1],[ESTR,2]] },
      { bloco:"Estratégia Empresarial", item:"Implementação, gestão e mensuração das estratégias", aulas:[[ESTR,1],[ESTR,2]] },
      { bloco:"Administração Mercadológica", item:"Marketing", aulas:[[MKT,1],[MKT,2],[MKT,3]] },
      { bloco:"Administração Mercadológica", item:"Marketing B2B", aulas:[[MKT,1],[MKT,2]] },
      { bloco:"Administração Mercadológica", item:"Marketing de Serviços", aulas:[[MKT,1],[MKT,3]] },
      { bloco:"Administração Mercadológica", item:"Pesquisa de Mercado", aulas:[[MKT,1],[MKT,3]] },
      { bloco:"Administração Mercadológica", item:"Planejamento de Marketing", aulas:[[MKT,1],[MKT,2]] },
      { bloco:"Administração Mercadológica", item:"Estratégias de Marketing", aulas:[[MKT,1],[MKT,2],[MKT,3]] },
      { bloco:"Administração Mercadológica", item:"Relacionamento com Clientes", aulas:[[MKT,1]] },
      { bloco:"Administração Mercadológica", item:"Gestão Comercial", aulas:[[MKT,1],[MKT,2]] },
      { bloco:"Administração Mercadológica", item:"Comportamento do Consumidor", aulas:[[MKT,1],[MKT,2],[MKT,3]] },
      { bloco:"Administração Mercadológica", item:"Marca", aulas:[[MKT,1]] },
      { bloco:"Administração Mercadológica", item:"Mídias digitais", aulas:[[MKT,1],[MKT,2],[MKT,3]] },
      { bloco:"Administração Mercadológica", item:"Plataformização", aulas:[[MKT,1]] },
      { bloco:"Contabilidade", item:"Contabilidade Geral", aulas:[[CONT,0],[CONT,1],[CONT,2],[CONT,3],[CONT,4],[CONT,5],[CONT,6],[CONT,7],[CONT,8]] },
      { bloco:"Contabilidade", item:"Contabilidade de Custos", aulas:[] },
      { bloco:"Contabilidade", item:"Contabilidade Gerencial", aulas:[] },
      { bloco:"Contabilidade", item:"Governança, Compliance e Riscos", aulas:[] },
      { bloco:"Processo Decisório", item:"A Natureza da Decisão", aulas:[[PD,0]] },
      { bloco:"Processo Decisório", item:"O Modelo Racional da Tomada de Decisão", aulas:[[PD,0]] },
      { bloco:"Processo Decisório", item:"Vieses comuns e mitigação", aulas:[[PD,0]] },
      { bloco:"Processo Decisório", item:"Conscientização Limitada", aulas:[[PD,0]] },
      { bloco:"Processo Decisório", item:"Técnicas e Instrumentos de Apoio à Decisão", aulas:[[PD,0]] },
      { bloco:"Administração de Recursos Humanos", item:"Estratégias de RH", aulas:[[RH,0]] },
      { bloco:"Administração de Recursos Humanos", item:"Remuneração e Benefícios", aulas:[[RH,5]] },
      { bloco:"Administração de Recursos Humanos", item:"Desempenho", aulas:[[RH,1]] },
      { bloco:"Administração de Recursos Humanos", item:"Cultura Organizacional", aulas:[[RH,7]] },
      { bloco:"Administração de Recursos Humanos", item:"Desenvolvimento de RH", aulas:[[RH,2]] },
      { bloco:"Administração de Recursos Humanos", item:"Gestão do Conhecimento", aulas:[[RH,3]] },
      { bloco:"Administração de Recursos Humanos", item:"Carreira e Sucessão", aulas:[[RH,4]] },
      { bloco:"Administração de Recursos Humanos", item:"Liderança e Equipe", aulas:[[RH,6],[RH,8]] },
      { bloco:"Lógica", item:"Funções", aulas:[[LOG,0],[LOG,1],[LOG,2],[LOG,3],[LOG,4]] },
      { bloco:"Lógica", item:"Análise Combinatória", aulas:[[LOG,6]] },
      { bloco:"Lógica", item:"Progressões", aulas:[[LOG,5]] },
      { bloco:"Lógica", item:"Raciocínio Lógico Quantitativo", aulas:[[LOG,10],[LOG,12],[LOG,13],[LOG,9],[LOG,8],[MATBAS,0],[LOG,0]] },
      { bloco:"Estatística", item:"Probabilidade", aulas:[[EST,0]] },
      { bloco:"Estatística", item:"Estatística Descritiva", aulas:[[EST,1],[EST,2],[EST,3],[EST,4],[EST,5]] },
      { bloco:"Sustentabilidade e Responsabilidade Socioambiental", item:"Gestão Ambiental nas Organizações", aulas:[[SUST,1]] },
      { bloco:"Sustentabilidade e Responsabilidade Socioambiental", item:"Relacionamento com Públicos de Interesse", aulas:[[SUST,1]] },
      { bloco:"Sustentabilidade e Responsabilidade Socioambiental", item:"Modelos e Práticas de Relatórios Ambientais", aulas:[] },
      { bloco:"Sustentabilidade e Responsabilidade Socioambiental", item:"Indicadores de Gestão Ambiental e ESG", aulas:[] }
    ];
  })(),
  supabaseUrl: "https://uwriyzilfyluvdapzorm.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3cml5emlsZnlsdXZkYXB6b3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxMjE2NTUsImV4cCI6MjEwMTY5NzY1NX0.c0JCN6su4YWreab4YELDCITH_qrS7lFODJfR7jJMSIA",
  // Cópia web (GitHub Pages): os PDFs não vão junto no repositório público (ficariam
  // acessíveis a qualquer um com o link). Em vez de Apostilas/<Matéria>/<Arquivo>.pdf
  // como caminho estático, o app pede uma URL assinada e temporária pro bucket
  // privado do Supabase Storage — só funciona logado, e o link expira sozinho.
  // Ver abrirApostilaWeb() no index.html e apostilaStorageBucket abaixo.
  apostilasViaSupabase: true,
  apostilaStorageBucket: "apostilas"
};
