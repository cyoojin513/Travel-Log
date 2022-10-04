import styled from "styled-components"

const FormContainer = styled.div`
  display: grid;
  grid-template-rows: 60px 230px 200px;
  justify-content: center;
  /* align-items: center; */
  margin-top: 35px;

  .first-row {
    display: grid;
    grid-row: 1;
    grid-template-columns: 1fr 1fr;
  }

  input::placeholder {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    padding-left: 8px;
  }

  input[name=address], input[name=date] {
    background-color: #191919;
    color: #BEBEBE;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 330px;
    height: 25px;
    padding: 12px 20px;
    margin: 8px;
    border: none;
    border-radius: 25px;
  }

  .second-row {
    display: grid;
    grid-row: 2;
  }

  textarea::placeholder {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  textarea {
    background-color: #191919;
    color: #BEBEBE;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 715px;
    height: 200px;
    margin: 8px;
    padding: 23px;
    border: none;
    border-radius: 30px;
    resize: none;
  }

  .button-grid {
    display: grid;
    grid-row: 3;
    justify-content: center;
  }

  .new-film-button {
    background-color: #5F5F5F;
    color: #D8D8D8;
    width: 140px;
    height: 48px;
    margin-top: 30px;
    border: none;
    border-radius: 18px;
    transition: 0.3s;

    :hover {
      background-color: #E71400;
    }
  }

  .edit-button-grid {
    display: grid;
    grid-row: 3;
    grid-template-columns: 385px 385px;
    justify-content: center;
  }

  .submit {
    background-color: #5F5F5F;
    color: #D8D8D8;
    width: 370px;
    height: 48px;
    margin-top: 30px;
    border: none;
    border-radius: 18px;
    transition: 0.3s;

    :hover {
      background-color: #E71400;
    }
  }

  .back {
    background-color: #222222;
    color: #8E8E8E;
    width: 370px;
    height: 48px;
    margin-top: 30px;
    border: none;
    border-radius: 18px;
    transition: 0.3s;

    :hover {
      background-color: #111111;
    }
  }
`

const Error = styled.div`
  margin-top: 5px;
  justify-content: center;
  align-items: center;

  .error-text {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #838383;
  }
`

export { FormContainer, Error }