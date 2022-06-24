import React from 'react';
// import {robots} from './robots'; - b/c its defined as a props (here and in index) so no need to import
import Card from './Card'

const CardList = ({ robots }) => {
	if (true) {
		throw new Error('NOOOOO!')
	}
  return (				//- if the return del. wont work. maybe cuz loop.
	<div>
	  { 
		robots.map((user, i) => {
	      return (
					<Card 
		     		key={i} 
						id={robots[i].id} 
						name={robots[i].name} 
						email={robots[i].email}
					 	/>
				   	   );
						})
      }
  </div> 	
		);
}

export default CardList;



//or - just moved the function to the div 
// const CardList = ({robots}) => {
// 	const cardArray = robots.map((user, i) => {
// 		return (
// 		<Card 
// 		key={i} 
// 		id={robots[i].id} 
// 		name={robots[i].name} 
// 		email={robots[i].email}
// 		/>
// 		);
// 	})
// 	return (
// 	<div>
//     	{cardArray}
//   </div> 	
// 		);
// }

// export default CardList;