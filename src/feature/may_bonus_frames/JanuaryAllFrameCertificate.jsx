import React from 'react'
import PropTypes from 'prop-types'
// import '../../assets/css/_august_certificate_card.scss'
// import { getBase64FromUrl } from '../../utils/index'
// import allFrameImg from '../../assets/images/frames/all_frame.png'
// import defaultAllFrame from '../../assets/images/defaultFrameProfile.jpg'

const DecemberAllFrame = (props) => {
  const { info, region  } = props  
  const bonus_month = info?.bonus_month?.split(' ')[0]
  const bonus_year = info?.bonus_month?.split(' ')[1]

  const agent_name_length = info?.agent_name?.length
  const name_size = 
    agent_name_length <= 25
      ? '155px'
      : '135px'
    //   console.log("nameeee",agent_name_length);
  return (
    <>      
      <div className="bonus-report-card-container" >
        <img
          src={info?.frame}
          // onError={onFrameFailLoad}
          alt="all frame"
          className="report-frame"
        />
        <div className="bonus-report-info-container">
          {/* <div className=''>
            <span className='bonus-month months'>{info?.bonus_month?.split(' ')[1]}</span>
            <span>{" "}</span>
            <span className="bonus-month year">{info?.bonus_month?.split(' ')[0]}</span>
          </div> */}
          <div className="bonus-month">
            {/* {info?.bonus_month?.split(' ')[1]}{' '}{info?.bonus_month?.split(' ')[0]} */}
            December 2023
            </div>
          {/* <div className="bonus-month">{info?.bonus_month?.split(' ')[0]}</div> */}
          <h1 className="bonus-level">
            {info?.max_bonus_level}
          </h1>
          <div className="agent-profile-container">
              <img src={info?.profile} alt="profile" className="agent-profile" />
          </div>
          <span
              className="agent-code prefix-name"
          >
              FB
          </span>
          <span
            className="agent-code"
          >
          {info?.agent_code?.split('-')[1]}
          </span>
          <h1 className="agent-name" style={{ fontSize: info?.myan_font ? '117px' :  name_size, top: info?.myan_font ? '51.6%' : '50.7%'}}>
            {info?.agent_name}
          </h1>            
          <div className="award-amount">
            <div className="amount-name">qkaju;aiG-</div>
            <div className="amount-value">
            {info?.total_award_amount.split(',').join('ç')}{' '}
            {region === 'MM' ? 'usyf' : 'bwf'}
            </div>
          </div>
          <div
            className={info?.bonus_products?.length > 8 ? 'bonus-product-list-more-eight' : info?.bonus_products?.length > 3 ? 'bonus-product-list-less-eight' : 'bonus-product-list-less-three'}
            >
                {info?.bonus_products?.length > 0
                ? info?.bonus_products?.map((productInfo, index) => (
                    <FrameProductInfo
                        productInfo={productInfo}
                        key={index}
                        rowCount={info?.bonus_products?.length ?? 0}
                    />
                    ))
                : null}
          </div>  
        </div>
      </div>        
    </>
  )
}

const FrameProductInfo = ({ productInfo, rowCount }) => {
  console.log('product count::', rowCount, 'proudct_info::', productInfo)
  return (
    <div className="product-info-row">
      <span className="product-name">{productInfo?.name}&nbsp;:&nbsp;</span>
      <span className="product-name">
        {productInfo?.bonus_level} ({productInfo?.product_qty}{' '}
        {productInfo?.group_id === 29 || productInfo?.group_id === 23 ? 'Boxes' : 'Pcs'})
      </span>
    </div>
  )
}

DecemberAllFrame.propTypes = {
  info: PropTypes.object.isRequired,
  region: PropTypes.string.isRequired,
  ref: PropTypes.object.isRequired,
  onFrameLoad: PropTypes.func.isRequired,
  onProfileLoad: PropTypes.func.isRequired,
  // onFrameFailLoad: PropTypes.func.isRequired,
}

FrameProductInfo.propTypes = {
  productInfo: PropTypes.object.isRequired,
  rowCount: PropTypes.number.isRequired,
}

export default React.forwardRef(DecemberAllFrame)
