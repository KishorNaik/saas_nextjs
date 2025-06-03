import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">
        Popular Companions
      </h1>
        <section className="home-section">
            <CompanionCard
                id={1}
                name="Companion 1"
                topic="Topic 1"
                subject="Subject 1"
                duration={60}
                color="#FF0000"
            />
        </section>
        <section className="home-section">
            <CompanionList
                title="Recently completed sessions"
                companions={recentSessions}
                className="w-2/3 max-lg:w-full"
            />
            <CTA/>
        </section>
    </main>
  )
}

export default Page