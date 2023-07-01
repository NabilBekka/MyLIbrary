import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} data-testid="footer">
        <div>Premiere div</div>
        <div>Deuxieme div</div>
        <div>Troisieme div</div>
    </footer>
  )
}

export default Footer;