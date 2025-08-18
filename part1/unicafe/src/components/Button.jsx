export default function Button ({content, onClick}) {
    function handleClick () {
        onClick()
    }

    return (
        <button onClick={handleClick}>
            {content}
        </button>
    )
}