import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc} from "firebase/firestore"


function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const id = useParams().id

    useEffect(() => {
        
        
    }, [id])


    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer