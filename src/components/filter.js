import styles from "../scss/filter.module.scss";
import Field from "./field";

const Filter = () => {
  const fields = [
    {
      Name: "Search",
      Type: "Search",
      Label: "Search by",
      PlaceHolder: "Name or Number",
    },
    { Name: "Type", Type: "Dropdown", Label: "Type", PlaceHolder: "" },
    { Name: "Gender", Type: "Dropdown", Label: "Gender", PlaceHolder: "" },
  ];
  return (
    <form className={styles.filterform + " -flex -left-to-right -nowrap"}>
      {fields.map((fielddata) => (
        <Field key={fielddata.Name} field={fielddata} />
      ))}
    </form>
  );
};
export default Filter;
