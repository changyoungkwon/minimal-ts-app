import * as React from 'react';

export interface TitleInterface {
  content : string;
}

export const Title = (props:TitleInterface) => (
  <h1>{props.content}</h1>
);
