import Head from "next/head";
import { SITE_CONFIG } from "@/common/constants";
import { Logo } from "@/components/elements/Logo";
import { HamburgerButton } from "@/components/elements/HamburgerButton";
import { DarkModeButton } from "@/components/elements/DarkModeButton";
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
      </Head>
      <GlobalHeader>
        <Logo />
        <HamburgerButton />
        <GlobalMenu />
      </GlobalHeader>
      <DarkModeButton />
      <div className={styles.Content}>{children}</div>
      <GlobalFooter></GlobalFooter>
    </>
  );
};

export { FrontLayout };
