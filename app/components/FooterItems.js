import React from 'react'

const FooterItems = ({products,category}) => {
    
  return (<>
    {
        products?.filter((item)=> item?.category === category).map((item)=>(
            <li key={item?.id} className="text-sm font-medium text-white">{item?.name}</li>
        ))
    }
    </>
  )
}

export default FooterItems