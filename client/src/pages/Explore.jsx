import { FlexContainer } from '@/components/Container/Container.styled';
import HeaderSection from '@/components/Sections/GeneralSection/HeaderSection';
import { pageContentTemplate } from '@/helpers/PageContentDisplay';
import { useOutletContext } from 'react-router-dom';

const Explore = ({ ...props }) => {
  const { theme, themeToggler } = useOutletContext();
  return (
    <FlexContainer {...pageContentTemplate} {...props}>
      <HeaderSection
        haveBackButton={false}
        content="Explore"
        isDisplayTheme={true}
        theme={theme}
        themeToggler={themeToggler}
      />
      {/* List search here */}
    </FlexContainer>
  );
};

export default Explore;
