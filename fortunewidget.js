
async function getRandomFortune() {
    try {
        const response = await fetch('fortunes/use/fortunes');  
        const text = await response.text();
        const fortunes = text.split('%');
        const cleanedFortunes = fortunes.map(fortune => fortune.trim()).filter(fortune => fortune.length > 0);

        const randomIndex = Math.floor(Math.random() * cleanedFortunes.length);
        const randomFortune = cleanedFortunes[randomIndex];

        document.getElementById('fortune').innerText = formatFortune(randomFortune)
    } catch (error) {
        console.error('Error loading fortune file:', error);
        document.getElementById('fortune').innerText = 'Failed to load fortunes.';
    }
}

const tux = `
   \\ 
    \\ 
        .--.   
       |o_o | 
       |:_/ |   
      //   \\ \\    
     (|     | )    
    /'\\_   _/\`\\    
    \\___)=(___/      
`

function formatFortune(fortune) {
    const lineLength = 24 - 4;
    cleaned_fortune = fortune.replace(/[\n\r\t]/g, ' ').replace(/\s+/g, ' '); 

    const words = cleaned_fortune.split(' ');
    let lines = [];
    let currentLine = '';

    for (let word of words) {
        // for the sides btw
        if ((currentLine + ' ' + word).length <= lineLength) {
            currentLine += (currentLine ? ' ' : '') + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }
    if (currentLine.length > 0) {
        lines.push(currentLine);
    }

    console.log(lines);


    const top = ' '+'_'.repeat(lineLength + 2);
    const bottom = ' '+'-'.repeat(lineLength + 2);

    let formattedFortune = `${top} \n` ;

    let L = lines.length;

    if (L >= 3) {

        for (let i = 0; i < L; i++) {
            const padding = lineLength - lines[i].length;

            if (i == 0) formattedFortune += `/ ${lines[i]}${' '.repeat(padding)} \\ \n` ;
            else if (i == L - 1) formattedFortune += `\\ ${lines[i]}${' '.repeat(padding)} / \n` ;
            else formattedFortune += `| ${lines[i]}${' '.repeat(padding)} |\n` ;
        }

    } else if (L == 2) {

        for (let i = 0; i < L; i++) {
            const padding = lineLength - lines[i].length;

            if (i == 0) formattedFortune += `/ ${lines[i]}${' '.repeat(padding)} \\ \n`;
            else if (i == 1) formattedFortune += `\\ ${lines[i]}${' '.repeat(padding)} / \n` ;
        }

    } else {
        padding = lineLength - lines[0].length; // no it will not be negative
        formattedFortune += `< ${lines[0]}${' '.repeat(padding)} > \n` ;
    }

    formattedFortune += `${bottom}`;
    formattedFortune += tux;

    return formattedFortune;
}

getRandomFortune();


