import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getWeekConfigurate } from "./../future/action/fetchManager";
import { AntDesign } from "@expo/vector-icons";
import { dayWeek } from "./../unit/variables";
import { weekConfigurate } from "../future/redux/managerSlice";

export const Start = () => {
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
    newArr.sort((a, b) => parseInt(a.start) - parseInt(b.start));
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
      <View className=" flex-row justify-center">
        <ScrollView className=" p-4 m-1 overflow-y-auto h-[500px]">
          <View>
            <View className=" flex-row">
              <Text className="flex-1">From</Text>
              <Text className="flex-1">To</Text>
              <Text className="flex-1">Number of Employees</Text>
            </View>
            {loading &&
              configurate.shiftsTime.map((item, key) => (
                <View key={key} className=" flex-row">
                  <Text className="flex-1 w-14 h-12 rounded-xl m-2 p-3 text-center  bg-[#E7EFEE]"
                  >{item.start}</Text>
                  <Text className="flex-1 w-14 h-12 rounded-xl m-2 p-3 text-center  bg-[#E7EFEE]"
                  >{item.end}</Text>
                  <Text className="flex-1 w-14 h-12 rounded-xl m-2 p-3 text-center  bg-[#E7EFEE]"
                  >{item.workersNumberPerShift}</Text>
                </View>
              ))}
          </View>
          <View className="flex-row justify-center">
            <TouchableOpacity onPress={() => addTable()} className="rounded-xl m-2 p-3 text-center  bg-[#E7EFEE]">
              <AntDesign name="calendar" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
             className="flex-1 w-14 h-12 rounded-xl m-2 p-3 text-center  bg-[#E7EFEE]"
              value={start}
              onChangeText={(text) => setStart(text)}
            />
            <TextInput
              className="flex-1 w-14 h-12 rounded-xl m-2 p-3 text-center  bg-[#E7EFEE]"
              value={end}
              onChangeText={(text) => setEnd(text)}
            />
            
              <TextInput
                className="flex-1 w-14 h-12 rounded-xl m-2 p-3 text-center  bg-[#E7EFEE]"
                value={workersNumber}
                onChangeText={(text) => setWorkersNumber(text)}
              />
          </View>
        </ScrollView>
        {/* <View style={{ flex: 1, borderWidth: 1, margin: 1 }}>
          <View style={{ backgroundColor: '#E7EFEE', padding: 4 }}>
            <Text>виборо когда будет алармДэй</Text>
          </View>
          <View style={{ backgroundColor: '#E7EFEE', padding: 4 }}>
            <Text>What are the working days?</Text>
             <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              {loading &&
                dayWeek.map((d, key) => (
                  <View key={key} style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text>{d[0] + d[1]}</Text>
                    <CheckBox
                      value={d}
                      onChange={checkDay.includes(d)}
                      onValueChange={() => handleCheckboxChange(d)}
                    />
                  </View>
                ))}
            </View>
          </View>
        </View> */}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          backgroundColor: "gray",
          padding: 8,
        }}
      >
        <Button title="Save" onPress={handleSave} />
        <Button
          title="Clear"
          onPress={() => {
            /* Реализуйте очистку */
          }}
        />
      </View>
      
    </>
  );
};
