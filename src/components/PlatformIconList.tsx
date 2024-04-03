import {
    FaWindows,
    FaPlaystation,
    
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
  } from "react-icons/fa";
  import { MdPhoneIphone } from 'react-icons/md';
  import { SiNintendo, SiNintendo3Ds, SiPlaystation4, SiPlaystation3, SiXbox } from 'react-icons/si';
  import { RiXboxLine } from "react-icons/ri";
  import { RxBox } from "react-icons/rx";
  import { BsGlobe } from 'react-icons/bs';
  import { HStack, Icon } from "@chakra-ui/react";
  import { Platform } from "../hooks/useGames";
  import { IconType } from "react-icons";
  
  interface Props {
    platforms: Platform[];
  }
  
  const PlatformIconList = ({ platforms = [] }: Props) => {
    const iconMap: { [key: string]: IconType } = { 
      pc: FaWindows,
      "ps-vita":FaWindows,
      playstation4: SiPlaystation4,
      playstation3: SiPlaystation3,
      "xbox-one": RxBox,
      "xbox-series-x": FaXbox,
      xbox360: RiXboxLine,
      nintendo: SiNintendo,
      "nintendo-switch": SiNintendo3Ds,
      macos: FaApple,
      linux: FaLinux, 
      android: FaAndroid,
      ios: MdPhoneIphone,
      web: BsGlobe
    }
  
    return (
      <HStack marginY={1}> 
        {platforms.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/>
        ))}
      </HStack>
    );
  };
  
  export default PlatformIconList;