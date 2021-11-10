export default function Form() {
  return (
    <form style={{display: "flex", flexDirection: "column"}}>
      <label>
        Enter your name:
        <input type="text" />
      </label>
      <label>
        Enter your email:
        <input type="text" />
      </label>
      <label>
        Enter your zip code:
        <input type="text" />
      </label>
      <label>
        Enter the date:
        <input type="text" />
      </label>
      <label>
        Enter your address:
        <input type="text" />
      </label>
    </form>
  );
}
