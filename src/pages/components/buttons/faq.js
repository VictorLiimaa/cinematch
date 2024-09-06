import { useState } from "react";
import styles from '../../../styles/FAQ.module.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Quanto custa?",
      answer:
        "O CineMatch é totalmente gratuito para uso. Não há custos ou taxas associadas ao serviço.",
    },
    {
      question: "É uma plataforma de streaming?",
      answer:
        "Não, o CineMatch é uma plataforma de recomendações que ajuda você a encontrar filmes e séries para assistir nas suas plataformas de streaming preferidas.",
    },
    {
      question: "Posso criar listas personalizadas?",
      answer:
        "Sim, no CineMatch você pode criar listas personalizadas de filmes e séries. Essas listas podem ser compartilhadas com amigos e familiares, ou mantidas privadas para sua própria referência.",
    },
    {
      question: "Como o CineMatch faz as recomendações?",
      answer:
        "O CineMatch utiliza algoritmos de machine learning que analisam suas preferências de visualização, avaliações e comentários para fornecer recomendações personalizadas.",
    },
    {
      question: "O CineMatch está disponível em dispositivos móveis?",
      answer:
        "No momento, o CineMatch ainda não está disponível em forma de aplicativo. No entanto, o CineMatch é totalmente responsivo e pode ser acessado em qualquer dispositivo através do navegador.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>Perguntas Frequentes</h1>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.faqItem}>
          <div className={styles.question} onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className={styles.icon}>{activeIndex === index ? "-" : "+"}</span>
          </div>
          {activeIndex === index && <div className={styles.answer}>{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}