import React from 'react';
import PropTypes from 'prop-types';
import Loading from '@/components/LoadingNothing/Loading';
import Nothing from '@/components/LoadingNothing/Nothing';
import SearchList from './SearchList';
import QuestionGif from '@/components/LoadingNothing/QuestionGif';

const BeforeAfterSearchContent = ({ isLoading, values, inputValues, type }) => {
  if (inputValues == null || inputValues == '') {
    return <QuestionGif />;
  } else if (isLoading) {
    return <Loading />;
  } else if (values.length == 0) {
    return <Nothing />;
  } else {
    return <SearchList searchList={values} type={type} />;
  }
};

BeforeAfterSearchContent.propTypes = {
  isLoading: PropTypes.bool,
  values: PropTypes.arrayOf(PropTypes.object),
  inputValues: PropTypes.string,
  type: PropTypes.string
};

export default BeforeAfterSearchContent;
