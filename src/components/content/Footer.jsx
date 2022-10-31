import {memo} from 'react';

const Footer = () => {
    return (
        <>
          <footer className="footer">
  <img className="footer__imagen--logo" src="../img/LogoCircular.png" alt="Logo de la empresa" width={100} height={100} />
  <section className="footer__redes">
    <img className="footer__imagen" src="../img/instagram.png" alt="Logo de la empresa" width={20} height={20} />
    <img className="footer__imagen" src="../img/wsp.png" alt="Logo de la empresa" width={20} height={20} />
    <img className="footer__imagen" src="../img/facebook.png" alt="Logo de la empresa" width={20} height={20} />
  </section>
</footer>
        </>
    );
}

export default memo(Footer);
