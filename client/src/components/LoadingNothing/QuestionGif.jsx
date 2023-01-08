import * as React from 'react';
import { FlexContainer } from '@/components/Container/Container.styled';
import Image from '@/components/Image/Image';
import Text from '@/components/Text/Text';

export default function QuestionGif() {
  return (
    <FlexContainer height="100%" fd="column">
      <Image
        src="https://1.bp.blogspot.com/-iJp4eEgroEM/XNtMg5IWnTI/AAAAAAAMh70/_VVSEcyfHGco3XRgBi-s27Xjj9kD4YU6wCLcBGAs/s1600/AS0005269_04.gif"
        width="50%"
        height="50%"
      />
      <Text
        type="p3"
        jc="center"
        textThemeName="paragraphText"
        text={'What do you want to find??'}
      />
    </FlexContainer>
  );
}
