import styles from './Header.module.scss';
import Image from 'next/image';
import Welkin from '../../public/icons/Welkin.png';
import Link from 'next/link';

function Header() {
   return (
   <header className={styles.header}>
      <Link href={'/'}>
         <Image src={Welkin} alt='Welkin-team' width={256} height={90} priority={true} />
      </Link>
   </header>
   )
}
export default Header;