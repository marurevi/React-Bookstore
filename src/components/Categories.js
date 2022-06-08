import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import Navigator from './Navigator';

export default function Categories() {
  const categories = useSelector((state) => state.reducerC);
  const dispatch = useDispatch();
  return (
    <div>
      <Navigator />
      <div className="categories">
        <h1>{categories}</h1>
        <button type="button" onClick={() => dispatch(checkStatus())}>CHECK STATUS</button>
      </div>
    </div>
  );
}
