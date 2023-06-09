import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width={32} height={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
          <li className={styles.listItem}>Homepage</li>
          </Link>
          <Link href="/product/id">
          <li className={styles.listItem}>Products</li>
          </Link>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="" width={100} height={60} />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href="/Cart">
          <Image src="/img/cart.png" alt="" width={30} height={30} />
          </Link>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
