import React, { useState } from 'react';

import '../App.css';

import NoteButton from './NoteButton';
import * as Tone from 'tone';
import classNames from 'classnames';
import FloatRightStyle from './FloatRightStyle';

const GridComponent = () => {
  const controllerGrid = [];
  for (let i = 0; i < 8; i++) {
    let noteColumn = [
      { note: 'C', isSelected: false },
      { note: 'E', isSelected: false },
      { note: 'A', isSelected: false },
      { note: 'G', isSelected: false },
    ];
    controllerGrid.push(noteColumn);
  }
  return controllerGrid;
};

const noteOctave = '5';

const Controller = ({ ...rest }) => {
  const [controllerGrid, setControllerGrid] = useState(GridComponent()),
    [soundIsPlaying, setSoundIsPlaying] = useState(false),
    [currentColumnStyle, setCurrentColumnStyle] = useState(null),
    [reverbSetting, setReverbSetting] = useState(1.5),
    [delaySetting, setDelaySetting] = useState(0.5);

  const synthesizer = new Tone.PolySynth();
  const delay = new Tone.FeedbackDelay({ delaySetting }, 0.5);
  const reverb = new Tone.Reverb({ reverbSetting });

  const setReverb = (e) => {
    setReverbSetting(e.target.value);
  };

  const setDelay = (e) => {
    setDelaySetting(e.target.value);
  };

  synthesizer.connect(reverb).connect(delay).toDestination();

  const handleNoteSelected = (selectedColumn, selectedNote) => {
    let gridWithSelectedNotes = controllerGrid.map(
      (noteColumn, noteColumnIndex) =>
        noteColumn.map((noteCell, noteCellIndex) => {
          let noteCellCopy = noteCell;

          if (
            noteColumnIndex === selectedColumn &&
            noteCellIndex === selectedNote
          ) {
            noteCellCopy.isSelected = !noteCell.isSelected;
          }

          return noteCellCopy;
        })
    );

    setControllerGrid(gridWithSelectedNotes);
  };

  const playSequence = async () => {
    let formattedSelectedNotes = [];

    controllerGrid.map((noteColumn) => {
      let noteColumnSelectedNotes = [];
      noteColumn.map(
        (noteShouldPlay) =>
          noteShouldPlay.isSelected &&
          noteColumnSelectedNotes.push(noteShouldPlay.note + noteOctave)
      );
      formattedSelectedNotes.push(noteColumnSelectedNotes);
    });

    await Tone.start();

    const SequencerComponent = new Tone.Sequence(
      //Sequence callback
      (time, column) => {
        setCurrentColumnStyle(column);
        synthesizer.triggerAttackRelease(
          formattedSelectedNotes[column],
          '8n',
          time
        );
      },
      //"Events" (steps) sent with callback
      [0, 1, 2, 3, 4, 5, 6, 7],
      //Subdivision on which to engage callback (8th notes)
      '8n'
    );

    if (soundIsPlaying) {
      setSoundIsPlaying(false);
      setCurrentColumnStyle(null);

      // If true stop the "transport" and garbage collect sequencer after stopping it as well
      await Tone.Transport.stop();
      await SequencerComponent.stop();
      await SequencerComponent.clear();
      await SequencerComponent.dispose();

      return;
    }
    setSoundIsPlaying(true);

    await SequencerComponent.start();
    await Tone.Transport.start();
  };

  return (
    <>
      <div className="note-wrapper">
        {controllerGrid.map((noteColumn, noteColumnIndex) => (
          <div
            className={classNames('note-column', {
              'note-column--active': currentColumnStyle === noteColumnIndex,
            })}
            key={noteColumnIndex + 'column'}
          >
            {noteColumn.map(({ note, isSelected }, noteCellIndex) => (
              <NoteButton
                note={note}
                isSelected={isSelected}
                onClick={() =>
                  handleNoteSelected(noteColumnIndex, noteCellIndex)
                }
                key={note + noteColumnIndex}
              />
            ))}
          </div>
        ))}
      </div>
      <FloatRightStyle>
        <button className="play-button" onClick={() => playSequence()}>
          {soundIsPlaying ? '[]' : '|>'}
        </button>
        <br />
        <form id="fx-form">
          <label>
            Reverb:
            <input
              type="text"
              name="reverb"
              value={reverbSetting}
              onChange={setReverb}
            />
          </label>
          <label>
            Delay:
            <input
              type="text"
              name="delay"
              value={delaySetting}
              onChange={setDelay}
            />
          </label>
        </form>
      </FloatRightStyle>
    </>
  );
};

export default Controller;
