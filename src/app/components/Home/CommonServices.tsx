import { ServiceType } from '@/types/service'
import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CommonServices({data,loopXs}:{data:ServiceType[],loopXs:number}) {
    const history = useRouter()
  return (
    <div>
        <Grid container>
            <Grid xs={1}>

            </Grid>
            <Grid xs={10} lg={6}>
            <Grid container>
                {
                    data.map((detail:ServiceType,index:number)=>{
                        return (
                            <Grid sx={{mt:4}} xs={loopXs} key={index}>
                                <Image width={50} height={50} alt='' src={detail.image}  />
                                <Typography onClick={()=>history.push(detail.route)} sx={{fontSize:13,color:"#c90685",cursor:"pointer",":hover":{color:"#7a0250"}}}>{detail.title}</Typography>

                            </Grid>
                        )
                    })
                }
            </Grid>
            </Grid>
            <Grid xs={1}>

            </Grid>
        </Grid>
    </div>
  )
}
