import css from "./Options.module.css"

export default function Options({onFeedback, isVisible, onReset}) {
  return (
    <div className={css.container}>
      <button className={css.button} onClick={()=> onFeedback("good")}>Good</button>
      <button className={css.button} onClick={()=> onFeedback("neutral")}>Neutral</button>
      <button className={css.button} onClick={()=> onFeedback("bad")}>Bad</button>
      {isVisible && <button className={css.button} onClick={onReset}>Reset</button>}
    </div>
  );
}
