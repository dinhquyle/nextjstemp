import Head from "next/head";
import { SITE_CONFIG } from "@/common/constants";
import { Logo } from "@/components/elements/Logo";
import { HamburgerButton } from "@/components/elements/HamburgerButton";
import { GlobalMenu } from "@/components/modules/GlobalMenu";
import { GlobalHeader } from "@/components/modules/GlobalHeader";
import { GlobalFooter } from "@/components/modules/GlobalFooter";
import styles from "./FrontLayout.module.scss";

type TFLProps = {
  children: React.ReactNode;
};
const FrontLayout = ({ children }: TFLProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{SITE_CONFIG.title}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalHeader>
        <Logo />
        <HamburgerButton />
        <GlobalMenu />
      </GlobalHeader>
      <div className={styles.Content}>{children}</div>
      <GlobalFooter></GlobalFooter>
    </>
  );
};

export { FrontLayout };
