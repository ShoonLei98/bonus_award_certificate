import axios from "axios";
import { useEffect, useState } from "react";
// import AllFrameCertificate from "./feature/may_bonus_frames/JulyAllFrameCertificate";
// import BonusReportColor from './data/may/JulyBonusReportColor.json';
import September2023HighestBonusFrames from "./feature/six months frames/September2023HighestBonusFrames";

export default function BonusFrame(){

    const [bonus, setBonus] = useState();
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 
    const token = '154695|1WWtuTH8Jycuu4JLGQbCBRtvitTBuVdHUkMKPKn3';
    // const bonusReportColor = BonusReportColor.find(color => (color.product_id === 0));

    useEffect(() => {
        getBonusFrame()
    },[])
    const region = 'TH'
    // const sixMonthURL = 'https://api.dev.focusbeauty.net/api/admin/highest-bonus-awards/all'
    const sixMonthURL = 'http://localhost:8000/api/admin/highest-bonus-awards/all'
    const getBonusFrame = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${sixMonthURL}`,
            {
                sale_region : region,
                date : '2023-06-01',
                agent_id : 'FB-009904',
                page: 1,
                row_count: 15,
            }, 
            {
                headers : {
                    'device-type' : 'web',
                    'type'        : 'admin',
                    'Authorization' : `Bearer ${token}`}
            })
            setLoading(false)
            setBonus(response.data.data)
            // console.log("respon", response);
        }
        catch(err) {
            setLoading(false)
            setError(true)
        }
    }
    console.log("bonus::",bonus);
    return (
        <div className="report_card_list_container">
          { loading ? "Loading..." : bonus?.map((bonus) =>(
            <September2023HighestBonusFrames key={bonus?.id} info={bonus} region={region}/>
          ) 
          )}

          { error ? <p>Something is wrong</p> : <p></p> }
         
        </div>
      )
}