import style from "./FindUs.module.scss";

export const FindUs = () => {
  return (
    <>
      <section>
        <header className={style.findHeader}>
          <h2>Find Us</h2>
        </header>
        <ul className={style.findList}>
          <li className={style.listItem}>
            <p>WhatsApp</p>
            <p className={style.findNumbers}>+45 23 43 43 43</p>
          </li>
          <li className={style.listItem}>
            <p>Telefonnummer</p>
            <p className={style.findNumbers}>+45 58 84 84 84</p>
          </li>
          <li className={style.listItem}>
            <p>Adresse</p>
            <p className={style.findNumbers}>Supergatan 56,</p>
            <p className={style.findNumbers}>Oslo, Norway</p>
          </li>
        </ul>
      </section>
    </>
  );
};