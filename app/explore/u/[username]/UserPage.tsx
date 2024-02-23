'use client'
import React, {useState, useEffect} from 'react'
import { User } from '@/types';
import { Opportunity } from '@/types';

import Icon from '@/components/Icon'
import ReadMore from '@/components/ReadMore'

import OPPORTUNITIES from '@/lib/opps.json'
import USERS from '@/lib/users.json'


type PageProps = {
    params: {username: string}
}

const UserPage = ({params}:PageProps) => {

    const [user,setUser] = useState<User | null>(null)
    useEffect(()=>{
        const matchedUser = USERS.find(item => item.Username === params.username);

        if (matchedUser) {
            setUser(matchedUser)
        }

    },[USERS])

    return (
        <main>
            <h1>{user?.FirstName} {user?.LastName}</h1>
        </main>
    )

}

export default UserPage;