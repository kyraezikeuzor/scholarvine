import React from 'react'
import DynamicRoute from '@/components/DynamicRoute'
import UserPage from './UserPage'

import USERS from '@/lib/users.json'

type PageParamProps = {
    params:{username:string}
}

export default function Page({params}:PageParamProps) {

    let usernames = [];

    for (let i = 0; i < USERS.length; i++) {
        usernames.push(USERS[i].Username)
    }

    return (
        <DynamicRoute
        routeItem={params.username}
        list={usernames}>
            <UserPage params={params}/>
        </DynamicRoute>
    )
}