import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore} from "firebase/firestore"


function ItemDetailContainer() {

    const [item, setItem] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'productos', id);
        getDoc(queryDoc)
        .then(res => setItem({id: res.id, ...res.data()}))
        
    }, [id])


    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer