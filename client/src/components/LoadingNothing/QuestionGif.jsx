import * as React from 'react';
import Image from '@/components/Image/Image';
import Text from '@/components/Text/Text';
import { QuestionGifStyled } from './LoadingNothing.style';

export default function QuestionGif() {
  return (
    <QuestionGifStyled>
      <Image src="https://i.pinimg.com/originals/32/50/70/32507076eb277ccc6b55dc842d04ccf4.gif" />
      <Text
        className="loading-text"
        type="p2"
        jc="center"
        textThemeName="paragraphText"
        text={'What do you want to find??'}
      />
    </QuestionGifStyled>
  );
}
