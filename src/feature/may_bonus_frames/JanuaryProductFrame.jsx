import React, { useEffect } from 'react'
// import focImg from '../../assets/images/foc_img.png'
import PropTypes from 'prop-types'
// import { getBase64FromUrl } from '../../utils/index'
// import defaultProfile from '../../assets/images/defaultFrameProfile.jpg'
// import ProductFrameImage from '../../components/BonusAwards/ProductFrameImage'
import FocImage from '../../data/image/foc_january.png'
import moment from 'moment'

const focProducts = {
  1: 'whitening_cream',
  2: 'toneup_cream',
  12: 'supplement',
}

const ProductReport = (props) => {

  const { info, region } = props

  const agent_code = info?.agent_code

  const agent_name_length = info?.agent_name?.length

  const name_size =
    agent_name_length <= 25
      ? '150px'
      : '125px'

  const bonus_month = moment(info?.bonus_month).format('YYYY MMMM')

  useEffect(() => {
  }, [])
  console.log("info", info);
  return (
    <div className="product_report_card_container">
      <img src={info?.frame} alt="frame img" />
      <img src={info?.profile} alt="profile" className="agent_profile" />
      <div className="bonus_report_info_container">
        <span className="bonus_month">
        {bonus_month?.split(' ')[1]} {bonus_month?.split(' ')[0]}
        </span>
        <h1 className="bonus_level">Sr.Queen Majesty Agent</h1>

        <h1 className="agent_name" style={{ fontSize: info?.myan_font ? '60px' :  name_size, top: info?.myan_font ? '51%' : '49.7%'}}
        >
          {info?.agent_name}
        </h1>
        <div className="agent_code">
          {info?.agent_code}
        </div>
        <div className={info?.group_id === 30 ? 'bonus_qty_container beaute_cafe' : 'bonus_qty_container'}>
          <h3 className="bonus_month_quantity">
            {info?.bonus_month?.split(' ')[1]}
          </h3>
          <p className="bonus_quantity">
            {info?.product_qty}pcs
          </p>
        </div>
        <p className="award_amount">
          { info?.bonus_award_amount_mmk.toLocaleString() }{' '}
          <span className='award_currency'>{region === 'MM' ? 'ကျပ်' : 'ဘတ်'}</span>
        </p>
        <img className="money_image" alt="money img" src={info?.money} />
      </div>
      {info?.foc_product_id ? (        
        <div className={info?.foc_product_id === 1 ? "foc_img_container snail_wish" : "foc_img_container"}>
          <img src={FocImage} alt="foc-img" className='foc_img' />
          <h2 className="foc_name">
            F.O.C
          </h2>
          <h3 className="foc_amount">
            {info?.foc_qty}pcs
          </h3>
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
