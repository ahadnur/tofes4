import React from 'react'
import { Banner } from '../common/banner'
import DashNav from '../common/DashNav'
import { AdminCollapes } from './AdminCollaps'
import CategoryTab from '../common/CategoryTab'

export const Admin = () => {
    return (
        <>
          <DashNav/>
          <Banner/>
          <CategoryTab />
          <AdminCollapes/>
        </>
    )
}
