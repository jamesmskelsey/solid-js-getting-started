const NamesByFor = ({ names }) => {
  return (
    <>
      <p>Using a For component.</p>
      <For each={names}>
        {(name, i) => (
          <p>
            {i() + 1} {name.name}
          </p>
        )}
      </For>
    </>
  );
};
export default NamesByFor;
