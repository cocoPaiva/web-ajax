var vHTMLDeUnProducto="";
var vUnProd = "";
var vListaProductos = "";

$.ajax({
url:"plantilla_prod.html",
type:'GET',
  success: function(data){
    vHTMLDeUnProducto=data;

  $.ajax({
    url: 'data/productos.json',
    type: 'GET',
    contentType: "application/json",
    success: function(data2) { 
      debugger
			$.each( data2, function( i, item ) {
			   vUnProd = vHTMLDeUnProducto;
				 vUnProd = vUnProd.replace("{NOMBRE_PROD}",item.display);
         vUnProd = vUnProd.replace("{IMAGEN_PROD}",item.foto);
         vUnProd = vUnProd.replace("{CODIGO_PROD}",item.sku);
         vUnProd = vUnProd.replace("{STOCK_PROD}",item.stock);
        
         vListaProductos= vListaProductos + vUnProd + " ";
    	});	

    document.getElementById("divProductosDinamicos").innerHTML = vListaProductos ;
      
    }
});		


}
});

 