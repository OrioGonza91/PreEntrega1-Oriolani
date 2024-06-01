import {
    useState
} from "react"

function useCount(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count === 0) {
            return
        } else {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(initialValue)
    }


    return {
        count,
        increment,
        decrement,
        reset
    }
}

export default useCount