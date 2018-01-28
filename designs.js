//makeGrid: Takes height and width submitted by user and makes a grid
function makeGrid() {
$('#pixelCanvas').html("");
	const height = $("#inputHeight").val();
	const width = $("#inputWeight").val();
	
	for(let y = 0; y < height; y++){
		$('#pixelCanvas').append("<tr></tr>");
		
		for(let x = 0; x < width; x++){
			$('#pixelCanvas')
				.children()
				.last()
				.append("<td></td>");
		}//End for loop for setting grid width
	}//End loop for setting grid height

}//End makeGrid()

//Hide and show function for grid sizer
$("#hideShow").click(function(){
	if ($(this).prop('checked')){
		$('#sizePicker').hide();
	}else
		$("#sizePicker").show();
});


//Calls makeGrid when submit is clicked
$("form#sizePicker").on("submit",function(e){
	e.preventDefault();
	makeGrid();
});

//Fills the cell with selected color
$("#pixelCanvas").on('click',"td",function(){
	$(this).css('background-color',$('#colorPicker').val());
});
