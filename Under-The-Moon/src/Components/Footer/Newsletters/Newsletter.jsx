import style from "./Newsletter.module.scss";

export const Newsletter = () => {
  return (
    <>
      <section className={style.newsletterStyling}>
        <header className={style.newsletterHeader}>
          <h2>Subscribe To Newsletter</h2>
        </header>
        <input
          type="text"
          className={style.newsletterInput}
          placeholder="Full name"
        ></input>
        <input
          type="email"
          className={style.newsletterInput}
          placeholder="Email"
        ></input>
        <button className={style.newsletterBtn}>Sign Up</button>
      </section>
    </>
  );
};