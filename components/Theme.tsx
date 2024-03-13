'use client'

import React, {useState, useEffect} from 'react'
import Icon from './Icon'

const ThemeButton = () => {

    const [showDarkMode, setShowDarkMode] = useState(false)
    const [systemMode, setSystemMode] = useState('')
    

    useEffect(()=>{
        
        document.documentElement.classList.toggle('dark', showDarkMode);

    }, [showDarkMode])


    useEffect(()=>{
        const data = window.localStorage.getItem('SEDGE_APP_THEME');
        if (data != null) setShowDarkMode(JSON.parse(data))
    },[])


    useEffect(()=>{
        window.localStorage.setItem('SEDGE_APP_THEME', JSON.stringify(showDarkMode))
    }, [showDarkMode])

    const changeTheme = () => {
        setShowDarkMode(prevMode => !prevMode)
    }
    
    return (
        <Icon size='lg' icon={showDarkMode == true ? 'Sun' : 'Moon'} onClick={changeTheme} button={true}/>
        
    )
}

export default ThemeButton;