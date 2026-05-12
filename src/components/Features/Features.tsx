import { Activity, BellRing, FileText, Users } from 'lucide-react';
import styles from './Features.module.css';
import sensorImage from '../../assets/sensor-image.jpg';
import appImage from '../../assets/app-image.png';

const Features = () => {
  return (
    <section className={styles.featuresSection} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Protección Integral</h2>
          <p className={styles.subtitle}>Diseñado para la dignidad y la eficacia</p>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={`${styles.card} ${styles.cardLarge}`}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <Activity size={24} />
              </div>
              <h3>Detección Precisa de Caídas</h3>
              <p>
                Nuestros algoritmos detectan movimientos irregulares en tiempo real,
                diferenciando caídas reales de movimientos cotidianos para evitar falsas alarmas.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <img src={sensorImage} alt="Fall detection sensor" />
            </div>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} ${styles.cardOrange}`}>
            <div className={styles.iconWrapper}>
              <BellRing size={24} />
            </div>
            <h3>Alertas Instantáneas</h3>
            <div className={styles.tags}>
              <span className={styles.tag}>SOS</span>
            </div>
            <p>
              Notificaciones inmediatas a familiares y centros de emergencia en caso de
              detección crítica, sin rutinas estresantes.
            </p>
            <div className={styles.tagsBottom}>
              <span className={styles.tagLight}>Asistencia 24/7</span>
              <span className={styles.tagLight}>Sincronización directa</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} ${styles.cardWhite}`}>
            <div className={styles.iconWrapper}>
              <FileText size={24} />
            </div>
            <h3>Info Médica</h3>
            <p>
              Acceso rápido al historial clínico y medicación para primeros auxilios efectivos.
            </p>
          </div>

          {/* Card 4 */}
          <div className={`${styles.card} ${styles.cardLarge} ${styles.cardWhite}`}>
            <div className={styles.imageWrapperStart}>
              <img src={appImage} alt="Family care app dashboard" />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <Users size={24} />
              </div>
              <h3>Gestión de Familiares</h3>
              <p>
                Administra múltiples perfiles de cuidado desde una sola interfaz, coordinando a
                todo el equipo de apoyo familiar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
