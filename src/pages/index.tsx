import Head from "next/head";
import { Box } from "@chakra-ui/react";

import { ProfessionalExperienceList } from "@/modules/Home/components/ProfessionalExperienceListSection";
import { SkillsSection } from "@/modules/Home/components/SkillsSection";
import { FormationsListSection } from "@/modules/Home/components/FormationsListSection";
import { About } from "@/modules/Home/components/About";
import { Objective } from "@/modules/Home/components/Objective";
import { Introduction } from "@/modules/Home/components/Introduction";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio - Tiago Gonçalves</title>
      </Head>
      <Box as="main">
        <Introduction />
        <Objective />
        <ProfessionalExperienceList />
        <SkillsSection />
        <FormationsListSection />
        <About />
      </Box>
    </>
  );
}
