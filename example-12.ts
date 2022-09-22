
// You are making a mapping application. 

// Write an enum that defines the directions: 
// North, South, East, West

enum Direction {
	North,
	South,
	East,
	West
}

// Should having a heading property type Direction

class MapPosition {
	direction: Direction
	constructor() {
		this.direction = Direction.North
	}

	// takes a new Direction as an argument
	move(newDirection: Direction) {
		// set the direction on your property 
		this.direction = newDirection
		// Print the new direction
		console.log(this.direction)
	}

	// Should return a string and print:
	// "you are heading <direction>"
	describe(): string {
		return `you are heading ${this.direction}`
	}
}

const location = new MapPosition()
console.log(location.describe())
// Might output:
// "You are heading north"
location.move(Direction.West)




export default MapPosition