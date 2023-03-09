import styled from "styled-components"

export const Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 793px;
  height: 173px;
  left: 324px;
  top: 275px;

  background: var(--grey-400);
  border: 1px solid var(--orange-400);
  border-radius: 8px;

#list1 {
  position: absolute;
  width: 157px;
  height: 128px;
  left: 76px;
  top: 22px;
  
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;

  color: var(--white-400)
}

#list2 {
  position: absolute;
  width: 222px;
  height: 128px;
  left: 335.5px;
  top: 22px;
  
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;
  
  color: #EDEDED;
}

#list3 {
  position: absolute;
  width: 106px;
  height: 64px;
  left: 661px;
  top: 22px;
  
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 160%;

  color: #EDEDED;
}
`