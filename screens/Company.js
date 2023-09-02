import React, { useEffect, useState } from "react";
import { BsCalendar2Plus, BsTrash3 } from "react-icons/bs";
import {
  getWeekConfigurate,
  putConfigurateSchedule,
} from "../../future/action/fetchManager";
import { useDispatch, useSelector } from "react-redux";
import { weekConfigurate } from "../../future/redux/managerSlice";
import { dayWeek } from "../../unit/variables";

export const Company = () => {
  const dispatch = useDispatch();
  const { configurate, loading, checkDay } = useSelector(
    (state) => state.manager
  );
  const [count, setCount] = useState(1);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [workersNumber, setWorkersNumber] = useState(1);

  const clear = () => {
    setWorkersNumber(0);
    setStart("");
    setEnd("");
  };
  const addTable = () => {
    const newItem = {
      start: start + ":00:00",
      end: end + ":00:00",
      workersNumberPerShift: workersNumber,
    };
    const newArr = [...configurate.shiftsTime, newItem];
    console.log(newArr);
    newArr.sort((a, b) => parseInt(a.start)-parseInt(b.start));
    console.log(newArr);
    clear();
    setCount(count + 1);
    dispatch(weekConfigurate({ ...configurate, shiftsTime: newArr }));
  };

  const deleteTable = (key) => {
    const newArr = configurate.shiftsTime.filter(
      (items, index) => index !== key
    );
    dispatch(weekConfigurate({ ...configurate, shiftsTime: newArr }));
    setCount(count - 1);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const updatedWorkDays = checkDay.includes(value)
      ? checkDay.filter((day) => day !== value)
      : [...checkDay, value];
    dispatch(weekConfigurate({ ...configurate, workDays: updatedWorkDays }));
  };
  const handleSave = () => {
    console.log(configurate.shiftsTime, checkDay);
    const newData = {
      weekStart: "2023-08-27",
      weekEnd: "2023-09-02",
      shiftsTime: configurate.shiftsTime,
      workDays: checkDay,
      alarmPoint: "2023-09-07",
    };
    dispatch(putConfigurateSchedule(1700, newData));
    dispatch(weekConfigurate({ ...configurate, newData }));
  };
  useEffect(() => {
    dispatch(getWeekConfigurate("1700"));
  }, [dispatch]);
  return (
    <>
     Company
    </>
  );
};
