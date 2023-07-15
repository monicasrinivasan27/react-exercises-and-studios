import React from 'react';
import classes from './HobbyLinks.module.css';

export default function  HobbyLinks(){
let hobbyLinks=["https://www.indianhealthyrecipes.com/recipes/south-indian-recipes-food/",
                "https://www.gardendesign.com/how-to/",
                "https://hobbycents.com/hobby-guides/cleaning-hobby-guide/"];
let hobbyList = "My Hobbies"
return (
    <div>
        <h3 className = {classes.hobbyHeading}>{hobbyList}</h3>
        <ui>
        <li className = {classes.hobbyText}><a href={hobbyLinks[0]}>Cooking</a></li>
        <li className = {classes.hobbyText}><a href={hobbyLinks[1]}>Gardening</a></li>
        <li className = {classes.hobbyText}><a href={hobbyLinks[2]}>Cleaning</a></li>
        </ui>
    </div>

);
}