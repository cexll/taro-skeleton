import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { useEnv, useNavigationBar } from "taro-hooks";
import './index.css'

const Index = () => {
  const env = useEnv();
  const { setTitle } = useNavigationBar({ title: "Taro Hooks" });


  return (
    <View className={`index bg-[#b5b5b5] h-screen pl-7.5 ${true ? 'text-[50px]' : ''}`}>
      <Text className={`${'none'} font-bold text-[#ffffff]`}>Hello world!</Text>
      <Text>{env}</Text>
      <Button className="button" onClick={() => setTitle("Taro Hooks Nice!")}>
        设置标题
      </Button>
    </View>
  );
};

export default Index;

