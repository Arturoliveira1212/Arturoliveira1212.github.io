$(function(){

    $("#botao").click(function(){
        let data = $("#entrada").val(); 
        if(data == '')  
        {
            alert("Digite uma data válida.");
        }
        else
        {
            let ano = data.substr(0,4);
            let mes = data.substr(5,2);
            let dia = data.substr(8,2);
            let MES;
            switch(mes)
            {
                case "01": MES = "Janeiro"; break;
                case "02": MES = "fevereiro"; break;
                case "03": MES = "março"; break;
                case "04": MES = "abril"; break;
                case "05": MES = "maio"; break;
                case "06": MES = "junho"; break;
                case "07": MES = "julho"; break;
                case "08": MES = "agosto"; break;
                case "09": MES = "setembro"; break;
                case "10": MES = "outubro"; break;
                case "11": MES = "novembro"; break;
                case "12": MES = "dezembro"; break;
            }
            $("#resultado").text(dia + " de " + MES + " de " + ano + ".");
        }
     })

    $("#limpar").click(function(){
        $("#entrada").val("");
        $("#resultado").text("");
    })

});










