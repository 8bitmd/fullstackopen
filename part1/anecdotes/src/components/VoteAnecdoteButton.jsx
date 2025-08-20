const VoteAnecdoteButton = ({voteFn}) => {
    return (
        <button onClick={voteFn}>
            vote
        </button>
    )
}

export default VoteAnecdoteButton