
$('h1').click(function(){
	$(this).text("I was changed!")
})

// Click "Submit" to fade out all content.
$('input').eq(1).click(function(){
  $('.container').fadeOut(1000)  
	console.log(this);
})
