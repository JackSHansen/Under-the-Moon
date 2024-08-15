import { FindUs } from "./FooterLinks/FindUs";
import { FooterLinks } from "./FooterLinks/QuickLinks";
import { Newsletter } from "./Newsletter/Newsletter";

import style from "./Footer.module.scss";

export const Footer = () => {
  return (
    <>
      <footer className={style.footerStyling}>
        <Newsletter />
        <FooterLinks />
        <FindUs />
      </footer>
    </>
  );
};