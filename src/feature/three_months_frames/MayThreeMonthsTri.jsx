import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { getBase64FromUrl } from 'src/utils'
import defaultProfile from '../../assets/images/defaultFrameProfile.jpg'

const TripProductReport = (props, ref) => {
  const [bonusFrame, setBonusFrame] = useState('')
  const [agentProfile, setAgentProfile] = useState('')

  const { info, region, onFrameLoad, onProfileLoad } = props
  const three_months_range = ['March', 'April', 'May']
  const agent_name_length = info?.agent_name?.length
  const name_size =
    agent_name_length <= 14
      ? '90px'
      : (agent_name_length > 14) & (agent_name_length <= 18)
      ? '80px'
      : (agent_name_length > 18) & (agent_name_length <= 20)
      ? '70px'
      : (agent_name_length > 20) & (agent_name_length <= 25)
      ? '65px'
      : agent_name_length > 25
      ? '60px'
      : '75px'
  const left_group_name =
    info?.group_id === 1 || info?.group_id === 3 || info?.group_id === 8 || info?.group_id === 6

  useEffect(() => {
    if (info?.frame) {
      getBase64FromUrl(info?.frame)
        .then((data) => setBonusFrame(data))
        .catch((error) => {
          setBonusFrame('')
        })
    }

    if (info?.profile) {
      getBase64FromUrl(info?.profile)
        .then((data) => {
          if (data) {
            setAgentProfile(data)
          } else {
            setAgentProfile(defaultProfile)
          }
        })
        .catch((error) => {
          setAgentProfile(defaultProfile)
        })
    } else {
      setAgentProfile(defaultProfile)
    }

    return () => {
      // setAgentProfile('')
      setBonusFrame('')
    }
  }, [info?.frame, info?.profile])

  const handleProfileLoad = useCallback(() => {
    onProfileLoad()
  }, [onProfileLoad])

  return (
    <div className="product_trip_certificate_container" ref={ref}>
      <img
        src={bonusFrame}
        alt="trip product frame"
        className="trip_certificate_card"
        onLoad={onFrameLoad}
      />
      <div className="agent_profile_container">
        <img
          className="agent_profile"
          src={agentProfile}
          alt={info?.agent_code}
          onLoad={handleProfileLoad}
        />
      </div>
      <p className="agent_name" style={{ fontSize: name_size }}>
        {info?.agent_name}
      </p>
      <p className="agent_code">{info?.agent_code}</p>
      <div className="amount prize" style={{ color: '#12679C' }}>
        {info?.total_amount} {region === 'MM' ? 'usyf' : 'bwf'}
      </div>
      <div className="amount ticket" style={{ color: '#12679C' }}>
        {info?.ticket} apmif
      </div>
      <div className={left_group_name ? 'product_group_qty toothpaste' : 'product_group_qty'}>
        {info?.qty} Pcs
      </div>
      <div className="three_months_range">
        {three_months_range?.map((month, index) => (
          <span className="trip_months" key={index}>
            {month}
          </span>
        ))}
        <span className="year">2023</span>
      </div>
    </div>
  )
}

TripProductReport.propTypes = {
  info: PropTypes.object.isRequired,
  region: PropTypes.string.isRequired,
  onFrameLoad: PropTypes.func.isRequired,
  onProfileLoad: PropTypes.func.isRequired,
}

export default React.forwardRef(TripProductReport)
