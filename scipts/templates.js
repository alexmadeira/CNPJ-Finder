const empresa  =  '<div class="row">'+
                  '<div class="col">'+
                    '<strong>Número de inscrição</strong>'+
                    '<p class="mb-1 px-2">{{cnpj}}</p>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="col">'+
                    '<strong>Nome empresarial</strong>'+
                    '<p class="mb-1 px-2">{{nome}}</p>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                '<div class="col">'+
                  '<strong>Nome fantasia</strong>'+
                    '<p class="mb-1 px-2">{{fantasia}}</p>'+
                '</div>'+
                '<div class="col-3">'+
                  '<strong>Situação</strong>'+
                  '<p class="mb-1 px-2">{{situacao}}</p>'+
                  '</div>'+
                '</div>'+
                '<hr />';

const endereco =  '<div class="row ">'+
                  '<div class="col-8">'+
                    '<strong>Logradouro</strong>'+
                    '<p class="mb-1 px-2">{{logradouro}}</p>'+
                  '</div>'+
                  '<div class="col-1">'+
                    '<strong>NÚMERO</strong>'+
                    '<p class="mb-1 px-2">{{numero}}</p>'+
                  '</div>'+
                  '<div class="col-3">'+
                    '<strong>Complemento</strong>'+
                    '<p class="mb-1 px-2">{{complemento}}</p>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="col-4">'+
                    '<strong>CEP</strong>'+
                    '<p class="mb-1 px-2">{{cep}}</p>'+
                  '</div>'+
                  '<div class="col-4">'+
                    '<strong>Bairro</strong>'+
                    '<p class="mb-1 px-2">{{bairro}}</p>'+
                  '</div>'+
                  '<div class="col-3">'+
                    '<strong>município</strong>'+
                    '<p class="mb-1 px-2">{{municipio}}</p>'+
                  '</div>'+
                  '<div class="col-1">'+
                    '<strong>UF</strong>'+
                    '<p class="mb-1 px-2">{{uf}}</p>'+
                  '</div>'+
                '</div>'+
                '<hr />';


const acordionItem =  '<div class="accordion-item">'+
                        '<h2 class="accordion-header" id="{{cnpj}}">'+
                          '<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-{{id}}" aria-expanded="false" aria-controls="flush-{{id}}">'+
                            '{{title}}'+
                          '</button>'+
                        '</h2>'+
                        '<div id="flush-{{id}}" class="accordion-collapse collapse" aria-labelledby="{{cnpj}}" data-bs-parent="#accordionCNPJs">'+
                          '<div class="accordion-body">{{content}}</div>'+
                        '</div>'+
                      '</div>';

const buttonLoading = '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> Loading...'
const buttonFind = '<i class="fa-solid fa-magnifying-glass"></i> Buscar'
const totalLoading  ='<figure class="pt-3 ps-2"><figcaption class="blockquote-footer">{{message}}</figcaption></figure>'
