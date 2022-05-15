import styled from 'styled-components'
import { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', message: '' })

  const onChange = (e) => {
    let { value, id } = e.target;
    setFormData(prev => (
      {
        ...prev,
        [id]: value
      }
    ))
  }

  console.log(formData)

  const onSubmit = (e) => {
    e.preventDefault()
    toast.success('contact initiated!')
  }
  return (
    <form onSubmit={() => onSubmit()}>
      <Container>
        <FormDiv>
          <NameLabel for="name">name</NameLabel>
          <Name placeholder=""
            id="name"
            onChange={onChange}
            value={formData.name} />
            <MessageLabel for="message">message</MessageLabel>
          <Message placeholder=""
            id="message"
            onChange={onChange}
            value={formData.message} />
          <Button type="submit" href={formData.message.length > 1 && `mailto:timhansher@gmail.com
                                  ?Subject=new message from ${formData.name} via timmyha.vercel.app!
                                  &body=${formData.message}`}>submit</Button>
        </FormDiv>
      </Container>
    </form>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  width: 100vw;
  padding-top: 80px;
  background-color: #111111;
`

const FormDiv = styled.div`
  display: flex;
  width: 400px;
  margin: auto;
  flex-direction: column;`

const NameLabel = styled.label`
  display: flex;
  width: 100%;
  margin: auto;
  margin-bottom: -20px;
  font-size: 15px;
  color: #fe00c7;
  font-family: rubik;
  `

const MessageLabel = styled.label`
  display: flex;
  width: 100%;
  margin: auto;
  margin-bottom: -20px;
  font-size: 15px;
  color: #00d8fe;
  font-family: rubik;
  `

const Name = styled.input`
  display: flex;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 5px;
  align-self: center;
  width: 400px;
  font-size: 20px;
  padding-left: 10px;
  text-align: left;
  border-radius: 3px;
  border: 1px #fe00c7 solid;
  background-color: transparent;
  color: #fe00c7;
  font-family: rubik;
    @media (max-width: 500px) {
    width: 360px;
  }`

const Message = styled.textarea`
  display: flex;
  height: 40px;
  margin-top: 20px;
  align-self: center;
  max-width: 400px;
  min-width: 400px;
  height: 300px;
  font-size: 20px;
  padding-left: 10px;
  padding-top: 10px;
  text-align: left;
  border-radius: 3px;
  border: 1px #00d8fe solid ;
  background-color: transparent;
  color: #00d8fe;
  font-family: rubik;
    @media (max-width: 500px) {
      min-width: 360px;
      max-width: 360px;
    }`

const Button = styled.a`
    margin: auto;
    margin-top: 20px;
    width: 400px;
    border-radius: 3px;
    height: 40px;
    text-align: center;
    text-decoration: none;
    line-height: 40px;
    font-family: rubik;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid rgba(220,254,0,1);
    color: rgba(220,254,0,1);
      &:hover {
        background-color: rgba(220,254,0,1);
        color: black;
        transition: .2s;
      }
      @media (max-width: 500px) {
        max-width: 365px;
      }`

export default Contact