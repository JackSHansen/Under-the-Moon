import style from "./QuickLinks.module.scss";

export const FooterLinks = () => {
  return (
    <>
      <section className={style.quickLinksStyling}>
        <header>
          <h2 className={style.linksHeader}>Quick Links</h2>
        </header>
        <ul className={style.linksList}>
          <li className={style.linksListItem}>
            <p>Hjem</p>
          </li>
          <li className={style.linksListItem}>
            <p>Om os</p>
          </li>
          <li className={style.linksListItem}>
            <p>Prisliste</p>
          </li>
          <li className={style.linksListItem}>
            <p>Booking</p>
          </li>
          <li className={style.linksListItem}>
            <p>Newsletter</p>
          </li>
          <li className={style.linksListItem}>
            <p>Kontakt</p>
          </li>
        </ul>
        <footer className={style.footerCircles}>
          <h3>Follow Us</h3>
          <div className={style.circleContainer}>
            <span className={style.circle}></span>
            <span className={style.circle}></span>
            <span className={style.circle}></span>
          </div>
        </footer>
      </section>
    </>
  );
};