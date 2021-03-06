$(function(){

    $("#botao").click(function(){
        let texto_array = $("#texto_array").val();
        texto_array = texto_array.replace(/\s+/g, '');
        let array = texto_array.split(",");
        let tam = array.length;
        if(array[tam-1] == "")
        {
            array.pop();
        }
        $("#resultado").html("<br>Sequencia de fibonacci até " + texto_array + " números: " +  fibonacci(texto_array));
    })

    $("#limpar").click(function(){
        $("#resultado").text("");
        $("#texto_array").val("");
    })
    
    function fibonacci (x) 
    {
        let array = new Array;
        array.push(0);
        let a = 0; 
        let b = 1;
        let f = 1;
        for (let i=0; i<x-1; i++) 
        {
            array.push(f);
            f = a + b;
            a = b;
            b = f;
        }
        return array.join(",");
    }

})