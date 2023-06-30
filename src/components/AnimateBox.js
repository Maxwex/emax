import { motion } from 'framer-motion';

const AnimateBox = ({ children, style }) => {
    return (
        <motion.div whileInView={{ y: [ 50, 0], opacity: [ 0, 1] }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={style}
        >
            {children}
        </motion.div>
    );
}

export default AnimateBox;