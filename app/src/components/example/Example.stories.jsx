/* eslint-disable import/first */
import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, number, select, withKnobs } from "@storybook/addon-knobs";

import App from "../App/App";
import DaList from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

const numberOptions = { max: 19, min: 0, range: true, step: 1 };
const selectOptions = {
  "Status: Loading": "LOADING",
  "Status: OK": "OK",
  "Status: ERROR": "ERROR"
};
const mapItem = (index, length) => ({ name: `Item ${index} of ${length}` });
const makeItems = (length, mapItem) => {
  const items = [];
  for (let index = 0; index < length; index++) {
    items.push(mapItem(index, length));
  }
  return items;
};

storiesOf("Example", module)
  .addDecorator(withKnobs)
  .add("#1", () => {
    const numberOfItems = number("items", 4, numberOptions);

    return (
      <App>
        <DaList data={makeItems(numberOfItems, mapItem)} />
      </App>
    );
  })
  .add("#2", () => {
    const hasData = boolean('is loading', false);
    const numberOfItems = number("items", 4, numberOptions);

    return (
      <App>
        <Example2 data={hasData ? undefined : makeItems(numberOfItems, mapItem)} />
      </App>
    );
  })
  .add("#3", () => {
    const makeData = (groupId, mapItem) => {
      const status = select(
        `${groupId} status`,
        selectOptions,
        "LOADING",
        groupId
      );

      if (status === "LOADING") {
        return undefined;
      }

      if (status === "ERROR") {
        return {
          status,
          data: "mock error log"
        };
      }

      const numberOfItems = number(
        `${groupId} items`,
        4,
        numberOptions,
        groupId
      );

      return {
        status: status,
        data: makeItems(numberOfItems, mapItem)
      };
    };

    return (
      <App>
        <Example3
          data1={makeData("RED", mapItem)}
          data2={makeData("GREEN", mapItem)}
          data3={makeData("BLUE", mapItem)}
        />
      </App>
    );
  });
