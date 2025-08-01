"use client"

import React from 'react'
import SectionTitle from '@/components/Common/SectionTitle'
import { useLanguage } from '@/components/Header'
import Section from '@/components/Section'

const Statistics = () => {
  const { t } = useLanguage()
  const statsData = [
    {
      title: "5+",
      subtitle: t("aboutStatsYearsSubtitle"),
      description: t("aboutStatsYearsDescription")
    },
    {
      title: "100+",
      subtitle: t("aboutStatsProfessionalsSubtitle"),
      description: t("aboutStatsProfessionalsDescription")
    },
    {
      title: "20+",
      subtitle: t("aboutStatsDomainsSubtitle"),
      description: t("aboutStatsDomainsDescription")
    },
    {
      title: "40+",
      subtitle: t("aboutStatsCustomersSubtitle"),
      description: t("aboutStatsCustomersDescription")
    },
    {
      title: "10+",
      subtitle: t("aboutStatsProjectsSubtitle"),
      description: t("aboutStatsProjectsDescription")
    },
    {
      title: "10+",
      subtitle: t("aboutStatsCountriesSubtitle"),
      description: t("aboutStatsCountriesDescription")
    }
  ]

  return (
    <Section>
        <div className="flex flex-col items-start justify-center">
          <SectionTitle title={t("aboutStatsSectionTitle")} className="text-2xl md:text-3xl mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {statsData.map((stat, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">{stat.title}</h1>
                <p className="text-sm font-medium">{stat.subtitle}</p>
                <hr className="border-t border-primary/70 py-2 md:py-4" />
                <p className="text-foreground/80 text-[13px]">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
    </Section>
  )
}

export default Statistics

