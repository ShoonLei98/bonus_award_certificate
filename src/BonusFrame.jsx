import axios from "axios";
import { useEffect, useState } from "react";
import './assets/css/_july_certificate_card.scss';
import AllFrameCertificate from "./feature/may_bonus_frames/AllFrameCertificate";
import BonusReportColor from './data/may/BonusReportColor.json';

export default function BonusFrame(){

    const [bonus, setBonus] = useState();
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 
    const token = '104683|zGElkZT2kNC7rcCyvuFhrUg5NzMDVZmiimiJido3';
    const bonusReportColor = BonusReportColor.find(color => (color.product_id === 0));

    useEffect(() => {
        getBonusFrame()
    },[])

    const getBonusFrame = async () => {
        try {
            setLoading(true)
            const response = await axios.post('https://api.dev.focusbeauty.net/api/admin/bonus-awards/all',
            {
                sale_region : 'MM',
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
        }
        catch(err) {
            setLoading(false)
            setError(true)
        }
    }
    // console.log("bonus::",bonus);
    return (
        <div className="report_card_list_container">
          { loading ? "Loading..." : bonus?.map((bonus) =>(
            <AllFrameCertificate key={bonus?.id} info={bonus} color={bonusReportColor} region={'MM'}/>
          ) 
          )}

          { error ? <p>Something is wrong</p> : <p></p> }
         
        </div>
      )
}