import React from "react";
import Layout from "../../components/layout";
import ContactPage from '../../components/Contact/ContactPage';

const Page = ({}) =>{
    return (
        <Layout removeContactForm>
           <ContactPage />
        </Layout>
    )
}
export default Page