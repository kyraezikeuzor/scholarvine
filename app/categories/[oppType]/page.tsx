import React from 'react'
import styles from './page.module.css'

import DynamicRoute from '@/components/DynamicRoute'
import OppTypePage from './TypePage'

import {OPPORTUNITY_TYPES} from '@/lib/labels'
import {capitalizeFirstLetter} from '@/utils/utils'

type PageParamsProps = {
    params: {oppType: string}
}

const Page = ({params}:PageParamsProps) => {

    const pageName = capitalizeFirstLetter(params.oppType).slice(0,-1)

    return (
        <DynamicRoute 
            routeItem={pageName}
            list={OPPORTUNITY_TYPES}
        >
            <OppTypePage params={params}/>
        </DynamicRoute>
    )
}

export default Page