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

  let {students} = props;
  let {onUpdate, onDelete} = props;

  return (
    <div className="students">
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
  };
};

// Step 4: Pass mapping functions and our app into the `connect()`` function.
export default connect(mapStateToProps, mapDispachToProps)(App);