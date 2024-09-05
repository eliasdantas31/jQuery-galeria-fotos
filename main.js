$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#bnt_cancelar').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const newImg = $('#address_new_img').val()
        const newItem = $('<li style="display: none"></li>')
        $(`<img src="${newImg}" />`).appendTo(newItem)
        $(`
            <div>
                <a href="${newImg}" target="_blanck" title="Ver Imagem em tamanho real">
                    Ver Imagem em tamanho real
                </a>
            </div>
        `).appendTo(newItem)
        $(newItem).appendTo('ul')
        $(newItem).fadeIn(1000)
        $('#addres_new_img').val('')
    })
})

// document.querySelector('header button').addEventListener('click', function(){
    //     alert('Enviado')
    // })

    // document.querySelector('form').addEventListener('submit', function(e){
    //     e.preventDefault()
    // })