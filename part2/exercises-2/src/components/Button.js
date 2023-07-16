import './styles.css';

function Button() {

   return ( 
      <button onClick={onLearnMore}>
         Learn More
         </button>
   );
}

function onLearnMore(){
   window.alert("Splash Splash Water here!");
}

export default Button;