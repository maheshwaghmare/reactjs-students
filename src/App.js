import React, {useState} from "react";
import "./App.css";
import { connect } from "react-redux";

let Student = ( {student, onUpdate, onDelete} ) => {
  const [name, setName] = useState( student.name );
  return (
    <div className="row">
      <div className="id">{student.id}</div>
      <div className="name">
        <input type="text" value={name} onChange={ event => setName( event.target.value ) } />
      </div>
      <button className="btn-update" onClick={ () => {
        onUpdate( {
          id: student.id,
          name: name,
        } )
      }}>Update</button>
      <button className="btn-delete" onClick={ () => {
        onDelete( student.id )
      }}>Delete</button>
    </div>
  )
}

// Step 1: Define component.
let App = ( props ) => {
  const [newName, setNewName] = useState( '' );
  const [noticeEmptyName, setEmptyNotice] = useState( false );
  let {students} = props;
  let {onUpdate, onDelete, onAddNew} = props;
  let newID = Object.values( students ).length + 1;

  return (
    <div className="students">
      <div className="row">
        <div className="id">{newID}</div>
        <div className="name">
          <input type="text" value={newName} onChange={ event => setNewName( event.target.value ) } />
        </div>
        <button className="btn-add" onClick={ () => {
          if( newName ) {
              onAddNew( {
                id: newID,
                name: newName,
              } )
              setEmptyNotice( false );
              setNewName( '' );
          } else {
              setEmptyNotice( true );
          }
        }}>Add new</button>
      </div>
      { noticeEmptyName && <div className="row">Error: Empty Name</div> }
      <div className="row headings">
        <div className="id">ID</div>
        <div className="name">Name</div>
      </div>
      {
        Object.values( students ).map( student => <Student student={student} onUpdate={onUpdate} onDelete={onDelete} key={student.id} /> )
      }
    </div>
  );
}

// Step 2: Map state to props.
const mapStateToProps = (state, ownProps) => {
  return {
    students: state
  };
};

// Step 3: Map dispatch to props.
const mapDispachToProps = dispatch => {
  return {
    onUpdate: ( value ) => dispatch( { type: "UPDATE", value: value } ),
    onDelete: ( value ) => dispatch( { type: "DELETE", value: value } ),
    onAddNew: ( value ) => dispatch( { type: "ADD", value: value } ),
  };
};

// Step 4: Pass mapping functions and our app into the `connect()`` function.
export default connect(mapStateToProps, mapDispachToProps)(App);