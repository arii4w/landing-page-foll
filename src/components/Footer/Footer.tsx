import styles from './Footer.module.css';
import logoFoll from '../../assets/logo-foll.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img src={logoFoll} alt="Foll Logo" className={styles.logoImage} />
            <span className={styles.logoText}>Foll</span>
          </div>
          <p className={styles.copyright}>
            © 2024 Foll. Vigilancia y tranquilidad para tus seres queridos.
          </p>
        </div>

        <div className={styles.links}>
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos de Servicio</a>
          <a href="#">Contacto</a>
          <a href="#">Centro de Ayuda</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
