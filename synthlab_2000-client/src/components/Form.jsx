/* 
How to select ALL of the Refs in the form and set them to empty strings?
As is, only the last Ref is being cleared. 
*/

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPreset } from '../actions';

const Form = (props) => {
  const formInput = React.createRef();

  const clearForm = () => {
    formInput.current.value = '';
  };

  const [preset, setPreset] = useState({
    reverb: '',
    delay: '',
    tremolo: '',
    waveshape: '',
    envelope: '',
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
    <div>
      <h3>Create Synthesizer Preset</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="reverb">Reverb</label>
          <input
            ref={formInput}
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
            ref={formInput}
            type="text"
            name="delay"
            id="delay"
            value={preset.delay}
            onChange={handlePresetChange}
          />
        </div>
        <div>
          <label htmlFor="tremolo">Tremolo</label>
          <input
            ref={formInput}
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
            ref={formInput}
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
            ref={formInput}
            type="text"
            name="envelope"
            id="envelope"
            value={preset.envelope}
            onChange={handlePresetChange}
          />
        </div>
        <input type="submit" value="Save Preset" />
        <button type="button" onClick={clearForm}>
          Reset Form
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addPreset })(Form);
