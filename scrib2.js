window.onload=function()
{
// alert("Pagina Cargada");

  var pasos=["baja1","baja2","baja3","baja4","derecha1","derecha2","derecha3","derecha4"];
  var num_camina=1;


	setInterval(function() //aqui va todo el codigo para mover la imagen
	{
	  
      aux_div("imagen").setAttribute("class","caminar " + pasos[num_camina - 1]);
      num_camina++;
      if(num_camina>=8)
      {

      	num_camina=1;
      }

	}, 100);


	function aux_div(div)//ESTA ES UNA FUNCION AUXILIAR...SE ESCRIBE TAL CUAL.
	{
     return document.getElementById(div);
	}
}
