import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from './Header';

const Reactivex = () => {
const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 800px)'})
const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

return <div>

{isDesktopOrLaptop && <Header></Header>}
{isBigScreen && <p>You have a huge screen</p>}
{isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
{isRetina && <p>You are retina</p>}
</div>
}
export default Reactivex;