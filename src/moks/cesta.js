import logo from '../../assets/logo.png';
import cestaLogo from '../../assets/cesta.jpg'
import tomate from '../../assets/frutas/Tomate.png'
import brocolis from '../../assets/frutas/Brócolis.png'
import batata from '../../assets/frutas/Batata.png'
import pepino from '../../assets/frutas/Pepino.png'
import abobora from '../../assets/frutas/Abóbora.png'


const cestaMoks = {
    topo: {
        titulo: "Detalhes da Cesta",
        logoCesta: cestaLogo

    },
    detalhes: {
        nome: " Cesta de Verduras",
        nomeFazenda: "Jenny Jack Farm",
        descricao: " Uma cesta de verduras com produtos selecionados cuidadosamente da fazenda direto pra sua cozinha",
        preco: "R$ 40,00",
        logoFazenda: logo,
        botao:" Comprar"
    },
     itens: {
         titulo: "Itens da cesta",
         lista: [
             {
                 nome: "Tomate",
                imagem: tomate,
            },
            {
                nome: "Brócolis",
                 imagem: brocolis,
             },
             {
                 nome: "Batata",
                 imagem: batata,
            },
             {
                 nome: "Pepino",
                 imagem: pepino,
            },
             {
                 nome: "Abóbora",
                imagem: abobora,
            }
         ]
    }
    
    
}

export default cestaMoks;