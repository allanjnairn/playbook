import React from 'react';
import styles from './Editable.css'
import MainStore from '../../Stores/MainStore'
import {Editor, EditorState, ContentState} from 'draft-js';



export default class index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      editing: false,
      editorState: EditorState.createWithContent(ContentState.createFromText(this.props.text))
    }

  }

  change(editorState) {
    this.setState({editorState})
  }


  edit() {
    this.setState({
      text: this.props.text,
      editing: true
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editing===true) {
      this.refs.editor.focus()
      if (prevState.editing===false) {
        this.setState({editorState: EditorState.moveFocusToEnd(this.state.editorState)})
      }
    }
  }

  save() {
    let newText = this.state.editorState.getCurrentContent().getPlainText()
    console.log(newText)

    MainStore.state[this.props.first][this.props.chosen][this.props.ind] = newText 

    this.setState({editing: false, text: newText})

  }


  render() {

    const {text, editing} = this.state
    const {chosen, ind} = this.props


    return (
      <div  className={styles.editable}>
          {!editing ? (
              <div>
                <ul>
                  <li>{text} 
                    <div onClick={this.edit.bind(this)} className={styles.edit+' editButton'}>
                      <span>EDIT</span>
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <div className={styles.editorBox}>
                <Editor ref='editor' editorState={this.state.editorState} onChange={this.change.bind(this)} /> 

                <div onClick={this.save.bind(this)} className={styles.save+' saveButton'}>
                  <span>Save</span>
                </div>
              </div>
            )}
      </div>
    );
  }
}
