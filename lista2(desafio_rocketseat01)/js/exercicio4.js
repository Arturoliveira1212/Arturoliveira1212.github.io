/*
Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
// código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
*/

function experiencia(anos)
{
    if(anos>=0 && anos<=1)
    {
        return "Iniciante";
    }
    else if(anos>1 && anos<=3)
    {
        return "Intermediário";
    }
    else if(anos>3 && anos<=6)
    {
        return "Avançado";
    }
    else
    {
        return "Jedi Master";
    }
}

function retorno()
{
    var n=document.getElementById("entrada").value;
    if(n<0)
    {
        alert("Entrada inválida.");
    }
    else
    {
        var resultado=experiencia(n);
        alert(resultado);
    }
    
}

