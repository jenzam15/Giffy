import getTrendingTerms from "../../Services/getTrendingTerms"
import Category from "../category"
import { useState, useEffect } from "react"


export default function TrendingSearches() {
    const [trends, setTrends] = useState([])

    useEffect(function(){
      getTrendingTerms().then(setTrends)
    
    }, [])

    return <Category name='Tendencias' options={trends}/>
    
}