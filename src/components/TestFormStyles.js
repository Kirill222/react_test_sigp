import styled from 'styled-components'

export const SearchFormElement = styled.form`
  width: 100%;
  border: 2px solid #f0c104;
  height: 45px;
  border-radius: 10px;
  background: #f0c104;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
`

export const SearchInput = styled.input`
  display: block;
  height: 100%;
  border-radius: 5px;
  border: none;
  padding-left: 10px;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
`

export const SearchButton = styled.button`
  padding: 10px 20px;
  background: #f0c104;
  border: none;
  font-weight: bold;
  transition: background 200ms ease-in-out;

  &:hover {
    background: #dcad00;
    cursor: pointer;
  }
`
