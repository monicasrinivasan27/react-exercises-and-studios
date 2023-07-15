import React from 'react';
import classes from './ChoresList.module.css';


class ChoresList extends React.Component {
   render(){
   const choresList=["Washing dishes.",
                   "Loading/unloading the dishwasher.",
                   "Cooking or preparing meals.",
                   "Setting thes table.",
                   "Packing lunches.",
                   "Sweeping or vacuuming the kitchen and eating area.",
                   "Taking care of kids"
      ];
   let choreListHeader="My Chores"


   return (
      <div>
         <h3 className={classes.choresHeading }>{choreListHeader}</h3>
         <ul>
         <li className={classes.choresText}>{choresList[0]}</li>
         <li className={classes.choresText}>{choresList[1]}</li>
         <li className={classes.choresText}>{choresList[2]}</li>
         <li className={classes.choresText}>{choresList[3]}</li>         
         <li className={classes.choresText}>{choresList[4]}</li>
         <li className={classes.choresText}>{choresList[5]}</li>
         <li className={classes.choresText}>{choresList[6]}</li>
       </ul>
      </div>      
   );
   }
}
export default ChoresList;