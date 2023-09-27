import React from 'react'
import PropTypes from 'prop-types'
// import '../../assets/css/_august_certificate_card.scss'
// import { getBase64FromUrl } from '../../utils/index'
// import allFrameImg from '../../assets/images/frames/all_frame.png'
// import defaultAllFrame from '../../assets/images/defaultFrameProfile.jpg'

const AllFrameReport = (props) => {
  const { info, region  } = props  
  const bonus_month = info?.bonus_month?.split(' ')[0]
  const bonus_year = info?.bonus_month?.split(' ')[1]
  console.log("infooooo", info);

  const agent_name_length = info?.agent_name?.length
  const name_size =
    agent_name_length <= 22
      ? '133px'
      : '118px'
      console.log("nameeee",agent_name_length);

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
          <div className="bonus-month">{info?.bonus_month?.split(' ')[1]}{' '}{info?.bonus_month?.split(' ')[0]}</div>
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
          <h1 className="agent-name" style={{ fontSize: name_size }}>
            {info?.agent_name}
          </h1>            
          <div className="award-amount">
            <div className="amount-name">qkaju;aiG-</div>
            <div className="amount-value">
            {info?.total_award_amount}{' '}
            {region === 'MM' ? 'usyf' : 'THB'}
            </div>
          </div>
          <div
            //   className="bonus-product-list"
            className={info?.bonus_products?.length >= 8 ? 'bonus-product-list' : 'bonus-product-list-less-seven'}
              style={{
                rowGap:
                  info?.bonus_products?.length >= 10
                    ? '35px'
                    : info?.bonus_products?.length >= 8
                    ? '30px'
                    : '40px',
              }}
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
  return (
    <div className="product-info-row">
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

AllFrameReport.propTypes = {
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

export default React.forwardRef(AllFrameReport)
