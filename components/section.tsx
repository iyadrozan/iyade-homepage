import { motion } from "framer-motion";
import { ReactNode } from "react"


interface LayoutProps {
    children: ReactNode;
}
export default function Section(props: LayoutProps) {
    const { children } = props;
    return (

        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "50%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} >
            {children}
        </motion.div>

    )
}
