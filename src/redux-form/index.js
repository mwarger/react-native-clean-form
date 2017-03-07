import createInputs from './createInputs';
import createInputCreator from './createInputCreator';
import { Field } from 'redux-form';

export const {
  Input,
  Select,
  Switch,
} = createInputs(createInputCreator(Field));
