import ReactMarkdown from 'react-markdown'

function GeneratedRecipe(props) {
    return(
        <>
        {props.status ?
        <div className='flex flex-col justify-center items-center mx-auto bg-[#e8cdb6] max-w-2xl border rounded-2xl p-4 mb-5'>
            <h1 className='font-semibold text-xl mb-3'>Chef Cow AI Recommends:</h1>
            <div className='prose'>
                <ReactMarkdown components={{
                ul: ({ node, ...props }) => <ul className="list-disc ml-6" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal ml-6" {...props} />,
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                }}>
                {props.generatedRecipe}
                </ReactMarkdown>
            </div>
        </div> : null}

        </>
    )
}

export default GeneratedRecipe