import axios from "axios";
import { useEffect, useState } from "react";
// import AllFrameCertificate from "./feature/may_bonus_frames/AllFrameCertificate";
// import BonusReportColor from './data/may/JulyBonusReportColor.json';
import AugustAllFrameCertificate from "./feature/may_bonus_frames/AugustAllFrameCertificate";

export default function BonusFrame(){

    const [bonus, setBonus] = useState();
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 
    const token = '111146|Iw6qWiFSRbkGzUkYLcnsSvlZ8tFsWk8lp2ZiiPl0';
    // const bonusReportColor = BonusReportColor.find(color => (color.product_id === 0));

    useEffect(() => {
        getBonusFrame()
    },[])
    const region = 'MM'
    // const monthlyURL = 'https://api.dev.focusbeauty.net/api/admin/bonus-awards/all' 
    const monthlyURL = 'http://localhost:8000/api/admin/bonus-awards/all'
    const getBonusFrame = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${monthlyURL}`,
            {
                sale_region : region,
                bonus_date : '2023-06-01',
                agent_code : 'FB-000695'
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
            <AugustAllFrameCertificate key={bonus?.id} info={bonus} region={region}/>
          ) 
          )}

          { error ? <p>Something is wrong</p> : <p></p> }
         
        </div>
      )
}