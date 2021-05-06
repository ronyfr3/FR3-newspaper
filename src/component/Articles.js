import React, { useState, useEffect } from 'react'
import LoadingGif from './LoadingGif'
import './Home.css'

const Articles = () => {
    const [value,setValue] = useState([])
    const [loading,setLoading] =useState(false)
  
    const fetched_data = async ()=>{
        setLoading(true)
      try {
        const res = await fetch(` https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:("Arts")&sort=newest&api-key=EgnoZqH7dTAeAyTIPcpUM7bUAuSkzVSA`)
        const data = await res.json()
        setValue(data.response.docs)
        setLoading(false)
  
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
       fetched_data()
    },[])
    console.log(value)

    if(loading){
        return <LoadingGif/>
    }

    return (
       <div className='Main_wrapper'>
           {
               value.map((val,i)=>{
                   return(
                       <div key={i} className='content_wrapper'>
                          <div className='source-publish'>
                                <p className='bold'><span className='source'>Source:</span>{val.source}</p>
                                <p className='halka'><span className='publish'>Published</span>{val.pub_date}</p>
                          </div>

                           <div className='image-url'>
                                <a href={val.web_url}>
                                   <img    src={val.multimedia?.[0]?.url ?
                                            `https://nytimes.com/${val.multimedia[0].url}` : 
                                            'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                                        } alt="news-img" />
                                </a>
                           </div>
                           <div className='title'>
                               <p className='title-text'>{val.headline.main}</p>
                           </div>
                       </div>
                   )
               })
           }
           
       </div>
    )
}

export default Articles
