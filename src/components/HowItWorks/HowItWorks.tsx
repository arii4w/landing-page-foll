import { ScanLine } from 'lucide-react';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Instalación en 3 Minutos</h2>
          <p className={styles.subtitle}>Sin cables, sin complicaciones técnicas</p>
        </div>

        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Descarga y Regístrate</h3>
              <p>Obtén la app y crea tu cuenta de cuidador con tu DNI.</p>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <div className={styles.stepText}>
                <h3>Escanea el Código QR</h3>
                <p>Vincula el dispositivo con el escáner del código único en la base del equipo.</p>
              </div>
              <div className={styles.qrIcon}>
                <ScanLine size={32} />
              </div>
            </div>
          </div>

          <div className={styles.step}>
            <div className={styles.stepNumberOrange}>3</div>
            <div className={styles.stepContent}>
              <h3>Empieza a Monitorear</h3>
              <p>Coloca el sensor y recibe actualizaciones de bienestar en tiempo real.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
