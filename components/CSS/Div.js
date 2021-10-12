function Div({
  div,
  container
}) {
  return (
    <section className={container}>
      <div id={div}></div>
    </section>
  );
}

export default Div;
