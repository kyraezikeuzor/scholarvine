import React from 'react'
import DynamicRoute from '@/components/DynamicRoute'
import OppPage from './OppPage'

import OPPORTUNITIES from '@/lib/opps.json'
import {getPathUndo} from '@/utils/utils'

type PageParamsProps = {
    params: {oppId: string}
}

const Page = ({params}:PageParamsProps) => {

    let oppIds = [];

    for (let i = 0; i < OPPORTUNITIES.length; i++) {
        oppIds.push((OPPORTUNITIES[i].Id+1).toString())
    }

    return (
        <DynamicRoute
        routeItem={params.oppId}
        list={oppIds}
        >
            <OppPage params={params}/>
        </DynamicRoute> 

    )
}

export default Page;