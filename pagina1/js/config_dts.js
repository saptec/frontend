/* tabela configuração no css*/
// .dataTables_filter label {
//     display: none;
// }

let tabela = $('.table').DataTable({
    language: {
        "sEmptyTable": "Nenhum registro encontrado",
        "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
        "sInfoFiltered": "(Filtrados de _MAX_ registros)",
        "sInfoPostFix": "",
        "sInfoThousands": ".",
        "sLengthMenu": "_MENU_ resultados por página",
        "sLoadingRecords": "Carregando...",
        "sProcessing": "Processando...",
        "sZeroRecords": "Nenhum registro encontrado",
        "sSearch": "Pesquisar",
        "oPaginate": {
            "sNext": "Próximo",
            "sPrevious": "Anterior",
            "sFirst": "Primeiro",
            "sLast": "Último"
        },
        "oAria": {
            "sSortAscending": ": Ordenar colunas de forma ascendente",
            "sSortDescending": ": Ordenar colunas de forma descendente"
        }
    },
    "pagingType": "first_last_numbers", //configurar paginação
    "ordering": true, //desativa ordenação no cabeçalho
    "info": false, // configurar informação da tabela
    "searching": true,// configurar pesquisar
    "lengthChange": false,//configurar controle de quantos por pagina
    "pageLength": 5//configurar quantos por pagina
});

// executa pesquisar
$('.input_pesquisar').on('keyup', function () {
    tabela.search(this.value).draw();
});

 // colocar indice na primeira coluna
 tabela.on('order.dt search.dt', function () {
    tabela.column(0, {search: 'applied', order: 'applied'}).nodes().each(function (cell, i) {
        cell.innerHTML = i + 1;
    });
}).draw();