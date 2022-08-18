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