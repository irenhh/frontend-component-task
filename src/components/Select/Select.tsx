import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import cn from 'classnames';
import {ROLES} from '../../constants/constants';
import {RoleType} from '../../constants/constants.types';
import {
  CustomSelect,
  CustomSelectList,
  CustomSelectOption,
  CustomSelectWrapper,
  SelectLabel,
  SelectWrapper
} from './style';
import {Title} from '../general.styles';
import {ArrowIcon} from '../../images/ArrowIcon';

type Props = {
  role: RoleType;
  setRole: Dispatch<SetStateAction<RoleType>>;
};

export const Select: FC<Props> = ({role, setRole}) => {
  const [optionVisible, setOptionVisible] = useState(false);

  return (
    <SelectWrapper>
      <SelectLabel>
        <Title>User Role</Title>
        <CustomSelectWrapper>
          <CustomSelect
            className={cn({
              active: optionVisible
            })}
            onClick={() => setOptionVisible(!optionVisible)}
          >
            {role}
            <ArrowIcon />
          </CustomSelect>

          {optionVisible && (
            <CustomSelectList>
              {ROLES.map((role) => (
                <CustomSelectOption
                  key={role.id}
                  data-name={role.type}
                  onClick={() => {
                    setRole(role.type);
                    setOptionVisible(false);
                  }}
                >
                  {role.text}
                </CustomSelectOption>
              ))}
            </CustomSelectList>
          )}
        </CustomSelectWrapper>
      </SelectLabel>
    </SelectWrapper>
  );
};
