function getCnpj(cnpj) {
  $.ajax({
    'url':`https://receitaws.com.br/v1/cnpj/${cnpj}`,
    "type":'GET',
    "dataType":'jsonp',
    "success": populate
  })
}



function findCnpjList(cnpjList){

  //? 72.381.0001-10;61585865000151;00.063.960/0001-09;00.623.904/0001-73;00.280.273/0002-18;31.565.104/0276-10;14.380.200/0001-21;61585865000151
  var i = 0;
  var total =cnpjList.length
  var maxCounter = Math.ceil(cnpjList.length/3)

  showTotal(total)

  var interval = setInterval(()=>{

    if(!!cnpjList[i]){ getCnpj(cnpjList[i]) }
    if(!!cnpjList[i+1]){ getCnpj(cnpjList[i+1]) }
    if(!!cnpjList[i+2]){ getCnpj(cnpjList[i+2]) }

    i = i+3;
    total = total-3
    showTotal(total)
    if(i >= maxCounter*3) {
      $('.findCNPJ').html(buttonFind).removeClass('disabled')
      $('.inputCNPJ').removeAttr('disabled')

      clearInterval(interval)
    }
  }, 90000);
}


function showTotal(total) {
  const totalMessagem = totalLoading.replace('{{message}}',`Buscando ${total} CNPJ${(total > 1) ? 's' : '' }`)
  $('#totalLoading').html(total > 0 ? totalMessagem : '' )
}

function populate(data) {
  console.log("populate",data)
  const inputEmpresa = empresa
                          .replace('{{cnpj}}',data.cnpj)
                          .replace('{{nome}}',data.nome)
                          .replace('{{fantasia}}',(data.fantasia||'-'))
                          .replace('{{situacao}}',data.situacao)

  const inputEndereco = endereco
                          .replace('{{logradouro}}',data.logradouro)
                          .replace('{{numero}}',data.numero)
                          .replace('{{complemento}}',(data.complemento||'-'))
                          .replace('{{cep}}',data.cep)
                          .replace('{{bairro}}',data.bairro)
                          .replace('{{municipio}}',data.municipio)
                          .replace('{{uf}}',data.uf)

  const inputAcordionItem  = acordionItem
                              .replaceAll("{{id}}", (`${data.nome}-${data.cnpj}`).replace(/\D/g, ""))
                              .replaceAll("{{cnpj}}",data.cnpj)
                              .replaceAll("{{title}}", `${data.nome} ${data.cnpj}`)
                              .replaceAll("{{content}}",`${inputEmpresa} ${inputEndereco}`)

  $('#accordionCNPJs').append(inputAcordionItem)
}

$( document ).ready(()=>{
  $('.findCNPJ').click(()=>{
    $('#accordionCNPJs').html('')
    $('.findCNPJ').html(buttonLoading).addClass('disabled')
    $('.inputCNPJ').attr('disabled','disabled ')

    const cnpjList = $('.inputCNPJ')
                              .val()
                              .replaceAll(' ','')
                              .replaceAll('.','')
                              .replaceAll('-','')
                              .replaceAll('/','')
                              .split(';')
                              .filter(element => !!element);

    findCnpjList(cnpjList)
  })
});



