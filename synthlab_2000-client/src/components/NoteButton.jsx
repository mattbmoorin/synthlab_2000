import classNames from 'classnames';

const NoteButton = ({ note, isSelected, ...rest }) => {
  const noteClasses = isSelected ? 'note note--active' : 'note';
  return (
    <button className={noteClasses} {...rest}>
      {note}
    </button>
  );
};

export default NoteButton;
