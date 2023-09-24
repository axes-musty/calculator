import React from 'react';
import { AppProvider } from './context/AppContext';
import test from './test/tests';
import MyButton from './components/myButton';
import CommandLine from './components/CommandLine';
import CalcButton from './components/CalcButton';

const App = () => {
    if (false) {test()}
  return(
    <AppProvider>
        <div className='container'>
            <div className='calculator'>
                <div className='rowCommandLine'>
                    <div className='resultbox'>
                        <CommandLine />
                    </div>
                </div>
                <div className='row'>
                    <MyButton name='C' classO='calcbtn'/>
                    <MyButton name='/'classO='btn_marginal'/>
                </div>
                <div className='row'>
                    <MyButton name='7'/>
                    <MyButton name='8'/>
                    <MyButton name='9'/>
                    <MyButton name='*'classO='btn_marginal'/>
                </div>
                <div className='row'>
                    <MyButton name='4'/>
                    <MyButton name='5'/>
                    <MyButton name='6'/>
                    <MyButton name='-'classO='btn_marginal'/>
                </div>
                <div className='row'>
                    <MyButton name='1'/>
                    <MyButton name='2'/>
                    <MyButton name='3'/>
                    <MyButton name='+' classO='btn_marginal'/>
                </div>
                <div className='row'>
                    <MyButton name='0' classO='calcbtn'/>
                    <CalcButton classO='btn_marginal'/>
                </div>
            </div>
        </div>
       
    </AppProvider>
  )
}

export default App;