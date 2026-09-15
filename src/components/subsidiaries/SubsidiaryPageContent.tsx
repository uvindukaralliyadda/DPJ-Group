import { SubsidiaryHero } from "./SubsidiaryHero";
import { SubsidiaryIntroduction, SubsidiaryFocus } from "./SubsidiaryIntroduction";
import { CapabilitiesSection } from "./CapabilitiesSection";
import { SubsidiaryApproach } from "./SubsidiaryApproach";
import { SubsidiaryHighlights } from "./SubsidiaryHighlights";
import { SubsidiaryProjects } from "./SubsidiaryProjects";
import { GroupSynergy } from "./GroupSynergy";
import { SubsidiaryCTA } from "./SubsidiaryCTA";
import type { SubsidiaryDetail } from "@/types";

export function SubsidiaryPageContent({ subsidiary }: { subsidiary: SubsidiaryDetail }) {
  return (
    <>
      <SubsidiaryHero subsidiary={subsidiary} />
      <SubsidiaryIntroduction subsidiary={subsidiary} />
      <CapabilitiesSection subsidiary={subsidiary} />
      <SubsidiaryFocus subsidiary={subsidiary} />
      <SubsidiaryProjects subsidiary={subsidiary} />
      <SubsidiaryHighlights subsidiary={subsidiary} />
      <SubsidiaryApproach subsidiary={subsidiary} />
      <GroupSynergy subsidiary={subsidiary} />
      <SubsidiaryCTA />
    </>
  );
}
