import styled from "styled-components";
import {SendIcon} from "./icons";


function Input() {
    return (
        <>
            <Wrapper>
                <InputBox>
                    <InputItem placeholder={'메세지를 입력해 주세요.'}/>
                    <IconBox>
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
    margin: auto;
    
`
const InputBox = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 1000;
    margin-bottom: 20px;
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