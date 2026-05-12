import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Voces de Tranquilidad</h2>
        </div>

        <div className={styles.grid}>
          {/* Testimonial 1 */}
          <div className={styles.card}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className={styles.starIcon} />
              ))}
            </div>
            <p className={styles.quote}>
              "Foll me dio la libertad de trabajar tranquila sabiendo que mi madre está protegida. La detección de falsos positivos es impresionante."
            </p>
            <div className={styles.profile}>
              <div className={`${styles.avatar} ${styles.avatarMint}`}></div>
              <div className={styles.profileInfo}>
                <h4>Elena Soto</h4>
                <span>Hija de Don Roberto</span>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className={styles.card}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className={styles.starIcon} />
              ))}
            </div>
            <p className={styles.quote}>
              "Lo que más valoro es la discreción. Mi abuelo no se siente vigilado por cámaras, solo acompañado por la tecnología."
            </p>
            <div className={styles.profile}>
              <div className={`${styles.avatar} ${styles.avatarTeal}`}></div>
              <div className={styles.profileInfo}>
                <h4>Carlos Vega</h4>
                <span>Cuidador Principal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
