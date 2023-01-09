import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../modules/GlobalHeader/GlobalHeader.module.scss";

function Logo(): JSX.Element {
  return (
    <>
      <div className={`${styles.lHLogo} ${styles.lHLogo__01}`}>
        <Link href="/">
          <a>
            <p className={styles.pc}>
              <Image
                src="/images/common/header/logo01.png"
                alt="テキスト"
                width={161}
                height={145}
              />
            </p>
            <p className={styles.sp}>
              <Image
                src="/images/common/header/logo01_sp.png"
                alt="テキスト"
                width={83}
                height={125}
              />
            </p>
          </a>
        </Link>
      </div>
      <div className={`${styles.lHLogo} ${styles.lHLogo__02} ${styles.pc}`}>
        <Link href="/">
          <a>
            <p className={styles.img}>
              <Image
                src="/images/common/header/logo02.png"
                alt="テキスト"
                width={132}
                height={56}
                className={styles.pc}
              />
              <Image
                src="/images/common/header/logo02_sp.png"
                alt="テキスト"
                width={118}
                height={50}
                className={styles.sp}
              />
            </p>
          </a>
        </Link>
      </div>
      <div className={`${styles.lHeaderSP} ${styles.sp}`}>
        <div className={`${styles.lHLogo} ${styles.lHLogo__02}`}>
          <Link href="/">
            <a>
              <Image
                src="/images/common/header/logo02_sp.png"
                alt="テキスト"
                width={118}
                height={50}
              />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export { Logo };
