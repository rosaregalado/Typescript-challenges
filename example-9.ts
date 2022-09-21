

// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, or ape

// Import Kaiju and KaijuType from example-8.js

// Fix the rampage function so it makes use of the KaijuType enum
import { Kaiju, KaijuType } from './example-8'


function rampage(name: string, type: KaijuType, power: number, city: string): string {
	let action: string
	switch(type) {
		case KaijuType.ape: 
			action = 'smash'
			break

		case KaijuType.lizard:
			action = 'burn'
			break

		case KaijuType.flying: 
			action = 'flap'	
			break
	} 
	let result = `${name} ${action} over ${city} causing ${power * 10000} damage!`
	return result
}

// Define two more monsters
console.log(rampage('Gojira', KaijuType.lizard, 90, 'San Francisco'))
console.log(rampage('Frankenstein', KaijuType.ape, 60, 'New York'))
console.log(rampage('Unicorn', KaijuType.flying, 30, 'London'))



// console.log(rampage(gojira, 'tokyo'))
// Set the new monsts to rampage in a city

export {
  rampage
}