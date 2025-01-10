import React, { useState, useEffect, useRef } from "react";
import { Button, Checkbox } from "semantic-ui-react";

/*
* 1 Отметить все чекбоксы => работает

2 Деактивировать все чекбоксы => работает

3 Если вручную отметить все чекбоксы - чекбокс -checkAll становится Uncheck all

4. При клике на uncheck all - после ручной отметки всех чекбоксов - все становятся неотмеченными,

5 при клике на конкретный чекбокс - становится не отмеченным только он => работает

6 При ручной деактивации каждого чекбокса - uncheck all должна сменится на check all donea

7 Кнопка сабмит неактивна - если нет ни одного отмеченного чекбокса (реагирует на отметку хотя бы одного) => работает 
* */

const collection = {
  react: false,
  vue: false,
  angular: false,
  svelte: false,
  jquery: false,
  FP: true,
  ramda: false,
  lodash: false,
  nodejs: false,
  python: false,
  php: false,
  "vanulla js": true,
  typescript: false,
  redux: false,
  mobx: false,
  apollo: false,
  html: false,
  css: false,
  "styled-components": false,
  OOP: false,
};

export const MultipleCheckboxes = () => {
  const [data, setData] = useState(collection);
  const [disabled, setIsDisabled] = useState(
    Object.values(data).some((e) => e === true)
  );
  const [allChecked, setAllChecked] = useState(
    Object.values(data).every((e) => e === true)
  );

  const isInited = useRef(true);
  console.log("all checked value", allChecked);
  useEffect(() => {
    setIsDisabled(Object.values(data).every((e) => e === false));
  }, [data]);

  useEffect(() => {
    if (Object.values(data).every((e) => e === false)) {
      setAllChecked(false);
    }

    if (Object.values(data).some((e) => e === false)) {
      return;
    }
    setAllChecked(Object.values(data).every((e) => e === true));
  }, [data]);

  const handleCheckbox = (e, { label, checked }) => {
    const copy = { ...data };
    copy[label] = checked;
    setData(copy);
  };

  useEffect(() => {
    if (isInited.current) {
      isInited.current = false;
      return;
    }
    const final = Object.entries(data).reduce((acc, [key]) => {
      acc[key] = allChecked;
      return acc;
    }, {});
    setData(final);
  }, [allChecked]);

  const handleSubmit = () => {
    const submitted = Object.entries(data).reduce((acc, [key, val]) => {
      val && (acc[key] = val);
      return acc;
    }, {});

    console.log(submitted);
    setData(collection);
  };

  return (
    <>
      <h2>Check all that apply</h2>
      <div className="input">
        {allChecked ? <h3>Uncheck All</h3> : <h3>Check All</h3>}
        <Checkbox
          onChange={() => setAllChecked(!allChecked)}
          checked={allChecked}
        />
      </div>

      <div className={"input-container"}>
        {Object.entries(data).map(([key, val]) => (
          <div className="input">
            <Checkbox onChange={handleCheckbox} label={key} checked={val} />
          </div>
        ))}
      </div>
      <Button disabled={disabled} onClick={handleSubmit} primary>
        Submit
      </Button>
    </>
  );
};
