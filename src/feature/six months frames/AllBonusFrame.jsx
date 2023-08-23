import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/css/six_months_august_certificate_card.scss'

const AllBonusFrame = (props) => {
    const {info, region} = props

    const agent_name_length = info?.agent_name?.length
    const name_size =
      agent_name_length <= 16
        ? '140px'
        : (agent_name_length > 16) & (agent_name_length <= 20)
        ? '130px'
        : '113px'

  return (
    <>      
      <div className="six-months-bonus-report-card-container" >
        <img
          src={info?.bonus_frame}
          // onError={onFrameFailLoad}
          alt="all frame"
          className="report-frame"
        />
        <div className='bonus-info-container'>
          <div className='bonus-month'>{info?.bonus_month}</div>
          <div className='bonus-level'>{info?.max_bonus_level}</div>
          <div className="agent-code prefix-name">FB</div>
          <div className="agent-code">{info?.agent_code?.split('-')[1]}</div>
          {/* <div className='agent-profile'></div> */}
          <img src={info?.bonus_profile} alt='agent profile' className='agent-profile' />
          <div className={ info?.total_bonus_product <= 5 
            ? 'bonus-less-five-products' 
            : info?.total_bonus_product <= 10 
            ? 'bonus-less-ten-products'
            : 'bonus-less-fifteen-products'}>
              <div className='agent-name' style={{ fontSize: name_size }}>{info?.agent_name}</div>
              <div className="bonus-award">
                <span>ဆုကြေးငွေ&nbsp;-&nbsp;</span>
                <span className='award-amount'>
                  {region === 'MM' ? info?.total_award_amount_mmk : info?.total_award_amount.toLocaleString()}{' '}
                  {region === 'MM' ? 'ကျပ်' : 'THB'}
                </span>
              </div>
              <div
                className="bonus-product-list"
                style={{
                  rowGap:
                    info?.bonus_products?.length <= 5
                      ? '25px'
                      : info?.bonus_products?.length <= 10
                      ? '12px'
                      : info?.bonus_products?.length <= 15 
                      ? '10px'
                      : '5px',
                }}
              >
                {info?.bonus_products?.length > 0
                  ? info?.bonus_products?.map((product, index) => (
                      <FrameProductInfo
                        productInfo={product}
                        key={index}
                        rowCount={info?.bonus_products?.length ?? 0}
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
      <div className="product-info-row" style={{ fontSize: rowCount <= 5 ? '68px' : rowCount <= 10 ? '60px' : rowCount <= 15 ? '55px' : '50px' }}>
        <span className="product-name">
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

AllBonusFrame.propTypes = {

}

export default AllBonusFrame
