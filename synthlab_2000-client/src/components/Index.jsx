import { connect } from 'react-redux';

import Preset from './Preset';

const index = (props) => {
  const presets = props.presets.map((preset, i) => (
    <Preset
      key={i}
      reverb={preset.reverb}
      delay={preset.delay}
      tremolo={preset.tremolo}
      waveshape={preset.waveshape}
      envelope={preset.envelope}
    />
  ));
  return <div>{presets}</div>;
};

const mapStateToProps = (state) => {
  return {
    presets: state.presets,
  };
};

export default connect(mapStateToProps)(index);
