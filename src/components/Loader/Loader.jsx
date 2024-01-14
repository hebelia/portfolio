import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div class={style.banterLoader}>
      <div class={style.banterLoader__box}></div>
      <div class={style.banterLoader__box}></div>
      <div class={style.banterLoader__box}></div>
      <div class={style.banterLoader__box}></div>
      <div class={style.banterLoader__box}></div>
      <div class={style.banterLoader__box}></div>
      <div class={style.banterLoader__box}></div>
      <div class={style.banterLoader__box}></div>
      <div class={style.banterLoader__box}></div>
    </div>
  );
};

export default Loader;
