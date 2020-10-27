import React, {FormEvent, useState} from 'react';
import {USER_ACTIONS} from '../constants/constants';
import {PermissionsBlock} from './PermissionsBlock/PermissionsBlock';
import {Select} from './Select/Select';
import {RoleType} from '../constants/constants.types';
import {FieldWrapper, FormContainer, SubmitButton} from './style';

export const App = () => {
  const [role, setRole] = useState<RoleType>(RoleType.ADMIN);

  const submitResult = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {elements, role} = e.target as HTMLFormElement;

    const permissions = [...elements].filter((el) => {
      const {checked} = el as HTMLInputElement;

      return checked ? el : false;
    });

    const result = {
      role: role.value,
      permissions: permissions.map((permission) => permission.id)
    };

    console.log(result);
  };

  return (
    <FormContainer>
      <form onSubmit={submitResult}>
        <FieldWrapper>
          <Select role={role} setRole={setRole} />

          <PermissionsBlock permissionsList={USER_ACTIONS} listName="Folders" role={role} />

          <PermissionsBlock permissionsList={USER_ACTIONS} listName="Gems" role={role} />
        </FieldWrapper>

        <SubmitButton type="submit">Save</SubmitButton>
      </form>
    </FormContainer>
  );
};
