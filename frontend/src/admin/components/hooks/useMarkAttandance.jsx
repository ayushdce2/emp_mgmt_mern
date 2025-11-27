import React, { useEffect, useState } from 'react'

const useMarkAttandance = () => {


    const [buttontext, setButtontext] = useState("Punch In");
    const [punchInValue, setPunchInValue] = useState(null);
    const [punchOutValue, setPunchOutValue] = useState(null);
    const [totalWorkingHours, setTotalWorkingHours] = useState("");

    const MarkTodaysAttandance = () => {
        const MarkedTiming = new Date(Date.now()).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })



        if (buttontext == "Punch In") {
            setButtontext("Punch Out");
            setPunchInValue(MarkedTiming);

            return;
        }



        if (buttontext == "Punch Out") {
            setButtontext("Mark Again");
            setPunchOutValue(MarkedTiming);


            const punchInDate = new Date(punchInValue);
            const punchOutDate = new Date(MarkedTiming); // use new punch out value now

            const diffMs = punchOutDate - punchInDate;
            const diffMinutes = Math.floor(diffMs / 1000 / 60);
            const hours = Math.floor(diffMinutes / 60);
            const minutes = diffMinutes % 60;
            setTotalWorkingHours(`${hours}hr ${minutes}min`)

            //   console.log(`Worked: ${hours}h ${minutes}m`);


        }

        if (buttontext == "Mark Again") {
            setButtontext("Punch In");
            setPunchOutValue("");
            setPunchInValue("");
            setTotalWorkingHours("")
        }





    }


    return { MarkTodaysAttandance, buttontext, punchInValue, punchOutValue, totalWorkingHours }
}

export default useMarkAttandance