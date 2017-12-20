var columns = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "eiusmod", "tempor","do", "ut" ];
var widths = [16, 4, 14, 2, 8, 17, 6, 4, 10, 6, 5, 4, 4];
var showColumns = [true, true, true, true, true, true, true, true, false, true, true, true, true];

$(document).ready(function() {
	$('#selector').hide();
	console.log(getAllUrlParams().columns);
	$('#column-select').on('click',function(){
		columnSelector="<ul class='row'>";
 		
		jQuery.each( columns, function( i, val ) {
			c="";
			if(showColumns[i]==true){
				c="checked";
			};
  			columnSelector +='<li class="col-50"><input id="column-' + i + '" type="checkbox" name="columns" value="' + columns[i] + '" ' + c +'>' + val + '</li>';
		});
		columnSelector += '</ul><div class="row"><input type="submit" class="btn" value="enviar">';
 		$('#selector-content').html(columnSelector);
 		$('#selector').fadeIn();
	});

	i=0;
	style="";

	$('.header-col').each(function() {

		style=widths[i]+"%";
		$(this).html(columns[i]);
		$(this).css('width', style);
		i++;

	});

	i=0;

	$('.content-form').each(function() {
		
		$(this).find('.content-col').each(function() {

			style=widths[i]+"%";
			$(this).html(columns[i]);
			$(this).css('width', style);
			i++;
		
		});
		i=0;

	});

});

function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}