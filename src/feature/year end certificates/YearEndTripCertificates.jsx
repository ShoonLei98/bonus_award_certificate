import React, { useEffect, useState, useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
// import { getBase64FromUrl } from 'src/utils'
// import defaultProfile from '../../assets/images/defaultFrameProfile.jpg'

const YearEndTripCertificates = (props, ref) => {
  const [bonusFrame, setBonusFrame] = useState('')
  const [agentProfile, setAgentProfile] = useState('')

  const { info, region} = props
  const agent_name_length = info?.agent_name?.length
//   const name_size =
//     agent_name_length <= 15
//       ? '130px'
//       : agent_name_length <= 23
//       ? '118px'
//       : '95px'
    
//   const name_size =
//   agent_name_length <= 15
//   ? 'agent_name'
//   : agent_name_length <= 23
//   ? 'agent_name more_fifteen'
//   : 'agent_name more_twenty_three'

  const name_size = (nameLenght) => {
    return nameLenght > 0 && nameLenght <= 15
      ? ''
      : nameLenght > 15 && nameLenght <= 20
      ? 'more_fifteen'
      : 'more_twenty'
  }
//   const left_group_name =
//     info?.group_id === 1 || info?.group_id === 3 || info?.group_id === 8 || info?.group_id === 6

const getNameClass = useMemo(
    () => name_size(agent_name_length),
    [agent_name_length],
  )
console.log("tore", info?.mm_font);
console.log("name class", getNameClass);
  return (
    <>
    <div className="digital_trip_certificate_container" ref={ref}>
      <img
        src={info?.frame}
        alt="year end trip digital frame"
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
      {/* <p className={!info?.mm_font ? 'agent_name mm_name' : 'agent_name'} style={{ fontSize: info?.mm_font ?  name_size : '100px' }}>
        {info?.agent_name}
      </p> */}
      <p className={info.mm_font ? `agent_name ${getNameClass}` : 'agent_name mm_name'}>
        {info?.agent_name}
      </p>
      <p className="agent_code">{info?.agent_code}</p>
      <p className="ticket">
        {'('}{info?.ticket} {'apmif)'}
      </p>
      <div className='product_group_qty'>
        {info?.qty.toLocaleString()} PCS
      </div>
    </div>
    </>
  )
}

YearEndTripCertificates.propTypes = {
  info: PropTypes.object.isRequired,
  region: PropTypes.string.isRequired,
  onFrameLoad: PropTypes.func.isRequired,
  onProfileLoad: PropTypes.func.isRequired,
}

export default React.forwardRef(YearEndTripCertificates)
