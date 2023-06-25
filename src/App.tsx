import React from 'react';
import {ThemeProvider} from 'styled-components'

import {baseTheme} from './styles/theme'
import './App.css'

import {Header} from './components/Header/Header'

const links = [
    {label: 'Wiki', href: 'https://ru.wikipedia.org/wiki/Заглавная_страница'},
    {label: 'Google', href: 'https://www.google.com/?hl=RU'},
    {label: 'React', href: 'https://react.dev/'},
]

function App() {
    return (
        <ThemeProvider theme={baseTheme}>
            <Header links={links}/>
        </ThemeProvider>
    );
}

export default App;
