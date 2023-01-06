import React from 'react'

type Props = {
    log: string
}

const Content = (props: Props) => {
    const { log } = props
    const [value, setValue] = React.useState<string>('')

    React.useEffect(() => {
        console.log('------ RENDERED:', log, '------')
        console.log('%c> CALLED TO MS: ' + log, 'color: red')
    }, [])

    return (
        <React.Fragment>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestiae, numquam delectus fuga officia quis sed neque animi
            architecto beatae sint quo? Sunt ratione consequatur dolore ea.
            Expedita, debitis perferendis!
            <br />
            <span>Input: </span>
            <input
                type="text"
                className="border border-black px-1"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </React.Fragment>
    )
}

export default Content
