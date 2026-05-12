import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>Comienza tu prueba gratuita</h2>
          <p className={styles.subtitle}>
            Únete a más de 5,000 familias que ya confían en Foll. Sin compromiso de permanencia.
          </p>
          
          <button className={styles.ctaButton}>
            Prueba Gratis 14 Días
          </button>
          
          <p className={styles.footerText}>
            Luego desde S/ 39.90 al mes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
