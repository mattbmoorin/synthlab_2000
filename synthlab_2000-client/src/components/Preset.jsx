const Preset = (props) => {
  const { reverb, delay, tremolo, waveshape, envelope } = props;
  return (
    <div>
      <div>{reverb}</div>
      <div>{delay}</div>
      <div>{tremolo}</div>
      <div>{waveshape}</div>
      <div>{envelope}</div>
    </div>
  );
};

export default Preset;
