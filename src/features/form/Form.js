import FormItem from "./FormItem";

export default function Form() {
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <FormItem inputType={"name"} />
      <FormItem inputType={"age"} />
      <FormItem inputType={"email"} />
      <FormItem inputType={"zipCode"} />
      <FormItem inputType={"address"} />
    </form>
  );
}
