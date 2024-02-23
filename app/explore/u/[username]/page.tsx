import React from 'react'

import UserPage from './UserPage'

type PageParamProps = {
    params:{username:string}
}

export default function Page({params}:PageParamProps) {

    return (
        <UserPage params={params}/>
    )
}