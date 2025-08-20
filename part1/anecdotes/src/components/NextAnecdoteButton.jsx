const NextAnecdoteButton = ({nextAnecdoteFn}) => {
    return (
        <button onClick={nextAnecdoteFn}>
            next anecdote
        </button>
    )
}

export default NextAnecdoteButton