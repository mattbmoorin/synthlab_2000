import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPreset } from '../actions';

import '../App.css';

import Button from 'react-bootstrap/Button';

const Form = (props) => {
  const [preset, setPreset] = useState({
    reverb: '',
    delay: '',
    // tremolo: '',
    // waveshape: '',
    // envelope: '',
  });

  const handlePresetChange = (e) =>
    setPreset({
      ...preset,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(preset);
    props.addPreset(preset, props.history);
    alert(`Submitting Preset!`);
  };

  return (
    <div className="App">
      <h3>EDIT FX/SAVE PRESET</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="reverb">Reverb</label>
          <input
            type="text"
            name="reverb"
            id="reverb"
            value={preset.reverb}
            onChange={handlePresetChange}
          />
        </div>
        <div>
          <label htmlFor="delay">Delay</label>
          <input
            type="text"
            name="delay"
            id="delay"
            value={preset.delay}
            onChange={handlePresetChange}
          />
        </div>
        {/* <div>
          <label htmlFor="tremolo">Tremolo</label>
          <input
            type="text"
            name="tremolo"
            id="tremolo"
            value={preset.tremolo}
            onChange={handlePresetChange}
          />
        </div>
        <div>
          <label htmlFor="waveshape">Waveshape</label>
          <input
            type="text"
            name="waveshape"
            id="waveshape"
            value={preset.waveshape}
            onChange={handlePresetChange}
          />
        </div>
        <div>
          <label htmlFor="envelope">Envelope</label>
          <input
            type="text"
            name="envelope"
            id="envelope"
            value={preset.envelope}
            onChange={handlePresetChange}
          />
        </div> */}
        <Button type="submit" value="Save Preset">
          Save Preset
        </Button>
      </form>
      {/* <Button>Test Preset</Button> */}
    </div>
  );
};

export default connect(null, { addPreset })(Form);
