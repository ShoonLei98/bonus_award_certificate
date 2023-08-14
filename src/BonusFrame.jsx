import axios from "axios";
import { useEffect, useState } from "react";
import './assets/css/_july_certificate_card.scss';
import AllFrameCertificate from "./feature/may_bonus_frames/JulyAllFrameCertificate";
import BonusReportColor from './data/may/JulyBonusReportColor.json';

export default function BonusFrame(){

    const [bonus, setBonus] = useState();
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 
    const token = '105851|375rbU7dI3PF3LD4a2at5m4rrezSvJBSS5YyobUx';
    const bonusReportColor = BonusReportColor.find(color => (color.product_id === 0));

    useEffect(() => {
        getBonusFrame()
    },[])
    const region = 'MM'
    const monthlyURL = 'https://api.dev.focusbeauty.net/api/admin/bonus-awards/all'
    const sixMonthURL = 'https://api.dev.focusbeauty.net/api/admin/highest-bonus-awards/all'
    const getBonusFrame = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${sixMonthURL}`,
            {
                sale_region : region,
                bonus_date : '2023-06-01',
                // agent_code : 'FB-000005'
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
            <AllFrameCertificate key={bonus?.id} info={bonus} color={bonusReportColor} region={region}/>
          ) 
          )}

          { error ? <p>Something is wrong</p> : <p></p> }
         
        </div>
      )
}