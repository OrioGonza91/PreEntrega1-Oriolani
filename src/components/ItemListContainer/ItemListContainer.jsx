import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


function ItemListContainer({ greeting }) {

    const [products, setProducts] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const { categoria } = useParams()

    useEffect(() => {
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, "productos")
        if (categoria) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoria))
            getDocs(queryFilter)
                .then((res) => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            setTitulo(categoria)
        } else {
            getDocs(queryCollection)
                .then((res) => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            setTitulo('Productos')
        }
    }, [categoria])

    return (
        <div>
            <h1 className="greeting">{greeting}</h1>
            <ItemList productos={products} titulo={titulo} />
        </div>

    )
}

export default ItemListContainer