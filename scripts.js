function getCnpj(cnpj) {
  $.ajax({
    'url':`https://receitaws.com.br/v1/cnpj/${cnpj}`,
    "type":'GET',
    "dataType":'jsonp',
    "success": populate
  })
}

function populate(data) {

  const cep = data.cep.replace(/\D/g, '').replace(/^([\d]{2})\.*([\d]{3})-*([\d]{3})/,"$1$2-$3");

  console.log(cep)
  const formatData = {...data, cep}

  var empresa = $("#tpl #tpl-empresa").html();
  var endereco = $("#tpl #tpl-endereco").html();

  $("#empresa-output").html( Mustache.to_html(empresa, formatData) );
  $("#endereco-output").html( Mustache.to_html(endereco, formatData) );
}

$( document ).ready(()=>{
  $('.findCNPJ').click(()=>{
    let cnpj = $('.cnpj').val().replace(/\D/g, '')
    getCnpj(cnpj)
  })
});



