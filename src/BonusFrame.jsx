import axios from "axios";
import { useEffect, useState } from "react";
// import AllFrameCertificate from "./feature/may_bonus_frames/AllFrameCertificate";
// import BonusReportColor from './data/may/JulyBonusReportColor.json';
import SeptemberAllFrameCertificate from "./feature/may_bonus_frames/SeptemberAllFrameCertificate";

export default function BonusFrame(){

    const [bonus, setBonus] = useState();
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 
    const token = '121498|JQGdRcCq3woyMORZ8artFNl6VNe7scssd0KvYFK3';
    // const bonusReportColor = BonusReportColor.find(color => (color.product_id === 0));

    useEffect(() => {
        getBonusFrame()
    },[])
    const region = 'MM'
    const monthlyURL = 'https://api.dev.focusbeauty.net/api/admin/bonus-awards/all' 
    // const monthlyURL = 'http://localhost:8000/api/admin/bonus-awards/all'
    const getBonusFrame = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${monthlyURL}`,
            {
                sale_region : region,
                bonus_date : '2023-08-01',
                agent_code : 'FB-002568 '
            }, 
            {
                headers : {
                    'device-type' : 'web',
                    'Authorization' : `Bearer ${token}`}
            })
            setLoading(false)
            setBonus(response.data.data)
        // console.log("bonus::",response);

        }
        catch(err) {
            setLoading(false)
            setError(true)
        }
    }
    return (
        <div className="report_card_list_container">
          { loading ? "Loading..." : bonus?.map((bonus) =>(
            <SeptemberAllFrameCertificate key={bonus?.id} info={bonus} region={region}/>
          ) 
          )}

          { error ? <p>Something is wrong</p> : <p></p> }
         
        </div>
      )
}