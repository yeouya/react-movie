import style from "./Footer.module.css";

const { footer, container, copyright } = style;

export default function Footer() {
  return (
    <footer className={footer}>
      <div className={container}>
        <p className={copyright}>&copy; 2021. yeouya</p>
      </div>
    </footer>
  );
}
