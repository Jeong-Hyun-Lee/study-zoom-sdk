import { memo, useEffect } from 'react'
import { useLocation, useParams } from 'react-router'
import { ZoomMtg } from '@zoomus/websdk'

ZoomMtg.setZoomJSLib('https://source.zoom.us/2.13.0/lib', '/av')

ZoomMtg.preLoadWasm()
ZoomMtg.prepareWebSDK()
ZoomMtg.i18n.load('en-US')
ZoomMtg.i18n.reload('en-US')
const LEAVE_URL = 'http://localhost:3000'

const MeetingPage = () => {
  const params = useLocation()

  const generateSignature = ({
    meetingNumber,
    role,
    sdkKey = process.env.REACT_APP_SDK_KEY,
    sdkSecret = process.env.REACT_APP_SDK_SECRET,
  }) => {
    return new Promise((resolve, reject) => {
      ZoomMtg.generateSDKSignature({
        meetingNumber,
        role,
        sdkKey,
        sdkSecret,
        success: (signature) => {
          resolve(signature?.result)
        },
        error: (error) => reject(error),
      })
    })
  }

  const initMeeting = ({
    meetingNumber,
    passWord,
    userName,
    userEmail,
    sdkKey = process.env.REACT_APP_SDK_KEY,
    signature,
  }) => {
    document.getElementById('zmmtg-root').style.display = 'block'
    ZoomMtg.init({
      leaveUrl: LEAVE_URL,
      success: (success) => {
        console.log(success, signature)
        ZoomMtg.join({
          signature: signature,
          sdkKey: sdkKey,
          meetingNumber: meetingNumber,
          passWord: passWord,
          userName: userName,
          userEmail: userEmail,
          success: (success) => {
            console.log(success)
          },
          error: (error) => {
            console.log(error)
          },
        })
      },
      error: (error) => {
        console.log(error)
      },
    })
  }

  const startMeeting = async () => {
    try {
      const signature = await generateSignature(params?.state?.config)
      initMeeting({
        ...params?.state?.config,
        signature,
      })
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    console.log('MeetingPage params', params?.state?.config)
    startMeeting()
    return () => {
      document.getElementById('zmmtg-root').style.display = 'none'
    }
  }, [])

  return (
    <>
      <link
        type="text/css"
        rel="stylesheet"
        href="https://source.zoom.us/2.13.0/css/bootstrap.css"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="https://source.zoom.us/2.13.0/css/react-select.css"
      />
    </>
  )
}

export default memo(MeetingPage)
