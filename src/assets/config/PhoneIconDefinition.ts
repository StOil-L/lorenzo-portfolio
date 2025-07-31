import type {IconPathData} from "@fortawesome/fontawesome-svg-core";

type PhoneIconPrefix = "faslr";
type PhoneIconName = "phone";

interface PhoneIconLookup {
  prefix: PhoneIconPrefix;
  iconName: PhoneIconName;
}

export interface PhoneIconDefinition extends PhoneIconLookup {
  icon: [number, number, string[], string, IconPathData]
}