import styles from "../scss/field.module.scss";
const Field = (props) => {
  const field = props.field;
  return (
    <div
      className={
        styles.fieldcontainer + " -flex-column -resize -flex -top-to-bottom"
      }
    >
      <label className={styles.label + " -flex-row -label -top-aligned"}>
        {field.Label}
      </label>
      <input
        className={(styles.input || "") + " -flex-row -field"}
        type="text"
        data-filtertype={field.Type}
        placeholder={field.PlaceHolder || field.Name}
      />
    </div>
  );
};

export default Field;
