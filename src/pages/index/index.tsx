import { Component } from 'react'
import { View, Text, Button, Image, ScrollView } from '@tarojs/components'
import { useEnv, useNavigationBar } from "taro-hooks";
import './index.css'
import Logo from "./logo.svg";

const Index = () => {
  const env = useEnv();
  const { setTitle } = useNavigationBar({ title: "Taro Hooks" });


  return (
    <>
      <View >
        <Text className='box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-5'>Hello world!</Text>
        <Text className='mt-5 text-red-500'>{env}</Text>
        <View className='font-sans'>The quick brown fox jumps over the lazy dog.</View>
        <View className='font-serif'>The quick brown fox jumps over the lazy dog.</View>
        <View className='font-mono'>The quick brown fox jumps over the lazy dog.</View>
        <Button className="button rounded-full bg-blue-500" onClick={() => setTitle("Taro Hooks Nice!")}>
          SetTitle
        </Button>
        <View className='h-56 grid grid-cols-3 gap-4 content-center'>
          <View className='bg-red-200 rounded-full h-12'>01</View>
          <View className='bg-red-200 rounded-full'>02</View>
          <View className='bg-red-200 rounded-full'>03</View>
          <View className='bg-red-200 rounded-full'>04</View>
          <View className='bg-red-200 rounded-full'>05</View>
        </View>
        <View className='flex flex-nowrap'>
          <View className='bg-red-200 rounded-full w-24'>01</View>
          <View className='bg-red-200 rounded-full w-24'>02</View>
          <View className='bg-red-200 rounded-full w-24'>03</View>
          <View className='bg-red-200 rounded-full w-64'>04</View>
          <View className='bg-red-200 rounded-full w-12'>05</View>
        </View>

        <View>
          ScrollView
          <ScrollView
            className='scrollview'
            scrollY
            scrollWithAnimation
            scrollTop={0}
            style={{ height: '150px' }}
            lowerThreshold={20}
            upperThreshold={20}
          // onScrollToUpper={this.onScrollToUpper.bind(this)} // 使用箭头函数的时候 可以这样写 `onScrollToUpper={this.onScrollToUpper}`
          // onScroll={this.onScroll}
          >
            <View className='h-12 bg-red-200 mb-5 text-center'>A</View>
            <View className='h-12 bg-red-200 mb-5 text-justify'>B</View>
            <View className='h-12 bg-red-200 mb-5 text-left'>C</View>
            <View className='h-12 bg-red-200 mb-5 text-right'>D</View>
            <View className='h-12 bg-red-200 mb-5 text-start'>E</View>
            <View className='h-12 bg-red-200 mb-5'>F</View>
            <View className='h-12 bg-red-200 mb-5'>G</View>
          </ScrollView>
        </View>
      </View>
      <View className='index min-h-screen bg-gray-100 p-6 flex flex-col justify-center'>
        <View className='relative px-4 py-10 bg-white shadow-lg rounded-3xl p-20'>
          <Image src={Logo} className='h-7 max-w-full' />
          <View className='py-8 text-base leading-6 text-gray-700'>
            <View className='py-4'>
              An advanced online playground for Tailwind CSS, including support
              for things like:
            </View>
            <View className='list-disc'>
              <View className='flex items-start mb-1'>
                <View className='h-6 flex items-center'>
                  <View className='flex-shrink-0 h-2 w-2 bg-cyan-500 rounded-full'></View>
                </View>
                <Text className='ml-2'>
                  Customizing your
                  <Text className='px-2 text-sm font-bold text-gray-900'>
                    tailwind.config.js
                  </Text>
                  <Text className='text-red'>file</Text>

                </Text>
              </View>
              <View className='flex items-start mb-1'>
                <View className='h-6 flex items-center'>
                  <View className='flex-shrink-0 h-2 w-2 bg-cyan-500 rounded-full'></View>
                </View>
                <Text className='ml-2'>
                  Extracting classes with
                  <Text className='px-2 text-sm font-bold text-gray-900'>
                    @apply
                  </Text>
                </Text>
              </View>
              <View className='flex items-start'>
                <View className='h-6 flex items-center'>
                  <View className='flex-shrink-0 h-2 w-2 bg-cyan-500 rounded-full'></View>
                </View>
                <Text className='ml-2'>
                  Code completion with instant preview
                </Text>
              </View>
            </View>
            <View className='py-4'>
              Perfect for learning how the framework works, prototyping a new
              idea, or creating a demo to share online.
            </View>
          </View>
          <View className='pt-6 leading-6 font-bold text-lg'>
            <Text>Want to dig deeper into Tailwind?</Text>
            <Text className='text-cyan-600'>Read the docs &rarr;</Text>
          </View>
        </View>
        <View>
          <Button className='btn-special'>A Special Button</Button>
        </View>
      </View>
    </>
  );
};

export default Index;

