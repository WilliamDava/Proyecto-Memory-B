import j002 from './J002_dom.js';

const j001_events = {
    defEvent(functionality, typeEvent) {
        switch (functionality) {
            case "easy":
                const nodeDificultyEasy = document.querySelector(".dificulty__select--easy");
                nodeDificultyEasy.addEventListener("click" , j002.setDificultyToEasy) 
              /*   console.log("Easy") */
                break;
        }
    }
}
export default j001_events;