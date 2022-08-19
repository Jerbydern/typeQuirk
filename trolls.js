//Trolls
//Sollux
let solSpecialCases = ['too', 'to', 'k', 'k.', 'k!', 'k?']

let solluxSpecial = (word) => {
	word = word.toLowerCase()
	if (word === 'too' || word === 'to'){
		return word.replace('too','two').replace('to','two')
	}
	if (word === 'k' || word === 'k?' || word === 'k!' || word=== 'k.'){
		return word.replace('k','KK')
	}
}
let sollux = (line) => {
	let newLine = ''
	line = line.split(' ')
	for (let i = 0; i < line.length; i ++){
		if (solSpecialCases.includes(line[i].toLowerCase())){
			newLine += solluxSpecial(line[i]) + ' '
		}
		else {
			newLine += line[i].toLowerCase().replaceAll('i','ii').replaceAll('s','2') + ' '
		}
	}
	return newLine
} 

//Terezi
let terezi = (line) => {
	let newLine = ''
	line = line.split(' ')
	for (let i = 0; i < line.length; i ++){
		newLine += line[i].toUpperCase().replaceAll('I','1').replaceAll('E','3').replaceAll('A','4') + ' '
	}
	return newLine
}

//Tavros
let tavros = (line) => {
	let punct = true
	let newLine = ''
	line = line.split(' ')
	for (let i = 0; i < line.length; i ++){
		if (punct === true) {
		newLine += line[i].toUpperCase().replace(line[i].toUpperCase().substring(0,1),line[i].substring(0,1).toLowerCase()) + ' '
	}
		else {
			newLine += line[i].toUpperCase() + ' '
		}
		line[i].endsWith('.') || line[i].endsWith(',') || line[i].endsWith('?') || line[i].endsWith('!') ? punct = true : punct = false
	}
	return newLine
}



/* 
* Make it so Sollux program is sensitive to all-caps words

*/
