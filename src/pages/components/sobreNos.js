import ImgDescricao from "../../../public/assets/img cine 1.svg";
import ImgPub from "../../../public/assets/img cine 1df.svg";
import Image from "next/image";
import styles from '../../styles/SobreNos.module.css';


export default function SobreNos() {
  return (
    <div>
      <div className={styles.containerSobreNos}>
        <Image className={styles.imagemDescricao} src={ImgDescricao} alt="descricao" />
        <div className={styles.sobreNos}>
          <h1 className={styles.sobreTitulo}>O que é o Cinematch?</h1>
          <p className={styles.descricao}>
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
        <hr className={styles.linha} />
      </div>

      <div className={styles.containerPub}>
        <Image className={styles.imagemPub} src={ImgPub} alt="descricao" />
        <div className={styles.sobrePublico}>
          <h1 className={styles.publicoAlvo}>PÚBLICO-ALVO</h1>
          <p className={styles.descricao}>
            Nosso público-alvo inclui entusiastas de cinema e televisão de todas
            as idades. Atendemos tanto espectadores ocasionais quanto cinéfilos
            ávidos, oferecendo uma gama de recomendações que vão desde
            superproduções famosas até obras de arte independentes.
          </p>
        </div>
      </div>
      <div>
        <hr className={styles.linha} />
      </div>
    </div>
  );
}