function verificar(){
        
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    
    //var idade = anoAtual - anoNascimento
    
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO! Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade <=10){
                //criança
                img.setAttribute('src', 'foto')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'foto')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto')
            } else {
                //idoso
                img.setAttribute('src', 'foto')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >= 0 && idade <=10){
                //criança
                img.setAttribute('src', 'foto')
            } else if (idade < 21){
                // jovem
                img.setAttribute('src', 'foto')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'foto')
            } else {
                //idoso
                img.setAttribute('src', 'foto')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild('img')
    }

    /*/res = (`Detectamos ${sexo} com ${idade} anos`)
    
    //var masc = (div#sexo == masc)
    //var fem = (div#sexo == fem)
    
    //anoNascimento.addEventListener(click, 'verificar')
    //preencha.addEventListener(click, 'verificar')      
    
    if (anoNascimento > anoAtual || anoNascimento == 0)    {
        window.alert('Verifique os dados e tente novament')
    }else if (anoNascimento <= 15 && sexo == fem){        
        //imagem fem
    } else if (anoNascimento <= 45 && sexo == masc){        
        //imagem masc
    } else if (anoNascimento <= 45 && sexo == fem){        
        //imagem fem
    } else if (anoNascimento <= 120 && sexo == masc){        
        //imagem masc
    } else if (anoNascimento <= 120 && sexo == fem){        
        //imagem fem
    } else if(anoNascimento <= 15 && sexo == masc){        
        //imagem masc
    } 
    */
}
