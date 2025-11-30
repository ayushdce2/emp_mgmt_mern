import React, { useEffect, useState } from 'react'
import API from '../../../utility/axios';
import { handleSuccess, handleError } from '../../../utility/ToastCustom.jsx';

const useMarkAttandance = () => {

    const [buttontext, setButtontext] = useState("Punch In");
    const [punchInValue, setPunchInValue] = useState(null);
    const [punchOutValue, setPunchOutValue] = useState(null);
    const [totalWorkingHours, setTotalWorkingHours] = useState("");
    const [recordId, setRecordId] = useState(null);

    const [AttandanceSummarydata, setAttandanceSummaryData] = useState();
    const [Loading, setLoading] = useState(true)


    const headers = {
        headers: {
            "Authorization": localStorage.getItem("token"),
        }
    }




    const MarkTodaysAttandance = () => {
        // const MarkedTiming = new Date(Date.now());
        // toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })



        const PunchInFunction = async () => {
            // console.log(MarkedTiming,"<-============punchInValue");
            try {
                const response = await API.get("/user/markattandance/punchin", headers);
                const data = response.data;
                handleSuccess(data.message);
                setRecordId(data.AttandanceData._id);
                // console.log(data.AttandanceData.punchInValue,"<========response");
                setPunchInValue(data.AttandanceData.punchInValue)

            } catch (error) {
                console.log(error, "error", error.status);
                // error.status=="500" && handleError(error.response.data.error.codeName)
                error.status == "400" && handleError(error.response.data.error.details[0].message)
            }
        }

        const PunchOutFunction = async (recordId) => {
            try {
                console.log(recordId, "<========recordId");
                const response = await API.post("/user/markattandance/punchout", { _id: recordId }, headers);
                const data = response.data;
                handleSuccess(data.message);

                setPunchOutValue(data.AttandanceData.punchOutValue);
                setTotalWorkingHours(`${data.AttandanceData.Workinghours}hr ${data.AttandanceData.Workingminutes}min`)
                // console.log(response,"response");
            } catch (error) {
                console.log(error, "error", error.status);
                // error.status=="500" && handleError(error.response.data.error.codeName)
                // error.status=="400" && handleError(error.response.data.error.details[0].message)
            }
        }

        if (buttontext == "Punch In") {
            setButtontext("Punch Out");
            // setPunchInValue(MarkedTiming);
            PunchInFunction();
            return;
        }



        if (buttontext == "Punch Out") {
            setButtontext("Mark Again");
            // setPunchOutValue(MarkedTiming);


            // const punchInDate = new Date(punchInValue);
            // const punchOutDate = new Date(MarkedTiming); // use new punch out value now

            // const diffMs = punchOutDate - punchInDate;
            // const diffMinutes = Math.floor(diffMs / 1000 / 60);
            // const Workinghours = Math.floor(diffMinutes / 60);
            // const Workingminutes = diffMinutes % 60;
            // setTotalWorkingHours(`${Workinghours}hr ${Workingminutes}min`)
            PunchOutFunction(recordId);
            //   console.log(`Worked: ${hours}h ${minutes}m`);


        }

        if (buttontext == "Mark Again") {
            setButtontext("Punch In");
            setPunchOutValue("");
            setPunchInValue("");
            setTotalWorkingHours("")
        }






    }

    const getRecentAttandanceonRefresh = async () => {
        console.log("hi")
        try {
            // console.log(recordId,"<========recordId");
            const Response = await API.get("/user/getattandancedetails", headers);
            const data = Response.data;
            if(data.AllAttandanceDetails[0]==undefined) return;
            setAttandanceSummaryData(data.AllAttandanceDetails);
            setLoading(false);
            console.log(data.AllAttandanceDetails.length,"data.AllAttandanceDetails");
            const getPunchInValue = data.AllAttandanceDetails[0].punchInValue;
            const getPunchOutValue = data.AllAttandanceDetails[0].punchOutValue;
            const id = data.AllAttandanceDetails[0]._id;
            const Workinghours = data.AllAttandanceDetails[0].Workinghours;
            const Workingminutes = data.AllAttandanceDetails[0].Workingminutes;
            if(getPunchInValue){
setButtontext("Punch Out");setPunchInValue(getPunchInValue);setRecordId(id);
            }
    if(getPunchOutValue){
setButtontext("Mark Again");setPunchOutValue(getPunchOutValue);
    }
             
            Workingminutes!==null && setTotalWorkingHours(`${Workinghours}hr ${Workingminutes}min`);
            // setButtontext("Punch Out");
            
            
            // const {} = data.AllAttandanceDetails[0]
            // handleSuccess(data.message);

            // setPunchOutValue(data.AttandanceData.punchOutValue);
            // setTotalWorkingHours(`${data.AttandanceData.Workinghours}hr ${data.AttandanceData.Workingminutes}min`)
            // console.log(response,"response");
        } catch (error) {
            console.log(error, "error", error.status);
            // error.status=="500" && handleError(error.response.data.error.codeName)
            // error.status=="400" && handleError(error.response.data.error.details[0].message)
        }
    }


    useEffect(() => {
        getRecentAttandanceonRefresh();
    }, []);
// console.log(AttandanceSummarydata, "=====AttandanceSummarydata=====")
    return { Loading,AttandanceSummarydata, MarkTodaysAttandance, buttontext, punchInValue, punchOutValue, totalWorkingHours ,refetch:getRecentAttandanceonRefresh}
}

export default useMarkAttandance