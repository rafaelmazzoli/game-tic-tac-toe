var q = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var azul = 1;
var vermelho = 0;
var corverde;
var gamestart = 1;
var pontovermelho = 0;
var pontoazul = 0;

function marcarPosicao(posicao, id)
{
	if(gamestart == 1)
	{
		if(q[posicao] == 0)
		{
			if(vermelho == 1)
			{
				document.getElementById(id).src="_imagens/O-Vermelho.jpg";
				azul = 1;
				vermelho = 0;
				q[posicao] = 2;
				ladoLuz(1);
				verificarPonto(posicao, 2);
				return;
			}
			if(azul == 1)
			{
				document.getElementById(id).src="_imagens/X-Azul.jpg";
				azul = 0;
				vermelho = 1;
				q[posicao] = 1;
				ladoLuz(2);
				verificarPonto(posicao, 1);
				return;
			}
		}
	}
}

function novoJogo()
{
	var X;
	gamestart = 1;
	document.getElementById("q11").src="_imagens/Bloco-Branco.jpg";
	document.getElementById("q12").src="_imagens/Bloco-Branco.jpg";
	document.getElementById("q13").src="_imagens/Bloco-Branco.jpg";
	document.getElementById("q21").src="_imagens/Bloco-Branco.jpg";
	document.getElementById("q22").src="_imagens/Bloco-Branco.jpg";
	document.getElementById("q23").src="_imagens/Bloco-Branco.jpg";
	document.getElementById("q31").src="_imagens/Bloco-Branco.jpg";
	document.getElementById("q32").src="_imagens/Bloco-Branco.jpg";
	document.getElementById("q33").src="_imagens/Bloco-Branco.jpg";
	document.getElementById("novo-round").setAttribute("style", "top: 0; left: 85%; width: 15%;");
	document.getElementById("novo-round").innerHTML = "Restart";
	for(X=0; X<9; X++)
	{
		q[X]=0;
	}
}

function fimDeJogo()
{
	gamestart = 0;
	document.getElementById("novo-round").setAttribute("style", "top: 40%; left: 35%; height: 20%; width: 30%;");
	document.getElementById("novo-round").innerHTML = "Jogar Novamente!";
}

function placar(cor)
{
	if(cor == 2)
	{
		var X;
		pontovermelho++;
		document.getElementById("pontos-vermelho").innerHTML = pontovermelho;
			for(X=0; X<9; X++)
		{
			q[X]=0;
		}
	}
	if(cor == 1)
	{
		pontoazul++;
		document.getElementById("pontos-azul").innerHTML = pontoazul;
		for(X=0; X<9; X++)
		{
			q[X]=0;
		}
	}
}

function ladoLuz(cor)
{
	if(cor == 1)
	{
		document.getElementById("lado-azul").setAttribute("style", "box-shadow: 20px 0px 50px -10px #0000FF; opacity: 1;");
		document.getElementById("lado-vermelho").setAttribute("style", "box-shadow: none; opacity: 0.5;");
	}
	if(cor == 2)
	{
		document.getElementById("lado-vermelho").setAttribute("style", "box-shadow: -20px 0px 50px -10px #ff0000; opacity: 1;");
		document.getElementById("lado-azul").setAttribute("style", "box-shadow: none; opacity: 0.5;");
	}
}

function verificarPonto(posicao, cor)
{
	if(cor == 1)
	{
		corverde = "X-Verde"
	}
	if(cor == 2)
	{
		corverde = "O-Verde"
	}
	if(posicao == 0)
	{
		if(q[0] == cor && q[1] == cor && q[2] == cor)
		{
			document.getElementById("q11").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q12").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q13").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[0] == cor && q[4] == cor && q[8] == cor)
		{
			document.getElementById("q11").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q33").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[0] == cor && q[3] == cor && q[6] == cor)
		{
			document.getElementById("q11").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q21").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q31").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
	}
	if(posicao == 1)
	{
		if(q[0] == cor && q[1] == cor && q[2] == cor)
		{
			document.getElementById("q11").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q12").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q13").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[1] == cor && q[4] == cor && q[7] == cor)
		{
			document.getElementById("q12").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q32").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		
	}
	if(posicao == 2)
	{
		if(q[0] == cor && q[1] == cor && q[2] == cor)
		{
			document.getElementById("q11").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q12").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q13").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[2] == cor && q[4] == cor && q[6] == cor)
		{
			document.getElementById("q13").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q31").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[2] == cor && q[5] == cor && q[8] == cor)
		{
			document.getElementById("q13").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q23").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q33").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		
	}
	if(posicao == 3)
	{
		if(q[0] == cor && q[3] == cor && q[6] == cor)
		{
			document.getElementById("q11").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q21").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q31").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[3] == cor && q[4] == cor && q[5] == cor)
		{
			document.getElementById("q21").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q23").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		
	}
	if(posicao == 4)
	{
		if(q[0] == cor && q[4] == cor && q[8] == cor)
		{
			document.getElementById("q11").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q33").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[2] == cor && q[4] == cor && q[6] == cor)
		{
			document.getElementById("q13").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q31").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[1] == cor && q[4] == cor && q[7] == cor)
		{
			document.getElementById("q12").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q32").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[3] == cor && q[4] == cor && q[5] == cor)
		{
			document.getElementById("q21").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q23").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		
	}
	if(posicao == 5)
	{
		if(q[2] == cor && q[5] == cor && q[8] == cor)
		{
			document.getElementById("q13").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q23").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q33").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[3] == cor && q[4] == cor && q[5] == cor)
		{
			document.getElementById("q21").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q23").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		
	}
	if(posicao == 6)
	{
		if(q[0] == cor && q[3] == cor && q[6] == cor)
		{
			document.getElementById("q11").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q21").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q31").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[2] == cor && q[4] == cor && q[6] == cor)
		{
			document.getElementById("q13").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q31").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[8] == cor && q[7] == cor && q[6] == cor)
		{
			document.getElementById("q31").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q32").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q33").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		
	}
	if(posicao == 7)
	{
		if(q[1] == cor && q[4] == cor && q[7] == cor)
		{
			document.getElementById("q12").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q32").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[6] == cor && q[7] == cor && q[8] == cor)
		{
			document.getElementById("q31").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q32").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q33").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		
	}
	if(posicao == 8)
	{
		if(q[2] == cor && q[5] == cor && q[8] == cor)
		{
			document.getElementById("q13").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q23").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q33").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[0] == cor && q[4] == cor && q[8] == cor)
		{
			document.getElementById("q11").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q22").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q33").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
		if(q[6] == cor && q[7] == cor && q[8] == cor)
		{
			document.getElementById("q31").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q32").src="_imagens/"+ corverde +".jpg";
			document.getElementById("q33").src="_imagens/"+ corverde +".jpg";
			fimDeJogo();
			placar(cor);
		}
	}
	if(q[0] != 0 && q[1] != 0 && q[2] != 0 && q[3]!= 0 && q[4] != 0 && q[5] != 0 && q[6] != 0 && q[7] != 0 && q[8] != 0)
	{
		fimDeJogo();
	}
}