import ImgDescricao from "../../../public/assets/img cine 1.svg";
import ImgPub from "../../../public/assets/img cine 1df.svg";
import Image from "next/image";

export default function SobreNos() {
  return (
    <div>
      <div className="containerSobreNos">
        <Image className="imagemDescricao" src={ImgDescricao} alt="descricao" />
        <div className="sobreNos">
          <h1 className="sobreTitulo">O que é o Cinematch?</h1>
          <p className="descricao">
            O CineMatch é uma plataforma que ajuda você a descobrir novos filmes
            e séries baseados nos seus gostos e preferências pessoais.
            Utilizando algoritmos e uma vasta base de dados, oferecemos
            recomendações personalizadas que transformam a maneira como você
            encontra e assiste a conteúdos audiovisuais. Quer você seja um
            cinéfilo ávido ou um espectador casual, o CineMatch está aqui para
            te ajudar a explorar um mundo de entretenimento sob medida.
          </p>
        </div>
      </div>
      <div>
        <hr className="linha" />
      </div>

      <div className="containerPub">
        <Image className="imagemPub" src={ImgPub} alt="descricao" />
        <div className="sobrePublico">
          <h1 className="publicoAlvo">PÚBLICO-ALVO</h1>
          <p className="descricao">
            Nosso público-alvo inclui entusiastas de cinema e televisão de todas
            as idades. Atendemos tanto espectadores ocasionais quanto cinéfilos
            ávidos, oferecendo uma gama de recomendações que vão desde
            superproduções famosas até obras de arte independentes.
          </p>
        </div>
      </div>
      <div>
        <hr className="linha" />
      </div>
    </div>
  );
}
