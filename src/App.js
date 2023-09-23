import React from 'react';
import { AppProvider } from './context/AppContext';
import MyButton from './components/myButton';
import CommandLine from './components/CommandLine';
import CalcButton from './components/CalcButton';

const App = () => {
  return(
    <AppProvider>
       <div className='container'>
            <div className='row'>
                <h1> Calculator</h1>
            </div>

            <div className='rowCommandLine'>
                <div className='resultbox'>
                    <CommandLine />
                </div>
            </div>
            <div className='row'>
                <MyButton name=''/>
                <MyButton name=''/>
                <MyButton name=''/>
                <MyButton name='/'/>
            </div>
            <div className='row'>
                <MyButton name='7'/>
                <MyButton name='8'/>
                <MyButton name='9'/>
                <MyButton name='*'/>
            </div>
            <div className='row'>
                <MyButton name='4'/>
                <MyButton name='5'/>
                <MyButton name='6'/>
                <MyButton name='-'/>
            </div>
            <div className='row'>
                <MyButton name='1'/>
                <MyButton name='2'/>
                <MyButton name='3'/>
                <MyButton name='+'/>
            </div>
            <div className='row'>
                <MyButton name='0' classO='calcbtn'/>
                <CalcButton />

            </div>
        </div>
    </AppProvider>
  )
}

export default App;