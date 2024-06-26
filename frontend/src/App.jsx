import styles from "./style";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Menu from './components/Menu'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>


      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Menu />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
