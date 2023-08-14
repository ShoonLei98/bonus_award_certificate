import React from 'react'
import PropTypes from 'prop-types'
// import { getBase64FromUrl } from '../../utils/index'
// import allFrameImg from '../../assets/images/frames/all_frame.png'
// import defaultAllFrame from '../../assets/images/defaultFrameProfile.jpg'

const AllFrameReport = (props) => {
  const { info, color, region  } = props  
  const bonus_month = info?.bonus_month?.split(' ')[0]
  const bonus_year = info?.bonus_month?.split(' ')[1]

  const agent_name_length = info?.agent_name?.length
  const name_size =
    agent_name_length <= 18
      ? '190px'
      : (agent_name_length > 18) & (agent_name_length <= 22)
      ? '175px'
      : '155px'

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
            <span className="bonus-month months">{info?.bonus_month?.split(' ')[1]}</span>
            <span className="bonus-month year">{info?.bonus_month?.split(' ')[0]}</span>
            <h1 className="bonus-level" style={{ color: color['level_color'] }}>
            {info?.max_bonus_level}
            </h1>
            <div className="agent-profile-container">
                <img src={info?.profile} alt="profile" className="agent-profile" />
            </div>
            <h1 className="agent-name" style={{ fontSize: name_size, color: color['agent_name'] }}>
                {info?.agent_name}
            </h1>
            <span
                className="agent-code prefix-name"
                style={{
                color: color['agent_code'],
                }}
            >
                FB
            </span>
            <span
                className="agent-code"
                style={{
                color: color['agent_code'],
                }}
            >
                {info?.agent_code?.split('-')[1]}
            </span>
            <div
                className="award-amount"
                style={{ color: color['award_amount'] }}
            >
                <div className="amount_name">ဆုကြေးငွေ&nbsp;-&nbsp;</div>
                <div className="amount_value">
                {info?.total_award_amount}{' '}
                {region === 'MM' ? 'ကျပ်' : 'THB'}
                </div>
            </div>
            <div
                className="bonus-product-list"
                style={{
                rowGap:
                    info?.bonus_products?.length >= 10
                    ? '25px'
                    : info?.bonus_products?.length >= 8
                    ? '43px'
                    : '65px',
                }}
            >
                {info?.bonus_products?.length > 0
                ? info?.bonus_products?.map((info, index) => (
                    <FrameProductInfo
                        productInfo={info}
                        key={index}
                        rowCount={info?.bonus_products?.length ?? 0}
                        colorInfo={{
                        name: color['product_name'],
                        value: color['product_qty'],
                        }}
                    />
                    ))
                : null}
            </div>
        </div>
      </div>        
    </>
  )
}

const FrameProductInfo = ({ productInfo, colorInfo, rowCount }) => {
  return (
    <div className="product-info-row" style={{ fontSize: rowCount >= 10 ? '35px' : '55px' }}>
      <span className="product-name" style={{ color: colorInfo['name'] }}>
        {productInfo?.name}&nbsp;:&nbsp;
      </span>
      <span style={{ color: colorInfo['value'] }}>
        {productInfo?.bonus_level} ( {productInfo?.product_qty}{' '}
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
  color: PropTypes.object.isRequired,
  region: PropTypes.string.isRequired,
  ref: PropTypes.object.isRequired,
  onFrameLoad: PropTypes.func.isRequired,
  onProfileLoad: PropTypes.func.isRequired,
  // onFrameFailLoad: PropTypes.func.isRequired,
}

FrameProductInfo.propTypes = {
  productInfo: PropTypes.object.isRequired,
  colorInfo: PropTypes.object.isRequired,
  rowCount: PropTypes.number.isRequired,
}

export default React.forwardRef(AllFrameReport)
