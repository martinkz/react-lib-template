import { useState, ComponentProps } from "react";
// import "./global.css"; // Global css
import styles from "./styles.module.css"; // Scoped css

export type ButtonProps = ComponentProps<"button"> & {
	icon?: string;
};

export const Counter = ({ className = "", icon = "😎", ...props }: ButtonProps) => {
	const [count, setCount] = useState(0);

	return (
		<button className={`${className} ${styles.myCounter}`} {...props} onClick={() => setCount((count) => count + 1)}>
			Count is {count} {icon}
		</button>
	);
};

export default Counter;
