// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
import { useTranslation } from 'react-i18next'
import Tooltip from '@mui/material/Tooltip';

const navigation = (): VerticalNavItemsType => {
  const { t } = useTranslation()

  return [
    {
      title: t('Organization Management'),
      icon: 'mdi:domain', // Organization icon
      badgeColor: 'error',
      children: [
        {
          title: t('Department Employees'),
          path: '',
          icon: 'mdi:account-group' // Employee groups
        },
        {
          title: t('Project Employees'),
          path: '',
          icon: 'mdi:briefcase-account' // Employees working on projects
        },
      ]
    },
    {
      title: t('Employee Management'),
      icon: 'mdi:account-tie', // Employee management
      badgeColor: 'error',
      children: [
        {
          title: t('Profile'),
          path: '/apps/employees/',
          icon: 'mdi:file-account' // Employee profile
        },
        {
          title: t('Leave'),
          path: '',
          icon: 'mdi:beach' // Leave management
        },       
        {
          title: t('Management'),
          path: '',
          icon: 'mdi:clipboard-account' // Employee management
        },
        {
          title: t('Notifications'),
          path: '',
          icon: 'mdi:bell' // Notifications
        },
      ]
    },
    {
      title: t('Payroll Management'),
      icon: 'mdi:cash-multiple', // Payroll management
      badgeColor: 'error',
      children: [
        {
          title: t('Timekeeping Methods'),
          path: '',
          icon: 'mdi:clock-time-four' // Time tracking methods
        },
        {
          title: t('Paid Leave Statistics'),
          path: '',
          icon: 'mdi:calendar-check' // Paid leave statistics
        },       
        {
          title: t('Allowances & Performance'),
          path: '',
          icon: 'mdi:chart-line' // Performance tracking
        },
        {
          title: t('Bonus Values'),
          path: '',
          icon: 'mdi:star' // Bonus and rewards
        },
        {
          title: t('Employee Timesheet'),
          path: '',
          icon: 'mdi:clipboard-text-clock' // Employee timesheet
        },
        {
          title: t('Employee Payroll'),
          path: '',
          icon: 'mdi:clipboard-text' // Employee payroll
        },
      ]
    },
    {
      title: t('Charts'),
      icon: 'mdi:chart-bar', // Statistical charts
      badgeColor: 'error',
      children: [
        {
          title: t('Annual Salary Chart'),
          path: '',
          icon: 'mdi:chart-line' // Salary chart
        },
      ]
    },
    {
      title: t('Categories'),
      icon: 'mdi:format-list-bulleted', // General categories
      path: '/apps/category/accesscontrol/'
    },
  ]
}

export default navigation
