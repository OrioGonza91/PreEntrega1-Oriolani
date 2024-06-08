import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const {categoria} = useParams()

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, "productos")

        getDocs(productsCollection).then((snapshot)=>{
            setProductos(snapshot.docs.map((doc)=> doc.data()))
        })
        
        }, [categoria])

    return (
    <div>
        <h1 className="greeting">{greeting}</h1>
        <ItemList productos= {productos} titulo={titulo} />
    </div>
    
)
}

export default ItemListContainer