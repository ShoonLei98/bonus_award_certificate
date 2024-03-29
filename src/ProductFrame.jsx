import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BonusReportColor from './data/may/BonusReportColor.json'
import DecemberProudctFrame from './feature/may_bonus_frames/JanuaryProductFrame';
import JanuaryProductFrame from './feature/may_bonus_frames/JanuaryProductFrame';
const ProductFrame = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(false); 
    const token = '154691|LEMKmzu9ZXI3s29rvUZwRrM7ohC1aCTJyMwgXBOs';
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
              sale_region :'MM',
              bonus_date :'2023-06-01',
              // group_id : 23,
              // agent_code :'FB-023189',
              // agent_code : 'FB-000004',
              agent_code : 'FB-000004',
              page :1,
              row_count :15,
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
        <JanuaryProductFrame key={product.product_id}
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
