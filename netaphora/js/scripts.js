//Options
requiredMsg = 'Elcampo es obligatorio';
dniMsg = 'Introduzca un dni válido';
numberMsg = 'Este campo solo admite valores numéricos';
emailMsg = 'Introduzca una dirección válida de correo';
i=0;
var obj="";
var requireds = new Map();
$(document).ready(function() {

    $('.tx-required').each(function(){
    	$(this).addClass('tx-' + i);
    	$(this).after('<span class="req">*f</span><span class="alert-required-' + i + ' alert">' + requiredMsg + '</span>');
    	var objKey = $(this)
    	get_string=$(this).next().next().attr('class');
    	requireds.set($(this).attr('class'), get_string);
    	i++;

    });
    console.log(requireds)
    $('.tx-form .tx-email').after('<span class="alert">' + emailMsg + '</span>');
    $('.tx-form .tx-dni').after('<span class="alert">' + dniMsg + '</span>');
    $('.tx-form .tx-number').after('<span class="alert">' + numberMsg + '</span>');
    $('.alert').hide();
    $('.alert-number').hide();
    $('.tx-submit').click(function() {

    	$(this).closest('.tx-form').find('.tx-required').each(function(){
    		str = $(this).val();
    		
    		if(str==""){
    			obj = $(this).attr('class');
    			obj=obj.split(' ');
    			obj = obj.pop().slice(-1);
    			obj='.alert-required-' + obj;
    			objt=obj
    			console.log(obj)
    			$(obj).show();
    			i++;
    		}else{
    			console.log('gh' + obj)
    			$(objt).hide();
    		}
    	});

    	return false;
    });

});



