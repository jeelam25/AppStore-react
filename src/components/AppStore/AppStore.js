import React, { useState } from 'react'

import TabItem from '../TabItem/TabItem'
import AppItem from '../AppItem/AppItem'
import './styles.css'

const SEARCH_ICON_URL =
  './images/search.png'

const tabsList = [
  {tabId: 'SOCIAL', displayText: 'Social'},
  {tabId: 'GAMES', displayText: 'Games'},
  {tabId: 'NEWS', displayText: 'News'},
  {tabId: 'FOOD', displayText: 'Food'},
]

const appsList = [
  {
    appId: 0,
    appName: 'Facebook',
    imageUrl: './images/social/facebook.png',
    category: 'SOCIAL',
  },
  {
    appId: 1,
    appName: 'Messenger',
    imageUrl:'./images/social/messenger.png',
    category: 'SOCIAL',
  },
  {
    appId: 2,
    appName: 'WhatsApp',
    imageUrl:'./images/social/whatsapp.png',
    category: 'SOCIAL',
  },
  {
    appId: 3,
    appName: 'Instagram',
    imageUrl: './images/social/instagram.png',
    category: 'SOCIAL',
  },
  {
    appId: 4,
    appName: 'Snapchat',
    imageUrl:'./images/social/snapchat.png',
    category: 'SOCIAL',
  },
  {
    appId: 5,
    appName: 'Twitter',
    imageUrl:'./images/social/twitter.png',
    category: 'SOCIAL',
  },
  {
    appId: 6,
    appName: 'Pinterest',
    imageUrl:'./images/social/pinterest.png',
    category: 'SOCIAL',
  },
  {
    appId: 7,
    appName: 'WeChat',
    imageUrl:'./images/social/wechat.png',
    category: 'SOCIAL',
  },
  {
    appId: 8,
    appName: 'LinkedIn',
    imageUrl:'./images/social/linkedin.png',
    category: 'SOCIAL',
  },
  {
    appId: 9,
    appName: 'Telegram',
    imageUrl:'./images/social/telegram.png',
    category: 'SOCIAL',
  },
  {
    appId: 10,
    appName: 'Subway Surfers',
    imageUrl:'./images/games/subway_Surfers.png',
    category: 'GAMES',
  },
  {
    appId: 11,
    appName: 'Crossy Road',
    imageUrl:'./images/games/Crossy_Road.png',
    category: 'GAMES',
  },
  {
    appId: 12,
    appName: 'Super Chef',
    imageUrl:'./images/games/Super_Chef.png',
    category: 'GAMES',
  },
  {
    appId: 13,
    appName: 'Angry Birds',
    imageUrl:'./images/games/Angry Birds.png',
    category: 'GAMES',
  },
  {
    appId: 14,
    appName: 'Hill Climb 2',
    imageUrl:'./images/games/Hill Climb 2.png',
    category: 'GAMES',
  },
  {
    appId: 15,
    appName: 'Temple Run',
    imageUrl:'./images/games/Temple Run.png',
    category: 'GAMES',
  },
  {
    appId: 16,
    appName: 'Dr. Driving',
    imageUrl:'./images/games/Dr. Driving.png',
    category: 'GAMES',
  },
  {
    appId: 17,
    appName: 'Smurfs Bubble',
    imageUrl:'./images/games/Smurfs Bubble.png',
    category: 'GAMES',
  },
  {
    appId: 18,
    appName: 'Grade Learning',
    imageUrl:'./images/games/Grade Learning.png',
    category: 'GAMES',
  },
  {
    appId: 19,
    appName: 'My Talking Tom',
    imageUrl: './images/games/My Talking Tom.webp',
    category: 'GAMES',
  },
  {
    appId: 20,
    appName: 'Inshorts',
    imageUrl: './images/news/inshorts.png',
    category: 'NEWS',
  },
  {
    appId: 21,
    appName: 'Way2News',
    imageUrl:'./images/news/Way2News.png',
    category: 'NEWS',
  },
  {
    appId: 22,
    appName: 'Google News',
    imageUrl:'./images/news/Google_news_logo.png',
    category: 'NEWS',
  },
  {
    appId: 23,
    appName: 'Flipboard',
    imageUrl:'./images/news/Flipboard_logo.svg.png',
    category: 'NEWS',
  },
  {
    appId: 24,
    appName: 'SmartNews',
    imageUrl:'./images/news/SmartNews_App_Icon_Logo.jpg',
    category: 'NEWS',
  },
  {
    appId: 25,
    appName: 'BBC News',
    imageUrl:'./images/news/BBC_News_2022_(Alt).svg.png',
    category: 'NEWS',
  },
  {
    appId: 26,
    appName: 'CNN News',
    imageUrl:'./images/news/CNN.svg.png',
    category: 'NEWS',
  },
  {
    appId: 27,
    appName: 'Daily Wire',
    imageUrl:'./images/news/Dailywirelogo.svg.png',
    category: 'NEWS',
  },
  {
    appId: 28,
    appName: 'AP News',
    imageUrl:'./images/news/AP_news.png',
    category: 'NEWS',
  },
  {
    appId: 29,
    appName: 'News Break',
    imageUrl:'./images/news/newsbreak.jpg',
    category: 'NEWS',
  },
  {
    appId: 30,
    appName: 'Zomato',
    imageUrl:'./images/food/Zomato_Logo.svg.png',
    category: 'FOOD',
  },
  {
    appId: 31,
    appName: 'Swiggy',
    imageUrl:'./images/food/Swiggy_logo.svg.png',
    category: 'FOOD',
  },
  {
    appId: 32,
    appName: "Domino's Pizza",
    imageUrl:'./images/food/DominosPizza.svg.png',
    category: 'FOOD',
  },
  {
    appId: 33,
    appName: 'All in One',
    imageUrl:'./images/food/ALLINONE.jpg',
    category: 'FOOD',
  },
  {
    appId: 34,
    appName: 'Instacart',
    imageUrl:'./images/food/Instacart_logo_and_wordmark.svg.png',
    category: 'FOOD',
  },
  {
    appId: 35,
    appName: 'Saucey',
    imageUrl:'./images/food/Saucey.webp',
    category: 'FOOD',
  },
  {
    appId: 36,
    appName: 'Waitr',
    imageUrl:'./images/food/Waitr_logo.jpg',
    category: 'FOOD',
  },
  {
    appId: 37,
    appName: 'Grubhub',
    imageUrl:'./images/food/GrubHub_2021.svg.png',
    category: 'FOOD',
  },
  {
    appId: 38,
    appName: 'Mercato',
    imageUrl:'./images/food/mercato_logo_green.png',
    category: 'FOOD',
  },
  {
    appId: 39,
    appName: 'DOT',
    imageUrl: './images/food/Dot_Foods_logo.svg.png',
    category: 'FOOD',
  },
]

