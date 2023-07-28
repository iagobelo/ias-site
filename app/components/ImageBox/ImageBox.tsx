import styles from "./ImageBox.module.css";
import classNames from "classnames";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className?: string;
  size?: "small" | "large";
}

export default function ImageBox(props: Props) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      className={classNames(
        props.size === "large"
          ? styles["img-box-large"]
          : styles["img-box-small"],
        props.className
      )}
    />
  );
}
