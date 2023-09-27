import React, { useEffect } from 'react'
// import focImg from '../../assets/images/foc_img.png'
import PropTypes from 'prop-types'
// import { getBase64FromUrl } from '../../utils/index'
// import defaultProfile from '../../assets/images/defaultFrameProfile.jpg'
// import ProductFrameImage from '../../components/BonusAwards/ProductFrameImage'
import CashBackMM from '../../data/image/cash_back_mm.png'
import CashBackThai from '../../data/image/cash_back_thailand.png'
import ThaiFlag from '../../data/image/thailand_flag.png'
import focPinkImg from '../../data/image/foc_pink.png'
import focGreenImg from '../../data/image/foc_green.png'


const focProducts = {
  1: 'whitening_cream',
  2: 'toneup_cream',
  12: 'supplement',
}

const ProductReport = (props) => {

  const { info, color, region } = props

  const agent_code = info?.agent_code

  const agent_name_length = info?.agent_name?.length

  const focClassName = focProducts[color?.product_id]

  const name_size =
    agent_name_length <= 14
      ? '185px'
      : (agent_name_length > 14) & (agent_name_length <= 18)
      ? '178px'
      : (agent_name_length > 18) & (agent_name_length <= 20)
      ? '165px'
      : (agent_name_length > 20) & (agent_name_length <= 25)
      ? '155px'
      : agent_name_length > 25
      ? '144px'
      : '144px'

  useEffect(() => {
  }, [])

  return (
    <div className="product_report_card_container">
      <img src={info?.frame} alt="frame img"  />
      <img src={info?.profile} alt="profile" className="agent_profile" />
      <div className="bonus_report_info_container">
        <span className="bonus_month" style={{ color: color?.level_color }}>
          {info?.bonus_month}
        </span>
        <h1 className="bonus_level" style={{ color: color?.level_color }}>{info?.bonus_level}</h1>

        <h1 className="agent_name" style={{ fontSize: name_size, color: color?.agent_name}}
        >
          {info?.agent_name}
        </h1>

        <div className="agent_code" style={{ color: color?.agent_code }}>
          <p className="" style={{ margin: 0, lineHeight:0.7 }}>
            {agent_code.substring(0,2)}
          </p>
          <p className="" style={{ margin: 0, lineHeight:0.7 }}>
            {agent_code.substring(3,10)}
          </p>
        </div>
        <div className={info?.product_id === 20 ? "bonus_qty_container toothpaste" : "bonus_qty_container"} style={{ color: color?.product_qty }}>
          <h3 className="bonus_month_quantity" 
              style={{ color: color?.product_qty }}
          >
            {info?.bonus_month?.split(' ')[1]}
          </h3>
          <p className="bonus_quantity"
              style={{ color: color?.product_qty}}
          >
            {info?.product_qty}Pcs
          </p>
        </div>
        <p className="award_amount" style={{ color: color?.award_amount }}>
          { info?.bonus_award_amount.toLocaleString() }
          <span className='award_currency'>{region === 'MM' ? 'MMK' : 'THB'}</span>
        </p>
        <img className="money_image" alt="money img" src={info?.money} />
        {region === 'MM' 
          ? 
          <img className='cash_back_img' src={CashBackMM}></img>
          :
          <img className='cash_back_img' src={CashBackThai}></img>
        }
      </div>
      {info?.foc_product_id ? (        
        focClassName === 'supplement' 
        ? 
        <div className="foc_img_container supplement">
          <img src={focGreenImg} alt="foc-img" />
          <div className="foc_amount_container">
            <h2 className="foc_name" style={{ color: color?.foc_name }}>
            FOC
            </h2>
            <p className="foc_amount" style={{ color: color?.foc_amount }}>
              {info?.foc_qty} Pcs
            </p>
          </div>
        </div>
        : 
        <div className="foc_img_container">
          <img src={focPinkImg} alt="foc-img" />
          <div className="foc_amount_container">
            <h2 className="foc_name" style={{ color: color?.foc_name }}>
            FOC
            </h2>
            <p className="foc_amount" style={{ color: color?.foc_amount }}>
              {info?.foc_qty} Pcs
            </p>
          </div>
        </div> 
      ) : null}
    </div> 
  )
}

ProductReport.propTypes = {
  info: PropTypes.object.isRequired,
  color: PropTypes.object.isRequired,
  ref: PropTypes.object.isRequired,
  region: PropTypes.string.isRequired,
}

export default React.forwardRef(ProductReport)
