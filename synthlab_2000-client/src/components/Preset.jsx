const Preset = (props) => {
  const { reverb, delay, tremolo, waveshape, envelope } = props;

  return (
    <div className>
      <br />
      <div>Reverb = {reverb}</div>
      <div>Delay = {delay}</div>
      {/* <div>Tremolo = {tremolo}</div>
      <div>Waveshape = {waveshape}</div> 
      <div>Envelope = {envelope}</div> */}
      <br />
    </div>
  );
};

export default Preset;
