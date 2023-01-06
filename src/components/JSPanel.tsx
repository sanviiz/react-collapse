import React from 'react'

type Props = {
    children: React.ReactNode
    title: string
}

const JSPanel = (props: Props) => {
    const { children, title } = props
    const [isOpen, setIsOpen] = React.useState<boolean>(true)

    return (
        <div className="w-full bg-slate-100 shadow shadow-black">
            <div className="border-2 border-red-500 p-4 flex justify-between items-center">
                <h1 className="font-bold">{title}</h1>
                <button
                    className="font-bold px-2 border-2 border-blue-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '-' : '+'}
                </button>
            </div>
            {isOpen && (
                <div className="border-2 border-green-500 p-4">{children}</div>
            )}
        </div>
    )
}

export default JSPanel
