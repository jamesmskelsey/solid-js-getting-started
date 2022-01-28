const NamesByIndex = ({ names }) => {
  return (
    <>
      <p>Using an Index component in a component.</p>
      <Index each={names}>
        {(name, i) => (
          <p>
            {i + 1} {name().name}
          </p>
        )}
      </Index>
    </>
  );
};

export default NamesByIndex;
