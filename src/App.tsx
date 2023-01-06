import React from 'react'
import JSPanel from './components/JSPanel'
import CSSPanel from './components/CSSPanel'
import Content from './components/Content'

function App() {
    return (
        <React.Fragment>
            <div className="container mx-auto flex flex-col justify-center items-center h-screen gap-8">
                <JSPanel title="This panel handling content with JS">
                    <Content log="content inside JS panel" />
                </JSPanel>
                <CSSPanel title="This panel handling content with CSS">
                    <Content log="content inside CSS panel" />
                </CSSPanel>
            </div>
        </React.Fragment>
    )
}

export default App
