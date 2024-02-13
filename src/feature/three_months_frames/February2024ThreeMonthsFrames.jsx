import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
// import { getBase64FromUrl } from 'src/utils'
// import defaultProfile from '../../assets/images/defaultFrameProfile.jpg'

const February2024ThreeMonthsFrames = (props, ref) => {
  const [bonusFrame, setBonusFrame] = useState('')
  const [agentProfile, setAgentProfile] = useState('')

  const { info, region} = props
  const three_months_range = ['March', 'April', 'May']
  const agent_name_length = info?.agent_name?.length
  const name_size =
    // agent_name_length <= 12
    //   ? '0px'
    //   : (agent_name_length > 12) & (agent_name_length <= 18)
    //   ? '85px'
    //   : (agent_name_length > 18) & (agent_name_length <= 22)
    //   ? '79px'
    //   : (agent_name_length > 22) & (agent_name_length <= 27)
    //   ? '72px'
    //   : agent_name_length > 27
    //   ? '60px'
    //   : '70px'
    agent_name_length <= 22
      ? '135px'
      : '120px'
  const left_group_name =
    info?.group_id === 1 || info?.group_id === 3 || info?.group_id === 8 || info?.group_id === 6
console.log("tore", info?.mm_font);
  return (
    <>
    <div className="product_trip_certificate_container" ref={ref}>
      <img
        src={info?.frame}
        alt="trip product frame"
        className="trip_certificate_card"
        // onLoad={onFrameLoad}
      />
      <div className="agent_profile_container">
        <img
          className="agent_profile"
          src={info?.profile}
          alt={info?.agent_code}
          // onLoad={handleProfileLoad}
        />
      </div>
      {/* <p className='bonus_month'>June~Augutst 2023</p> */}
      <p className="agent_name" style={{ fontSize: info?.mm_font ?  name_size : '105px' }}>
        {info?.agent_name}
      </p>
      <p className="agent_code">{info?.agent_code}</p>
      <div className="amount prize">
        {info?.total_amount.toLocaleString()} {region === 'MM' ? 'ကျပ်' : 'ဘတ်'}
      </div>
      <div className="amount ticket">
        {info?.ticket} စောင်
      </div>
      <div className='product_group_qty'>
        {info?.qty.toLocaleString()} Pcs
      </div>
    </div>
    </>
  )
}

February2024ThreeMonthsFrames.propTypes = {
  info: PropTypes.object.isRequired,
  region: PropTypes.string.isRequired,
  onFrameLoad: PropTypes.func.isRequired,
  onProfileLoad: PropTypes.func.isRequired,
}

export default React.forwardRef(February2024ThreeMonthsFrames)
