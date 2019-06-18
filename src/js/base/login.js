let handleLogin = function(options){
    if(options){
        if(options.login){
            $('#loginForm').on('submit', function(e){
                e.preventDefault();

                let _thisloginForm = $(this);           //govori da gumb disabela funkcionalnost
                let data = $(this).getFormData();

                $.ajax({
                    crossDomain: true, 
                    url: '/data/login.json',
                    method: 'GET',
                    contentType: 'application/json',
                    headers: {
                            'Access-Control-Allow-Origin': '*'            //definiramo putanju samo za jedan file
                    },
                    data: JSON.stringify(data),
                    beforeSend: function(){         //zelimo u obrscu disable-ati gumb
                        $('#loginModal .modal-content').prepend(getLoader());              //zima sa vrha
                        $('button', _thisloginForm).prop('disabled', true);

                    },
                    sucess: function(data){
                        if(data.status == 0){
                            $('#loginModal .loader').append(setAjaxMessages
                                (data.message));
                        } else if (data.status == 1 ){
                            $('#loginModal .loader').append(setAjaxMessages
                                (data.message));
                                setTimeout(function(){
                                    window.location('/admin');
                                }, 2000);
                        }  
                    },
                    error: function(xhr){
                        $('#loginModal .loader').append(setAjaxMessages('Došlo je do pogreške! Pokušaj ponovo ili kontaktirajte administratora!'));

                    },
                    complete: function(){
                        setTimeout(function(){
                                $('.loader').slideDown(500).delay(700).remove();
                                $('button', _thisloginForm).prop('disabled', false);
                        }, 2500);
                    }

                });
                console.log(data);
            });

            $('#loginModal').on('hidden.bs.modal', function(e){      //moguce je vezati nekoliko modala
                e.preventDefault();

                $('#loginForm').trigger('reset').parsley().reset();
            });       
        }
    }
};