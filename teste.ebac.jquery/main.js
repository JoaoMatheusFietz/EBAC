$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoimagemnova = $('#endereco-imagem-nova').val();
        const novoitem = $('<li style="display : none "> </li>');
        $(`<img src="${enderecoimagemnova}">`).appendTo(novoitem);

        $(`
            <div class="overlay">
                <a href=" ${enderecoimagemnova} " target="_blank">
                Ver Imagem 
                </a>
            </div>
        `).appendTo(novoitem);
        
        $(novoitem).appendTo('ul');
        $(novoitem).fadeIn(1000);
        $("#endereco-imagem-nova").val('');
    });
});
