import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
    </Helmet>)
};

Meta.defaultProps= {
    title: "Sample Shop",
    description: "Sample Ecommerce Shop",
    keywords:"Affordable, Best Products"
}
export default Meta;
