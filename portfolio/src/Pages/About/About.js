// import '../App.css'
import '../../App.css'
import PortfolioContainer from '../../PortfolioContainer/PortfolioContainer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'

function About() {

  const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1, 
        transition: {}
    },
    exit: {
        x: '-100vw',
        tranistion: { ease: 'easeInOut'}
    }
}

  return (
    <motion.div className="App"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
      <ToastContainer />
      <PortfolioContainer />
    </motion.div>
  );
}

export default About;