import React, {Dispatch, FC, SetStateAction} from 'react';
import {ROLES} from '../../constants/constants';
import {RoleType} from '../../constants/constants.types';
import {SelectWrapper} from './style';
import {Title} from '../general.styles';

type Props = {
  role: RoleType;
  setRole: Dispatch<SetStateAction<RoleType>>;
};

export const Select: FC<Props> = ({role, setRole}) => {
  return (
    <SelectWrapper>
      <label>
        <Title>User Role</Title>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value as RoleType)}
        >
          {ROLES.map((role) => (
            <option key={role.id} value={role.type}>
              {role.text}
            </option>
          ))}
        </select>
      </label>
    </SelectWrapper>
  );
};
