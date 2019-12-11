import React from 'react'
import { Result } from 'antd-mobile'
const myImg = src => <img src={src} className='spe am-icon am-icon-md' alt='' />
export default () => <Result
  img={myImg('https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg')}
  title='404'
  message='抱歉，页面没找到'
/>
