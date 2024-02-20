import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import '../../assets/css/six_months_august_certificate_card.scss'

const September2023HighestTripsFrames = (props) => {
    const {info, region} = props

    const agent_name_length = info?.agent_name?.length
    const name_size =
      agent_name_length <= 23
        ? '145px'
        : '135px'
console.log("info:", info);

const product_count = (groupCount) => {
    return groupCount > 0 && groupCount <= 5
      ? 'ten_products'
      : groupCount > 5 && groupCount <= 10
      ? 'fifteen_products'
      : groupCount > 10 && groupCount <= 15
      ? 'twenty_products'
      : groupCount > 15
      ? 'over_twenty_products'
      : ''
  }

  const product_row_gap = (groupCount) => {
    return groupCount > 0 && groupCount <= 5
      ? '25px'
      : groupCount > 5 && groupCount <= 10
      ? '12px'
      : groupCount > 10 && groupCount <= 15
      ? '9px'
      : groupCount > 15
      ? '9px'
      : '7px'
  }
  const getProductCountClass = useMemo(
    () => product_count(info?.product_groups?.length),
    [info?.product_groups?.length],
  )
  return (
    <div className="six_months_trip_card_container">
      <img src={info.bonus_frame} alt="all frame" className="report_frame"/>
      <div className="bonus_info_container_th"
      // className={region === 'MM' ? 'bonus_info_container_mm' : 'bonus_info_container_th'}
      >
      <div className='bonus_month'>Sep 2023 ~ Feb 2024</div>
      <div className={ info?.product_groups?.length <= 6 
            ? 'bonus_less_six_products'
            : 'bonus_more_six_products'}>
        <div className="agent_code prefix_name">FB</div>
        <div className="agent_code">{info?.agent_code?.split('-')[1]}</div>
        <div className="agent_profile_container">
          <img src={info.bonus_profile} alt="profile" className="agent_profile"/>
        </div>
        <div className={info?.mm_font ? 'agent_name' : 'agent_name mm_name'} style={{ fontSize: info?.mm_font ?  name_size : '110px' }}>{info?.agent_name}</div>
        <div className="bonus_award">
        <div>ခရီးစဉ်ပြန်အမ်းငွေ&nbsp;-&nbsp;</div>
        <div className="award_amount">
            {info?.total_amount_mmk} {region === 'MM' ? 'ကျပ်' : 'ဘတ်'}
        </div>
        </div>
        <div className="bonus_product_list" style={{ rowGap: product_row_gap }}>
        {info?.product_groups?.map((product, index) => (
            <FrameProductInfo
            key={index}
            productInfo={product}
            rowCount={info?.bonus_products?.length ?? 0}
            />
        ))}
        </div>
      </div>
        
      </div>
    </div>
  )
}

const FrameProductInfo = ({ productInfo, rowCount }) => {
    return (
      <div className="product_info_row" style={{ fontSize: rowCount <= 6 ? '61px' : '57px' }}>
        <span className="product_name">
          {productInfo?.name}&nbsp;:&nbsp;
        </span>
        <span>
          {productInfo?.bonus_level} ({productInfo?.qty}{' '}
          {productInfo?.name === 'Snail Wish' || productInfo?.name === 'New Skiin Supplement'
            ? 'Boxes'
            : 'Pcs'}
          )
        </span>
      </div>
    )
  }

  September2023HighestTripsFrames.propTypes = {

}

export default September2023HighestTripsFrames
