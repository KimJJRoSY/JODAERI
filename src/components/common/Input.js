import styled from "styled-components";
import {SendIcon} from "./icons";
import {useState} from "react";


function Input({isCookieAccepted}) {
    const [inputData, setInputData]=useState('')
    const onChangeInputData = (e)=>{
        setInputData(e.target.value)
    }

    const handleKeyPress = (e)=>{
        if(e.key ==='Enter'&& !e.shiftKey){
            e.preventDefault();
            handleSend();
        }
    }
    const handleSend = ()=>{
        if (inputData.trim() === '') return;
        console.log('전송 내용:', inputData);
        setInputData('');
    }

    return (
        <>
            <Wrapper>
                <InputBox>
                    <InputItem
                        type={'text'}
                        value={inputData}
                        onChange={onChangeInputData}
                        onKeyDown={handleKeyPress}
                        disabled={!isCookieAccepted}
                        placeholder={'메세지를 입력해 주세요.'}/>
                    <IconBox onClick={isCookieAccepted ? handleSend : null}>
                        <SendIcon/>
                    </IconBox>
                </InputBox>
            </Wrapper>
        </>

    );
}

export default Input;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 0;
    position: fixed; 
    bottom: 0;
    left: 0;
    width: 100%;    
    z-index: 1000;
    background: ${({theme}) => theme.backgroundColor.background};

`
const InputBox = styled.div`
    border-radius: 10px;
    border: solid 1px ${({theme})=>theme.borderColor.inputBorder};
    height: 57px;
    background:  ${({theme})=>theme.backgroundColor.inputBack};
    width: 660px;

    display: flex;
    text-align: center;
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 390px;
    }

`

const IconBox = styled.div`
    margin: auto;
    display: flex;
    text-align: center;
    justify-content: flex-end;
  
`

const InputItem = styled.textarea`
    border-radius: 10px;
    justify-content: flex-start;
    border: none;
    outline: none;
    resize: none;
    padding-top: 20px;
    padding-left: 10px;
    font-size: 15px;
    width: 85%;
    @media (max-width:${({theme}) => theme.mobile} ) {
        width: 80%;
    }
`