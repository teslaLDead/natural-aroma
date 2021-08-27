import React from "react";
import { Grid, Box, makeStyles } from "@material-ui/core";
import { Link } from "gatsby";

// this sort of navigation can be use across products and blogs


const categoryNavStyles = makeStyles({
    container: {

    },
    item: {

    },
    categoryName: {},
    count: {}
})

const CategoryLink = ({ name, link, count, active }) => {
    const classes = categoryNavStyles()
    return (
        <Box className={classes.item}>
            <Link to={link}>
                <span className={active ? classes.activeCategoryName : classes.categoryName}>{name}</span>
                <span className={classes.count}>({count})</span>
            </Link>
        </Box>
    )
}

const CategoryNav = ({ categories }) => {
    const classes = categoryNavStyles()
    return (
        <Box className={classes.container}>
            <Box>
                <p>
                    Product Categories
                </p>
            </Box>
            {categories.map(category => <CategoryLink {...category} />)}
        </Box>
    )
}

export default CategoryNav;