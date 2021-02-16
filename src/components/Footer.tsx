import style from "./Footer.module.css";

const { wrapper, container, copyright } = style;

export default function Footer() {
  return (
    <footer className={wrapper}>
      <div className={container}>
        <p className={copyright}>&copy; 2021. yeouya</p>
      </div>
    </footer>
  );
}
