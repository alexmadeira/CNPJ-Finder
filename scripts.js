function getCnpj() {
  $.ajax({
    'url':'https://receitaws.com.br/v1/cnpj/28947502000143',
    "type":'GET',
    "dataType":'jsonp',
    "success": function (data){
      console.log(data)
    }
  })
}
setTimeout(() => {
  getCnpj()
}, 2000);
