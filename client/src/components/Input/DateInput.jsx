import moment from 'moment';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Controller } from 'react-hook-form';
import { Input } from './Input';
import PropTypes from 'prop-types';
import { ThemeContext } from '@/hooks/ThemeContextProvider';
import { useContext } from 'react';

// const CustomActionBar = () => {
//     return <Button buttonType="link">CustomActionBar</Button>;
// }
export default function DateInput({ inputThemeName, name, control }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <StaticDatePicker
              theme={theme}
              componentsProps={{
                actionBar: {
                  // The actions will be the same between desktop and mobile
                  actions: ['clear', 'ok']
                }
              }}
              openTo="day"
              disableFuture={true}
              value={field.value}
              onChange={(newValue) => {
                field.onChange(newValue ? moment(newValue) : null);
              }}
              renderInput={(params) => (
                <Input inputType="text" inputThemeName={inputThemeName} {...params} />
              )}
            />
          </LocalizationProvider>
        );
      }}></Controller>
  );
}
DateInput.propTypes = {
  inputThemeName: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.object,
  errors: PropTypes.object
};
