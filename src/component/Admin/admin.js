import React from 'react'
import { Banner } from '../common/banner'
import DashNav from '../common/DashNav'
import { AdminCollapes } from './AdminCollaps'

export const Admin = () => {
    return (
        <>
          <DashNav/>
          <Banner/>
          <AdminCollapes/>
        </>
    )
}
