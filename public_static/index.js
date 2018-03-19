/**
 * Created by deepak on 7/14/17.
 */
var email='';
var password='';
(function($){
    $(function(){
        $('#login1').click(function(){
            email=$('#text1').val();
            password=$('#password1').val();
            $.post({url:'/verifyuser',data:{email:email,password:password},success:function(data){
                console.log(data);
                if(data==='ok') {
                    sessionStorage.setItem('maindata', JSON.stringify({
                        'email': email,
                        'password': password,
                        'verified': data
                    }));
                    $(location).attr('href','/profile.html');

                }
                else{
                    $('#errormsg').html('');
                    $('#errormsg').append(' <div class="card card-warning text-center z-depth-2"> <div class="card-block"><p class="white-text">Something wrong with email or passwoword.</p></div></div>');

                }
            }})


        })
        $('#signup1').click(function () {
            if($('#form4').val()===$('#form5').val()){
                var name=$('#form3').val();
                email=$('#form2').val();
                password=$('#form4').val();
                var check=$('#checkbox1').prop('checked');
                console.log(email+' '+password+" "+name+' '+check);
                sessionStorage.setItem('maindata',JSON.stringify({'email':email,'password':password,'verified':'ok','name':name}));

                $.post({url:'/newuser',data:{name:name,email:email,password:password,'newsletter':check,'premiumuser':false,_id:email+password},success:function(data){console.log(data);
                    $(location).attr('href','/profile.html');}})


            }
            else{
                $(location).attr('href','/');
                console.log('err');
            }
        })









    })
})(jQuery);
