import { FlexContainer } from '@/components/Container/Container.styled';
import BackSection from '@/components/Sections/GeneralSection/BackSection';
import BackProfile from '@/components/Sections/ProfileSection/BackProfile';
import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';

// Remember to use useMemo to prevent unnecessary re-rendering if have performance issue
const Profile = ({ ...props }) => {
  // determine the type of authentication page and the gridTemplateAreas
  // const { gridTemplateAreas, displayedText } = useMemo(() => {
  //   const gridTemplateAreas = findGridTemplateAreas(responsiveCondition);

  //   return { gridTemplateAreas, displayedText };
  // }, [responsiveCondition]);
  const { horizontalSpaces } = useOutletContext();
  return (
    <FlexContainer fd="column" ai="flex-start" {...props}>
      <BackSection
        horizontalSpaces={horizontalSpaces}
        content={<BackProfile name="Hello" numTweets={1_000_001_000_000_000_000_000_000} />}
      />
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
    </FlexContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.object
};

export default Profile;
