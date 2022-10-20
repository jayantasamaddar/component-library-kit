import React, { useState, useCallback, useEffect } from 'react';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

// CSF 3.0
export default {
  component: Checkbox,
  title: 'Components/Checkbox with CSF 3.0',
} as ComponentMeta<typeof Checkbox>;

interface IndeterminateTemplateProps {
  [key: string]: boolean;
}

type checkedProps = boolean | 'indeterminate';

export const CheckboxWithLabel: ComponentStoryObj<typeof Checkbox> = {
  render: ({ label, name, ...args }) => {
    const [isChecked, setIsChecked] = useState<checkedProps>(
      args.checked || false
    );

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(prev => (prev === true ? false : true));
      },
      []
    );
    return (
      <Checkbox
        {...args}
        checked={isChecked}
        label={label || 'Agree to the terms and conditions'}
        name={name || 'agree'}
        onChange={handleChange}
      />
    );
  },
};

export const DisabledIndeterminateCheckbox: ComponentStoryObj<typeof Checkbox> =
  {
    ...CheckboxWithLabel,
    args: {
      name: 'partially-agree',
      label: 'Partially agree to the terms and conditions',
      checked: 'indeterminate',
      disabled: true,
    },
  };

export const IndeterminateCheckboxList: ComponentStoryObj<typeof Checkbox> = {
  render: args => {
    const [checkboxes, setCheckboxes] = useState<IndeterminateTemplateProps>({
      item1: false,
      item2: false,
      item3: false,
    });

    const [controller, setController] = useState<checkedProps>(false);

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;

        if (name !== 'control')
          setCheckboxes({ ...checkboxes, [name]: checked });
        else {
          const updatedCheckboxes = Object.keys(checkboxes).reduce(
            (acc, key) => ({ ...acc, [key]: checked }),
            {}
          );
          setCheckboxes(prevCheckboxes => ({
            ...prevCheckboxes,
            ...updatedCheckboxes,
          }));
        }
      },
      [checkboxes]
    );

    useEffect(() => {
      const checkboxValues = Object.values(checkboxes);
      if (checkboxValues.every(checkbox => checkbox === true)) {
        setController(true);
      } else if (checkboxValues.findIndex(checkbox => checkbox === true) >= 0) {
        setController('indeterminate');
      } else {
        setController(false);
      }
    }, [checkboxes]);

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Checkbox
          {...args}
          name="control"
          label={`${
            controller === false
              ? 'None'
              : controller === 'indeterminate'
              ? Object.values(checkboxes).filter(checkbox => checkbox === true)
                  .length
              : 'All'
          } selected`}
          onChange={handleChange}
          checked={controller}
        />
        <Checkbox
          {...args}
          name="item1"
          label="Item 1"
          onChange={handleChange}
          checked={checkboxes.item1}
        />
        <Checkbox
          {...args}
          name="item2"
          label="Item 2"
          onChange={handleChange}
          checked={checkboxes.item2}
        />
        <Checkbox
          {...args}
          name="item3"
          label="Item 3"
          onChange={handleChange}
          checked={checkboxes.item3}
        />
      </div>
    );
  },
};
