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


    return {
        count,
        increment,
        decrement
    }
}

export default useCount