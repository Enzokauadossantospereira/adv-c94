const { fabric } = require("./fabric");


// Crie a variável canvas
var canvas = new fabric.canvas('myCanvas');
//Defina as posições iniciais das imagens da bola e do buraco.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
    fabric.Image.fromURL("golf-b.png", function (img){
        hole_obj=img;
        hole_obj.scaleToWidht(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top:hole_y,
            left:hole_x
        });
        canvas.add("hole_obj")
        });
	// programe o envio da imagem do buraco de golfe ao canvas
	new_image();
}

function new_image()
{
    fabric.Image.fromURL("bola.png", function (img){
        ball_obj=img;
        ball_obj.scaleToWidht(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top:ball_y,
            left:ball_x
        });
        canvas.add("ball_obj")
        });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique as coordenadas da bola e do buraco para concluir o jogo.
	Identifique as coordenadas, caso forem iguais, remova  a imagem da bola,
	exiba "Você acertou o buraco!!"
	e troque a cor da borda do canvas para vermelho (red). */
	if ((ball_x==hole_x)&&(ball_y==hole_y)){
         canvas remove ("bola.png") }


	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		// Programe o movimento da bola para cima.
	}

	function down()
	{
		 if(ball_y <=450)
		 {
			ball_y = ball_x + block_image_height;
			console.log("atura do bloco da imagem = " + block_image_height);
			console.log("Quando a seta para baixo é precionada, x =" + ball_x + "  , y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		 }
		 
			
	}

	function left()
	{
		if(ball_x >5)
		{
			// Programe o movimento da bola para a esquerda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Programe o movimento da bola para a direita.
		}
	}
	
}
