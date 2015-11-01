$(document).ready(function () 
{
	

	//User press enter to add item
	$('#item-textbox').keyup(function (enter) 
	    {
	        if (enter.keyCode == 13) 
	        {
	            $('#btnAdd').click();
	        }
	    });
	  
	addItem();


	function addItem()
	{
		// Validate if user enter any text before add to item list
		// If user enter nothing prompt error message
		// else prepend to list, clear out text box, and hide error message
		//var input = '$('input#item-textbox').val()';
		$('#btnAdd').click(function() 
			{
				if( $('#item-textbox').val().trim().length == 0 )
					{
						// error if no text enter
						$('#error').show();
						$('#item-textbox').val("");
					}
				 	else 
				 		{ 
							$('.items').prepend('<li class="item"><span class="checked"></span>' + 
												$('#item-textbox').val() + 
												'<span class="delete"></span>' +
												'</li>');
							$('#item-textbox').val("");
							$('#error').hide();
						};	
		
			});



	}

	// when user clicks on cross off item on list call list
	// if uncheck an item, use toggle to go back original ul item
	// .closest go up to multilevel to reach to ul
	check();

	function check()
	{
		$('.items').on('click', '.checked', function() 
		{
			$(this).closest('li').toggleClass('item done');	
		});	

	}

	// When user remove an item (only the li that associates with)
	remove();

	function remove()
	{
		$('.items').on('click', '.delete', function() 
		{
			// .parent() -only goes up one level up
			$(this).parent().remove();
		});

	}

	
    


});