import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import CommonServices from './CommonServices'

export default function Services() {
    const data = [
        {
            title:"Free AD",
            route:"/plan",
            image:"https://cdn-icons-png.flaticon.com/128/3774/3774905.png"
        },
        {
            title:"Plan",
            route:"/plan",
            image:"https://cdn-icons-png.flaticon.com/128/9398/9398952.png"
        },
        {
            title:"work",
            route:"/plan",
            image:"https://cdn-icons-png.flaticon.com/128/3774/3774905.png"
        },
        {
            title:"Vpn Work",
            route:"/plan",
            image:"https://cdn-icons-png.flaticon.com/128/9398/9398952.png"
        },
        {
            title:"Deposit",
            route:"/plan",
            image:"https://cdn-icons-png.flaticon.com/512/5304/5304640.png"
        },
        {
            title:"CashOut",
            route:"/plan",
            image:"https://cdn-icons-png.flaticon.com/512/5501/5501360.png"
        },
        {
            title:"Support",
            route:"/plan",
            image:"https://www.iconpacks.net/icons/2/free-chat-support-icon-1721-thumb.png"
        },
    ]
  return (
    <div> 
          <CommonServices  data={data} loopXs={3}  />
        
    </div>
  )
}
