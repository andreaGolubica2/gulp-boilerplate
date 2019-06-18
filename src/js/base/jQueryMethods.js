(function($){
    // U ovom prostoru kreirate sve custom jQuery funkcije.

    $.fn.getFormData = function(){
        let data = {};
        let dataArray = $(this).serializeArray();

        for(let i=0; i < dataArray.length; i++){
            data[dataArray[i].name] = dataArray[i].value;
        }

        return data;
    }


}) (jQuery);


//radimo van jQueria; prednost: nalazi se na jednom mjestu, netreba mjenjati na .drugih mjesta na kojem je otvoreno. 

let getLoader = function(){
    let html =  '';            //
        html += '<div class="loader"> '; 
        html += '<img src="/assets/images/loader.svg">';
        html += '</div>';

        return html;
}

let setAjaxMessages = function(message){
    let html = '<div class="message"> ' + message + '</div>';

    return html;

}