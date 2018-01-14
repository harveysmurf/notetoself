import React, {Component} from 'react'
import Note from './Note'

class App extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            notes: []
         }
    }

    submit() {
        const {notes, text} = this.state
        const newNote = {text}
        notes.push(newNote)
        this.setState({notes})
    }

    render() {
        return (
            <div>
                <h2>Note to self</h2>
                <form>
                <input onChange={event => this.setState({text: event.target.value})}/>
                <button onClick={()=>this.submit()}>Click</button>
                </form>
                {
                this.state.notes.map(note => {
                    return (
                        <Note note={note}/>
                    )
                })
                }
            </div>
        )
    }
}

export const color = 'blue'
export const somestuff = 22

export default App