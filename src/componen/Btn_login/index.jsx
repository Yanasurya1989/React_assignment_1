import style from "./style.module.css";

function Button_login(props) {
  return (
    <button onClick={() => props.handleClick(props.title)} className={style.button}>
      Login / Daftar
    </button>
  );
}
export default Button_login;
