import { FC } from 'react';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.scss';

type Props = {
  children?: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles['container']}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
