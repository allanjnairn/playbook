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

    this.editChange = this.editChange.bind(this)

  }

  editChange() {
    console.log('editChange')
    this.setState(this.state)
  }

  change(editorState) {
    this.setState({editorState})
  }

  componentWillMount() {
    MainStore.on('editChange', this.editChange)
  }


  edit() {
    MainStore.state.editing = true
    MainStore.emit('editChange')
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

  componentWillUnmount() {
    MainStore.removeListener('editChange', this.editChange)
    if (MainStore.state.manager===true) {
      MainStore.state.editing = false
    }
  }

  save() {
    MainStore.state.editing = false
    MainStore.emit('editChange')
    let newText = this.state.editorState.getCurrentContent().getPlainText()
    console.log(newText)

    MainStore.state.data[this.props.first][this.props.chosen][this.props.ind] = newText 
    MainStore.update()

    this.setState({editing: false, text: newText})

  }


  render() {

    const {text, editing} = this.state
    const {chosen, ind} = this.props



    if (this.props.brackets) {
      console.log(text)

      var first = text.split('-')[0]
      var second = text.split('-')[1]

      first = first.replace(/[{()}]/g, '')


    }

    return (
      <div  className={styles.editable}>
          {!editing ? (
              <div>
                <ul>
                  <li>
                  {this.props.brackets ? (
                    <div>
                      <span className={styles.bold}>
                      {first}
                      </span>
                      <span>
                      {' - '}
                      </span>
                      <span>
                        {second}
                      </span>
                    </div>
                    ) : (
                    <span>
                      {text}
                    </span>
                    )} 
                    {MainStore.state.editing===false ? (
                        <div onClick={this.edit.bind(this)} className={styles.edit+' editButton'}>
                          <span>EDIT</span>
                        </div>
                      ) : ''}
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
