import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/css/six_months_august_certificate_card.scss'

const September2023HighestBonusFrames = (props) => {
    const {info, region} = props

    const agent_name_length = info?.agent_name?.length
    const name_size =
      agent_name_length <= 23
        ? '132px'
        : '125px'
console.log("info:", info);
  return (
    <>      
      <div className="six_months_bonus_report_card_container" >
        <img
          src={info?.bonus_frame}
          // onError={onFrameFailLoad}
          alt="all frame"
          className="report_frame"
        />
        <div className={region === 'MM' ? 'bonus_info_container_mm' : 'bonus_info_container_th'}>
          <div className='bonus_month'>Sep 2023 ~ Feb 2024</div>
          <div className='bonus_level'>{info?.max_bonus_level}</div>
          <div className={ info?.total_bonus_product <= 10 
            ? 'bonus_less_ten_products'
            : info?.total_bonus_product <= 19 
            ? 'bonus_less_nineteen_products' 
            : 'bonus_more_nineteen_products'}>                
              <div className="agent_code prefix_name">FB</div>
              <div className="agent_code">{info?.agent_code?.split('-')[1]}</div>
              <img src={info?.bonus_profile} alt='agent profile' className='agent_profile' />
              <div className='agent_name' style={{ fontSize: info?.mm_font ?  name_size : '110px', top: !info?.mm_font ? '53.2%' : ''  }}>{info?.agent_name}</div>
              <div className="bonus_award">
                <span>ဆုကြေးငွေ&nbsp;-&nbsp;</span>
                <span className='award_amount'>
                  {info?.total_award_amount_mmk}{' '}
                  {region === 'MM' ? 'ကျပ်' : 'ဘတ်'}
                </span>
              </div>
              <div
                className="bonus_product_list"
              >
                {info?.bonus_products?.length > 0
                  ? info?.bonus_products?.map((product, index) => (
                      <FrameProductInfo
                        productInfo={product}
                        key={index}
                        rowCount={info?.total_bonus_product ?? 0}
                      />
                    ))
                  : null}
              </div>
          </div>
        </div>
      </div>        
    </>
  )
}

const FrameProductInfo = ({ productInfo, rowCount }) => {
    return (
      <div className="product_info_row" style={{ fontSize: rowCount <= 10 ? '65px' : rowCount <= 19 ? '49px' : '40px' }}>
        <span className="product_name">
          {productInfo?.name}&nbsp;:&nbsp;
        </span>
        <span>
          {productInfo?.bonus_level} ({productInfo?.product_qty}{' '}
          {productInfo?.name === 'Snail Wish' || productInfo?.name === 'New Skiin Supplement'
            ? 'Boxes'
            : 'Pcs'}
          )
        </span>
      </div>
    )
  }

  September2023HighestBonusFrames.propTypes = {

}

export default September2023HighestBonusFrames
