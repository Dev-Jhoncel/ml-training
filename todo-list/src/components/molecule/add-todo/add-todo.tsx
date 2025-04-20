import  Button  from '../../atom/button/button';
import  Form  from '../../atom/form/form';
import  Input  from '../../atom/input/input';
import  Label  from '../../atom/label/label';
import React, { useState } from 'react';

const AddTodo: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const label = "Todo";
  const inputType = "text";
  const placeholder = "Enter your task";
  const buttonText = "Add";

  const descLabel = "Description";
  const descInputType = "text";
  const descPlaceholder = "Enter your task";

  const datelabel = "Date";
  const dateInputType = "date";

  return (
    <Form onSubmit={handleSubmit}>
      <Label text={label} htmlFor="input-field" />
      <Input
        id="input-field"
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <Label text={descLabel} htmlFor="desc-field" />
      <Input
        id="desc-field"
        type={descInputType}
        placeholder={descPlaceholder}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <Label text={datelabel} htmlFor="date-field" />
      <Input
        id="date-field"
        type={dateInputType}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <Button type="submit" label={buttonText} />
    </Form>
  );
};

export default AddTodo;