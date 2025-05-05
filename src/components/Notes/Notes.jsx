import "./Notes.css";
import Note from "./Note";
const Notes = (props) => {
  {
    /*accessing the notes array from the App.js, since Notes is the child of App> then we can use props to access the notes array
    ****
    With destructuring we can simplify the way we access the notes array in App.js so that we do not have to keep writing
    props.notes[0].id ... To notes[0].id
    */
  }
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;
  console.log("props", props.notes[0]);
  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>Notes you add appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note ={note}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
          />
        )) //dynamically renders notes onto the UI from the Array in App.j
      )}
    </div>
  );
};

export default Notes;

{
  /*we are creating props in each note> we will then use the props keyword in the Note componenet to pass it to the child Note 
        We are accessing the notes array, withing the array is objects, which is why we have the .id .title and .text at the end*/
}
