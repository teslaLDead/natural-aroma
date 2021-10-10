import React from "react";
import Layout from "../layout";
import CategoryPage from "../Blog/CategoryPage";

const Home = ({pageContext, data}) =>{
    console.log('blog category', pageContext)
    const {
        catgory
    } = pageContext
    return (
        <Layout>
           <CategoryPage category={catgory}/>
        </Layout>
    )
}
export default Home