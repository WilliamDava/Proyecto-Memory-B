import j002 from './J002_dom.js';

const j001_events = {
    defEvent(functionality, typeEvent) {
        switch (functionality) {
            case "easy":
                const nodeDificultyEasy = document.querySelector(".dificulty__select--easy");
                nodeDificultyEasy.addEventListener("click", j002.setDificultyToEasy)
                break;
            case "medium":
                const nodeDificultyMedium = document.querySelector(".dificulty__select--medium");
                nodeDificultyMedium.addEventListener("click", j002.setDificultyToMedium)
                break;
            case "hard":
                const nodeDificultyHard = document.querySelector(".dificulty__select--hard");
                nodeDificultyHard.addEventListener("click", j002.setDificultyToHard)
                break;
            
            default :
                break;
        }
    }
}

export default j001_events;