let initialActiveTabId = tabsList[0].tabId

const AppStore = () => {
  const [searchInput, setSearchInput] = useState('')
  const [activeTabId, setActiveTabId] = useState(initialActiveTabId)

  // search filtering App function
  const getSearchResult = () => {
    const search = appsList.filter(eachApp => 
      eachApp.appName.toLowerCase().includes(searchInput.toLowerCase())
      )

      return search
  }

  const searchResult = getSearchResult()


  // final filtering app function
  const getActiveTabApps = (searchedApp) => {
    const filteredApp = searchedApp.filter(
      eachSearchApp => eachSearchApp.category === activeTabId
    )
    return filteredApp
  }

  const filteredApps = getActiveTabApps(searchResult)

  // result App function
  const getResult = (filteredApps) => {
    return (
      filteredApps.map(eachApp => (
        <AppItem key = {eachApp.appId} appDetails = {eachApp}/>
      ))
    )
  }

  return (
    <div className='app-container'>
      <div className='app-store'>
        <h1 className='heading'>App Store</h1>
        <div className='search-input-container'>
          <input type = "search" className='search-input' placeholder='Search' value = {searchInput} onChange = {(event) => {
            setSearchInput(event.target.value)
          }} />
          <img src = {SEARCH_ICON_URL} className='search-icon' alt = "search icon"/>
        </div>
        <ul className='tabs-list'>
          {tabsList.map(eachTab => (
          <TabItem 
          key = {eachTab.tabId} 
          tabDetails = {eachTab}
          setActiveTabsId = {(tabId) => {setActiveTabId(tabId)}}
          isActive = {activeTabId === eachTab.tabId}
          />
        ))}
        </ul>
        <ul className='apps-list'>{getResult(filteredApps)}</ul> 
      </div>
    </div>
  )
}

export default AppStore
