import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BonusReportColor from './data/may/BonusReportColor.json'
import SeptemberProductFrame from './feature/may_bonus_frames/SeptemberProductFrame';
const ProductFrame = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 
    const token = '122129|bE2e22U4z31XDboryHgwVXvfft8loR0IddjMun35';
    // const bonusColor = BonusReportColor.find(color => (color.product_id === 0));
    useEffect(() => {
        getProductFrame()
    },[])
    const [region, setRegiong] = useState('MM')
    const getProductFrame = async () => {
        try {
            setLoading(true)
            const response = await axios.post('http://localhost:8000/api/admin/bonus-awards/all-details',
            {
                sale_region : region ,
                bonus_date : '2023-08-01',
                agent_code : 'FB-009690',
                 product_id: 1
            }, 
            {
                headers : {
                    'device-type' : 'web',
                    'Authorization' : `Bearer ${token}`}
            })
            setLoading(false)
            setProduct(response.data.data)
        }
        catch(err) {
            setLoading(false)
            setError(true)
        }
    }
  return (
    <div className='report_card_list_container'>
      { loading ? "Loading..." :  product.map((product) => (
        <SeptemberProductFrame key={product.product_id}
          info={ product } 
          color={ BonusReportColor.find(color => (color.product_id === product.product_id)) } 
          region={region}
        />
      ))}
      { error ? <p>Something is wrong</p> : <p></p> }
    </div>
  )
}

export default ProductFrame;
