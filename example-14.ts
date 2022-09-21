// These functions take a function as an argument. 
// Set the type for the parameters

// In all of the functions below type the callback

// This function takes a callback that receives a string. 

function callYouLater(callback: (message: string) => void, time: number) {
	setTimeout(() => {
		callback('What it be like?')
	}, time)
}

type CallResults = {
	success: boolean, 
	probability: number
}


function callMeMaybe(callback: (results: CallResults) => void, probability) {
	setTimeout(() => {
		if (Math.random() * 100 < probability) {
			callback({ success: true, probability })
		}
		return callback({ success: false, probability })
	}, 1000)
}

// 


export {
  callYouLater,
  callMeMaybe
}
