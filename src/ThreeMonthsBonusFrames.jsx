import axios from "axios";
import { useEffect, useState } from "react";
// import AllFrameCertificate from "./feature/may_bonus_frames/JulyAllFrameCertificate";
// import BonusReportColor from './data/may/JulyBonusReportColor.json';
import NovemberThreeMonthsFrames from "./feature/three_months_frames/February2024ThreeMonthsFrames";
import YearEndTripCertificates from "./feature/year end certificates/YearEndTripCertificates";

export default function BonusFrame(){

    const [bonus, setBonus] = useState();
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 
    const token = '154697|nDci67BCQazf3iF6H3PngPpNoillRIHWhMYckKs5';
    // const bonusReportColor = BonusReportColor.find(color => (color.product_id === 0));

    useEffect(() => {
        getBonusFrame()
    },[])
    const region = 'MM'
    // const sixMonthURL = 'https://api.dev.focusbeauty.net/api/admin/highest-bonus-awards/all'
    const threeMonthURL = 'http://localhost:8000/api/admin/three-months-trips/all-details'
    const getBonusFrame = async () => {
        try {
            setLoading(true)
            const response = await axios.post(`${threeMonthURL}`,
            {
                sale_region : region,
                date : '2023-08-01',
                // agent_code : 'FB-000695',
                group_id: '2',
                page: 1,
                row_count: 15
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
            <NovemberThreeMonthsFrames key={bonus?.id} info={bonus} region={region}/>
            // <YearEndTripCertificates key={bonus?.id} info={bonus} region={region}/>
          ) 
          )}

          { error ? <p>Something is wrong</p> : <p></p> }
         
        </div>
      )
}