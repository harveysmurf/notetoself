import React from 'react'
import { mount } from 'enzyme'
import App from './App'

describe('App', () => {
    let app = mount(<App/>)
    it('renders app title', () => {
        expect(app.find('h2').text()).toEqual('Note to self')
    })

    describe('when rendering the form', () => {
        it('creates form component', () => {
            expect(app.find('form').exists()).toBe(true)
        })

        it('renders a submit button', () => {
            expect(app.find('button').exists()).toBe(true)
        })

    })

    describe('when creating a note', () => {
        let testNote = 'test note';
        beforeEach(() => {
            app.find('input').simulate('change', {
                target: {value: testNote}
            })
        })

        it('updates the text in state', () => {
            expect(app.state().text).toEqual(testNote)
        })

        describe('and submittin the new note' , () => {
            beforeEach(()=> {
                app.find('button').simulate('click')
            })

            it('adds the new note to state', () => {
                expect(app.state().notes[0].text).toEqual(testNote)
            })
            it('does something else', () => {
                expect(true).toBe(true)
            })
        })

    })

})